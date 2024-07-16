import React, { useEffect, useState } from 'react';
import randomImg from '../../assets/images/avatar.png';

const texts = [
  { text: 'Be Found with BounceAd', color: 'green-700' },
  { text: 'Bonjour', color: 'red-600' },
  { text: 'Hola', color: 'blue-600' },
  { text: 'Ciao', color: 'black' },
];

const AnimatedText = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);

      // Change text after animation duration (1s in this example)
      const changeTextTimeout = setTimeout(() => {
        setIsVisible(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 2000);

      return () => clearTimeout(changeTextTimeout);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [currentTextIndex]);

  return (
    <section className='flex flex-col justify-center items-center h-screen'>
      <div className='flex justify-center items-center space-x-5 p-5 relative w-full'>
        <div className={`opacity-20 bg-${texts[currentTextIndex].color} fixed justify-center items-center rounded-full h-96 w-96 left-1/4`}>
          <img src={randomImg} alt={texts[currentTextIndex]} className='opacity-60 rounded-full self-center' />
        </div>
        <div className='flex flex-col justify-center items-center relative z-10'>
          <div id="animated-text" className={`font-bold mt-20 right-1/4 text-${texts[currentTextIndex].color} ${isVisible ? 'opacity-100' : 'opacity-0 hidden'}`}
            style={{ fontSize: '6rem', animation: isVisible ? 'fadeInUp 1s ease forwards' : 'none' }}>
            {texts[currentTextIndex].text}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedText;
