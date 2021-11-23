import {Link} from "react-router-dom";
export default function App() {

    return (
        <div>
            <body>
            <div className="body">
                <header className="header">
                    <div className="header__wrap">
                        <nav className="nav">
                        </nav>
                        <div className="mob-nav">
                            <div className="header__logo-wrap">
                                <a href="#">
                                    <img src="/img/heart.svg" alt="" />
                                </a>

                                <a href="https://doroga-zhizni.org/" target="_blank">
                                    <img src="/img/logo.svg" alt="" />
                                </a>

                                <a href="#" className="logo-house">
                                    <img src="/img/hous.svg" alt="" />
                                </a>
                            </div>

                            <div className="header__left">
                                <a href="#popup">
                                    Что такое
                                    <span>#ЩедрыйВторник?</span>
                                </a>
                            </div>

                            <div className="header__right">
                                <a href="tel:+74993817975" className="header__phone">+7 499 381 79 75</a>

                                <a href="mailto:fond@doroga-zhizni.org" className="header__mail">fond@doroga-zhizni.org</a>
                            </div>
                        </div>

                        <div className="header__left">
                            <a href="#popup">
                                Что такое
                                <span>#ЩедрыйВторник?</span>
                            </a>
                        </div>

                        <div className="header__logo-wrap">
                            <a href="#">
                                <img src="/img/heart.svg" alt="" />
                            </a>

                            <a href="https://doroga-zhizni.org/" target="_blank">
                                <img src="/img/logo.svg" alt="" />
                            </a>

                            <a href="#" className="logo-house">
                                <img src="/img/hous.svg" alt="" />
                            </a>
                        </div>

                        <div className="header__right">
                            <a href="tel:+74993817975" className="header__phone">+7 499 381 79 75</a>

                            <a href="mailto:fond@doroga-zhizni.org" className="header__mail">fond@doroga-zhizni.org</a>
                        </div>

                    </div>
                </header>
                <section className="main">
                    <div className="container">

                        <div className="main__wrap">
                            <div className="main__content">

                                <h1>Дом для жизни</h1>

                                <p>
                                    Вместе создаём дом для детей-сирот, приезжающих в Москву на лечение и реабилитацию
                                </p>

                                <div className="money">
                                    Нам нужно собрать 3 000 000 рублей
                                </div>

                                <div className="progress">
                                    <progress max="100" value="30"></progress>
                                    <div className="progress-value">Уже собрали 352 390 рублей на</div>
                                    <div className="progress-bg">
                                        <div className="progress-bar"></div>
                                    </div>
                                </div>

                                <div className="main__content-icons">

                                    <div className="main__content-item">
                                        <div className="main__content-img">
                                            <img src="/img/main__icon-1.svg" alt="" />
                                        </div>
                                        <span>Питание</span>
                                    </div>

                                    <div className="main__content-item">
                                        <div className="main__content-img"><img src="/img/main__icon-2.svg" alt="" /></div>
                                        <span>Обучение</span>
                                    </div>

                                    <div className="main__content-item">
                                        <div className="main__content-img"><img src="/img/main__icon-3.svg" alt="" /></div>
                                        <span>Аренда</span>
                                    </div>

                                    <div className="main__content-item">
                                        <div className="main__content-img"><img src="/img/main__icon-4.svg" alt="" /></div>
                                        <span>Бытовая химия</span>
                                    </div>

                                    <div className="main__content-item">
                                        <div className="main__content-img"><img src="/img/main__icon-5.svg" alt="" /></div>
                                        <span>Медицинское
                    сопровождение</span>
                                    </div>

                                    <div className="main__content-item main__content-item-green">
                                        <div className="main__content-img"><img src="/img/main__icon-6.svg" alt="" /></div>
                                        <span>Коммунальные
                    услуги</span>
                                    </div>

                                    <div className="main__content-item">
                                        <div className="main__content-img"><img src="/img/main__icon-7.svg" alt="" /></div>
                                        <span>Одежда<br/> и белье</span>
                                    </div>

                                </div>

                                <div className="main__btn-wrap">
                                    <Link className="btn" to="/donations">Присоединиться</Link>

                                    <a className="details" href="#popup__home">ПОДРОБНЕЕ О ДОМЕ ДЛЯ ЖИЗНИ</a>
                                </div>


                            </div>
                        </div>

                    </div>
                </section>
                <footer className="footer">
                    <div className="footer__wrap">

                        <p className="copyright">
                            Публичная оферта о добровольном пожертвовании
                            <span>© «Дорога Жизни» 2021 г.</span>
                        </p>

                    </div>
                </footer>
            </div>

            <div className="hidden">

                <div id="popup" className="popup__wrap">

                    <h2>
                        Что такое<br />
                        #ЩедрыйВторник?
                    </h2>

                    <p>
                        #ЩедрыйВторник — это Международный
                        день благотворительности, который проходит более чем в 100 странах мира с 2012 года.
                    </p>

                    <p>
                        В этот день миллионы людей объединяются для того, чтобы участвовать в благотворительных акциях и
                        рассказывать об этом в соцсетях. Потому что важно не только оказывать помощь, но и делиться с
                        окружающими информацией о том, какое это хорошее и нужное дело.
                    </p>

                    <p>
                        Давайте делать добрые дела <span>вместе и вслух!</span>
                    </p>


                </div>

                <div id="popup__home" className="popup__home">

                    <div className="popup__home-wrap">
                        <img className="popup__logo" src="/img/hous.svg" alt="" />

                        <div className="popup__home-title">
                            <h2>Дом для жизни —</h2>

                            <p className="color-green">
                                это настоящий Дом для тех, у кого никогда не было своего дома. Здесь дети-сироты из
                                разных регионов России живут, пока проходят лечение и последующую реабилитацию в Москве.
                            </p>

                            <p>
                                «Дом для жизни» — это проект фонда «Дорога жизни». Здесь всё сделано для удобства детей
                                с особенностями здоровья: в нем есть пандусы, большие комнаты для игр, процедурная и
                                помещение для лечебного массажа.
                            </p>

                            <span>
              Но самое главное — этот Дом сделан нами с любовью.
            </span>
                        </div>

                    </div>

                    <div className="popup__home-img">
                        { (() => {
                            const imgs = []

                            for (let i = 0; i < 44; i++) {
                                imgs.push(<a data-fancybox="gallery" href={`/img/donate/img (${i+1}).jpg`} data-width="260" data-height="280"><img
                                   className="gallery-image" src={`/img/donate/img (${i+1}).jpg`}/></a>)
                            }
                            return imgs
                        })()}
                    </div>
                </div>
            </div>
            </body>
        </div>
    );
}

