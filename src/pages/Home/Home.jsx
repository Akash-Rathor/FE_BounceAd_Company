import React, { useEffect, useState } from 'react';
import './home.css';
import randomImg from '../../assets/images/avatar.png';
import AnimatedText from '../../components/homepageComponents/AnimatedText';

const Home = () => {
  return (
    <section className='flex flex-col justify-center items-center h-screen'>
      <AnimatedText />
    </section>
  );
};

export default Home;
