const mainDiv = document.querySelector('#add');
const allPosts = document.querySelector('.container2');
const { AddMediaFoto } = document.forms;

AddMediaFoto.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(AddMediaFoto);
  console.log(Object.fromEntries(data));

  const response = await fetch('/AddMedia/add', {
    method: 'POST',
    // body: JSON.stringify({ image, name, jobtitle, description, vk, email, phone, data }),
    body: data,
  });

  const result = await response.json();
  console.log(result);

  if (result.post === 'OK') {
    allPosts.insertAdjacentHTML('afterbegin', `<div id='${result.id}' className="member">
      <img src='${result.image}' alt="photo loaded" />
      <p>ФИО рабоника: ${result.name}</p>
      <p>Должность: ${result.jobtitle}</p>
      <p>Краткая сводка по работнику: ${result.description}</p>
      <p>Соцсеть Вконтакте: ${result.vk}</p>
      <p>Емейл: ${result.email}</p>
      <p>Телефон: ${result.phone}</p>
      <p>Дата создания: ${result.time}</p>
      <a href='/edit/${result.id}'>
      <button type="button"> Редактировать пост</button>
      </a>
      <form action="/delete" method="DELETE">
      <button className="floating-button" type="button" id="btn-like">Удалить</button>
      </form>
      <hr />
      </div>`);
  }
  let inputs = document.querySelectorAll('input');
  let area = document.querySelectorAll('textarea');

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  };
  for (let i = 0; i < area.length; i++) {
    area[i].value = '';
  }

});
