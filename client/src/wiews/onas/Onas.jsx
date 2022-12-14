import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './onas.css';

export default function Onas() {
  const [accept, setAccept] = useState(false);
  const [show, setShow] = useState(false);

  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const USER_ID = process.env.REACT_APP_USER_ID;

  const sendEmail = (e) => {
    e.preventDefault();
    // emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
    //   .then((result) => {
    //     console.log(result.text);
    //   }, (error) => {
    //     console.log(error.text);
    //   });
    // e.target.reset();
    setShow(!show);
  };

  return (
    <div className="body">
      <div className="content">

        <div className="odert">
          <div className={show ? 'feedBack' : 'closedOnas'}>
            <h1 id="cvy">
              СПАСИБО!
            </h1>
            <p>Мы получили ваше сообщение и ответим на него в ближайшее время!</p>
            <p>Сделали ошибку?</p>
            <button type="button" id="butsub" onClick={() => { setShow(!show); }}>Отправить снова</button>
          </div>
          <div className={show ? 'closedOnas' : 'form'}>

            <div id="ov">Остались вопросы? </div>
            <div id="cvy">СВЯЖИТЕСЬ С НАМИ</div>

            <form className="in" onSubmit={sendEmail}>
              <input className="inp" name="name" placeholder="Имя" />

              <input className="inp" name="phone" placeholder="Телефон" />

              <input className="inp" name="message" placeholder="Напишите нам" />

              <p id="check">
                <input type="checkbox" id="politics" autoComplete="off" onChange={() => setAccept(!accept)} />
                Нажимая на кнопку Отправить заявку, я даю согласие на обработку персональных данных и соглашаюсь с политикой конфиденциальности.

              </p>
              <p id="ppp"><button id={accept ? 'butsub' : 'disactivebtn'} type="submit" disabled={!accept}>Отправить</button></p>
            </form>
          </div>
          <div className="or">
            <div className="nav1">
              <div className="sooo">
                <div>
                  <h3 className="ttt">Контакты</h3>
                  <p className="ooo">+79277876389</p>
                  <p className="ooo">above_rainbow@mail.ru</p>
                  <div className="image">
                    <img style={{ width: '31px', marginBottom: '-6px' }} src="./ico/tw.svg" alt="foto" />
                    <img className="ots" src="./ico/ig.svg" alt="foto" />
                    <img className="ots" src="./ico/fb.svg" alt="foto" />
                    <a href="https://vk.com/above_rainbow_samara" target="_blank" rel="noreferrer"><img className="ots" src="./ico/vk.svg" alt="foto" /></a>
                  </div>
                  <div className="eee">
                    <h3 className="ttt">Адрес</h3>
                    <div className="ooo">443081, г. Самара, ул. Стара Загора, д. 56, кв. 11</div>
                  </div>
                </div>
              </div>
              <div className="n">
                Условия использования персональных данных
                Политика соглашения
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
