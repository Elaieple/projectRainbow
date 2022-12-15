import React, { useState, useEffect } from 'react';
import Onas from '../../wiews/onas/Onas';
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
                <p className="MemberTextPage">{employee.description}</p>
                <div className="MemberTeam">
                  <a className="LinkMemberTeam" href={employee.vk} target="_blank" rel="noreferrer"><img className="ots" src="./ico/vk.svg" alt="foto" /></a>
                  <a className="LinkMemberTeam" href={employee.phone} target="_blank" rel="noreferrer"><img className="ots" src="./ico/Phone.svg" alt="foto" /></a>
                  <a className="LinkMemberTeam" href={employee.email} target="_blank" rel="noreferrer"><img className="ots" src="./ico/Mail.svg" alt="foto" /></a>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
      <Onas />
    </>
  );
}
