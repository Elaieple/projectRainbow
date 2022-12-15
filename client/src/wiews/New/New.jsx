import React, { useEffect, useState } from 'react';
import './new.css';
import { useParams } from 'react-router-dom';
import Onas from '../onas/Onas';

export default function New() {
  const NUMBER_OF_NEWS = 4;
  const [news, setNews] = useState({});
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
        setMedia(res);
      })
      .catch(console.log);
  }, []);

  console.log(media);
  return (
    <>
      <div className="null" />
      <div className="contant">
        <div className="stat">
          <div className="date">{new Date(Date.parse(news.date)).toLocaleDateString()}</div>
          <div className="new">
            <div className="title">{news.title}</div>
            <div className="midtex">
              <div className="title1">{news.description}</div>

              <figure>
                <img src={`http://localhost:3001/${news.image}`} alt="fito" />
                <figcaption>{news.descriptionImage}</figcaption>
              </figure>
              <div className="text">
                {news.text}
              </div>
              <a href={news.source}>
                <button type="button">Читать источник</button>
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
                <img src={`http://localhost:3001/${el.image}`} alt="foto" />
                <div className="date1">15.12.2021</div>
                <div className="opis">Не чужие: кто и как помогает особенным детям</div>
                <button type="button">Подробнее</button>
                <div>ПОДУМАТЬ КААК БУДЕТ РЕАЛИЗОВАН ПОИСК ПО ПОХОЖИМ СТАТЬЯМ</div>
              </div>
              )
            ))}
          </div>
        </div>
      </div>
      <Onas />

    </>
  );
}
