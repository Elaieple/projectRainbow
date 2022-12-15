import React, { useEffect, useState } from 'react';
import './cmi.css';
import { Link } from 'react-router-dom';
import Onas from '../onas/Onas';

export default function Cmi() {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetch('http://localhost:3001/sendMedia', {
      credentials: 'include',
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((res) => {
        setMedia(res);
      })
      .catch(console.log);
  }, []);

  console.log(media);
  return (
    <>
      <div className="null" />
      <div className="container">
        <div className="title"> СМИ о нас</div>

        <div className="contents">
          {media.map((news) => (
            <div>
              <div className="date">{new Date(Date.parse(news.date)).toLocaleDateString()}</div>
              <div className="ostex">
                <img className="png" src={`http://localhost:3001/${news.image}`} alt="foto" />
                <div className="cont">
                  <div className="title1">{news.title}</div>
                  <Link to={`/media/${news.id}`}> Подробнее </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="bu" type="button">1</button>
      </div>
      <Onas />

    </>
  );
}
