import React from 'react'
import './Hero.css'
import Slider from '../Slider/Slider'
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

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
            <div className='row ' style={{ direction: checkLanguage('ltr', 'rtl') }}>
                <div className='col-md-4 col-sm-6 mainn d-flex'>
                    <div className='w-50 first'>
                        <img src='images/11.jpg' alt='image' width={'100%'} height={'100%'} />
                        <img src='images/11.svg' alt='image' className='imagelev' width={'80%'} />
                    </div>
                    <div className='w-50 last' style={{
                        ...(language === 'ar' ? { borderLeft: '1px solid var(--main-color)' } : { borderRight: '1px solid var(--main-color)' })
                    }}>
                        <img src='images/11.svg' alt='image' className='imageleav' width={'80%'} />
                        {/* <div className='naturalDiv'>
                            <img src='images/11 (1).svg' alt='image' className='natural' width={'80%'} />
                        </div> */}
                    </div>
                    <div className='naturalDiv' style={language === 'en' ? { right: '-16%' } : { left: '-16%' }}>
                            <img src='images/11 (1).svg' alt='image' className='natural' width={'80%'} />
                        </div>
                    <motion.div className='text' initial={{ opacity: 0, x: -100, y: -100 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}>
                        <h1>{t("home.header.main")}</h1>
                        <span>{t("home.header.second")}</span>
                        <p>{t("home.description.first")}</p>
                        <p>{t("home.description.second")}</p>
                        <p>{t("home.description.third")}</p>

                    </motion.div>

                </div>

                <div className='col-md-8 col-sm-6' >
                    <Slider />
                </div>
            </div>
        </div>
    )
}

export default Hero