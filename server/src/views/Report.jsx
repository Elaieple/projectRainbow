const React = require('react');
const Layout = require('./Layout');

module.exports = function Report () {

  return (

    <Layout>
        <form method='POST' action='/report'>
        <div className="container">
        <h2> Добавление</h2>

          <div className="mb-3">
            <label className="did-floating-label">Месяц</label>
            <input type="url" required className="form-control" id="exampleInputUsername" name="image" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Поступления</label>
            <input type="Nmae" required className="form-control" id="exampleInputUsername" name="name" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">От кого поступление</label>
            <input type="JobTitle" required className="form-control" id="exampleInputUsername" name="jobtitle" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label"> Траты</label>
            <textarea type="JobTitle" required className="form-control" id="exampleInputUsername" name="description" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">На что траты</label>
            <input type="JobTitle" required className="form-control" id="exampleInputUsername" name="vk" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Волонтерская помощь</label>
            <input type="JobTitle" required className="form-control" id="exampleInputUsername" name="email" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Информационная помощь</label>
            <input type="JobTitle" required className="form-control" id="exampleInputUsername" name="phone" placeholder="" />
          </div>

          <button type="button" className="btn floating-button add" id="add">Добавить</button>
      </div></form>
    </Layout>
  )
  
}
