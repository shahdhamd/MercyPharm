import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Slider() {
  const [show, setShow] = useState(true);
  const [currentImage, setCurrentImage] = useState(0)

  const images = ['/images/11 (1).jpg', '/images/11 (2).jpg']

  // useEffect(() => {
  //   const interval = setTimeout(() => {
  //     setShow(prevShow => !prevShow);
  //   }, 2000);

  //   return () => clearTimeout(interval);
  // }, [show]);


  // useEffect(() => {
  // 	const intervalId = setInterval(() => {
  // 		setCurrentImage(prevImage => (prevImage + 1) % images.length)
  // 	}, 3000)
  // 	return () => clearInterval(intervalId)
  // }, [currentImage, images])
  // useEffect(() => {
  // 	window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  // }, [])

  return (
    <div style={{ height: 'calc(100vh - 48px)', width: '100%', overflow: 'hidden' }}>
      {/* <motion.div
          key={show ? 'image1' : 'image2'}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          
        >
          <img src={`images/11 (${show ? 1 : 2}).jpg`} alt={show ? 'image1' : 'image2'} width={'100%'} style={{ height: '100%', minHeight: '100vh' }} />
        </motion.div> */}
      {/* <AnimatePresence mode="wait">
						<motion.img
							key={currentImage}
							src={images[currentImage]}
							alt=""
							// className="h-full w-full object-cover"
							initial={{ opacity: 0, x: -100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 100 }}
							transition={{ duration: 0.5 }}
              width={'100%'} style={{ height: '100%', minHeight: '100vh' }} 
						/>
					</AnimatePresence> */}
      <motion.img src="/images/11 (1).jpg" alt="" initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        width={'100%'}

      style={{ height: '100%', width: '100%' ,objectFit:'cover'}} 
      />

    </div>
  );
}

export default Slider;
