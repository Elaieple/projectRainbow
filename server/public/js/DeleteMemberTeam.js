const deleteBtn = document.querySelector('.container2');

deleteBtn.addEventListener('click', async (e) => {
  if (e.target.id === 'btn-like') {
    console.log(e.target.parentNode.parentNode);
    const { id } = e.target.parentNode.parentNode;
    const response = await fetch('/AddMember/delete', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    const result = await response.json();

    if (result.destroy === 'OK') {
      deleteBtn.removeChild(e.target.parentNode.parentNode);
    }
  }
});
