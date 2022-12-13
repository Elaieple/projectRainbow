const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ newUser, Member }) {
  return (
    <Layout newUser={newUser}>
      <form action={`/edit/${Member.id}`} method="POST">
      <div className="m-3">
            <label className="did-floating-label">Фотография работника</label>
            <input type="url"  className="form-control" id="exampleInputUsername" name="image" value={Member.image} placeholder="" />
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