const mainDiv = document.querySelector('#add');
const allPosts = document.querySelector('.container2');


mainDiv.addEventListener('click', async (e) => {
  if (e.target.id === 'add') {
    // const image = e.target.parentNode.children[0].children[3].value;
    // const body = e.target.parentNode.children[1].children[1].value;
    const image = e.target.parentNode.children[0].children[1].value;
    const name = e.target.parentNode.children[1].children[1].value;
    const jobtitle = e.target.parentNode.children[2].children[1].value;
    const description = e.target.parentNode.children[3].children[1].value;
    const vk = e.target.parentNode.children[4].children[1].value;
    const email = e.target.parentNode.children[5].children[1].value;
    const phone = e.target.parentNode.children[6].children[1].value;
    
    const response = await fetch('/add', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ image, name, jobtitle, description, vk, email, phone }),
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
      <form action="/delete" method="DELETE">
      <button className="floating-button" type="button" id="btn-like">Удалить</button>
      </form>
      <hr />
      </div>`);
    }
    let inputs = document.querySelectorAll('input');
    
    for (let i = 0;  i < inputs.length; i++) {
      inputs[i].value = '';
    };
  }
});
