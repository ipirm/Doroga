import { Link } from "react-router-dom";

export default function Share() {
    return (
        <body>
        <div className="overlay"></div>


        <div className="body">
            <header className="header">
                <div className="header__wrap">

                    <nav className="nav">

                    </nav>

                    <div className="mob-nav">

                        <div className="header__logo-wrap">
                            <Link to="/">
                                <img src="/img/heart.svg" alt="" />
                            </Link>

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
                        <Link to="/">
                            <img src="/img/heart.svg" alt="" />
                        </Link>

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
            <section className="share">
                <div className="container">

                    <div className="container">

                        <div className="share__wrap">

                            <div className="share__img share__img-pc">

                                <ul className="share__company">
                                    <li>
                                        <img src="/img/share__heart.png" alt="" />
                                    </li>

                                    <li>
                                        <img src="/img/logo.svg" alt="" />
                                    </li>

                                    <li>
                                        <img src="/img/heart.svg" alt="" />
                                            <span>#ЩедрыйВторник</span>
                                    </li>

                                </ul>

                            </div>
                            <div className="share__title">
                                <h1 className="section__title">
                                    Расскажите друзьям о Щедром вторнике
                                </h1>
                                <p>
                                    Поделитесь ссылкой на сайт в социальных сетях, чтобы больше людей узнали об акции
                                </p>
                                <div className="share__img share__img-mob">
                                    <ul className="share__company">
                                        <li>
                                            <img src="/img/share__heart.png" alt="" />
                                        </li>

                                        <li>
                                            <img src="/img/logo.svg" alt="" />
                                        </li>

                                        <li>
                                            <img src="/img/heart.svg" alt="" />
                                                <span>#ЩедрыйВторник</span>
                                        </li>

                                    </ul>

                                </div>
                                <div className="share__social">

                                    <a href="#">
                                        <img src="/img/vk.svg" alt="" />
                                    </a>

                                    <a href="#">
                                        <img src="/img/fa.svg" alt="" />
                                    </a>

                                    <a href="#">
                                        <img src="/img/twit.svg" alt="" />
                                    </a>

                                    <a href="#">
                                        <img src="/img/ok.svg" alt="" />
                                    </a>

                                </div>

                                <div className="main__btn-wrap">
                                    <Link className="btn" to="/">Загрузить</Link>

                                    <a className="miss" href="#">Пропустить</a>
                                </div>

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

                    <a data-fancybox="gallery" href="/img/img.jpg" data-width="260" data-height="280"><img
                        src="/img/img.jpg" /></a>

                    <a data-fancybox="gallery" href="/img/img.jpg" data-width="260" data-height="280"><img
                        src="/img/img.jpg" /></a>

                    <a data-fancybox="gallery" href="/img/img.jpg" data-width="260" data-height="280"><img
                        src="/img/img.jpg" /></a>

                </div>

            </div>

        </div>
        </body>
    );
}