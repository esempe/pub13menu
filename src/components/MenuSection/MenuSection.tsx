import React, {FC, useEffect, useState} from 'react';

import s from './MenuSection.module.css'
import {useAppDispatch} from "../../common/hooks";
import {addItem, OrderType, setTable} from "../../redux/slices/basketSlice";
import {useParams} from "react-router-dom";

export type MenuItem = {
    id: string
    name: string
    weight: string
    price: number
    img: string;
}


type MenuSectionPropsType = {
    title: string;
    items: Array<MenuItem>
    userOrder:OrderType[]
}

export const MenuSection: FC<MenuSectionPropsType> = ({title, items,userOrder}) => {
    return (
        <div className={s.wrapper}>
            <div id={title.replace(/ /g, '')} className={s.title}>{title}</div>
            <div className={s.itemsWrapper}>
                {
                    items.map((item, index) =>
                        <MenuItemComponent userOrder={userOrder} key={item.id} order={index % 2 === 0 ? ["2", "1"] : ["1", "2"]} item={item}/>
                    )
                },
            </div>
        </div>
    );
};


type MenuItemProps = {
    item: MenuItem
    order: string[];
    userOrder:OrderType[]
}
export const MenuItemComponent: FC<MenuItemProps> = ({item, order,userOrder}) => {
    const {id, name, weight, price, img} = item
    const [selectItem, setSelectItem] = useState(!!userOrder.find(i => i.itemID === item.id));
    const dispatch = useAppDispatch()
    const {tableID} = useParams()
    const onDivClickHandler = () => {
        setSelectItem(!selectItem)
        dispatch(addItem({itemTitle:name,itemID:id,price,quantity:1}))
        dispatch(setTable(tableID))
    }
    return (
        <div onClick={onDivClickHandler} className={s.itemWrapper}>
            <div style={{order: order[1]}} className={s.img}>
                <img src={img} alt={`pic ${id}`}/>
            </div>
            <div style={{order: order[0]}}
                 className={`${s.infoWrapper} 
                 ${order[0] === '1' ? s.infoWrapperLeft : s.infoWrapperRight} `}>
                <div className={s.name}>{name}</div>
                { selectItem && <div className={s.selectedIcon}>ВЫБРАН</div>}
                <div className={s.priceAndWeight}>
                    <span>{weight}</span>{weight && '/'}{price === 0 ? "бесплатно" : price}р
                </div>
            </div>
        </div>
    );
};



