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

  const authNav = () => (
    <>
    <Link className='link' to="/"><img src='/logotypes/logo_m 1.png' alt='logo' /> </Link>
    <Link className='link' to="/aboutUs">О нас</Link>
    {/* <Link to="/aboutUs"><div className='link-circle'>
    О нас <div className='circle1'/>
      </div>
      </Link> */}
    <Link className='link' to="/projects">Проекты</Link>
    <Link className='link' to="/howToHelp">Как помочь</Link>
    <Link className='link' to="/ourFriends">Наши друзья</Link>
    <Link className='link' to="/reports">Отчёты</Link>
    <Link className='link' to="/media">СМИ</Link>
    <button className="authBtn" type="button">ПОМОЧЬ</button>
    </>
  );

  return (
    <div className= { classNames('nav', navColor) } style={{ textAlign: 'center' }}>
      {authNav()}
    </div>
  );
}
