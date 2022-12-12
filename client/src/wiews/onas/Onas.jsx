import React from 'react';
import './onas.css';

export default function Onas() {
  return (
    <div className="body">
      <div className="content">
        <div id="ov">Остались вопросы? </div>

        <div className="odert">
          <div className="form">

            <div id="cvy">СВЯЖИТЕСЬ С НАМИ</div>
            <form className="in">
              <input className="inp" name="name" placeholder="Имя" />

              <input className="inp" name="phone" placeholder="Телефон" />

              <input className="inp" name="text" placeholder="Напишите нам" />

              <p id="check">
                <input type="checkbox" id="politics" autoComplete="off" />
                Нажимая на кнопку Отправить заявку, я даю согласие на обработку персональных данных и соглашаюсь с политикой конфиденциальности.

              </p>
              <p id="ppp"><button id="butsub" type="submit">Отправить</button></p>
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
                    <a href="https://vk.com/above_rainbow_samara"><img className="ots" src="./ico/vk.svg" alt="foto" /></a>
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
