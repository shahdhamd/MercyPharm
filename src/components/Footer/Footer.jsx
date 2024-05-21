import React from 'react'
import './Footer.css';
import { motion } from 'framer-motion';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import Product from "../../Data/product.json"
function Footer() {
    const { t, i18n: { language } } = useTranslation()

    return (
        <div className='footer '>
            <div className="container " style={{ direction: language == 'en' ? 'ltr' : 'rtl' }}>
                <div
                    // initial={{ y: 100, opacity: 0 }}
                    // transition={{ duration: .5 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    className="row ">
                    <div className="col-md-3 my-4">
                        <img src='https://mercypharm.com/assets/logo-maVgS3ug.svg' width={'150px'} className='mb-3' />
                        <br />
                        <span>{t("footer.about")}</span>
                    </div>
                    <div className="col-md-3 text-center  my-4">
                        <h5 style={{ lineHeight: '1px' }}>{t("footer.links")}</h5>
                        <img src='https://mercypharm.com/images/basic/line.svg' className='line' />
                        <p>{t("navlinks.about")}</p>
                        <p>{t("navlinks.home")}</p>
                        <p>{t("navlinks.contact")}</p>
                        <p>{t("navlinks.products")}</p>
                    </div>
                    <div className="col-md-3 text-center  position-relative my-4">
                        <h5 style={{ lineHeight: '1px' }}>{t("footer.our-products")}</h5>
                        <img src='https://mercypharm.com/images/basic/line.svg' className='line' />
                        {
                            Product.map((p, index) => (
                                <div key={index}>
                                    {
                                        language === "en" ?
                                            <p style={{ textTransform: "capitalize" }}>{p.title_en}</p> :
                                            <p>{p.title_ar}</p>
                                    }
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-md-3 text-center my-4">
                        <h5>{t('footer.socials')}</h5>
                        <div className='d-flex justify-content-center gap-2'>
                            <div className='icon'>
                                <a> <i class="fa-regular fa-envelope"></i></a>
                            </div>
                            <div className='icon'>
                                <a> <i class="fa-brands fa-instagram"></i></a>
                            </div>
                            <div className='icon'>
                                <a> <i class="fa-brands fa-facebook-f"></i></a>
                            </div>
                        </div>
                    </div>
                    <p className='afterLine m-1'></p>
                    <span className='' style={{ fontSize: '.7rem', textAlign: 'center' }}>Mercy Pharm © 2024 - All Rights Reserved</span>
                </div>
            </div>
        </div>
    )
}
export default Footer