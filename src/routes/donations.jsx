
export default function Donations() {
    return (
        <body>
        <div className="overlay"></div>


        <div className="body s-gallery">
            <header className="header">
                <div className="header__wrap">

                    <nav className="nav">

                    </nav>

                    <div className="mob-nav">

                        <div className="header__logo-wrap">
                            <a href="#">
                                <img src="/img/heart.svg" alt="" />
                            </a>

                            <a href="#">
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

                        <a href="#">
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
            <section className="donations">
                <div className="container">

                    <div className="donations__wrap">

                        <div className="donations__title">
                            <p>
                                Делая пожертвование на работу этой программы, вы помогает обустроить дом для
                                детей-сирот, приезжающих в Москву на лечении.
                            </p>

                            <div className="donations__icons">

                                <div className="donations__icons-item">
                                    <div className="donations__icons-img">
                                        <img src="/img/donations__icon-1.svg" alt="" />
                                    </div>
                                    <span>
                    Сделайте пожертвование
                  </span>
                                </div>

                                <div className="donations__icons-item">
                                    <div className="donations__icons-img"><img src="/img/donations__icon-2.svg" alt="" />
                                    </div>
                                    <span>
                    Загрузите свою фотографию
                  </span>
                                </div>

                                <div className="donations__icons-item">
                                    <div className="donations__icons-img"><img src="/img/donations__icon-3.svg" alt="" />
                                    </div>
                                    <span>
                    Поделитесь в соц. сетях
                  </span>
                                </div>

                            </div>

                            <div className="helped">
                                Уже помогли
                            </div>

                        </div>
                        <div className="donations__form">
                            <h1 className="section__title">
                                Сделать пожертвование
                            </h1>

                            <form id="donations" className="donations__form-wrap">

                                <div className="donations__money-wrap">

                                    <div className="donations__money-item">

                                        <input className="custom-radio" name="money" type="radio" id="50" />

                                            <label htmlFor="50"><span>50 ₽</span></label></div>

                                    <div className="donations__money-item">

                                        <input className="custom-radio" name="money" type="radio" id="100" />

                                            <label htmlFor="100"><span>100 ₽</span></label>

                                    </div>

                                    <div className="donations__money-item">

                                        <input className="custom-radio" name="money" type="radio" id="500" />

                                            <label htmlFor="500"><span>500 ₽</span></label>

                                    </div>

                                </div>


                                <div className="input__wrap">
                                    <label className="input">
                                        <input id="sum" name="sum" type="text" placeholder="Другая сумма" />
                                    </label>
                                </div>

                                <div className="input__wrap">
                                    <label className="input">
                                        <input id="name" name="name" type="text"
                                               placeholder="Имя, кого нам благодарить?" />
                                    </label>
                                </div>

                                <div className="input__wrap">
                                    <label className="input">
                                        <input id="mail" name="mail" type="text" placeholder="Email" />
                                    </label>
                                </div>


                                <div className='checkbox__wrap'>
                                    <input type="checkbox" checked="checked" className="custom-checkbox" id="yes"
                                           name="yes" value="yes" />
                                        <label
                                            htmlFor="yes"><span>Я ознакомился с условия публичной оферты</span></label>
                                </div>

                                <div className='checkbox__wrap'>
                                    <input type="checkbox" checked="checked" className="custom-checkbox" id="approval"
                                           name="approval" value="approval" />
                                        <label htmlFor="approval"><span>Даю согласие на обработку моих персональных данных</span></label>
                                </div>

                                <div className="button__wrap">
                                    <button className="btn">Пожертвовать</button>

                                    <div className="card__wrap">
                                        <img src="/img/card-1.svg" alt="" />
                                            <img src="/img/card-2.svg" alt="" />
                                                <img src="/img/card-3.svg" alt="" />
                                    </div>

                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </section>
            <section className="gallery">
                <div className="container">

                    <h2>Помогли Дому для жизни и поддержали акцию «Щедрый вторник»</h2>

                    <div className="gallery__wrap">

                        <a data-fancybox="gallery" href="/img/img.jpg" data-width="260" data-height="280">
                            <img src="/img/img.jpg" />
                        </a>

                        <a data-fancybox="gallery" href="/img/img.jpg" data-width="260" data-height="280">
                            <img src="/img/img.jpg" />
                        </a>

                        <a data-fancybox="gallery" href="/img/img.jpg" data-width="260" data-height="280">
                            <img src="/img/img.jpg" />
                        </a>

                        <a data-fancybox="gallery" href="/img/img.jpg" data-width="260" data-height="280">
                            <img src="/img/img.jpg" />
                        </a>

                        <a data-fancybox="gallery" href="/img/img.jpg" data-width="260" data-height="280">
                            <img src="/img/img.jpg" />
                        </a>

                        <a data-fancybox="gallery" href="/img/img.jpg" data-width="260" data-height="280">
                            <img src="/img/img.jpg" />
                        </a>

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
                    Что такое<br/>
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