const form = document.querySelector('.login');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('Здарова');
  const email = e.target.email.value;
  const password = e.target.password.value;
  const obj = JSON.stringify({ email, password });
  const resp = await fetch('/autorisation', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: obj,
  });
  const json = await resp.json();
  if (json.err == 'ok') {
    console.log(json);
    window.location.href = '/';
  } else {
    const error = document.querySelector('.loginError');
    error.style.color = 'red';
    error.innerText = json.err;
  }
});