const React = require('react');
const Layout = require('./Layout');


module.exports = function Aut({ bee }) {
    return (
        <Layout>
{bee?(
 <header className="header">

 <nav className="navbar navbar-expand-lg bg-light">
   <div className="container-fluid">
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon" />
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <a className="nav-link active" aria-current="page" href="/">Отчеты</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="/AddMember">Добавить Сотрудника</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="/report">Добавить отчет</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="/AddMedia"> Добавить новость</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="/newproj">Добавть проект</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="/logout">Выход</a>
         </li>
       </ul>
     </div>
   </div>
 </nav>
</header>

):( 
    
    <><script defer src="/js/Auto.js"></script><form className='login' method='POST' action='/autorisation'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name='password' className="form-control" id="exampleInputPassword1" />
                        </div>
                        <h1 className="loginError"></h1>
                        <button type="submit" className="btn btn-primary">Войти</button>
                    </form></>)}

   

</Layout>
  )}
