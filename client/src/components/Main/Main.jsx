/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import Onas from '../../wiews/onas/Onas';

export default function Main() {
  return (
    <>
      <>
        <img className="img" src="foto1.png" alt="foto" />
        <img className="img1" src="adaptiv/mainPage640/unsplash_IXiGMtCrQPg.png" alt="foto1" />
      </>
      <div className="Performance">
        <p className="zagalovok">
          ВЫШЕ РАДУГИ
        </p>
        <p className="mainFirstP">
          АНОО “КОМПЛЕКСНЫЙ ОБЩЕОБРАЗОВАТЕЛЬНЫЙ ЦЕНТР ДЛЯ ДЕТЕЙ С ДЦП
        </p>
        <button className="mainPageBtn" type="button">ПОМОЧЬ СЕЙЧАС</button>
      </div>
      <div className="firstBlock BlockAboutUs">
        <div className="blockProcent">
          <div className="size block1 mainPageBlock320" style={{ boxSizing: 'unset' }}>
            <p className="firstH2"> 15% </p>
            <p className="secondP">
              детей с ДЦП в Самарской области могут посещать общеобразовательные учреждения.
              Это дети с минимальными нарушениями, способные наравне со здоровыми сверстниками осваивать образовательные программы.
            </p>
          </div>
          <p className="poloska" />
          <div className="size block2 size320" style={{ boxSizing: 'unset' }}>
            <p className="firstH2"> 85% </p>
            <p className="secondP">
              этой категории в силу тяжести своего состояния требуют особого подхода: большего времени усвоения учебного материала,
              иных методов обучения, безбарьерной среды для передвижения. Ни одна школа города не удовлетворяет этим требованиям.
            </p>
          </div>
        </div>
        <div className="blockAboutUs1">
          <div className="block3">
            <p className="Zagalovok">
              КТО МЫ ТАКИЕ?
            </p>
          </div>
          <div className="block4">
            <p className="postP">
              Абсолютное большинство особых детей вынуждены оставаться на домашнем обучении.
              В нашем городе случилось так, что родители детей-инвалидов сами решили бороться с этой проблемой.
              Мы создали Автономную некоммерческую образовательную организацию для детей с ДЦП «Выше радуги»,
              которая прошла официальную регистрацию и имеет расчетный счет.
            </p>
            <button type="button" className="btn">
              <Link to="/" className="allMedia1" />
              ПОДРОБНЕЕ
            </button>
          </div>
        </div>
        <div className="video">
          {/* Решить как будем оставлять видео пока прикручен плеер от ютуба или ниже закоменчена вёрстка для плеера если видео хранится на файлах сервера */}
          {/* <iframe className="video" src="https://www.youtube.com/embed/vnDCpHjEt2g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen /> */}
          <iframe className="video" src="https://www.youtube.com/embed/lQomX2J-PTU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />

          {/* <video width="400" height="300" controls="controls" poster="video/duel.jpg">
            <source src="https://www.youtube.com/watch?v=vnDCpHjEt2g" type='video/ogg; codecs="theora, vorbis"' />
            <source src="https://www.youtube.com/watch?v=vnDCpHjEt2g" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
          </video> */}
        </div>
      </div>
      <div className="BlockProjects">
        {/* Тут будут проекты пока что просто блоками поставил дальше буду мапить с бд */}
        <div className="Projects">
          <p className="NamingProject">
            НАШИ ПРОЕКТЫ
          </p>
          <Link to="projects" className="allProject">
            <p className="viewAllProjectVse">
              Все ➞
            </p>
            <p className="viewAllProjectVseProject">
              Все проекты ➞
            </p>
          </Link>
        </div>
        <div className="secondMainDiv">
          <div className="sideBlock">
            <p className="TitleProject">
              Делай с нами,
              {' '}
              <br />
              делай как мы,
              {' '}
              <br />
              делай лучше нас
            </p>
            <p className="date">
              2022
            </p>
            <Link to="projects" className="more">
              Подробнее ➞
            </Link>
          </div>

          <div className="secondBlockProject">
            <p className="TitleProject">
              Второе дыхание
            </p>
            <p className="date">
              2022
            </p>
            <Link to="projects" className="more">
              Подробнее ➞
            </Link>
          </div>
          <div className="thirdBlockProject">
            <p className="TitleProject">
              Живая вода
            </p>
            <p className="date">
              2022
            </p>
            <Link to="projects" className="more">
              Подробнее ➞
            </Link>
          </div>
          <div className="secondSideBlock">
            <p className="TitleProject">
              Перезагрузка
            </p>
            <p className="date">
              2022
            </p>
            <Link to="projects" className="more">
              Подробнее ➞
            </Link>
          </div>
        </div>
      </div>
      <div className="BlockHelping">
        <div className="howToHelp">
          <div className="BlockTitle">
            <div>

              <p className="help">
                КАК ПОМОЧЬ?
              </p>
            </div>

            <div className="helpingSecondBlock">
              <p className="Title">
                ШКОЛА "ВЫШЕ РАДУГИ" ОТКРОЕТСЯ 1 СЕНТЯБРЯ. А ВОТ В КАКОМ ГОДУ БУДЕТ ЗАВИСЕТЬ ОТ НАС С ВАМИ!
              </p>
              <div className="quatro">
                <div id="move" className="foto" />
                <p id="move" className="BodyTitle">
                  Проект по созданию школы уже одобрен, но чтобы его реализовать нам нужна ваша помощь.
                  Администрация города передела в безвозмездное пользование центру здание бывшего десткого сада.
                  Оно требует восстановления: замены окон, проклдаки новых коммуникаций, перепланировки внутренних помещений,
                  однако поддержать наш проект можно не только финансово.
                </p>
                <button type="button" id="move" className="btnHelp">
                  <Link to="/" className="allMedia" />
                  КАК ПОМОЧЬ
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="BlockFriends1">
        {/* В наших друзьях буду доставать картинки логотипов друзей из бд */}
        <div className="friends">
          <p className="namingFriends">
            НАШИ ДРУЗЬЯ
          </p>
          <Link to="ourFriends" className="allFriends">
            Все друзья ➞
          </Link>
        </div>
        <div className="fotoFriends">

          <Link to="ourFriends">
            <div className="circle">
              <img src="fotoFriends/1600/foto12.jpg" alt="foto" className="firstFriend" />
            </div>
          </Link>

          <Link to="ourFriends">
            <div className="circle">
              <img src="fotoFriends/1600/foto5.jpg" alt="foto" className="secondFriend" />
            </div>
          </Link>

          <Link to="ourFriends">
            <div className="circle">
              <img src="fotoFriends/1600/foto2.png" alt="foto" className="thirdFriend" />
            </div>
          </Link>

          <Link to="ourFriends">
            <div className="circle">
              <img src="fotoFriends/1600/foto19.jpg" alt="foto" className="fourthFriend" />
            </div>
          </Link>

          <Link to="ourFriends">
            <div className="circle size640px">
              <img src="fotoFriends/1600/foto4.png" alt="foto" className="fifthFriend 640px" />
            </div>
          </Link>

          <Link to="ourFriends">
            <div className="circle size640px">
              <img src="fotoFriends/1600/foto14.png" alt="foto" className="sixthFriend size640px" />
            </div>
          </Link>

        </div>
        <Link to="ourFriends">
          <button type="button" className="allFriendsBtn"> ВСЕ ДРУЗЬЯ </button>
        </Link>
      </div>
      <div className="reportsFirstBlock">
        {/* В даннорм разделе будут последние 3 отчёта из бд по новизне */}
        <div className="reports">
          <div className="secondReports">
            <p className="namingReports">
              ОТЧЁТЫ
            </p>
            <Link to="ourFriends" className="allReports">
              <p className="viewAllReportVse">
                Все ➞
              </p>
              <p className="viewAllReportVseReports">
                Все отчёты ➞
              </p>
            </Link>
          </div>

          <div className="secondReports firstBlockReport">
            <div className="blockP">
              <p className="raports">
                622
              </p>
              <p className="rub">
                тыс. руб
              </p>
            </div>
            <p className="TextRep">
              За 2021 год удалось собрать нашему центру на благотворительных акциях
            </p>
          </div>

          <div className="secondReports firstBlockReport">
            <div className="blockP">
              <p className="raports">
                318
              </p>
              <p className="rub">
                тыс. руб
              </p>
            </div>
            <p className="TextRep">
              За 2021 год составили частные пожертвования гражданаского населения
            </p>
          </div>

          <div className="secondReports lastBlockReport">
            <div className="blockP">
              <p className="raports">
                72
              </p>
              <p className="children">
                ребенка
              </p>
            </div>
            <p className="Text">
              С двигательной и ментальной инвалидностью стали постоянными участниками наших проектов
            </p>
            <p className="TextChildren">
              с ДЦП стали постоянными участниками наших проектов
            </p>
          </div>

        </div>
      </div>
      <div className="media">
        {/* Тут будут раздел со СМИ */}
        <div className="titleMedia">
          <p className="mediaNames">
            СМИ О НАС
          </p>
          <Link className="LinkMediaTextMainPage" to="ourFriends">
            <p className="allMedia">
              Читать все статьи ➞
            </p>
            <p className="AllMediaText">
              Все ➞
            </p>
          </Link>
        </div>
        <div className="tableMedia">

          <div className="mediaBlocks">
            <div className="FirstPageCardMedia">
              <div className="firstMedia" />
              <span className="mediaSpan">
                04.08.2020
              </span>
              <p className="textP">
                Рай для шопоголика, тихий палисадник и ангелы: показываем, чем живет Советский район прямо сейчас
              </p>
            </div>
            <div className="SecondPageCardMedia">
              <Link to="ourFriends" className="allMedia">
                Подробнее ➞
              </Link>
            </div>
          </div>

          <div className="mediaBlocks">
            <div className="threeMedia" />
            <span className="mediaSpan">
              14.01.2021
            </span>
            <p className="textP">
              В Самаре открылась инклюзивная детская мастерская
            </p>
            <div className="SecondPageCardMedia">
              <Link to="ourFriends" className="allMedia">
                Подробнее ➞
              </Link>
            </div>
          </div>

          <div className="secondMediaBlock">
            <div className="secondMedia" />
            <p className="secondMediaSpan">
              30.03.2021
            </p>
            <p className="secondText">
              Мастерские «Второе дыхание» — первый проект образовательного центра для детей с ДЦП «Выше радуги»
            </p>
            <div className="SecondPageCardMedia">
              <Link to="ourFriends" className="allMedia">
                Подробнее ➞
              </Link>
            </div>
          </div>

        </div>
      </div>
      <Onas />
    </>
  );
}
