const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ userName, allMember }) {
  return (
    <Layout userName={userName}>
      <script defer src='/js/AddMemberTeam.js' />
      <script defer src="/js/DeleteMemberTeam.js" />
      <div className="container">
        <h2> Добавление</h2>

        <form method="post" action="/add" className="mainForm">

          <div className="mb-3">
            <label className="did-floating-label">Фотография работника</label>
            <input type="url" required className="form-control" id="exampleInputUsername" name="image" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">ФИО</label>
            <input type="Nmae" required className="form-control" id="exampleInputUsername" name="name" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Должность</label>
            <input type="JobTitle" required className="form-control" id="exampleInputUsername" name="jobtitle" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label"> Свобдка по работнику </label>
            <textarea type="JobTitle" required className="form-control" id="exampleInputUsername" name="description" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Ссылка на Вконтакте</label>
            <input type="JobTitle" required className="form-control" id="exampleInputUsername" name="vk" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Емейл</label>
            <input type="JobTitle" required className="form-control" id="exampleInputUsername" name="email" placeholder="" />
          </div>

          <div className="mb-3">
            <label className="did-floating-label">Номер телефона</label>
            <input type="JobTitle" required className="form-control" id="exampleInputUsername" name="phone" placeholder="" />
          </div>

          <button type="button" className="btn floating-button add" id="add">Добавить</button>
        </form>
      </div>


      <div className="container">
        <h2> Список работников</h2>
        <div className="container2">
          {allMember?.map((member) => (
            <div id={`${member.id}`} className="member">
              <img src={`${member.image}`} alt="photo loaded" />
              <p>ФИО рабоника: {member.name}</p>
              <p>Должность: {member.jobtitle}</p>
              <p>Краткая сводка по работнику: {member.description}</p>
              <p>Соцсеть Вконтакте: {member.vk}</p>
              <p>Емейл: {member.email}</p>
              <p>Телефон: {member.phone}</p>
              <p>Дата создания данной записи: {member.createdAt.toLocaleDateString()}</p>

              <a href={`/edit/${member.id}`}>
                <button type="button"> Редактировать пост</button>
              </a>

              <form className="delete" action="/delete" method="DELETE">
                <button className="floating-button" type="button" id="btn-like">Удалить</button>
              </form>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
