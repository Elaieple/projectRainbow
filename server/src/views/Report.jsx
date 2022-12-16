const React = require('react');
const Layout = require('./Layout');

module.exports = function Report({rep,bee}) {

  return (
   
    <Layout>

      <script defer src='/js/FetchReport.js' />
      <script defer src='/js/DeleteReport.js' />

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
      <form method='POST' action='/report'>
        <div className="container">
        
     
     

          <h2> Добавление отчета</h2>

          <div className="mb-3">
            <label className="did-floating-label">Год</label>
            <input type="text" required className="form-control" id="exampleInputUsername" name="year" placeholder="" />
          </div>
          <label className="did -floating-label">Месяц отчета </label>
          <select name='month' className="form-select" aria-label="Default select example">
            <option selected>Годовой </option>
            <option value="Январь">Январь</option>
            <option value="Февраль">Февраль</option>
            <option value="Март">Март</option>
            <option value="Апрель">Апрель</option>
            <option value="Май">Май</option>
            <option value="Июнь">Июнь</option>
            <option value="Июль">Июль</option>
            <option value="Август">Август</option>
            <option value="Сентябрь">Сентябрь</option>
            <option value="Октябрь">Октябрь</option>
            <option value="Ноябрь">Ноябрь</option>
            <option value="Декабрь">Декабрь</option>

          </select>
          <br />
          <br />
             <div className='income'>
          <div className="mb-3">
            <label className="did-floating-label">Поступления</label>
            <input type="Nmae" required className="form-control" id="exampleInputUsername" name="income" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">От кого поступление</label>
            <input type="JobTitle" required className="form-control" id="exampleInputUsername" name="from" placeholder="" />
          </div>
          <div className="mb-3">
            <label className="did-floating-label">Статус</label>
            <select name='status' className="form-select" aria-label="Default select example">
              <option selected></option>
              <option value="Частное лицо">Частное лицо</option>
              <option value="Юридическое лицо">Юридическое лицо</option>
            </select>
          </div>
          <button type="button" className="btn floating-button add" id="inc" name='button-inc'> + Добавить поступление</button>
          </div>
          <br />
          <br />
          <div className="mb-3">
            <label className="did-floating-label"> Траты</label>
            <textarea type="JobTitle" required className="form-control" id="exampleInputUsername" name="howmany" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">На что траты</label>
            <input type="JobTitle" required className="form-control" id="exampleInputUsername" name="forwhat" placeholder="" />
          </div>
          <button type="button" className="btn floating-button add" id="add"> + Добавить траты</button>

          <div className="mb-3">
            <label className="did-floating-label">Волонтерская помощь</label>
            <input type="JobTitle" required className="form-control" id="exampleInputUsername" name="text" placeholder="" />
          </div>
          <button type="button" className="btn floating-button add" id="add"> + Добавить волонтерскую помощь</button>

          <div className="mb-3">
            <label className="did-floating-label">Информационная помощь</label>
            <input type="JobTitle" required className="form-control" id="exampleInputUsername" name="texthlp" placeholder="" />
          </div>
          <button type="button" className="btn floating-button add" id="add"> + Добавить Информационную помощь</button>
          <button type="submit" className="btn floating-button add" id="add">Добавить отчет</button>
        </div></form>



<h1>Все отчеты :</h1>
<div className='reportAll'>
{
  rep?.map((el) => (
    <><div id={el.id} key={el.id}>
      <p>{el.month}</p>
      <p>{el.year}</p>
      <button className='del1' id={el.id} data-post='deleterep'>Удалить отчет</button>
      <button type="button" id={el.id} name="report-edit">Редактировать</button>
    </div></>
  ))}
</div>
    </Layout>
  )

}
