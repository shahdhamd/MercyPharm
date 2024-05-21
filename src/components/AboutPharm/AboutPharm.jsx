import React from 'react';
import './AboutPharm.css';
import Data from '../../Data/product.json';
import { motion } from 'framer-motion';
import {  i18n } from 'i18next';
import { useTranslation } from 'react-i18next';

function AboutPharm() {
  const {t ,i18n:{  language}  }=useTranslation()
  return (
    <motion.div className='about' style={{direction:language === 'en'? 'ltr':'rtl'}}>
      <motion.div className='image'
        initial={{ x: 50, y: -100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <div className="container">
        <div style={{ margin: '70px 0', color: 'var(--main-color)' }} className='text'>
          <motion.h2
            style={{ lineHeight: '1px' }}
            initial={{ x: 100, y: -100, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {t("about.title")}
          </motion.h2>
          <img src='https://mercypharm.com/images/basic/line.svg' alt="line" />
          <motion.p
            initial={{ opacity: 0, scale: .5 }}
            animate={{ opacity: 1, scale: 1 }}
          >{t("about.desc")}</motion.p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ margin: '10px auto', borderBottom: '2px solid #7db170', width: 'fit-content', fontSize: 'calc(1rem + .9vw)', color: 'var(--main-color)' }}>{t("about.secondTitle.main")}</h2>
          <span>
          {t("about.secondTitle.second")}
          </span>
        </div>
        <div className='cardd'>
          <div className="row">
            {Data.map((i) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: (i.id + 1) * 0.1, duration: 0.5 }}
                className="col-xl-3 col-lg-4 col-md-6 p-2 carddd" key={i.id}>
                <div style={{ maxWidth: '280px', margin: 'auto' }}>
                  <img src={i.image} width={'100%'}  height={'320px'} style={{ borderRadius: '5px' ,objectFit:'cover'}} alt={i.title} />
                </div>
                <div className="text" style={{ textAlign: 'center', color: 'var(--main-color)', marginTop: '20px' }}>
                  <p style={{ fontWeight: '700' }} >{language === 'en'? i.title_en:i.title_ar} </p>
                  <p>{language === 'en'? i.desc_en:i.desc_ar}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutPharm;
