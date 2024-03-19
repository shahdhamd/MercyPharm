import React from 'react'
import './Face.css'
import SliderProduct from '../SliderProduct/SliderProduct'
import DataProduct from '../../Data/FaceProduct.json'
import { motion } from 'framer-motion'
import {i18next} from 'i18next'
import { useTranslation } from 'react-i18next'
function Face() {
    const {t ,i18n:{  language}  }=useTranslation()

    return (
        <div className='face'>
            <motion.div
            initial={{x:-100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:.5}}
            className='image'>
                <img src='https://res.cloudinary.com/dh2jv4rcf/image/upload/v1705447294/mercy-pharmacy/categories/ngjn8r7kmqncplyvsgcj.jpg' alt='Face Care' height={'361px'} width={'100%'} />
                <div className="overlady">
                    <h2 style={{ zIndex: '9999' }}>Face Care</h2>
                </div>

            </motion.div>
            <div style={{ margin: '30px 0' }}>
                <div style={{ margin: 'auto', width: 'fit-content' }} >
                    <h2 style={{ lineHeight: '.2' }}>Face Care</h2>
                    <img src='https://mercypharm.com/images/basic/line.svg'  width={'100%'} />
                </div>
                <SliderProduct Data={DataProduct} />
            </div>
            <div style={{ margin: '30px 0' }}>
                <div style={{ margin: 'auto', width: 'fit-content' }} >
                    <h2 style={{ lineHeight: '.2' }}>Revitalize & Nourish</h2>
                    <img src='https://mercypharm.com/images/basic/line.svg' width={'100%'} />
                </div>
                <SliderProduct Data={DataProduct} />
            </div>
            <div style={{ margin: '30px 0' }}>
                <div style={{ margin: 'auto', width: 'fit-content' }} >
                    <h2 style={{ lineHeight: '.2' }}>Face Wash</h2>
                    <img src='https://mercypharm.com/images/basic/line.svg' />
                </div>
                <SliderProduct Data={DataProduct} />
            </div>
        </div>
    )
}

export default Face