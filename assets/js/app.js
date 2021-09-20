const actionBtn = document.querySelector('.action-btn');

actionBtn.addEventListener('click', (e) => {
  e.preventDefault();

  Swal.fire({
    padding: '3em',
    background: '#2d3748',
    html: `
      <div class='dialogue'>
        <h1>The <span class='accent-color'>big bang</span> is about to happen ! 💥</h1>
        <p>Enter your email, To get <span class='accent-color'>notified</span> on the launch of the app</p>
        <input placeholder='johndoe@gmail.com' />
        <button>Notify Me !</button>
      </div>
    `,
    showConfirmButton: false,
  })
})