import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './VtoroeDihaniee.css';

export default function VtoroeDihaniee() {
  return (
    <>
      <div className="null" />
      <div className="photoContainer">
        <div className="photoText">
          <p>ПРОЕКТ ВТОРОЕ ДЫХАНИЕ</p>
        </div>
        <button type="button" className="button1">УЧАСТВОВАТЬ</button>
      </div>
      <div className="container1">
        <div className="bottomContainer">
          <div className="bottomText1">
            <p>
              ПРОЕКТ ПОДДЕРЖАН
              {' '}
              <br />
              {' '}
              ФОНДОМ ПРЕЗИДЕНСКИХ ГРАНТОВ
              {' '}
            </p>
          </div>
          <div className="data">
            <p>01.03.2022 - 01.05.2022</p>
          </div>
        </div>
        <div className="celiContainer">
          <div className="celi">
            <p>ЦЕЛИ</p>
          </div>
          <div className="celiText">
            <p>
              Вовлечение подростков с двигательной и ментальной инвалидностью в жизнь
              {' '}
              <br />
              {' '}
              арт-мастерской, где они под руководством мастеров создают вещи своими
              {' '}
              <br />
              {' '}
              руками. Идея мастерской - делать простые и полезные вещи, которые
              {' '}
              <br />
              {' '}
              пригождаютсяя в быту.
            </p>
          </div>
        </div>
        <div className="zadachiContainer">
          <div className="zadachi">
            <p>ЗАДАЧИ</p>
          </div>
          <div className="zadachiText">
            <p>
              Под арт-мастерскую выделено пространство общей площадью 113 кв м. На
              {' '}
              <br />
              {' '}
              постоянной основе, сменяя друг-друга, в мастерской работают четыре
              {' '}
              <br />
              {' '}
              мастера: художник, скульптор, резчик по дереву и специалист по декоративно-
              {' '}
              <br />
              {' '}
              прикладному искусству.
            </p>
          </div>
        </div>
        <div />
      </div>
      <div className="container2">
        <div className="kak">
          <p>КАК УЧАСТВОВАТЬ?</p>
        </div>
        <div className="container3">
          <div className="blok1 bloksize">
            <div className="blok1num nums">1</div>
            <div className="blok1Text">Оставьте заявку на сайте, чтобы  мы смогли с вами связаться и добавить в участники </div>
          </div>
          <div className="blok2 bloksize">
            <div className="blok2num nums">2</div>
            <div className="blok2Text">За сутки до мероприятия мы вас ещё раз оповестим, чтобы уточнить детали и ваше участие</div>
          </div>
          <div className="blok3 bloksize">
            <div className="blok3num nums">3</div>
            <div className="blok3Text">
              Взять с собой перчатки, воду и небольшой перекус, так как мероприятие  на целый
              {' '}
              <br />
              {' '}
              день
            </div>
          </div>
          <div className="blok4 bloksize">
            <div className="blok4num nums">4</div>
            <div className="blok4Text">
              В назначенный день быть на месте, готовым к участию и одетым по
              {' '}
              <br />
              {' '}
              погоде
            </div>
          </div>
        </div>
        <div className="container4">
          <div className="firstText">НОВОСТИ ПРОЕКТА:</div>
          <div className="firstText2">
            72 ребенка с двигательной и ментальной инвалидностью
            {' '}
            <br />
            {' '}
            стали постоянными участниками наших проектов
          </div>
        </div>
      </div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="kartinka5.png" className="d-block w-100" alt="gachi" />
          </div>
          <div className="carousel-item">
            <img src="kartinka5.png" className="d-block w-100" alt="gachi" />
          </div>
          <div className="carousel-item">
            <img src="kartinka5.png" className="d-block w-100" alt="gachi" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
