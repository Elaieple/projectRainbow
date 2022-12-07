import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ user, setUser }) {

  const authNav = () => (
    <>
    <Link style={{ margin: '10px' }} to="/">Logo</Link>
    <Link style={{ margin: '10px' }} to="/aboutUs">О нас</Link>
    <Link style={{ margin: '10px' }} to="/projects">Проекты</Link>
    <Link style={{ margin: '10px' }} to="/howToHelp">Как помочь</Link>
    <Link style={{ margin: '10px' }} to="/ourFriends">Наши друзья</Link>
    <Link style={{ margin: '10px' }} to="/reports">Отчёты</Link>
    <Link style={{ margin: '10px' }} to="/media">СМИ</Link>
    <button className="authBtn" type="button">Пожертвовать</button>
    </>
  );

  return (
    <div className='nav' style={{ textAlign: 'center' }}>
      {authNav()}
    </div>
  );
}
