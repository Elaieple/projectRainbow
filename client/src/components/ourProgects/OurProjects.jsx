import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ourProjects.css';
import Onas from '../../wiews/onas/Onas';

const arrayColors = ['#46AB4A', '#7CAAC1', '#CF7B94'];
const getRandomColor = () => arrayColors[Math.round(Math.random() * 2)];

function OurProjects() {
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.globalStore);
  const [active, setActive] = useState({ id: null });
  const [projects, setProjects] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [randomColor, setRandomColor] = useState({ id: null, color: '' });

  useEffect(() => {
    window.scroll(0, 0);
    fetch('http://localhost:3001/newproj/current/')
      .then((data) => data.json())
      .then((data) => {
        dispatch({ type: 'SET_LOADING', payload: false });
        setProjects(data);
      })
      .catch(console.error);
    fetch('http://localhost:3001/newproj/completed/')
      .then((data) => data.json())
      .then((data) => setCompleted(data))
      .catch(console.error);
  }, []);

  return (
    loading ? (
      <div className="spinner-container">
        <img className="spinner" src="https://i.pinimg.com/originals/e2/eb/9e/e2eb9e845ff87fb8fac15f72359efb10.gif" alt="spinner" />
      </div>
    ) : (
      <div>
        <div className="project-header">
          <img className="project-background" src="our-projects.jpg" alt="project-img" />
          <div className="project-header-text">
            <h1>Наши проекты</h1>
            <p>Каждое занятие расширяет сознание и является мощнейшим стимулом для изменения ребёнка на всех уровнях: эмоциональном, волевом и мыслительном</p>

          </div>
          <div className="completed-projects">
            {/* Карточка */}
            {!completed.length ? 'Loading...' : completed.map((el) => (
              <div
                key={el.id}
                className="project"
                style={
              randomColor && randomColor.id === el.id ? { backgroundColor: randomColor.color, color: 'white' } : {}
            }
                onMouseEnter={() => { setRandomColor({ id: el.id, color: getRandomColor() }); }}
                onMouseLeave={() => { setRandomColor({ id: null, color: '' }); }}
              >
                <p className="project-year">{completed.length ? new Date(Date.parse(el.datestart)).getFullYear() : 'Loading...'}</p>
                <h3>{completed.length ? el.title : 'Loading...'}</h3>
                <p className="project-card-description">{el.mission}</p>
                <Link to={`/current/${el.id}`}>
                  <a href="#" style={randomColor.id === el.id ? { color: 'white' } : {}}>
                    Подробнее
                    {' '}
                    <svg width="19" height="10" viewBox="0 0 19 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.37114e-07 5C4.24234e-07 5.14732 0.0714878 5.28861 0.198737 5.39278C0.325985 5.49695 0.498572 5.55548 0.678528 5.55548L16.6823 5.55548L12.4116 9.05054C12.3485 9.10219 12.2985 9.1635 12.2644 9.23098C12.2302 9.29846 12.2126 9.37078 12.2126 9.44382C12.2126 9.51686 12.2302 9.58918 12.2644 9.65666C12.2985 9.72414 12.3485 9.78545 12.4116 9.8371C12.4747 9.88874 12.5496 9.92971 12.632 9.95766C12.7145 9.98561 12.8028 10 12.892 10C12.9813 10 13.0696 9.98561 13.152 9.95766C13.2345 9.92971 13.3093 9.88874 13.3724 9.8371L18.8007 5.39328C18.8638 5.34168 18.914 5.28038 18.9482 5.2129C18.9824 5.14541 19 5.07307 19 5C19 4.92694 18.9824 4.85459 18.9482 4.78711C18.914 4.71962 18.8638 4.65832 18.8007 4.60672L13.3724 0.162902C13.3093 0.111256 13.2345 0.0702882 13.152 0.0423379C13.0696 0.0143876 12.9813 1.38117e-06 12.892 1.37337e-06C12.8028 1.36557e-06 12.7145 0.0143875 12.632 0.0423378C12.5496 0.0702881 12.4747 0.111256 12.4116 0.162902C12.3486 0.214548 12.2985 0.275861 12.2644 0.343339C12.2302 0.410818 12.2126 0.483142 12.2126 0.55618C12.2126 0.629219 12.2302 0.701542 12.2644 0.769021C12.2985 0.836501 12.3486 0.897812 12.4116 0.949458L16.6823 4.44452L0.678528 4.44452C0.498572 4.44452 0.325985 4.50304 0.198737 4.60722C0.0714879 4.71139 4.49993e-07 4.85268 4.37114e-07 5Z" />
                    </svg>
                  </a>
                </Link>
              </div>
            ))}
          </div>

        </div>
        <Onas />
      </div>
    )
  );
}

export default OurProjects;
