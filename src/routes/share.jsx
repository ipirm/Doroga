import {Link, Navigate, useLocation} from "react-router-dom";
import {useEffect, useMemo, useRef, useState} from "react";
import axios from "axios";
import {useSnackbar} from "notistack";
import * as htmlToImage from "html-to-image";

export default function Share() {
    const [imageUrl, setImageUrl] = useState(null)
    const [redirectToIndex, setRedirectToIndex] = useState(false)
    const { search } = useLocation()
    const { enqueueSnackbar } = useSnackbar()
    const [imageBase, setImageBase] = useState(null)

    const onLoadImageError = (e) => {
        if (e)
            console.error(e)

        enqueueSnackbar('Такого победителя не существует :(', {
            variant: 'error'
        })
        setRedirectToIndex(true)
    }

    useEffect(() => {
        (async () => {
            const queryString = require('query-string')

            const query = queryString.parse(search);

            if (!query.id) {
                onLoadImageError()
            } else {
                await axios.get(`/image/${query.id}`).then(res => {
                    setImageUrl(res.data.result.url)

                    htmlToImage.toJpeg(window.innerWidth <= 1200 ? imageMobRef?.current : imageRef?.current, { quality: 0.95 })
                      .then(function (dataUrl) {
                          const formData = new FormData()
                          formData.append('base64', dataUrl)
                          axios.post('/image/social', formData)
                            .then(res => {
                                setImageBase(res.data.result?.base64)
                            })
                      })
                }).catch(e => {
                    onLoadImageError(e)
                })
            }
        })()
    }, [])

    const imageRef = useRef(null)
    const imageMobRef = useRef(null)

    const onDownload = () => {
        htmlToImage.toJpeg(window.innerWidth <= 1200 ? imageMobRef?.current : imageRef?.current, { quality: 0.95 })
          .then(function (dataUrl) {
              const link = document.createElement('a');
              link.download = 'wedriy-vtornik.jpeg';
              link.href = dataUrl;
              link.style.display = 'none';
              link.click();
          })
    }

    return (
        <body>
        { redirectToIndex ? <Navigate to={'/'} /> : null }

        <div className="overlay"></div>

        <div className="body">
            <header className="header">
                <div className="header__wrap">

                    <nav className="nav">

                    </nav>

                    <div className="mob-nav">

                        <div className="header__logo-wrap">
                            <a target="_blank" href="https://givingtuesday.ru/">
                                <img src="/img/heart.svg" alt="" />
                            </a>

                            <a href="https://doroga-zhizni.org/" target="_blank">
                                <img src="/img/logo.svg" alt="" />
                            </a>

                            <Link to="/" className="logo-house">
                                <img src="/img/hous.svg" alt="" />
                            </Link>
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
                        <a target="_blank" href="https://givingtuesday.ru/">
                            <img src="/img/heart.svg" alt="" />
                        </a>

                        <a href="https://doroga-zhizni.org/" target="_blank">
                            <img src="/img/logo.svg" alt="" />
                        </a>

                        <Link to="/" className="logo-house">
                            <img src="/img/hous.svg" alt="" />
                        </Link>
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

                            <div className="share__img share__img-pc" ref={imageRef}>
                                <div className="share__img-container">
                                    <img className="share__img-el" src={imageUrl} alt=""/>
                                    <img className="share__mask" src="/img/mask.png" alt="#"/>
                                </div>
                            </div>
                            <div className="share__title">
                                <h1 className="section__title">
                                    Расскажите друзьям о Щедром вторнике
                                </h1>
                                <p>
                                    Поделитесь ссылкой на сайт в социальных сетях, чтобы больше людей узнали об акции
                                </p>
                                <div className="share__img share__img-mob" ref={imageMobRef}>
                                    <div className="share__img-container">
                                        <img className="share__img-el" src={imageUrl} alt=""/>
                                        <img className="share__mask" src="/img/mask.png" alt="#"/>
                                    </div>
                                </div>
                                <div className="share__social">
                                    <a href={`https://vk.com/share.php?url=${imageBase}%3Fmethod%3DShare`}>
                                        <img src="/img/vk.svg" alt="" />
                                    </a>
                                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${imageBase};src=${imageBase}`}>
                                        <img src="/img/fa.svg" alt="" />
                                    </a>
                                    <a target="_blank" href={`https://twitter.com/intent/tweet?original_referer=${imageBase}&ref_src=twsrc%5Etfw&related=twitterapi%2Ctwitter&text=Я%20%20помог%20дому%20для%20жизни!%20&tw_p=tweetbutton&url=${imageBase}`}>
                                        <img src="/img/twit.svg" alt="" />
                                    </a>
                                    <a href={`https://connect.ok.ru/offer?url=http://tuesday.doroga-zhizni.org&title=Я%20%20помог%20дому%20для%20жизни!%20&imageUrl=${imageBase}`}>
                                        <img src="/img/ok.svg" alt="" />
                                    </a>
                                </div>

                                <div className="main__btn-wrap">
                                    <a className="btn" href="#" onClick={onDownload}>Скачать</a>

                                    <Link className="miss" to="/">Пропустить</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="footer__wrap">

                    <a href="/oferta.pdf" target="_blank" className="copyright">
                        Публичная оферта о добровольном пожертвовании
                        <span>© «Дорога Жизни» 2021 г.</span>
                    </a>

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
