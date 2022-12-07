import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

export default function Main() {
  return (
    <div>
      <div>
        <img className='img' src='https://vogazeta.ru/uploads/full_size_1586160873-8696a7b28ed1bc0a2f4f5f27a5e94c26.jpg' alt='foto' />
      </div>
      <div className='Performance'>
        <h1>
          Заголовок
        </h1>
        <p className='mainFirstP'>
          Какой либо очень длинный текст поста накручу стили чуть позже 
        </p>
      </div>
      <div className='firstBlock BlockAboutUs'>
        <div className='size block1'>
          <h2 className='firstH2'> 15% </h2>
          <p className='secondP'>
          пипец какой длинный текст ыыыыыыыыы либо очень длинный текст поста накручу стили чуть позже 
          </p>
        </div>
        <p className='poloska' />
        <div className='size block2'>
          <h2 className='firstH2'> 85% </h2>
          <p className='secondP'>
          Ахуеть какой длинный текст еееееееееееееееееееееххххххххххххххх либо очень длинный текст поста накручу стили чуть позже 
          </p>
        </div>
        <div className='block3'>
          <h1 className='Zagalovok'>
            КТО МЫ ТАКИЕ?
          </h1>
        </div>
        <div className='block4'>
          <p>
            Тут будет длинной описание от самой организаци чем занимаются и прочее прочее и так далее
          </p>
          <button className='btn'>
            Подробнее
          </button>
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
          <div className='id'>
            <p>
              Очень длинное Название проекта
            </p>
            <p className='date'>
              2022
            </p>
            <Link to='projects' className='more'>
              Подробнее ➞
            </Link>
          </div>
          
          <div className='id'>
            <p>
              Очень длинное Название проекта
            </p>
            <p className='date'>
              2022
            </p>
            <Link to='projects' className='more'>
              Подробнее ➞
            </Link>
          </div>
          <div className='id'>
            <p>
              Очень длинное Название проекта
            </p>
            <p className='date'>
              2022
            </p>
            <Link to='projects' className='more'>
              Подробнее ➞
            </Link>
          </div>
          <div className='id'>
            <p>
              Очень длинное Название проекта
            </p>
            <p className='date'>
              2022
            </p>
            <Link to='projects' className='more'>
              Подробнее ➞
            </Link>
          </div>
          <div className='id'>
            <p>
              Очень длинное Название проекта
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
        <p className='help'>
          КАК ПОМОЧЬ?
        </p>
        <div className='BlockTitle'>
        <p className='Title'>
          ШКОЛА "ВЫШЕ РАДУГИ" ОТКРОЕТСЯ 1 СЕНТЯБРЯ. А ВОТ В КАКОМ ГОДУ БУДЕТ ЗАВИСЕТЬ ОТ НАС С ВАМИ!
        </p>
        <img className='foto' src='https://static.mk.ru/upload/entities/2022/10/07/07/articles/facebookPicture/0a/6b/d0/26/85d7266be24419958e5e803781c50d71.jpg' alt='foto' />
        <p className='Title'>
          Проект по созданию школы уже одобрен, но чтобы его реализовать нам нужна ваша помощь. 
          Администрация города передела в безвозмездное пользование центру здание бывшего десткого сада.
          Оно требует восстановления: замены окон, проклдаки новых коммуникаций, перепланировки внутренних помещений, 
          однако поддержать наш проект можно не только финансово.
        </p>
        <button className='btnHelp'>
          Как помочь
        </button>
        </div>
        </div>
      </div>
      <div className='BlockFriends'>
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
          <img src='https://avatars.mds.yandex.net/get-images-cbir/6452924/PFSr-acM9WL_tAtQ7ZVqiw588/ocr' alt='foto' />
          <img src='https://avatars.mds.yandex.net/get-images-cbir/6452924/PFSr-acM9WL_tAtQ7ZVqiw588/ocr' alt='foto' />
          <img src='https://avatars.mds.yandex.net/get-images-cbir/6452924/PFSr-acM9WL_tAtQ7ZVqiw588/ocr' alt='foto' />
          <img src='https://avatars.mds.yandex.net/get-images-cbir/6452924/PFSr-acM9WL_tAtQ7ZVqiw588/ocr' alt='foto' />
          <img src='https://avatars.mds.yandex.net/get-images-cbir/6452924/PFSr-acM9WL_tAtQ7ZVqiw588/ocr' alt='foto' />
          <img src='https://avatars.mds.yandex.net/get-images-cbir/6452924/PFSr-acM9WL_tAtQ7ZVqiw588/ocr' alt='foto' />
        </div>
      </div>
      <div>
      <div className='reports'> 

      <div />

      <div className='secondReports'>
        <p className='namingReports'>
          ОТЧЁТЫ
        </p>
        <Link to='ourFriends' className='allReports'>
          Все отчёты ➞
        </Link>
      </div>
      <div />

        </div>
      </div>

      <div>
        132
      </div>
    </div>
  )
}
