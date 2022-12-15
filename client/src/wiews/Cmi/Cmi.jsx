import React, { useEffect, useState } from 'react';
// import Pagination from 'react-bootstrap/Pagination';
import './cmi.css';
import { Link } from 'react-router-dom';
import Pagination from '../../components/Pagination/Pagination';
import Onas from '../onas/Onas';

export default function Cmi() {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [mediaPerPage] = useState(6);

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

  const maxPage = Math.ceil(media.length / mediaPerPage);
  const mediaLastIndex = currentPage * mediaPerPage;
  const mediaFirstIndex = mediaLastIndex - mediaPerPage;
  const currentMedia = media.slice(mediaFirstIndex, mediaLastIndex);

  const nextPage = () => setCurrentPage((prev) => {
    if (currentPage !== maxPage) {
      return prev + 1;
    }
    return prev;
  });

  const prevPage = () => setCurrentPage((prev) => {
    if (currentPage !== 1) {
      return prev - 1;
    }
    return prev;
  });

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="null" />
      <div className="containerv">
        <div className="title"> СМИ о нас</div>

        <div className="contents">
          {currentMedia.map((news) => (
            <div className="MediaBlocks">
              <div className="date">{new Date(Date.parse(news.date)).toLocaleDateString()}</div>
              <div className="ostex">
                <img className="png" src={`http://localhost:3001/${news.image}`} alt="foto" />
                <div className="cont">
                  <div className="title1">
                    <p className="title1">
                      {news.title}
                    </p>
                  </div>
                  <Link className="LinkMediaCmi" to={`/media/${news.id}`}> Подробнее ➞ </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="PaginationBlock">
          {/* <button className="VectorBtnMediaLeft" type="button" onClick={prevPage}><img src="Vector/VectorLeft.svg" alt="Vector" /></button> */}
          <Pagination
            mediaPerPage={mediaPerPage}
            totalMedia={media.length}
            paginate={paginate}
          />
          <button className="VectorBtnMediaRight" type="button" onClick={nextPage}><img src="Vector/VectorRigth.svg" alt="Vector" /></button>
        </div>
        {/* <button className="bu" type="button">1</button> */}
      </div>
      <Onas />

    </>
  );
}
