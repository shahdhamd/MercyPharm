import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import './SliderProduct.css';
import { EffectCoverflow, Navigation } from 'swiper/modules';


function SliderProduct({ Data }) {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                navigation={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Navigation]}
                className="mySwiper"
            >
                {Data.map((item)=>(
                    <SwiperSlide style={{textAlign:'center',padding:'10px',background:'rgb(225, 236, 225)',borderRadius:"20px"}}>
                    <div style={{height:'16rem',margin:'auto',padding:'20px 0',borderBottom:'1px solid var(--main-color)'}}>          
                        <img src={item.image}  height={'100%'} style={{objectFit:'contain'}} alt='image'  />
                    </div>
                    <p style={{color:'var(--main-color)',fontWeight:'600'}}>{item.title}</p>
                    <span style={{color:'var(--main-color)',fontWeight:'400',fontSize:'small'}}>{item.des}</span>
                </SwiperSlide>
                ))
                }

            </Swiper>
        </>
    )
}

export default SliderProduct