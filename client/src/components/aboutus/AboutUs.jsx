/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import './aboutus.css';
import Onas from '../../wiews/onas/Onas';

function AboutUs() {
  return (
    <>
      <div>
        <div className="headerAboutus">
          <img className="rainbow-image" src="rainbow.jpg" alt="rainbow" />
          <div className="header-text">
            <h1>КТО МЫ ТАКИЕ?</h1>
            <p>Мы Екатерина Акинцева и Вера Виноградова, мамы с детей с этим непростым диагнозом ДЦП, создатели центра “Выше Радуги”</p>
          </div>
        </div>
        <div className="text-container" style={{ paddingTop: '241px' }}>
          <h1>МЫ ЗНАЕМ О ПРОБЛЕМЕ НЕ ПОНАСЛЫШКЕ</h1>
          <p>Мы верим, что создаваемый Центр сможет изменить судьбу многих детей с инвалидностью. И чтобы реализовать этот проект, нам нужна ваша помощь. Давайте дадим возможность детям жить и радоваться жизни!</p>
        </div>
        <div className="text-container">
          <div className="plug" />
          <div>
            <iframe
              width="600"
              height="400"
              src="http://www.youtube.com/embed/DkaUsBwe0fo"
              frameBorder="0"
              allowfullscreen
            />
          </div>
        </div>
        <div className="text-container" style={{ marginTop: '30px' }}>
          <h1>В ЧЕМ ПРОБЛЕМА</h1>
          <p>Не так часто мы видим детей с ДЦП на улицах, еще реже в группах детского сада или в школьных классах. Это правда, большинстве своем такие дети проводят жизнь в четырех стенах. И не потому, что им так нравится; и не потому, что они не обучаемы; и не потому, что нет перспективы. А просто потому, что перед ними закрывают двери!</p>
        </div>
        <div className="text-container" style={{ marginTop: '30px' }}>
          <img className="car" src="car.jpg" alt="car" />
          {/* <div className="car" /> */}
        </div>
        <div className="text-container" style={{ paddingTop: '30px' }}>
          <h1>НАШЕ МНЕНИЕ</h1>
          <div style={{ textAlign: 'justify', maxWidth: '592px' }}>
            <p style={{ color: 'black' }}>В нашем городе случилось так, что родители детей-инвалидов сами решили бороться с этой проблемой. Причем ни пикетами, ни митингами, ни судами. А созданием собственной школы! Потому что можно и так.</p>
            <div className="wrapped" style={{ marginTop: '30px' }}>
              <div style={{ maxWidth: '285px' }}>
                <p style={{ color: '#474747' }}>
                  Самим получить лицензию на образовательную деятельность, открыть свои классы и посадить за парты своих детей. Тогда те средства, которые государство выделяет школам на обучение детей-инвалидов, будут перенаправлены на их жизнь в новых классах.
                  Для решения этой проблемы мы создали некоммерческую организацию.
                  {' '}

                </p>

              </div>
              <div style={{ maxWidth: '285px' }}>
                <p style={{ color: '#474747' }}>
                  Проект по созданию школы уже одобрен Министерством образования Самарской области. Городские власти передали нам здание по адресу: г. Самара, ул. 22-ого партсъезда, 40 а. Однако, здание необходимо отремонтировать, а также подключить все коммуникации. Друзья, давайте поможем в этом большом и важном деле!
                  {' '}
                </p>

              </div>

            </div>
            <div className="buttonGroup">

              <button className="greenButton" type="button">ПОМОЧЬ СЕЙЧАС</button>
              <Link to="/requisites">
                <a href="#">
                  Посмотреть документы
                  {' '}
                  <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.37114e-07 5C4.24234e-07 5.14732 0.0714878 5.28861 0.198737 5.39278C0.325985 5.49695 0.498572 5.55548 0.678528 5.55548L16.6823 5.55548L12.4116 9.05054C12.3485 9.10219 12.2985 9.1635 12.2644 9.23098C12.2302 9.29846 12.2126 9.37078 12.2126 9.44382C12.2126 9.51686 12.2302 9.58918 12.2644 9.65666C12.2985 9.72414 12.3485 9.78545 12.4116 9.8371C12.4747 9.88874 12.5496 9.92971 12.632 9.95766C12.7145 9.98561 12.8028 10 12.892 10C12.9813 10 13.0696 9.98561 13.152 9.95766C13.2345 9.92971 13.3093 9.88874 13.3724 9.8371L18.8007 5.39328C18.8638 5.34168 18.914 5.28038 18.9482 5.2129C18.9824 5.14541 19 5.07307 19 5C19 4.92694 18.9824 4.85459 18.9482 4.78711C18.914 4.71962 18.8638 4.65832 18.8007 4.60672L13.3724 0.162902C13.3093 0.111256 13.2345 0.0702882 13.152 0.0423379C13.0696 0.0143876 12.9813 1.38117e-06 12.892 1.37337e-06C12.8028 1.36557e-06 12.7145 0.0143875 12.632 0.0423378C12.5496 0.0702881 12.4747 0.111256 12.4116 0.162902C12.3486 0.214548 12.2985 0.275861 12.2644 0.343339C12.2302 0.410818 12.2126 0.483142 12.2126 0.55618C12.2126 0.629219 12.2302 0.701542 12.2644 0.769021C12.2985 0.836501 12.3486 0.897812 12.4116 0.949458L16.6823 4.44452L0.678528 4.44452C0.498572 4.44452 0.325985 4.50304 0.198737 4.60722C0.0714879 4.71139 4.49993e-07 4.85268 4.37114e-07 5Z" fill="black" />
                  </svg>
                </a>
              </Link>
            </div>

          </div>

        </div>

      </div>
      <Onas />
    </>
  );
}

export default AboutUs;
