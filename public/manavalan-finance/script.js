// Keep native details semantics; animate measured heights in both directions.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const disclosures = [...document.querySelectorAll('.faq-list details')].map((element) => ({
  element,
  summary: element.querySelector('summary'),
  answer: element.querySelector('.faq-answer'),
  expanded: element.open,
  animation: null,
}));

function setExpanded(disclosure, expanded) {
  const { element, summary, answer } = disclosure;
  const start = element.getBoundingClientRect().height;
  disclosure.animation?.cancel();
  disclosure.expanded = expanded;
  element.open = true;
  summary.setAttribute('aria-expanded', String(expanded));
  const end = summary.getBoundingClientRect().height + (expanded ? answer.getBoundingClientRect().height : 0) + 1;
  const finish = () => {
    element.open = disclosure.expanded;
    element.style.removeProperty('height');
    element.style.removeProperty('overflow');
    disclosure.animation = null;
  };
  if (reducedMotion.matches) {
    finish();
    return;
  }
  element.style.overflow = 'hidden';
  disclosure.animation = element.animate(
    { height: [`${start}px`, `${end}px`] },
    { duration: 300, easing: 'cubic-bezier(.22,1,.36,1)' },
  );
  disclosure.animation.onfinish = finish;
}

disclosures.forEach((disclosure) => {
  disclosure.summary.addEventListener('click', (event) => {
    event.preventDefault();
    const expanded = !disclosure.expanded;
    disclosures.forEach((other) => {
      if (other !== disclosure && other.expanded) setExpanded(other, false);
    });
    setExpanded(disclosure, expanded);
  });
});

// Touch users can preview the same illustration state as hover or keyboard focus.
document.querySelectorAll('.feature-visual').forEach((button) => {
  let previewTimer;
  button.addEventListener('click', () => {
    const feature = button.closest('.feature');
    clearTimeout(previewTimer);
    feature.classList.add('is-previewing');
    previewTimer = setTimeout(() => feature.classList.remove('is-previewing'), 1800);
  });
});
