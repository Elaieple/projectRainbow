import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import classNames from 'classnames'

export default function Navbar() {

  const [navColor, setNavColor] = useState('black')
  const url = useLocation();
  useEffect(() => {
    if(url.pathname === `/`) {
      setNavColor('white')
    }
    if(url.pathname !== `/`) {
      setNavColor('black')
    }
  }, [url])

  //! Для нижнего навбара но возможно редачить нужно
  // <Link to="/aboutUs"><div className='link-circle'>
  // О нас <div className='circle1'/>
  //   </div>
  //   </Link>
  function myFunction() {
    var x = document.getElementById("myTopnav");
    console.log(x);
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  const authNav = () => (
    <>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
<div className="topnav" id="myTopnav">
  <div className='navbar'>
    <Link className='link' to="/"><img src='/logotypes/logo_m 1.png' alt='logo' /> </Link>
    <Link className='link' to="/aboutUs">О нас</Link>
    <Link className='link' to="/projects">Проекты</Link>
    <Link className='link' to="/howToHelp">Как помочь</Link>
    <Link className='link' to="/ourFriends">Наши друзья</Link>
    <Link className='link' to="/reports">Отчёты</Link>
    <Link className='link' to="/media">СМИ</Link>
    <button className="authBtn" type="button">ПОМОЧЬ</button>
    <a href="#a" className="icon" onClick={myFunction}>
      <i className="fa fa-bars"></i>
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
    <div className= { classNames('nav', navColor) } style={{ textAlign: 'center' }}>
      {authNav()}
    </div>
  );
}
