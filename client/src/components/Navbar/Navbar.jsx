import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ user, setUser }) {

  const authNav = () => (
    <>
    <Link style={{ margin: '10px' }} to="/"><img src='/logotypes/logo_m 1.png' alt='logo' /> </Link>
    <Link style={{ margin: '10px' }} to="/aboutUs">О нас</Link>
    <Link style={{ margin: '10px' }} to="/projects">Проекты</Link>
    <Link style={{ margin: '10px' }} to="/howToHelp">Как помочь</Link>
    <Link style={{ margin: '10px' }} to="/ourFriends">Наши друзья</Link>
    <Link style={{ margin: '10px' }} to="/reports">Отчёты</Link>
    <Link style={{ margin: '10px' }} to="/media">СМИ</Link>
    <button className="authBtn" type="button">ПОМОЧЬ</button>
    </>
  );

  return (
    <div className='nav' style={{ textAlign: 'center' }}>
      {authNav()}
    </div>
  );
}
