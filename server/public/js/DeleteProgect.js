const {formProject} = document.forms


document.addEventListener('click', async (e) => {
  if (e.target.className === 'deleteProject') {
    console.log('here');
    e.preventDefault()
  try {
    const id = e.target.id;
    const response = await fetch(`http://localhost:3001/newproj/${id}`, {
      method: 'DELETE',
      headers: {
                'Content-type': 'application/json',
              },
      body: JSON.stringify({ id }),
    })
    if (response.status  === 200) {
      e.target.parentNode.remove()
    }
  } catch (error) {
    console.log(error);
  }
  }

  if(e.target.className === 'btn floating-button add') {
    e.preventDefault()
    console.log(formProject);
    const data = new FormData(formProject);
    console.log(Object.fromEntries(data));
    try {
      const response = await fetch('/newproj/', {
    method: 'POST',
    body: data,
  });
  const result = await response.json();
  console.log(result);
    } catch (error) {
      console.log(error)
    }
  


  }

  else {
    return
  }


})
