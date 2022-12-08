import './KakPomoch.css';


export default function KakPomoch() {
    return (
        <>
        <div className="nav">
            <img className="nav-logo" src="https://sun9-68.userapi.com/impf/c855220/v855220782/f68b7/4c2hlzYBdmY.jpg?size=551x551&quality=96&sign=72719a562ea0f14ee869214df30decbc&type=album" alt="nav-logo-beaver" />
            <button className="nav-logout" type="button">SignOut</button>
        </div>
        <div className="photo">
                <img className="photo" src="kartinka.png" alt="photo1" />
            </div>
        <div className="photoText">
            <p>ПРОЕКТ "ВТОРОЕ ДЫХАНИЕ"</p>
        </div>
            <button className="button1" >УЧАСТВОВАТЬ</button>
            <div className='container1'> 
        <div className="bottomText1">
            <div/>
            <p>ПРОЕКТ ПОДДЕРЖАН <br/> ФОНДОМ ПРЕЗИДЕНСКИХ ГРАНТОВ </p>
        </div>
        <div className="bottomText2">
            {/* <p>ФОНДОМ ПРЕЗИДЕНСКИХ ГРАНТОВ</p> */}
        </div>
        <div className="data">
            <p>01.03.2022 - 01.05.2022</p>
        </div>
        <div className="celi">
            <p>ЦЕЛИ</p>
        </div>
        <div className="celiText">
            <p>Вовлечение подростков с двигательной и ментальной инвалидностью в жизнь <br/> арт-мастерской, где они под руководством мастеров создают вещи своими <br/> руками. Идея мастерской - делать простые и полезные вещи, которые <br/> пригождаютсяя в быту.</p>
        </div>
        <div className="zadachi">
            <p>ЗАДАЧИ</p>
        </div>
        <div className="zadachiText" >
            <p>Под арт-мастерскую выделено пространство общей площадью 113 кв м. На <br/> постоянной основе, сменяя друг-друга, в мастерской работают четыре мастера: <br/> художник, скульптор, резчик по дереву и специалист по декоративно- <br/> прикладному искусству.</p>
        </div>
        <div/>
        
        <div className='kak' >
            <p>КАК УЧАСТВОВАТЬ?</p>
        </div>
        <div  className='container2'>
            <div className='blok1'>
                <div className='blok1num'>1</div>
                <div className='blok1Text'>Оставьте заявку на сайте, чтобы  мы смогли с вами связаться и добавить в участники </div>
            </div>
             <div className='blok2'>
             <div className='blok2num'>2</div>
                <div className='blok2Text'>За сутки до мероприятия мы вас ещё раз оповестим, чтобы уточнить детали и ваше участие</div>
             </div>
            <div className='blok3'>
            <div className='blok3num'>3</div>
                <div className='blok3Text'>Взять с собой перчатки, воду и небольшой перекус, так как мероприятие на целый день</div>
                </div> 
            <div className='blok4'>
            <div className='blok4num'>4</div>
                <div className='blok4Text'>В назначенный день быть на месте, готовым к участию и одетым по погоде</div>
            </div>
        </div>
        </div>
            </>
    );
}