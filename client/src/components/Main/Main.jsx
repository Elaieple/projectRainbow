import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

export default function Main() {
  return (
    <>
      <>
        <img className='img' src='foto1.png' alt='foto' />
      </>
      <div className='Performance'>
        <p className='zagalovok'>
          ВЫШЕ РАДУГИ
        </p>
        <p className='mainFirstP'>
        АНОО “КОМПЛЕКСНЫЙ ОБЩЕОБРАЗОВАТЕЛЬНЫЙ ЦЕНТР ДЛЯ ДЕТЕЙ С ДЦП
        </p>
      </div>
      <div className='firstBlock BlockAboutUs'>
        <div className='blockProcent'>
          <div className='size block1'>
            <p className='firstH2'> 15% </p>
            <p className='secondP'>
              детей с ДЦП в Самарской области могут посещать общеобразовательные учреждения.
              Это дети с минимальными нарушениями, способные наравне со здоровыми сверстниками осваивать образовательные программы.
            </p>
          </div>
          <p className='poloska' />
         <div className='size block2'>
            <p className='firstH2'> 85% </p>
            <p className='secondP'>
              этой категории в силу тяжести своего состояния требуют особого подхода: большего времени усвоения учебного материала, 
              иных методов обучения, безбарьерной среды для передвижения. Ни одна школа города не удовлетворяет этим требованиям.
            </p>
          </div>
        </div>
        <div className='blockAboutUs1'>
          <div className='block3'>
            <p className='Zagalovok'>
              КТО МЫ ТАКИЕ?
            </p>
          </div>
          <div className='block4'>
            <p className='postP'>
              Абсолютное большинство особых детей вынуждены оставаться на домашнем обучении.
              В нашем городе случилось так, что родители детей-инвалидов сами решили бороться с этой проблемой. 
              Мы создали Автономную некоммерческую образовательную организацию для детей с ДЦП «Выше радуги», 
              которая прошла официальную регистрацию и имеет расчетный счет.
            </p>
            <button className='btn'>
              <Link to='/' className='allMedia'>
                Подробнее
              </Link>
            </button>
          </div>
        </div>
        <div className='video'>
          {/* Решить как будем оставлять видео пока прикручен плеер от ютуба или ниже закоменчена вёрстка для плеера если видео хранится на файлах сервера */}
        <iframe width="500" height="400" src="https://www.youtube.com/embed/vnDCpHjEt2g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          {/* <video width="400" height="300" controls="controls" poster="video/duel.jpg">
            <source src="https://www.youtube.com/watch?v=vnDCpHjEt2g" type='video/ogg; codecs="theora, vorbis"' />
            <source src="https://www.youtube.com/watch?v=vnDCpHjEt2g" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
          </video> */}
        </div>
      </div>
      <div className='BlockProjects'>
        {/* Тут будут проекты пока что просто блоками поставил дальше буду мапить с бд */}
        <div className='Projects'> 
        <p className='NamingProject'>
          НАШИ ПРОЕКТЫ
        </p>
        <Link to='projects' className='allProject'>
          Все проекты ➞
        </Link>
        </div>
        <div className='secondMainDiv'>
          <div className='sideBlock'>
            <p className='TitleProject'>
              Делай с нами, <br />
              делай как мы, <br />
              делай лучше нас
            </p>
            <p className='date'>
              2022
            </p>
            <Link to='projects' className='more'>
              Подробнее ➞
            </Link>
          </div>
          
          <div className='secondBlockProject'>
            <p className='TitleProject'>
              Второе дыхание
            </p>
            <p className='date'>
              2022
            </p>
            <Link to='projects' className='more'>
              Подробнее ➞
            </Link>
          </div>
          <div className='thirdBlockProject'>
            <p className='TitleProject'>
              Живая вода
            </p>
            <p className='date'>
              2022
            </p>
            <Link to='projects' className='more'>
              Подробнее ➞
            </Link>
          </div>
          <div className='secondSideBlock'>
            <p className='TitleProject'>
              Перезагрузка
            </p>
            <p className='date'>
              2022
            </p>
            <Link to='projects' className='more'>
              Подробнее ➞
            </Link>
          </div>
        </div>
      </div>
      <div className='BlockHelping'>
      <div className='howToHelp'> 
        <div className='BlockTitle'>
        <p className='help'>
          КАК ПОМОЧЬ?
        </p>
        <p className='Title'>
          ШКОЛА "ВЫШЕ РАДУГИ" ОТКРОЕТСЯ 1 СЕНТЯБРЯ. А ВОТ В КАКОМ ГОДУ БУДЕТ ЗАВИСЕТЬ ОТ НАС С ВАМИ!
        </p>
        <div className='quatro'>
        <div id='move' className='foto' />
        <p  id='move' className='BodyTitle'>
          Проект по созданию школы уже одобрен, но чтобы его реализовать нам нужна ваша помощь. 
          Администрация города передела в безвозмездное пользование центру здание бывшего десткого сада.
          Оно требует восстановления: замены окон, проклдаки новых коммуникаций, перепланировки внутренних помещений, 
          однако поддержать наш проект можно не только финансово.
        </p>
        <button id='move' className='btnHelp'>
          <Link to='/' className='allMedia'>
            Как помочь
          </Link>
        </button>
        </div>
        </div>
        </div>
      </div>
      <div className='BlockFriends1'>
        {/* В наших друзьях буду доставать картинки логотипов друзей из бд*/}
      <div className='friends'> 
        <p className='namingFriends'>
          НАШИ ДРУЗЬЯ
        </p>
        <Link to='ourFriends' className='allFriends'>
          Все друзья ➞
        </Link>
        </div>
        <div className='fotoFriends'>

            <div className='circle'>
              <div className='firstFriend' />
            </div>

            <div className='circle'>
              <div className='secondFriend' />
            </div>

            <div className='circle'>
              <div className='thirdFriend' />
            </div>

            <div className='circle'>
              <div className='fourthFriend' />
            </div>

            <div className='circle'>
              <div className='fifthFriend' />
            </div>

            <div className='circle'>
              <div className='sixthFriend' />
            </div>

        </div>
      </div>
      <div className='reportsFirstBlock'>
        {/* В даннорм разделе будут последние 3 отчёта из бд по новизне */}
      <div className='reports'> 
      <div className='secondReports'>
        <p className='namingReports'>
          ОТЧЁТЫ
        </p>
        <Link to='ourFriends' className='allReports'>
          Все отчёты ➞
        </Link>
      </div>
      
      <div className='secondReports'>
        <div className='blockP'>
        <p className='raports'>
          622
        </p>
        <p className='rub'>
        тыс. руб
        </p>
        </div>
        <p className='Text'>
          За 2021 год удалось собрать нашему центру на благотворительных акциях
        </p>
      </div>

      <div className='secondReports'>
        <div className='blockP'>
        <p className='raports'>
          318
        </p>
        <p className='rub'>
        тыс. руб
        </p>
        </div>
        <p className='Text'>
          За 2021 год составили частные пожертвования гражданаского населения
        </p>
      </div>

      <div className='secondReports'>
        <div className='blockP'>
        <p className='raports'>
          72
        </p>
        <p className='children'>
        ребенка
        </p>
        </div>
        <p className='Text'>
          С двигательной и ментальной инвалидностью стали постоянными участниками наших проектов
        </p>
      </div>

        </div>
      </div>
      <div className='media'>
        {/* Тут будут раздел со СМИ */}
        <div className='titleMedia'> 
        <p className='mediaNames'>
          СМИ О НАС
        </p>
        <Link to='ourFriends' className='allMedia'>
          Читать все статьи ➞
        </Link>
        </div>
        <div className='tableMedia'>
          
          <div className='mediaBlocks'>
            <div className='FirstPageCardMedia'>
            <div className='firstMedia' />
              <span className='mediaSpan'>
                04.08.2020
              </span>
              <p className='textP'>
                Рай для шопоголика, тихий палисадник и ангелы: показываем, чем живет Советский район прямо сейчас
              </p>
            </div>
            <div className='SecondPageCardMedia'>
            <Link to='ourFriends' className='allMedia'>
              Подробнее ➞
            </Link>
            </div>
          </div>

          <div className='mediaBlocks'>
          <div className='threeMedia' />
            <span className='mediaSpan'>
              14.01.2021
            </span>
            <p className='textP'>
              В Самаре открылась инклюзивная детская мастерская
            </p>
            <div className='SecondPageCardMedia'>
            <Link to='ourFriends' className='allMedia'>
              Подробнее ➞
            </Link>
            </div>
          </div>

          <div className='secondMediaBlock'>
            <div className='secondMedia' />
            <p className='secondMediaSpan'>
              30.03.2021
            </p>
            <p className='secondText'>
              Мастерские «Второе дыхание» — первый проект образовательного центра для детей с ДЦП «Выше радуги»
            </p>
            <div className='SecondPageCardMedia'>
            <Link to='ourFriends' className='allMedia'>
              Подробнее ➞
            </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
