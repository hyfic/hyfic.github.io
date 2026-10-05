"""Render the coastal artwork as an eight-second 1672x940 animated scene.

python3 scripts/render-scene.py
Requires numpy, opencv-python, and FFmpeg (libx264).
The source is pixel art: nearest-neighbour sampling retains its crisp edges.
"""
from pathlib import Path
import subprocess
import cv2
import numpy as np

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public/video'
OUT.mkdir(exist_ok=True)
W, H, FPS, SECONDS = 1672, 940, 24, 8
source = cv2.imread(str(ROOT / 'public/images/hyfic-world.webp'))
SH, SW = source.shape[:2]
y, x = np.mgrid[:SH, :SW].astype(np.float32)
hsv = cv2.cvtColor(source, cv2.COLOR_BGR2HSV)
hue, saturation, value = cv2.split(hsv)
TAU = np.pi * 2


def envelope(cx, cy, rx, ry):
    return np.maximum(0, 1 - ((x-cx)/rx)**2 - ((y-cy)/ry)**2)**2


def soften(mask, radius=7):
    return cv2.GaussianBlur(mask.astype(np.float32), (radius, radius), 0)


def region(points):
    mask = np.zeros((SH, SW), np.uint8)
    cv2.fillPoly(mask, [np.array(points, np.int32)], 1)
    return mask


body = envelope(1440, 673, 218, 187)
head = envelope(1508, 571, 113, 99)
ears = envelope(1470, 533, 31, 29) + envelope(1579, 540, 31, 30)
# Masks isolate moving material; the village, walls, laptop and rocks stay solid.
sea_region = region([(0,508),(745,508),(900,556),(1138,587),(864,638),
                     (561,665),(481,690),(337,703),(161,667),(0,650)])
water = soften(sea_region * ((hue > 93) & (hue < 118) & (saturation > 87)))
cloud_region = region([(0,345),(810,345),(1040,220),(1420,154),(1510,253),
                       (1410,381),(1171,409),(991,468),(727,504),(0,506)])
cloud_pixels = cloud_region * ((saturation < 100) & (value > 160))
clouds = soften(cv2.dilate(cloud_pixels.astype(np.uint8),np.ones((17,17),np.uint8)),15)
green = ((hue > 25) & (hue < 102) & (saturation > 60) & (value > 36))
canopy = soften(green & (y < 295) & (x > 800),11)
foreground_region = region([(0,707),(258,734),(481,725),(711,719),(916,702),
                             (1110,666),(1210,690),(1270,807),(1490,834),
                             (1672,792),(1672,941),(0,941)])
vegetation = green | ((saturation < 55) & (value > 180) & (y > 838))
meadow = soften(cv2.dilate((foreground_region * vegetation).astype(np.uint8),np.ones((5,5),np.uint8)),7)
# No movement may pull the device, notebook, walls or resting feet out of shape.
fixed = region([(1089,690),(1219,679),(1298,774),(1415,771),(1474,845),(1130,848)])
meadow *= 1 - soften(fixed,11)

common = ['ffmpeg','-y','-loglevel','error','-f','rawvideo','-pix_fmt','bgr24',
          '-s',f'{W}x{H}','-r',str(FPS),'-i','-','-an']
encoder = subprocess.Popen(common + ['-c:v','libx264','-preset','slow','-crf','33','-tune','animation',
    '-pix_fmt','yuv420p','-movflags','+faststart',str(OUT/'snorlax-coast.mp4')],stdin=subprocess.PIPE)
glyph = ['1111','0001','0010','0100','1111']
try:
    for frame in range(FPS*SECONDS):
        p = frame/(FPS*SECONDS)
        t = p*TAU
        breath = (1-np.cos(2*t))/2
        wind = np.sin(t + x/230)
        # Clouds traverse the sky as a separate, slow layer. Broader canopy and
        # meadow fields ripple at different speeds so the entire coast feels alive.
        dx = (clouds*(22*np.sin(t)) + canopy*wind*10 + meadow*np.sin(2*t+x/79+y/137)*6
              + water*np.sin(3*t+y/9+x/100)*4.5 - body*(x-1440)*breath*.038)
        dy = (clouds*(2*np.sin(t)) + canopy*np.sin(t+x/230)*3
              + meadow*np.sin(2*t+x/94)*2.1 + water*np.cos(3*t+y/17)*1.3
              + body*breath*13 + head*breath*4)
        twitch = max(0,np.sin(t-1.0))**18
        dx += ears*twitch*5
        image = cv2.remap(source,(x+dx).astype(np.float32),(y+dy).astype(np.float32),
                          cv2.INTER_NEAREST,borderMode=cv2.BORDER_REFLECT)
        # Travelling bands of reflected sunlight run across the entire sea.
        light = water*(.06*np.sin(3*t+y/5+x/180)+.03*np.sin(5*t+y/13-x/96))
        image = np.clip(image.astype(np.float32)*(1+light[:,:,None]),0,255).astype(np.uint8)
        for n in range(3):
            q = (p+n/3)%1
            alpha = min(1,q*7,(1-q)*5)*.84
            gx,gy,size = round(1475-q*75),round(500-q*105),3
            for row,bits in enumerate(glyph):
                for col,bit in enumerate(bits):
                    if bit=='1':
                        block=image[gy+row*size:gy+(row+1)*size,gx+col*size:gx+(col+1)*size]
                        block[:]=block*(1-alpha)+np.array([228,248,255])*alpha
        # Distant birds cross the bay; their entry/exit fades close the loop.
        for n in range(3):
            q=(p+n*.13)%1
            alpha=min(1,q*12,(1-q)*12)*.7
            bx,by=round(550+q*470),round(421+np.sin(t+n)*11+n*9)
            wing=2+round(2*np.sin(12*t+n))
            layer=image.copy()
            cv2.line(layer,(bx-5,by-wing),(bx,by),(65,63,42),1,cv2.LINE_8)
            cv2.line(layer,(bx,by),(bx+5,by-wing),(65,63,42),1,cv2.LINE_8)
            cv2.addWeighted(layer,alpha,image,1-alpha,0,image)
        output=cv2.resize(image,(W,H),interpolation=cv2.INTER_NEAREST).tobytes()
        encoder.stdin.write(output)
        if frame%60==0: print(f'Rendered {frame}/{FPS*SECONDS} frames',flush=True)
finally:
    encoder.stdin.close()
if encoder.wait()!=0: raise SystemExit('Video encoding failed')
for path in sorted(OUT.iterdir()): print(f'{path.name}: {path.stat().st_size/1024/1024:.1f} MiB')
