const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ bee }) {
  return (
    <Layout bee={bee}>
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

      <form action={`/editMedia/${news.id}`} method="POST" className='m-3' enctype="multipart/form-data">

      <div className="mb-3">
            <label className="did-floating-label">Дата</label>
            <input type="date" required className="form-control" id="exampleInputUsername" name="date" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Заголовок</label>
            <input type="title" required className="form-control" id="exampleInputUsername" name="title" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Подзаголовок</label>
            <input type="description" required className="form-control" id="exampleInputUsername" name="description" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label"> Изображение</label>
            <input type="file" className="form-control" id="exampleInputUsername" name="image" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Описание изображения</label>
            <input type="descriptionImage" required className="form-control" id="exampleInputUsername" name="descriptionImage" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Текст новости</label>
            <input type="text" required className="form-control" id="exampleInputUsername" name="text" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Ссылка на источник</label>
            <input type="url" required className="form-control" id="exampleInputUsername" name="source" placeholder="" />
          </div>

        <button className='m-3' type="submit"> Изменить пост </button>

      </form>
    </Layout>
  );
};