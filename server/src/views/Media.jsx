const React = require('react');
const Layout = require('./Layout');

module.exports = function Media({ allMedia }) {

  return (

    <Layout>
      <script defer src='/js/AddMedia.js' /> 
      <script defer src='/js/DeleteMedia.js' /> 
      <form name='AddMediaFoto' method="post" enctype="multipart/form-data" action="/AddMedia/add" className="mainForm">
        <div className="container">
          <h2> Добавление новости</h2>

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
            <input type="file" required className="form-control" id="exampleInputUsername" name="image" placeholder="" />
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

          <button type="submit" className="btn floating-button add" id="add">Добавить</button>
        </div>
      </form>

      <div className="container">
        <h2> Список работников</h2>
        <div className="container2">
          {allMedia?.map((media) => (
            <div id={`${media.id}`} className="member">
              <img src={`${media.image}`} alt="photo loaded" />
              <p>Дата создания новости на нашм сайте: {new Date(Date.parse(media.date)).toLocaleDateString()}</p>
              <p>Заголвок: {media.title}</p>
              <p>Подзагаловок: {media.description}</p>
              <p>Описание к картинке: {media.descriptionImage}</p>
              <p>Тело новости(внутрянка): {media.text}</p>
              <p>Ссылка на новость: {media.source}</p>
              <p>Дата создания данной записи: {media.createdAt.toLocaleDateString()}</p>
              <a href={`/editMedia/${media.id}`}>
                <button type="button"> Редактировать новость</button>
              </a>

              <form className="delete" action="/delete" method="DELETE">
                <button className="floating-button" type="button" id="btn-like">Удалить новость</button>
              </form>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )

}