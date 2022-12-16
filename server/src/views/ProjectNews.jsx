const React = require('react');
const Layout = require('./Layout');

module.exports = function ProjNew (eee) {
    <Layout>

        <h1>Добавить новости Проекта</h1>
        {
    
      <p>{eee.title}</p>
    }
        <div className="mb-3">
            <label className="did-floating-label">Новость</label>
            <input type="Nmae" required className="form-control" id="exampleInputUsername" name="income" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Фото</label>
            <input type="JobTitle" required className="form-control" id="exampleInputUsername" name="from" placeholder="" />
          </div>
    </Layout>
}