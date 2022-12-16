const React = require('react');
const Layout = require('./Layout');

module.exports = function Event ({allProjects}) {
  return (

    <Layout>
        <form method='POST' action='/newproj' name='formProject' enctype="multipart/form-data">
        <div className="container">
        <h2> Добавление проекта</h2>

          <div className="mb-3">
            <label className="did-floating-label">Название проекта</label>
            <input type="name" required className="form-control" id="exampleInputUsername" name="title" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Дата старта проекта</label>
            <input type="date" required className="form-control" id="exampleInputUsername" name="datestart" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Дата окончания проекта</label>
            <input type="date" required className="form-control" id="exampleInputUsername" name="dateend" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label"> Кем поддерживается данный проект</label>
            <input type="text" required className="form-control" id="exampleInputUsername" name="support" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label"> Изображение</label>
            <input type="file" required className="form-control" id="exampleInputUsername" name="fonimage" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Цели</label>
            <input type="text" required className="form-control" id="exampleInputUsername" name="mission" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Задачи</label>
            <input type="text" required className="form-control" id="exampleInputUsername" name="intent" placeholder="" />
          </div>

          <button type="button" className="btn floating-button add" id="add">Добавить проект</button>
      </div>
      </form>
      <div style={{textAlign: 'center'}}>
        <h3>Список проектов:</h3>
      {allProjects.map(el => <div style={{border: '2px solid black', width: '50%'}}><p>Название: {el.title}</p>
      <button className="deleteProject" type="button" id={el.id}>Удалить проект</button>
      <button className="newsProject" type="button" id={el.id}>Добавить новости проекта</button>
      </div>)}
      </div>
      <script  defer src='/js/DeleteProgect.js'/>
    </Layout>
  )
  
}