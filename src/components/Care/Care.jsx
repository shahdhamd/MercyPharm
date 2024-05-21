import React from 'react'
import './Care.css'
import Data from '../../Data/product.json'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
function Care() {
    const { t, i18n: { language } } = useTranslation()
    function getLanguageText(textEn, textAr) {
        return language === 'en' ? textEn : textAr;
    }
    return (
        <div className='care'>
            <motion.div className='text' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .8 }}>
                <h1
                >{t("products.title")}<br /><img src='https://mercypharm.com/images/basic/line.svg' />
                </h1>
                <span
                >{t('products.pageDesc')}</span>
            </motion.div>
            {
                Data.map((item, index) => (
                    index % 2 === 0 ? (
                        <div key={index}>
                            <div className="container" style={{ marginTop: '75px', direction: getLanguageText('ltr', 'rtl') }}>
                                <div className='FaceCare' >
                                    <div className="text">
                                        <motion.h2 initial={{ opacity: 0, scale: .5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: .8 }}>{getLanguageText(item.title_en, item.title_ar)}</motion.h2>
                                        <div style={{ textAlign: 'start', fontWeight: '600', padding: '1rem 0' }}>
                                            <motion.p initial={{ opacity: 0, scale: .5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: .8 }}>{getLanguageText(item.desc_en, item.desc_ar)}</motion.p>
                                        </div>
                                        <Link to={`/category/${item.id}`} style={{ direction: getLanguageText('ltr', 'rtl') }}>
                                            <motion.div initial={{ opacity: 0, scale: .5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: .8 }} style={{ position: 'relative', width: 'fit-content', display: 'block' }} className='btn-more'>
                                                <p style={{ borderBottom: '1px solid var(--main-color)', color: 'var(--main-color)', width: '115%', fontSize: '25px', paddingRight: '10px', textAlign: 'start' }} className='more' id='more'>{getLanguageText('More', 'المزيد')}</p>
                                                <div style={{ borderRadius: '50%', width: '20px', height: '20px', border: '1px solid var(--main-color)', position: 'absolute', bottom: '-10px',left: language === 'en' ? '79px' : '-21px' }} className='cycli'></div>
                                            </motion.div></Link>

                                    </div>
                                    <motion.div className='image' initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8 }}>
                                        <img src={item.image} alt={item.title} width='100%' height={'100%'} />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div key={index}>
                            <div className="container" style={{ marginTop: '75px', direction: getLanguageText('ltr', 'rtl') }}>
                                <div className='FaceCare'>
                                    <motion.div className='image' initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8 }}>
                                        <img src={item.image} alt={item.title} width='100%' height={'100%'} />
                                    </motion.div>
                                    <div className="text" style={{ color: 'rgba(255, 255, 255, 0.75)', background: 'var(--main-color)' }}>
                                        <motion.h2 initial={{ opacity: 0, scale: .5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: .8 }}
                                            style={{ borderBottom: '2px solid rgba(255, 255, 255, 0.75)' }}>{getLanguageText(item.title_en, item.title_ar)}</motion.h2>
                                        <div style={{ textAlign: 'start', fontWeight: '600', padding: '1rem 0' }}>
                                            <motion.p initial={{ opacity: 0, scale: .5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: .8 }}>{getLanguageText(item.desc_en, item.desc_ar)}</motion.p>
                                        </div>
                                        <Link to={`/category/${item.id}`}>
                                            <motion.div initial={{ opacity: 0, scale: .5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: .8 }} style={{ position: 'relative', width: 'fit-content', display: 'block' }} className='btn-more'>
                                                <p style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.75)', color: ' rgba(255, 255, 255, 0.75)', width: '115%', fontSize: '25px', paddingRight: '10px', textAlign: 'start' }} className='more' id='more'>{getLanguageText('More', 'المزيد')}</p>
                                                <div style={{ borderRadius: '50%', width: '20px', height: '20px', border: '1px solid rgba(255, 255, 255, 0.75)', position: 'absolute', bottom: '-10px',left: language === 'en' ? '79px' : '-21px'}} className='cycli'></div>
                                            </motion.div>
                                        </Link>

                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                ))
            }
        </div>

    )
}

export default Care