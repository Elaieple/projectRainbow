console.log('tttttttttttttttttttt')
const posts = document.querySelector('.reportAll');

posts.addEventListener('click', async (e) => {
  if (e.target.dataset.post === 'deleterep') {
    const { id } = e.target;
    const response = await fetch('/deleterep', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
      }),
    });
    if (response.status === 200) {
      const elementDelete = document.getElementById(`${id}`);
      posts.removeChild(elementDelete);
      const messdel = document.createElement('p')
      messdel.innerText = 'Отчет удален'
      posts.appendChild(messdel);
    } else {
      console.error();
    }
  }
});