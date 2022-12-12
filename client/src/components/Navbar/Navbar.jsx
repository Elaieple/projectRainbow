import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import classNames from 'classnames';

export default function Navbar() {
  const [navColor, setNavColor] = useState('black');
  const url = useLocation();
  useEffect(() => {
    if (url.pathname === '/') {
      setNavColor('white');
    }
    if (url.pathname !== '/') {
      setNavColor('black');
    }
  }, [url]);

  //! Для нижнего навбара но возможно редачить нужно
  // <Link to="/aboutUs"><div className='link-circle'>
  // О нас <div className='circle1'/>
  //   </div>
  //   </Link>
  function myFunction() {
    const x = document.getElementById('myTopnav');
    const link = document.getElementById('linkFirst');
    console.log(x);
    if (x.className === 'topnav') {
      x.className += ' responsive';
      link.id += 'First';
    } else {
      const linkFirst = document.getElementById('linkFirstFirst');
      x.className = 'topnav';
      linkFirst.id = 'linkFirst';
    }
  }

  const authNav = () => (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div className="topnav" id="myTopnav">
        <div className="navbar">
          <Link id="linkFirst" className="link linkFirst" to="/">
            <img src="/adaptiv/mainPage640/logo_m 3.png" alt="logo" />
            {' '}
          </Link>
          <Link id="linkFirstSecond" className="link linkFirst" to="/">
            <img src="logotypes/logo_m 1.png" alt="logo" />
            {' '}
          </Link>
          <Link id="MainPage" className="link" to="/">Главная</Link>
          <Link className="link" to="/aboutUs">О нас</Link>
          <Link className="link" to="/projects">Проекты</Link>
          <Link className="link" to="/howToHelp">Как помочь</Link>
          <Link className="link" to="/ourFriends">Наши друзья</Link>
          <Link className="link" to="/reports">Отчёты</Link>
          <Link id="LastLink" className="link" to="/media">СМИ</Link>
          <Link className="link" to="/donate">
            <button className="authBtn" type="button">ПОМОЧЬ</button>
          </Link>
          <a href="#a" className="icon" onClick={myFunction}>
            <i className="fa fa-bars" />
          </a>
        </div>
      </div>

      {/* <Link className='link' to="/"><img src='/logotypes/logo_m 1.png' alt='logo' /> </Link>
    <Link className='link' to="/aboutUs">О нас</Link>
    <Link className='link' to="/projects">Проекты</Link>
    <Link className='link' to="/howToHelp">Как помочь</Link>
    <Link className='link' to="/ourFriends">Наши друзья</Link>
    <Link className='link' to="/reports">Отчёты</Link>
    <Link className='link' to="/media">СМИ</Link>
    <button className="authBtn" type="button">ПОМОЧЬ</button> */}
    </>
  );

  return (
    <div className={classNames('nav', navColor)} style={{ textAlign: 'center' }}>
      {authNav()}
    </div>
  );
}
