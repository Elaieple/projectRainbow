const React = require('react');
const Layout = require('./Layout');

module.exports = function Media () {

  return (

    <Layout>
        <form method='POST' action='/media'>
        <div className="container">
        <h2> Добавление новости</h2>

          <div className="mb-3">
            <label className="did-floating-label">Дата</label>
            <input type="name" required className="form-control" id="exampleInputUsername" name="date" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Заголовок</label>
            <input type="Nmae" required className="form-control" id="exampleInputUsername" name="title" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Подзаголовок</label>
            <input type="JobTitle" required className="form-control" id="exampleInputUsername" name="idescription" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label"> Изображение</label>
            <textarea type="JobTitle" required className="form-control" id="exampleInputUsername" name="image" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Описание изображения</label>
            <input type="JobTitle" required className="form-control" id="exampleInputUsername" name="descriptionImage" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Текст новости</label>
            <input type="JobTitle" required className="form-control" id="exampleInputUsername" name="text" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Ссылка на источник</label>
            <input type="JobTitle" required className="form-control" id="exampleInputUsername" name="source" placeholder="" />
          </div>

          <button type="button" className="btn floating-button add" id="add">Добавить</button>
      </div></form>
    </Layout>
  )
  
}