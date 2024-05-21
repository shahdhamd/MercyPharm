import React from 'react'
import './ContactComp.css'
import { motion } from 'framer-motion';
import { changeLanguage, i18n } from 'i18next';
import { useTranslation } from 'react-i18next';
function ContactComp() {
    const {t ,i18n: { language}  }=useTranslation()

        return (
        <div className='contact'>
            <div style={{ marginTop: '90px', display: 'flex', justifyContent: 'space-between', alignItems: 'start', position: 'relative' }}>
                <div className='leav'> <img src='https://mercypharm.com/images/basic/branch.svg' width={'100%'} alt='branch' /></div>
                <div className="text" style={{ padding: '70px 0', textAlign: 'center', padding: '20px 0', flexGrow: 1,direction:language === 'en'? 'rtl':'ltr' }}>
                    <motion.div
                    initial={{y:-100,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{duratio:.5}}
                    className="h1" style={{ margin: 0, color: 'var(--main-color)', fontSize: '50px', lineHeight: '17px' }}>{t('contact.title')}</motion.div>
                    <motion.img  initial={{y:-100,opacity:0}}
                    animate={{y:0,opacity:1}}
                    alt='line'
                    transition={{duratio:.5}} src='https://mercypharm.com/images/basic/line.svg' />
                    <motion.p  initial={{y:75,x:100,opacity:0}}
                    animate={{y:0,x:0,opacity:1}}
                    transition={{duratio:.5}} style={{ color: 'var(--main-color)', marginBottom: 0 }}>{t("contact.desc.first")}</motion.p>
                    <motion.p initial={{y:75,x:100,opacity:0}}
                    animate={{y:0,x:0,opacity:1}}
                    transition={{duratio:.5}} style={{ color: 'var(--main-color)' }}>{t("contact.desc.second")}</motion.p>

                </div>
            </div>
            <motion.div initial={{y:100,x:100,opacity:0}}
                    animate={{y:0,x:0,opacity:1}}
                    transition={{duratio:.5}} className="communicatin">
                <div className="icon">
                    <i class="fa-regular fa-envelope"></i>
                    <p>Email</p></div>

                <div className="icon">
                    <i class="fa-brands fa-instagram"></i>
                    <p>Instagram</p></div>
                <div className="icon">
                    <i class="fa-brands fa-facebook-f"></i>
                    <p>Facebook</p></div>
            </motion.div>
            <div ><img src='https://mercypharm.com/images/basic/contact-bg.jpg' width={'100%'} alt='contact' /> </div>
        </div>
    )
}

export default ContactComp