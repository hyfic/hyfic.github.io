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
        <form id='gform' method='POST' action='https://script.google.com/macros/s/AKfycbzU1-QhpEauQLcPdI6fw0GmzNgopWbGMfUieYEuxG1945Eewpqq6FRMXOvg-0hTN1nt/exec'>
          <input name='email' id='dialogue-input' placeholder='johndoe@gmail.com' type='email' required />
          <button type='submit'>Notify Me !</button>
        </form>
      </div>
    `,
    showConfirmButton: false,
  })
});
