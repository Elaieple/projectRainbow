const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ newUser, Member }) {
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
      <form action={`/editMember/${Member.id}`} method="POST" className='m-3' enctype="multipart/form-data">

      <div className="mb-3">
            <label className="did-floating-label">Фотография работника</label>
            <input type="file" className="form-control" id="exampleInputUsername" name="image"/>
          </div>

          <div className="m-3">
            <label className="did-floating-label">ФИО</label>
            <input type="Nmae"  className="form-control" id="exampleInputUsername" name="name" value={Member.name} placeholder="" />
          </div>

          <div className="m-3">
            <label className="did-floating-label">Должность</label>
            <input type="JobTitle"  className="form-control" id="exampleInputUsername" name="jobtitle" value={Member.jobtitle} placeholder="" />
          </div>

          <div className="m-3">
            <label className="did-floating-label"> Свобдка по работнику </label>
            <textarea type="JobTitle"  className="form-control" id="exampleInputUsername" name="description" value={Member.description} placeholder="" />
          </div>

          <div className="m-3">
            <label className="did-floating-label">Ссылка на Вконтакте</label>
            <input type="JobTitle"  className="form-control" id="exampleInputUsername" name="vk" value={Member.vk} placeholder="" />
          </div>

          <div className="m-3">
            <label className="did-floating-label">Емейл</label>
            <input type="JobTitle"  className="form-control" id="exampleInputUsername" name="email" value={Member.email} placeholder="" />
          </div>

          <div className="m-3">
            <label className="did-floating-label">Номер телефона</label>
            <input type="JobTitle"  className="form-control" id="exampleInputUsername" name="phone" value={Member.phone} placeholder="" />
          </div>

        <button className='m-3' type="submit"> Изменить пост </button>

      </form>
    </Layout>
  );
};