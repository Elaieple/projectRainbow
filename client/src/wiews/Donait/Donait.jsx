import React from 'react';
import './donait.css';
import Onas from '../onas/Onas';

export default function New() {
  return (
    <div className="str">
      <div className="contain">
        <div className="conttitle">
          <div className="titl">
            КАК СДЕЛАТЬ
            ПОЖЕРТВОВАНИЕ
          </div>
          <div className="contlit">
            Регулярные платежи позволяют планировать работу, поэтому 100 рублей каждый месяц лучше, чем один раз в год 1200.

            Подписаться на регулярные платежи очень легко: для этого при совершении платежа просто выбирайте опцию «Ежемесячные пожертвования».
          </div>
        </div>
        <div className="imgnav">
          <img src="./ico/gggg.png" alt="imgerr" />
        </div>

        <div className="doninfo">
          По всем вопросам о платежах обращайтесь по электронной почте:  above_rainbow@mail.ru

          Все платежи проходят через защищённую систему
          (подробно о безопасности).

          Правила возврата платежей можно прочитать здесь.
        </div>
      </div>
      <Onas />
    </div>
  );
}
