import React, {FC} from 'react';

import style from './MenuSection.module.css'

export type MenuItem = {
    id: number
    name: string
    weight: string
    price: number
    img: string;
}


type MenuSectionPropsType = {
    title: string;
    items: Array<MenuItem>
}

export const MenuSection: FC<MenuSectionPropsType> = ({title, items}) => {

    return (
        <div className={style.wrapper} >
            <div id={title.replace(/ /g,'')} className={style.title}>{title}</div>
            <div className={style.itemsWrapper}>
                {
                    items.map((item, index) => {
                        if (item.id % 2 === 0) {
                            return <MenuItemRight item={item}/>
                        } else {

                            return <MenuItemLeft item={item}/>
                        }

                    })
                },

            </div>
        </div>
    );
};


type MenuItemProps = {
    item: MenuItem
}
export const MenuItemLeft: FC<MenuItemProps> = ({item}) => {
    const {id, name, weight, price, img} = item
    return (
        <div className={style.itemWrapper}>
            <div className={style.img}>
                <img src={img} alt={`pic ${id}`}/>
            </div>
            <div className={style.infoWrapperRight}>
                <div className={style.name}>{name}</div>
                <div className={style.priceAndWeight}>
                    <span>{weight}</span>{weight && '/'}{price === 0 ? "бесплатно" : price}р
                </div>
            </div>
        </div>
    );
};
export const MenuItemRight: FC<MenuItemProps> = ({item}) => {
    const {id, name, weight, price, img} = item
    return (
        <div className={style.itemWrapper}>
            <div className={style.infoWrapperLeft}>
                <div className={style.name}>{name}</div>
                <div className={style.priceAndWeight}>
                    <span>{weight}</span>{weight && '/'}{price === 0 ? "бесплатно" : `${price}р`}
                </div>
            </div>
            <div className={style.img}>
                <img src={img} alt={`pic ${id}`}/>
            </div>
        </div>
    );
};



