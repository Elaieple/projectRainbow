import React from 'react';
import './Spasibo.css';

export default function Spasibo() {
    return (
        <><div className="allaaa">
            <div className="containerFirstt">
                <div className="child">
                    <img src="kartinka3.png" alt="photo3" />
                </div>
                <div className='rose' ><img src="kartinka4.png" alt="photo4" /></div>
            </div>
            <div className="containerSecondd">
                <div className='Texd1'>СПАСИБО
                    {' '}
                    <br />
                    {' '}
                    ЗА ПОЖЕРТВОВАНИЕ</div>
                <div className="Texd2">Вместе мы сможем изменить жизнь
                    {' '}
                    <br />
                    {' '}
                    детей с ДЦП к лучшему!
                </div>
                <button className="FourButton">ВЕРНУТЬСЯ НА САЙТ</button>
            </div>
        </div>
        </>
    );
}