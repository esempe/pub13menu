import stakeCload from "../assets/menu/grillAndMeet/steakCload.png";
import chickenFillet from "../assets/menu/grillAndMeet/chickenFillet.png";
import steakSalmon from "../assets/menu/grillAndMeet/steakSalmon.png";
import bbqRibs from "../assets/menu/grillAndMeet/bbqRibs.png";
import chickenSausages from "../assets/menu/grillAndMeet/chickenSausages.png";
import beefRib from "../assets/menu/grillAndMeet/beefRib.png";
import steakXIII from "../assets/menu/grillAndMeet/steakXIII.png";
import steakDenver from "../assets/menu/grillAndMeet/steakDenver.png";
import steakHrusha from "../assets/menu/grillAndMeet/steakHrusha.png";
import steakStriployn from "../assets/menu/grillAndMeet/steakStriployn.png";
import steakTryTip from "../assets/menu/grillAndMeet/steakTryTip.png";
import cheeseBurger from "../assets/menu/burgerAndStreetfood/cheeseBurger.png";
import camomberBurger from "../assets/menu/burgerAndStreetfood/camomberBurger.png";
import cheeseShaverma from "../assets/menu/burgerAndStreetfood/cheeseShaverma.png";
import spicyHotDog from "../assets/menu/burgerAndStreetfood/spicyHotDog.png";
import beefBurger from "../assets/menu/burgerAndStreetfood/beefBurger.png";
import cesadiliya from "../assets/menu/burgerAndStreetfood/cesadiliya.png";
import americanBurger from "../assets/menu/burgerAndStreetfood/americanBurger.png";
import pubSandwich from "../assets/menu/burgerAndStreetfood/pubSandwich.png";
import tolyaBurger from "../assets/menu/burgerAndStreetfood/tolyaBurger.png";
import chederHotDog from "../assets/menu/burgerAndStreetfood/chederHotDog.png";
import willageBurger from "../assets/menu/burgerAndStreetfood/willageBurger.png";
import moscalBurger from "../assets/menu/burgerAndStreetfood/moscalBurger.png";
import friedCheese from "../assets/menu/snacks/friedCheese.png";
import airChesse from "../assets/menu/snacks/airChesse.png";
import chickenStrips from "../assets/menu/snacks/chickenStrips.png";
import semgaBruscket from "../assets/menu/snacks/semgaBruscket.png";
import smorrebrods from "../assets/menu/snacks/smorrebrods.png";
import midii from "../assets/menu/snacks/midii.png";
import fishAndChips from "../assets/menu/snacks/fishAndChips.png";
import cheeseFriha from "../assets/menu/snacks/cheeseFriha.png";
import sandwichStew from "../assets/menu/snacks/sandwichStew.png";
import saltedSalmon from "../assets/menu/snacks/saltedSalmon.png";
import wildJerky from "../assets/menu/snacks/wildJerky.png";
import fishForVodka from "../assets/menu/snacks/fishForVodka.png";
import beerBoard from "../assets/menu/snacks/beerBoard.png";
import shrimpMagadans from "../assets/menu/snacks/shrimpMagadans.png";
import grenky from "../assets/menu/snacks/grenky.png";
import chickenWings from "../assets/menu/snacks/chickenWings.png";
import creamPasta from "../assets/menu/main/creamPasta.png";
import mashedStew from "../assets/menu/main/mashedStew.png";
import cheeseSausages from "../assets/menu/main/cheeseSausages.png";
import chickenPasta from "../assets/menu/main/chickenPasta.png";
import salad1 from "../assets/menu/salads/1.png";
import salad2 from "../assets/menu/salads/2.png";
import salad3 from "../assets/menu/salads/3.png";
import salad4 from "../assets/menu/salads/4.png";
import salad5 from "../assets/menu/salads/5.png";
import soup1 from "../assets/menu/soups/soup1.png";
import soup2 from "../assets/menu/soups/soup2.png";
import soup3 from "../assets/menu/soups/soup3.png";
import soup4 from "../assets/menu/soups/soup4.png";
import soup5 from "../assets/menu/soups/soup5.png";
import soup6 from "../assets/menu/soups/soup6.png";
import soup7 from "../assets/menu/soups/soup7.png";
import des1 from "../assets/menu/deserts/des1.png";
import des2 from "../assets/menu/deserts/des2.png";
import ga1 from "../assets/menu/garnish/ga1.png";
import ga2 from "../assets/menu/garnish/ga2.png";
import ga4 from "../assets/menu/garnish/ga4.png";
import {MenuSectionType} from "../App";
import {v4} from "uuid";


export const grillAndMeet: MenuSectionType = {
    title: 'Гриль и мясо',
    items: [
        {id: v4(), name: 'Стейк Клод', weight: "220г", price: 429, img: stakeCload},
        {id: v4(), name: 'Ароматное куриное филе', weight: "180г", price: 349, img: chickenFillet},
        {id: v4(), name: 'Стейк из семги с соусом песто', weight: "250г", price: 699, img: steakSalmon},
        {id: v4(), name: 'Ребра BBQ для крепышей', weight: "600г", price: 1399, img: bbqRibs},
        {id: v4(), name: 'Куриные колбаски с сыром', weight: "400г", price: 299, img: chickenSausages},
        {id: v4(), name: 'Мраморное говяжье ребро', weight: "350г", price: 1199, img: beefRib},
        {id: v4(), name: 'Стейк XIII', weight: "200г", price: 1099, img: steakXIII},
        {id: v4(), name: 'Стейк Денвер', weight: "200г", price: 999, img: steakDenver},
        {id: v4(), name: 'Стейк Хрюша', weight: "200г", price: 439, img: steakHrusha},
        {id: v4(), name: 'Стейк Стриплойн', weight: "200г", price: 999, img: steakStriployn},
        {id: v4(), name: 'Стейк Трай-Тип', weight: "200г", price: 929, img: steakTryTip},
    ]
}
export const burgersAndStreetFood: MenuSectionType = {
    title: 'Бургеры и фастфуд',
    items: [
        {id: v4(), name: 'Сырный бургер', weight: "400г", price: 313, img: cheeseBurger},
        {id: v4(), name: 'Бургер с камамбером', weight: "700г", price: 599, img: camomberBurger},
        {id: v4(), name: 'Сырная шаверма', weight: "200г", price: 269, img: cheeseShaverma},
        {id: v4(), name: 'Острый хот-дог', weight: "200г", price: 269, img: spicyHotDog},
        {id: v4(), name: 'Чизбургер с котлетой из мраморной говядины', weight: "700г", price: 599, img: beefBurger},
        {id: v4(), name: 'Кесадилья', weight: "300г", price: 299, img: cesadiliya},
        {
            id: v4(),
            name: 'Американский сэндвич с рваной говядиной и бульоном',
            weight: "300г",
            price: 399,
            img: americanBurger
        },
        {id: v4(), name: 'Паб сэндвич', weight: "300г", price: 399, img: pubSandwich},
        {id: v4(), name: 'Бургер Дядя Толя', weight: "350г", price: 499, img: tolyaBurger},
        {id: v4(), name: 'Хот-дог с сыром чеддер', weight: "200г", price: 289, img: chederHotDog},
        {id: v4(), name: 'Деревенский бургер', weight: "800г", price: 639, img: willageBurger},
        {id: v4(), name: 'Московский бургер', weight: "350г", price: 399, img: moscalBurger},
    ]
}
export const snacks: MenuSectionType = {
    title: 'Закуски',
    items: [
        {id: v4(), name: 'Жареный сыр с пажитником', weight: "120г", price: 369, img: friedCheese},
        {id: v4(), name: 'Воздушный копченый сыр', weight: "100г", price: 199, img: airChesse},
        {id: v4(), name: 'Стрипсы из куриного филе', weight: "180г", price: 249, img: chickenStrips},
        {id: v4(), name: 'Брускетта с слабосоленой семгой и песто', weight: "150г", price: 279, img: semgaBruscket},
        {id: v4(), name: 'Сморреброды с ростбифом и камамбером', weight: "260г", price: 299, img: smorrebrods},
        {id: v4(), name: 'Мидии с сыром дорблю в томатном соусе', weight: "280г", price: 429, img: midii},
        {id: v4(), name: 'Fish and Chips', weight: "250г", price: 349, img: fishAndChips},
        {id: v4(), name: 'Сырнофриха с беконом', weight: "250г", price: 299, img: cheeseFriha},
        {id: v4(), name: 'Бутерброд с тушенкой', weight: "180г", price: 249, img: sandwichStew},
        {id: v4(), name: 'Слабосоленая семга', weight: "80г", price: 499, img: saltedSalmon},
        {id: v4(), name: 'Вяленая дичь', weight: "130г", price: 299, img: wildJerky},
        {id: v4(), name: 'Селедочка под водочку', weight: "150", price: 329, img: fishForVodka},
        {id: v4(), name: 'Большая пивная доска', weight: "550", price: 599, img: beerBoard},
        {id: v4(), name: 'Магаданские креветки', weight: "260", price: 649, img: shrimpMagadans},
        {id: v4(), name: 'Гренки классические', weight: "150г", price: 169, img: grenky},
        {id: v4(), name: 'Огненные куриные крылья', weight: "250г", price: 349, img: chickenWings},
    ]
}
export const main: MenuSectionType = {
    title: 'Основные блюда',
    items: [
        {id: v4(), name: 'Паста в сливочном соусе', weight: "310г", price: 313, img: creamPasta},
        {id: v4(), name: 'Эксклюзивная тушенка с пюрешкой', weight: "300г", price: 369, img: mashedStew},
        {id: v4(), name: 'Куриные колбаски с сыром', weight: "200г", price: 1, img: cheeseSausages},
        {id: v4(), name: 'Паста в сливочном соусе с беконом и цыпленком', weight: "350г", price: 429, img: chickenPasta},

    ]
}
export const salads: MenuSectionType = {
    title: 'Салаты',
    items: [
        {id: v4(), name: 'Салат с семгой и соусом винегар', weight: "310г", price: 313, img: salad1},
        {id: v4(), name: 'Салат с говяжьей вырезкой, свежими овощами', weight: "300г", price: 369, img: salad2},
        {id: v4(), name: 'Ставропольский Цезарь', weight: "200г", price: 1, img: salad3},
        {id: v4(), name: 'Салат из жареных хрустящих баклажанов', weight: "350г", price: 429, img: salad4},
        {id: v4(), name: 'Салат с розовыми кубанскими томатами', weight: "350г", price: 429, img: salad5},

    ]
}
export const soups: MenuSectionType = {
    title: 'Супы',
    items: [
        {id: v4(), name: 'Окрошка', weight: "", price: 199, img: soup1},
        {id: v4(), name: 'Суп дня', weight: "", price: 0, img: soup2},
        {id: v4(), name: 'Сырный суп', weight: "", price: 239, img: soup3},
        {id: v4(), name: 'Суп Том-Кха', weight: "", price: 239, img: soup4},
        {id: v4(), name: 'Суп гуляш', weight: "", price: 289, img: soup5},
        {id: v4(), name: 'Солянка', weight: "", price: 249, img: soup6},
        {id: v4(), name: 'Суп-лапша из Петушка', weight: "", price: 149, img: soup7},
    ]
}
export const deserts: MenuSectionType = {
    title: 'Десерты',
    items: [
        {id: v4(), name: 'Домашний пирог с яблоком и облепихой', weight: "130г", price: 99, img: des1},
        {id: v4(), name: 'Стейк Стриплойн', weight: "200г", price: 289, img: des2},

    ]
}
export const garnish: MenuSectionType = {
    title: 'Гарнир',
    items: [
        {id: v4(), name: 'Овощи гриль', weight: "200г", price: 229, img: ga1},
        {id: v4(), name: 'Картофельное пюре', weight: "200г", price: 89, img: ga2},
        {id: v4(), name: 'Картофель фри', weight: "180г", price: 199, img: ga4},
        {id: v4(), name: 'Молодой картофель с грибами и луком', weight: "280г", price: 149, img: ga4},
    ]
}