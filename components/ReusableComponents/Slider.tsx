'use client';

import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

import AboutStyles from "@/styles/about.module.css";
// import styles from "@/styles/services.module.css";
import { Member } from '@/sanity/types';
import { urlFor } from '@/sanity/libs/sanity';



interface CardSliderProps {
    team: Member[];
}
const CardSlider: React.FC<CardSliderProps> = ({ team }) => {
    const card = team[0];

    if (!card) return null;
    return (
        <div className="container my-5">

            <div className=" my-5 d-flex justify-content-center align-items-center">
                {card.mainImage && (
                    <Image
                        src={urlFor(card.mainImage).url() || "/about1.png"}
                        alt={card.name}
                        width={1024}
                        height={800}
                        style={{
                            objectFit: 'cover',
                            borderRadius: "16px",
                            backgroundColor: "transparent",
                            // width: 'auto'
                        }}
                        className={`${AboutStyles.TeamImg}`}
                    />
                )}
            </div>
            {/* <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                // navigation
                // pagination={{ clickable: true }}
                // autoplay={false}
                // autoplay={{
                //     delay: 3000,
                //     disableOnInteraction: false,
                // }}
                breakpoints={{
                    576: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                }}
                className="pb-4"

            >
                {team.map((card, index) => (
                    <SwiperSlide key={index} className='team_slide_wrapper'>
                        <div className={`card h-100 teamMemberCard`} style={{backgroundColor: "transparent !important"}}>
                            <div className='shadow-sm team_member_shadow_card_wrapper d-flex justify-content-center' style={{backgroundColor: "#fff !important"}}>
                                <div className={`position-absolute team_card_out`}>

                                    {card.mainImage && (
                                        <Image
                                            src={urlFor(card?.mainImage).url() || "/about1.png"}
                                            alt={card.name}
                                            // fill
                                            width={200}
                                            height={200}
                                            style={{ objectFit: 'cover', borderRadius: "16px !important", backgroundColor: "transparent !important", width: 'auto !important' }}
                                            className={`${AboutStyles.TeamImg} `}
                                        />
                                    )}
                                </div>
                            </div>
                            <div className={`card-body d-flex flex-column ${AboutStyles.cardBody}`}>
                                <h5 className={`card-title ${styles.se_txt_35_awsome}`}>{card.name}</h5>
                                <p className={`card-text flex-grow-1 ${styles.se_txt_20_work_sans}`}>{card.description}</p>
                                 {card.buttonText && (
                                    <a href={card.buttonLink} className="btn btn-primary mt-auto align-self-start">
                                        {card.buttonText}
                                    </a>
                                )} 
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper> */}
        </div>
    );
};

export default CardSlider;