const React = require('react');
const Layout = require('./Layout');

module.exports = function Report () {
  
  return (

    <Layout>
      <script defer src='/js/FetchReport.js'/>
        <form method='POST' action='/report'>
        <div className="container">
        <h2> Добавление</h2>

          <div className="mb-3">
            <label className="did-floating-label">Год</label>
            <input type="text" required className="form-control" id="exampleInputUsername" name="year" placeholder="" />
          </div>
          <label className="did -floating-label">Месяц отчета </label>
          <select name='month' class="form-select" aria-label="Default select example">
  <option selected>Годовой </option>
  <option value="1">Январь</option>
  <option value="2">Февраль</option>
  <option value="3">Март</option>
  <option value="4">Апрель</option>
  <option value="5">Май</option>
  <option value="6">Июнь</option>
  <option value="7">Июль</option>
  <option value="8">Август</option>
  <option value="9">Сентябрь</option>
  <option value="10">Октябрь</option>
  <option value="11">Ноябрь</option>
  <option value="12">Декабрь</option>

</select>
<br/> 
<br/> 

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
            <select name='satus' class="form-select" aria-label="Default select example">
  <option selected></option>
  <option value="1">Частное лицо</option>
  <option value="2">Юридическое лицо</option>
</select>
          </div>
          <button type="button" className="btn floating-button add" id="inc"> + Добавить поступление</button>
          <br/> 
          <br/> 
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
          <button type="submit" className="btn floating-button add" id="add">Добавить</button>
      </div></form>
    </Layout>
  )
  
}
    