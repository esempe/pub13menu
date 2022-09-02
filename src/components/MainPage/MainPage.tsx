import React, {useEffect, useState} from 'react';

import s from './MainPage.module.css'
import ScrollIntoView from "react-scroll-into-view";
import {burgersAndStreetFood, deserts, garnish, grillAndMeet, main, salads, snacks, soups} from "../../db/menuDB";
import {ReactComponent as BackToTop} from "../../assets/backToTop.svg";
import {MenuSection} from "../MenuSection/MenuSection";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../common/hooks";
import {Slider} from "../Slider/Slider";

export const MainPage = () => {
    const navigate = useNavigate()
    const userOrder = useAppSelector(state => state.basket.order)

    return (
        <div className="globalWrapper">
            <div className="NavPageWrapper">
                <div className="swiperWrapper" id={'start'}><Slider/></div>
                <div className="title" id={'start'}>menu</div>
                <div className="navBarWrapper">
                    <li>
                        <ScrollIntoView selector={`#${grillAndMeet.title.replace(/ /g, '')}`}><>- гриль и мясо -</>
                        </ScrollIntoView>
                    </li>
                    <li>
                        <ScrollIntoView selector={`#${burgersAndStreetFood.title.replace(/ /g, '')}`}>
                            <>- бургеры и стрит фуд -</>
                        </ScrollIntoView>
                    </li>
                    <li>
                        <ScrollIntoView selector={`#${snacks.title.replace(/ /g, '')}`}>
                            <>- Закуски -</>
                        </ScrollIntoView>
                    </li>
                    <li><ScrollIntoView selector={`#${main.title.replace(/ /g, '')}`}><>- основные блюда -</>
                    </ScrollIntoView></li>
                    <li>
                        <ScrollIntoView selector={`#${salads.title.replace(/ /g, '')}`}>
                            <>- салаты -</>
                        </ScrollIntoView>
                    </li>
                    <li><ScrollIntoView selector={`#${soups.title.replace(/ /g, '')}`}><>- супы -</>
                    </ScrollIntoView></li>
                    <li><ScrollIntoView selector={`#${deserts.title.replace(/ /g, '')}`}><>- десерт -</>
                    </ScrollIntoView></li>
                    <li>
                        <ScrollIntoView selector={`#${garnish.title.replace(/ /g, '')}`}><>- гарнир -</>
                        </ScrollIntoView>
                    </li>
                </div>
            </div>
            <MenuSection userOrder={userOrder} title={grillAndMeet.title} items={grillAndMeet.items}/>
            <MenuSection userOrder={userOrder} title={burgersAndStreetFood.title} items={burgersAndStreetFood.items}/>
            <MenuSection userOrder={userOrder} title={snacks.title} items={snacks.items}/>
            <MenuSection userOrder={userOrder} title={main.title} items={main.items}/>
            <MenuSection userOrder={userOrder} title={salads.title} items={salads.items}/>
            <MenuSection userOrder={userOrder} title={soups.title} items={soups.items}/>
            <MenuSection userOrder={userOrder} title={deserts.title} items={deserts.items}/>
            <MenuSection userOrder={userOrder} title={garnish.title} items={garnish.items}/>
        </div>
    );
};

