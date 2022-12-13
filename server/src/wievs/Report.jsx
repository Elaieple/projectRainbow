const React = require('react');
const Layout = require('./Layout');

module.exports = function Report () {

  return (

    <Layout>
        <form method='POST' action='/report'>
        <div>
  <input type="text" class="form-control" placeholder="Год" />
  <input type="text" class="form-control" placeholder="Месяц или годовой"  />
  <input type="text" class="form-control" placeholder="Поступления" />
  <input type="text" class="form-control" placeholder="Расходы в этом месяце" />
  <input type="text" class="form-control" placeholder="Имя пользователя" />
  <input type="text" class="form-control" placeholder="Имя пользователя" />
  <input type="text" class="form-control" placeholder="Имя пользователя" />
  <input type="text" class="form-control" placeholder="Имя пользователя" />
  <input type="text" class="form-control" placeholder="Имя пользователя" />
</div></form>
    </Layout>
  )
  
}
