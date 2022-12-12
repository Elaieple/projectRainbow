import React from 'react';
import './Teams.css';

export default function Teams() {
  return (
    <>
      <div className="null" />

      <div>
        <p className="MyTeamsP">
          НАША КОМАНДА
        </p>
        <img src="fotoMedia/unsplash_DNkoNXQti3c.png" alt="foto" className="MainFotoTemasPage" />
      </div>
      <div className="BlockTeams">

        {/* <div className='card'>
          <div className='FirstPageCard'>
            <figure>
              <p><img src="fotoTeams/unsplash_IF9TK5Uy-KI.png" alt="FotoRuk" className='ImgTeams' /></p>
              <figcaption className='Name'>ЕКАТЕРИНА АКИНЦЕВА</figcaption>
              <figcaption className='Post'>руководитель центра</figcaption>
            </figure>
          </div>
          <div className='SecondPageCard'>
            <p>
              privet
            </p>
          </div>
        </div>

        <div className='card'>
          <div className='FirstPageCard'>
            <figure>
              <p><img src="fotoTeams/unsplash_IF9TK5Uy-KI.png" alt="FotoRuk" className='ImgTeams' /></p>
              <figcaption className='Name'>ЕКАТЕРИНА АКИНЦЕВА</figcaption>
              <figcaption className='Post'>руководитель центра</figcaption>
            </figure>
          </div>
          <div className='SecondPageCard'>
            <p>
              3123122222222222222222
            </p>
          </div>
        </div> */}

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="fotoTeams/unsplash_IF9TK5Uy-KI.png" alt="Avatar" />
              <div className="card-post">
                <div className="Name">ЕКАТЕРИНА АКИНЦЕВА</div>
                <div className="Post">руководитель центра</div>
              </div>
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="fotoTeams/unsplash_IF9TK5Uy-KI.png" alt="Avatar" />
              <div className="card-post">
                <div className="Name">ЕКАТЕРИНА АКИНЦЕВА</div>
                <div className="Post">руководитель центра</div>
              </div>
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="fotoTeams/unsplash_IF9TK5Uy-KI.png" alt="Avatar" />
              <div className="card-post">
                <div className="Name">ЕКАТЕРИНА АКИНЦЕВА</div>
                <div className="Post">руководитель центра</div>
              </div>
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
