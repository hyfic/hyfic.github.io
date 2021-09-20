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
        <form id='dialogue-form'>
          <input name='email' id='dialogue-input' placeholder='johndoe@gmail.com' type='email' required />
          <button id='dialogue-btn' type='submit'>Notify Me !</button>
        </form>
      </div>
    `,
    showConfirmButton: false,
  })

  // Listen & submit 
  document.querySelector('#dialogue-form').addEventListener('submit', (e) => {
    e.preventDefault();

    document.getElementById('dialogue-btn').innerHTML = 'Loading ...'

    $.ajax({
      url: 'https://script.google.com/macros/s/AKfycbzU1-QhpEauQLcPdI6fw0GmzNgopWbGMfUieYEuxG1945Eewpqq6FRMXOvg-0hTN1nt/exec',
      data: $("#dialogue-form").serialize(),
      method: "post",
      success: function (response) {
        Swal.fire({
          icon: 'success',
          background: '#2d3748',
          html: `<h2 class='dialogue-info'>
          You will be notified when app get launched 🥳
          </h2>
          `,
          showConfirmButton: false,
        })
      },
      error: function (err) {
        Swal.fire({
          icon: 'error',
          background: '#2d3748',
          html: `<h2 class='dialogue-info'>Oops, failed to submit email</h2>`,
          showConfirmButton: false,
        })
      }
    })
  })
});
