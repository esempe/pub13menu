import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import "swiper/css";

import img1 from '../../assets/slider/1.png'
import img2 from '../../assets/slider/2.png'
import img3 from '../../assets/slider/3.png'
import img4 from '../../assets/slider/4.png'
import img5 from '../../assets/slider/5.png'
import img6 from '../../assets/slider/6.png'

import "./Slider.css";
import {SlideItem} from "./SlideItem/SlideItem";
import ScrollIntoView from "react-scroll-into-view";
import {ReactComponent as BackToTop} from "../../assets/backToTop.svg";

export const Slider = () => {

    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
            pagination={{
                clickable: true
            }}
            className="mySwiper"
        >
            <SwiperSlide>
                <ScrollIntoView selector={'#Грильимясо'}>
                    <img src={img1} alt=""/>
                </ScrollIntoView>
            </SwiperSlide>
            <SwiperSlide>
                <ScrollIntoView selector={'#Закуски'}>
                    <img src={img2} alt=""/>
                </ScrollIntoView>
            </SwiperSlide>
            <SwiperSlide>
                <ScrollIntoView selector={'#Закуски'}>
                    <img src={img3} alt=""/>
                </ScrollIntoView>
            </SwiperSlide>
            <SwiperSlide>
                <ScrollIntoView selector={'#Основныеблюда'}>
                    <img src={img4} alt=""/>
                </ScrollIntoView>
            </SwiperSlide>
            <SwiperSlide>
                <ScrollIntoView selector={'#Салаты'}>
                    <img src={img5} alt=""/>
                </ScrollIntoView>
            </SwiperSlide>
            <SwiperSlide>
                <ScrollIntoView selector={'#Бургерыифастфуд'}>
                    <img src={img6} alt=""/>
                </ScrollIntoView>
            </SwiperSlide>


        </Swiper>
    );
};

