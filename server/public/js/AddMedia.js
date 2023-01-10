const mainDiv = document.querySelector('#add');
const allPosts = document.querySelector('.container2');
const { AddMediaFoto } = document.forms;

AddMediaFoto.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(AddMediaFoto);
  console.log(Object.fromEntries(data));

  const response = await fetch('/AddMedia/add', {
    method: 'POST',
    body: data,
  });

  const result = await response.json();
  console.log('nigger')
  console.log(result);

  if (result.post === 'OK') {
    allPosts.insertAdjacentHTML('afterbegin', `<div id='${result.id}' className="member">
      <img src='${result.image}' alt="photo loaded" />
      <p>Дата создания новости на нашм сайте: ${result.time}</p>
      <p>Заголвок: ${result.title}</p>
      <p>Подзагаловок: ${result.description}</p>
      <p>Описание к картинке: ${result.descriptionImage}</p>
      <p>Тело новости(внутрянка): ${result.text}</p>
      <p>Ссылка на новость: ${result.source}</p>
      <p>Дата создания данной записи: ${result.time}</p>
      <a href='/editMedia/${result.id}'>
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
