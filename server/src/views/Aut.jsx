const React = require('react');
const Layout = require('./Layout');


module.exports = function Aut( ) {
    return (
        <Layout>
    <script defer src="/js/Auto.js"></script>
    <form className='login' method='POST' action='/autorisation'>
<div className="mb-3">
<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
<input type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp"/>
<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
</div>
<div className="mb-3">
<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
<input type="password" name='password' className="form-control" id="exampleInputPassword1"/>
</div>
<div className="mb-3 form-check">
<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
</div>
<h1 className="loginError"></h1>
<button type="submit" className="btn btn-primary">Submit</button>
</form>

</Layout>
  )}
