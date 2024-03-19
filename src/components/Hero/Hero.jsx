import React from 'react'
import './Hero.css'
import Slider from '../Slider/Slider'
import { useTranslation } from 'react-i18next';
import { i18n } from 'i18next';
function Hero() {
    const { t, i18n: { language } } = useTranslation()
    const checkLanguage = (x, y) => {
        if (language === 'en') {
            return x;
        } else {
            return y;
        }
    }
    return (
        <div className='hero'>
            <div className='row  my-5' style={{ direction: checkLanguage('ltr', 'rtl') }}>
                <div className='col-md-4 col-xs-6 mainn d-flex'>
                    <div className='w-50 first'>
                        <img src='images/11.jpg' width={'100%'} height={'100%'} />
                        <img src='images/11.svg' className='imagelev' width={'80%'} />
                    </div>
                    <div className='w-50 last' style={{ borderLeft: "1px solid var(--main-color)" }}>
                        <img src='images/11.svg' className='imageleav' width={'80%'} />
                        <div className='naturalDiv'>
                            <img src='images/11 (1).svg' className='natural' width={'80%'} />
                        </div>
                    </div>
                    <div className='text'>
                        <h1>{t("home.header.main")}</h1>
                        <span>{t("home.header.second")}</span>
                        <p>{t("home.description.first")}</p>
                        <p>{t("home.description.second")}</p>
                        <p>{t("home.description.third")}</p>

                    </div>

                </div>

                <div className='col-md-8 col-xs-6' >
                    <Slider />
                </div>
            </div>
        </div>
    )
}

export default Hero