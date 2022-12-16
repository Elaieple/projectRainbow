const React = require('react');
const Layout = require('./Layout');

module.exports = function Event ({allProjects, bee}) {
  return (

    <Layout>

<header className="header">
     
     <nav className="navbar navbar-expand-lg bg-light">
       <div className="container-fluid">
       <div>Привет,{bee}!</div>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon" />
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
               <a className="nav-link active" aria-current="page" href="/">Отчеты</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="/AddMember">Добавить Сотрудника</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="/report">Добавить отчет</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="/AddMedia"> Добавить новость</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="/newproj">Добавть проект</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="/logout">Выход</a>
             </li>
           </ul>
         </div>
       </div>
     </nav>
    </header>
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
      <a className="newsProject" href={`newsproject/${el.id}`} id={el.id}  >Добавить новости проекта</a>
      </div>)}
      </div>
      <script  defer src='/js/DeleteProgect.js'/>
    </Layout>
  )
  
}