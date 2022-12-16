import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './new.css';
import { Link, useParams } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import Onas from '../onas/Onas';

export default function New() {
  const NUMBER_OF_NEWS = 4;

  const [news, setNews] = useState({});
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.globalStore);

  const getParams = () => {
    const routreParams = useParams();
    return routreParams;
  };
  const { id } = getParams();

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`http://localhost:3001/AddMedia/sendMedia/${id}`, {
      credentials: 'include',
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: 'SET_LOADING', payload: false });
        setNews(res);
      })
      .catch(console.log);
  }, []);

  const [media, setMedia] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetch('http://localhost:3001/sendMedia', {
      credentials: 'include',
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: 'SET_LOADING', payload: false });
        setMedia(res);
      })
      .catch(console.log);
  }, []);

  console.log(media);
  return (
    loading ? (
      <div className="spinner-container">
        <img className="spinner" src="https://i.pinimg.com/originals/e2/eb/9e/e2eb9e845ff87fb8fac15f72359efb10.gif" alt="spinner" />
      </div>
    ) : (
      <>
        <div className="null" />
        <div className="contant">
          <div className="stat">
            <div className="date">{new Date(Date.parse(news.date)).toLocaleDateString()}</div>
            <div className="new">
              <div className="title">{news.title}</div>
              <div className="midtex">
                <div>
                  <p className="title1">
                    {news.description}
                  </p>
                </div>

                <figure>
                  <img className="Paiges" src={`http://localhost:3001/${news.image}`} alt="fito" />
                  <figcaption className="figcaption">{news.descriptionImage}</figcaption>
                </figure>
                <div className="text">
                  <p className="text">{news.text}</p>
                </div>
                <a href={news.source}>
                  <button className="MediaBtnPage" type="button">Читать источник</button>
                </a>
              </div>
            </div>
          </div>
          <div className="pohospi">
            <div className="poho">ПОХОЖИЕ СТАТЬИ</div>
            <div className="pohocont">
              {media.length && media.map((el, ind) => (
                ind < NUMBER_OF_NEWS && (
                <div className="postat">
                  <img className="ImagesMediaPage" src={`http://localhost:3001/${el.image}`} alt="foto" />
                  <div className="date1">{new Date(Date.parse(el.date)).toLocaleDateString()}</div>
                  <div className="opis">
                    <p className="TextMediaPageAll">
                      {el.title}
                    </p>
                  </div>
                  <Link className="LinkMediaPageAll" to={`/media/${news.id}`}> Подробнее ➞ </Link>
                </div>
                )
              ))}
            </div>
          </div>
        </div>
        <Onas />
      </>

    )
  );
}
