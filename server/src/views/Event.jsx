const React = require('react');
const Layout = require('./Layout');

module.exports = function Event () {
  return (

    <Layout>
        <form method='POST' action='/newproj'>
        <div className="container">
        <h2> Добавление мероприятия</h2>

          <div className="mb-3">
            <label className="did-floating-label">Название мероприятия</label>
            <input type="name" required className="form-control" id="exampleInputUsername" name="title" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Дата старта мероприятия</label>
            <input type="Nmae" required className="form-control" id="exampleInputUsername" name="datestart" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Дата окончания мероприятия</label>
            <input type="JobTitle" required className="form-control" id="exampleInputUsername" name="dateend" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label"> Изображение</label>
            <textarea type="JobTitle" required className="form-control" id="exampleInputUsername" name="fonimage" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Цели</label>
            <input type="JobTitle" required className="form-control" id="exampleInputUsername" name="mission" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Задачи</label>
            <input type="JobTitle" required className="form-control" id="exampleInputUsername" name="intent" placeholder="" />
          </div>

          <button type="button" className="btn floating-button add" id="add">Добавить мероприятие</button>
      </div></form>
    </Layout>
  )
  
}