import React, { useState, useEffect } from 'react';
import './Teams.css';

export default function Teams() {
  const [member, setMember] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetch('http://localhost:3001/sendMembers', {
      credentials: 'include',
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((res) => {
        setMember(res);
      })
      .catch(console.log);
  }, []);

  console.log(member);
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
        {member.map((employee) => (
          <div id={employee.id} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={`http://localhost:3001/${employee.image}`} alt="Avatar" />
                <div className="card-post">
                  <div className="Name">{employee.name}</div>
                  <div className="Post">{employee.jobtitle}</div>
                </div>
              </div>
              <div className="flip-card-back">
                <p>{employee.description}</p>
                <a href={employee.vk} target="_blank" rel="noreferrer"><img className="ots" src="./ico/vk.svg" alt="foto" /></a>
                <a href={employee.phone} target="_blank" rel="noreferrer"><img className="ots" src="./ico/Mail.svg" alt="foto" /></a>
                <a href={employee.email} target="_blank" rel="noreferrer"><img className="ots" src="./ico/Phone.svg" alt="foto" /></a>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="flip-card">
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
        </div> */}

      </div>
    </>
  );
}
