// ExtraCurricular.js

import React, { useState } from 'react';
import Slider from 'react-slick';

import './ExtraCurricular.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/* ART */

import art1 from './art/art1.jpeg';
import art2 from './art/art2.jpeg';
import art3 from './art/art3.jpeg';
import art4 from './art/art4.jpeg';
import art5 from './art/art5.jpeg';
import art6 from './art/art6.jpeg';
import art7 from './art/art7.jpeg';
import art8 from './art/art8.jpeg';

/* PHOTO */

import p1 from './photo/p1.jpeg';
import p2 from './photo/p2.jpeg';
import p3 from './photo/p3.jpeg';
import p4 from './photo/p4.jpeg';
import p5 from './photo/p5.jpeg';
import p6 from './photo/p6.jpeg';
import p7 from './photo/p7.jpeg';
import p8 from './photo/p8.jpeg';

function ExtraCurricular() {

    const [selectedImage, setSelectedImage] = useState(null);

    const artImages = [
        art1, art2, art3, art4,
        art5, art6, art7, art8
    ];

    const photoImages = [
        p1, p2, p3, p4,
        p5, p6, p7, p8
    ];

    const sliderSettings = {

        dots: true,
        infinite: true,

        speed: 700,

        slidesToShow: 3,
        slidesToScroll: 1,

        autoplay: true,
        autoplaySpeed: 2500,

        centerMode: true,
        centerPadding: "0px",

        pauseOnHover: true,

        arrows: true,

        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (

        <section
            id="extra-curricular"
            className="extra-curricular"
        >

            {/* DEPTH */}

            <div className="extra-depth">

                <div className="interstellar">
                    {[...Array(8)].map((_, i) => (
                        <span key={i}></span>
                    ))}
                </div>

                <div className="extra-stars">
                    {[...Array(50)].map((_, i) => (
                        <span
                            key={i}
                            style={{
                                top: Math.random() * 100 + "%",
                                left: Math.random() * 100 + "%",
                                animationDelay: Math.random() * 5 + "s"
                            }}
                        ></span>
                    ))}
                </div>

            </div>

            <h2 className="extra-title">
                Extra Curricular & Hobbies
            </h2>

            <div className="carousel-section-container">

                {/* ART */}

                <div className="carousel-section">

                    <h3>🎨 Art Gallery</h3>

                    <Slider {...sliderSettings}>

                        {artImages.map((image, index) => (

                            <div
                                key={index}
                                className="slide-container"
                            >

                                <img
                                    src={image}
                                    alt=""
                                    className="carousel-image"
                                    onClick={() => setSelectedImage(image)}
                                />

                            </div>

                        ))}

                    </Slider>

                </div>

                {/* PHOTO */}

                <div className="carousel-section">

                    <h3>📸 Photography Gallery</h3>

                    <Slider {...sliderSettings}>

                        {photoImages.map((image, index) => (

                            <div
                                key={index}
                                className="slide-container"
                            >

                                <img
                                    src={image}
                                    alt=""
                                    className="carousel-image"
                                    onClick={() => setSelectedImage(image)}
                                />

                            </div>

                        ))}

                    </Slider>

                </div>

            </div>

            {/* IMAGE MODAL */}

            {selectedImage && (

                <div
                    className="image-modal"
                    onClick={() => setSelectedImage(null)}
                >

                    <div className="modal-container">

                        <img
                            src={selectedImage}
                            alt=""
                            className="modal-image"
                        />

                    </div>

                </div>

            )}

        </section>

    );
}

export default ExtraCurricular;