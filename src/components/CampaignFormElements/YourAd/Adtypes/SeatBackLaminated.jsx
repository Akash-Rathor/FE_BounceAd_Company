import React, { useState, useEffect, useRef } from 'react';
import './carousel.css'
import Image1 from '../../../../assets/images/seatback/1.png';
import Image2 from '../../../../assets/images/seatback/2.png';
import Image3 from '../../../../assets/images/seatback/3.png';
import Image4 from '../../../../assets/images/seatback/4.png';

const SeatBackLaminated = () => {
    const [files] = useState([
        { url: Image1 },
        { url: Image2 },
        { url: Image3 },
        { url: Image4 },
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideInterval = useRef(null);

    const goToSlide = (index) => {
        setCurrentIndex((index + files.length) % files.length);
    };

    const nextSlide = () => {
        goToSlide(currentIndex + 1);
    };

    const prevSlide = () => {
        goToSlide(currentIndex - 1);
    };

    useEffect(() => {
        slideInterval.current = setInterval(nextSlide, 5000);
        return () => clearInterval(slideInterval.current);
    }, [currentIndex]);

    return (
        <div className="carousel-container">
            {files.map((item, index) => (
                <div
                    key={index}
                    className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                >
                    <img src={item.url} alt={`Slide ${index + 1}`} />
                </div>
            ))}
            <button className="carousel-button prev" onClick={prevSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10">
                    <path d="M5 1 1 5l4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
            </button>
            <button className="carousel-button next" onClick={nextSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10">
                    <path d="M1 1 5 5 1 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
            </button>
            <div className="carousel-indicators">
                {files.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator-button ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default SeatBackLaminated;
