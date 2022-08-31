import React, {useEffect, useState} from 'react';
import './App.css';
import {MenuItem, MenuSection} from "./components/MenuSection/MenuSection";

import bbqRibs from "./assets/menu/grillAndMeet/bbqRibs.png"
import stakeCload from "./assets/menu/grillAndMeet/steakCload.png"
import chickenFillet from "./assets/menu/grillAndMeet/chickenFillet.png"
import steakSalmon from "./assets/menu/grillAndMeet/steakSalmon.png"
import chickenSausages from "./assets/menu/grillAndMeet/chickenSausages.png"
import beefRib from "./assets/menu/grillAndMeet/beefRib.png"
import steakXIII from "./assets/menu/grillAndMeet/steakXIII.png"
import steakDenver from "./assets/menu/grillAndMeet/steakDenver.png"
import steakHrusha from "./assets/menu/grillAndMeet/steakHrusha.png"
import steakStriployn from "./assets/menu/grillAndMeet/steakStriployn.png"
import steakTryTip from "./assets/menu/grillAndMeet/steakTryTip.png"

import americanBurger from './assets/menu/burgerAndStreetfood/americanBurger.png'
import camomberBurger from './assets/menu/burgerAndStreetfood/camomberBurger.png'
import cesadiliya from './assets/menu/burgerAndStreetfood/cesadiliya.png'
import chederHotDog from './assets/menu/burgerAndStreetfood/chederHotDog.png'
import cheeseBurger from './assets/menu/burgerAndStreetfood/cheeseBurger.png'
import cheeseShaverma from './assets/menu/burgerAndStreetfood/cheeseShaverma.png'
import moscalBurger from './assets/menu/burgerAndStreetfood/moscalBurger.png'
import pubSandwich from './assets/menu/burgerAndStreetfood/pubSandwich.png'
import spicyHotDog from './assets/menu/burgerAndStreetfood/spicyHotDog.png'
import tolyaBurger from './assets/menu/burgerAndStreetfood/tolyaBurger.png'
import willageBurger from './assets/menu/burgerAndStreetfood/willageBurger.png'
import beefBurger from './assets/menu/burgerAndStreetfood/beefBurger.png'

import airChesse from './assets/menu/snacks/airChesse.png'
import beerBoard from './assets/menu/snacks/beerBoard.png'
import cheeseFriha from './assets/menu/snacks/cheeseFriha.png'
import chickenStrips from './assets/menu/snacks/chickenStrips.png'
import chickenWings from './assets/menu/snacks/chickenWings.png'
import midii from './assets/menu/snacks/midii.png'
import friedCheese from './assets/menu/snacks/friedCheese.png'
import fishForVodka from './assets/menu/snacks/fishForVodka.png'
import saltedSalmon from './assets/menu/snacks/saltedSalmon.png'
import semgaBruscket from './assets/menu/snacks/semgaBruscket.png'
import wildJerky from './assets/menu/snacks/wildJerky.png'
import smorrebrods from './assets/menu/snacks/smorrebrods.png'
import sandwichStew from './assets/menu/snacks/sandwichStew.png'
import grenky from './assets/menu/snacks/grenky.png'
import fishAndChips from './assets/menu/snacks/fishAndChips.png'
import shrimpMagadans from './assets/menu/snacks/shrimpMagadans.png'

import cheeseSausages from './assets/menu/main/cheeseSausages.png'
import chickenPasta from './assets/menu/main/chickenPasta.png'
import creamPasta from './assets/menu/main/creamPasta.png'
import mashedStew from './assets/menu/main/mashedStew.png'

import salad1 from './assets/menu/salads/1.png'
import salad2 from './assets/menu/salads/2.png'
import salad3 from './assets/menu/salads/3.png'
import salad4 from './assets/menu/salads/4.png'
import salad5 from './assets/menu/salads/5.png'

import soup1 from './assets/menu/soups/soup1.png'
import soup2 from './assets/menu/soups/soup2.png'
import soup3 from './assets/menu/soups/soup3.png'
import soup4 from './assets/menu/soups/soup4.png'
import soup5 from './assets/menu/soups/soup5.png'
import soup6 from './assets/menu/soups/soup6.png'
import soup7 from './assets/menu/soups/soup7.png'

import des1 from './assets/menu/deserts/des1.png'
import des2 from './assets/menu/deserts/des2.png'

import {ReactComponent as BackToTop} from './assets/backToTop.svg'

import ga1 from './assets/menu/garnish/ga1.png'
import ga2 from './assets/menu/garnish/ga2.png'
import ga3 from './assets/menu/garnish/ga3.png'
import ga4 from './assets/menu/garnish/ga4.png'

import ScrollIntoView from "react-scroll-into-view";


export type MenuSectionType = {
    title: string;
    items: MenuItem[]
}
const grillAndMeet: MenuSectionType = {
    title: 'Гриль и мясо',
    items: [
        {id: 1, name: 'Стейк Клод', weight: "220г", price: 429, img: stakeCload},
        {id: 2, name: 'Ароматное куриное филе', weight: "180г", price: 349, img: chickenFillet},
        {id: 3, name: 'Стейк из семги с соусом песто', weight: "250г", price: 699, img: steakSalmon},
        {id: 4, name: 'Ребра BBQ для крепышей', weight: "600г", price: 1399, img: bbqRibs},
        {id: 5, name: 'Куриные колбаски с сыром', weight: "400г", price: 299, img: chickenSausages},
        {id: 6, name: 'Мраморное говяжье ребро', weight: "350г", price: 1199, img: beefRib},
        {id: 7, name: 'Стейк XIII', weight: "200г", price: 1099, img: steakXIII},
        {id: 8, name: 'Стейк Денвер', weight: "200г", price: 999, img: steakDenver},
        {id: 9, name: 'Стейк Хрюша', weight: "200г", price: 439, img: steakHrusha},
        {id: 10, name: 'Стейк Стриплойн', weight: "200г", price: 999, img: steakStriployn},
        {id: 11, name: 'Стейк Трай-Тип', weight: "200г", price: 929, img: steakTryTip},
    ]
}
const burgersAndStreetFood: MenuSectionType = {
    title: 'Бургеры и фастфуд',
    items: [
        {id: 1, name: 'Сырный бургер', weight: "400г", price: 313, img: cheeseBurger},
        {id: 2, name: 'Бургер с камамбером', weight: "700г", price: 599, img: camomberBurger},
        {id: 3, name: 'Сырная шаверма', weight: "200г", price: 269, img: cheeseShaverma},
        {id: 4, name: 'Острый хот-дог', weight: "200г", price: 269, img: spicyHotDog},
        {id: 5, name: 'Чизбургер с котлетой из мраморной говядины', weight: "700г", price: 599, img: beefBurger},
        {id: 6, name: 'Кесадилья', weight: "300г", price: 299, img: cesadiliya},
        {
            id: 7,
            name: 'Американский сэндвич с рваной говядиной и бульоном',
            weight: "300г",
            price: 399,
            img: americanBurger
        },
        {id: 8, name: 'Паб сэндвич', weight: "300г", price: 399, img: pubSandwich},
        {id: 9, name: 'Бургер Дядя Толя', weight: "350г", price: 499, img: tolyaBurger},
        {id: 10, name: 'Хот-дог с сыром чеддер', weight: "200г", price: 289, img: chederHotDog},
        {id: 11, name: 'Деревенский бургер', weight: "800г", price: 639, img: willageBurger},
        {id: 12, name: 'Московский бургер', weight: "350г", price: 399, img: moscalBurger},
    ]
}
const snacks: MenuSectionType = {
    title: 'Закуски',
    items: [
        {id: 1, name: 'Жареный сыр с пажитником', weight: "120г", price: 369, img: friedCheese},
        {id: 2, name: 'Воздушный копченый сыр', weight: "100г", price: 199, img: airChesse},
        {id: 3, name: 'Стрипсы из куриного филе', weight: "180г", price: 249, img: chickenStrips},
        {id: 4, name: 'Брускетта с слабосоленой семгой и песто', weight: "150г", price: 279, img: semgaBruscket},
        {id: 5, name: 'Сморреброды с ростбифом и камамбером', weight: "260г", price: 299, img: smorrebrods},
        {id: 6, name: 'Мидии с сыром дорблю в томатном соусе', weight: "280г", price: 429, img: midii},
        {id: 7, name: 'Fish and Chips', weight: "250г", price: 349, img: fishAndChips},
        {id: 8, name: 'Сырнофриха с беконом', weight: "250г", price: 299, img: cheeseFriha},
        {id: 9, name: 'Бутерброд с тушенкой', weight: "180г", price: 249, img: sandwichStew},
        {id: 10, name: 'Слабосоленая семга', weight: "80г", price: 499, img: saltedSalmon},
        {id: 11, name: 'Вяленая дичь', weight: "130г", price: 299, img: wildJerky},
        {id: 12, name: 'Селедочка под водочку', weight: "150", price: 329, img: fishForVodka},
        {id: 13, name: 'Большая пивная доска', weight: "550", price: 599, img: beerBoard},
        {id: 14, name: 'Магаданские креветки', weight: "260", price: 649, img: shrimpMagadans},
        {id: 15, name: 'Гренки классические', weight: "150г", price: 169, img: grenky},
        {id: 16, name: 'Огненные куриные крылья', weight: "250г", price: 349, img: chickenWings},
    ]
}
const main: MenuSectionType = {
    title: 'Основные блюда',
    items: [
        {id: 1, name: 'Паста в сливочном соусе', weight: "310г", price: 313, img: creamPasta},
        {id: 2, name: 'Эксклюзивная тушенка с пюрешкой', weight: "300г", price: 369, img: mashedStew},
        {id: 3, name: 'Куриные колбаски с сыром', weight: "200г", price: 1, img: cheeseSausages},
        {id: 4, name: 'Паста в сливочном соусе с беконом и цыпленком', weight: "350г", price: 429, img: chickenPasta},

    ]
}
const salads: MenuSectionType = {
    title: 'Салаты',
    items: [
        {id: 1, name: 'Салат с семгой и соусом винегар', weight: "310г", price: 313, img: salad1},
        {id: 2, name: 'Салат с говяжьей вырезкой, свежими овощами', weight: "300г", price: 369, img: salad2},
        {id: 3, name: 'Ставропольский Цезарь', weight: "200г", price: 1, img: salad3},
        {id: 4, name: 'Салат из жареных хрустящих баклажанов', weight: "350г", price: 429, img: salad4},
        {id: 5, name: 'Салат с розовыми кубанскими томатами', weight: "350г", price: 429, img: salad5},

    ]
}
const soups: MenuSectionType = {
    title: 'Супы',
    items: [
        {id: 1, name: 'Окрошка', weight: "", price: 199, img: soup1},
        {id: 2, name: 'Суп дня', weight: "", price: 0, img: soup2},
        {id: 3, name: 'Сырный суп', weight: "", price: 239, img: soup3},
        {id: 4, name: 'Суп Том-Кха', weight: "", price: 239, img: soup4},
        {id: 5, name: 'Суп гуляш', weight: "", price: 289, img: soup5},
        {id: 6, name: 'Солянка', weight: "", price: 249, img: soup6},
        {id: 7, name: 'Суп-лапша из Петушка', weight: "", price: 149, img: soup7},
    ]
}
const deserts: MenuSectionType = {
    title: 'Десерты',
    items: [
        {id: 1, name: 'Домашний пирог с яблоком и облепихой', weight: "130г", price: 99, img: des1},
        {id: 2, name: 'Стейк Стриплойн', weight: "200г", price: 289, img: des2},

    ]
}
const garnish: MenuSectionType = {
    title: 'Гарнир',
    items: [
        {id: 1, name: 'Овощи гриль', weight: "200г", price: 229, img: ga1},
        {id: 2, name: 'Картофельное пюре', weight: "200г", price: 89, img: ga2},
        {id: 3, name: 'Картофель фри', weight: "180г", price: 199, img: ga4},
        {id: 4, name: 'Молодой картофель с грибами и луком', weight: "280г", price: 149, img: ga4},
    ]
}

export function App() {
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                setToTopButtonVisible(true)
            } else {
                setToTopButtonVisible(false)
            }
        });
    }, []);
    const [toTopButtonVisible, setToTopButtonVisible] = useState(false);
    return (
        <div className="globalWrapper">
            <div className="NavPageWrapper">
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
            {toTopButtonVisible && <div className="toTopButton">
                <ScrollIntoView selector={'#start'}>
                    <BackToTop className={'BackToTopButtonSVG'}/>
                </ScrollIntoView>

            </div>}

            <MenuSection title={grillAndMeet.title} items={grillAndMeet.items}/>
            <MenuSection title={burgersAndStreetFood.title} items={burgersAndStreetFood.items}/>
            <MenuSection title={snacks.title} items={snacks.items}/>
            <MenuSection title={main.title} items={main.items}/>
            <MenuSection title={salads.title} items={salads.items}/>
            <MenuSection title={soups.title} items={soups.items}/>
            <MenuSection title={deserts.title} items={deserts.items}/>
            <MenuSection title={garnish.title} items={garnish.items}/>
        </div>
    );
}

