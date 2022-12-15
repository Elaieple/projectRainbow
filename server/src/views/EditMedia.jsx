const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ newUser, news }) {
  return (
    <Layout newUser={newUser}>
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