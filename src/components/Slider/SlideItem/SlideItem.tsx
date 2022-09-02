import React from 'react';
import grenky from "../../../assets/menu/snacks/grenky.png";

import s from "./SlideItem.module.css"
export const SlideItem = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>Понедельник</div>
            <div className={s.discount}>-30%</div>
            <div className={s.itemWrapper}>
                <div style={{order: '1'}} className={s.img}>
                    <img src={grenky} alt={`pic 1`}/>
                </div>
                <div style={{order: '2'}}
                     className={`${s.infoWrapper} 
                 ${s.infoWrapperRight} `}>
                    <div className={s.name}>стейки</div>
                    <div className={s.priceAndWeight}>
                        <span>до 16-00</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

