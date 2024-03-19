import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Slider() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setTimeout(() => {
      setShow(prevShow => !prevShow);
    }, 2000);

    return () => clearTimeout(interval);
  }, [show]);

  return (
    <div style={{ overflow: 'hidden', height: '100vh', width: '100%' }}>
      <AnimatePresence>
        <motion.div
          key={show ? 'image1' : 'image2'}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          
        >
          <img src={`images/11 (${show ? 1 : 2}).jpg`} alt={show ? 'image1' : 'image2'} width={'100%'} style={{ height: '100%', minHeight: '100vh' }} />
        </motion.div>
      </AnimatePresence>
        
    </div>
  );
}

export default Slider;
