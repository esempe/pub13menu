import React from 'react';

import s from "./BasketPage.module.css"
import {useNavigate} from "react-router-dom";
import {BasketItem} from "./BasketItem/BasketItem";
import {useAppDispatch, useAppSelector} from "../../common/hooks";
import {addComment} from "../../redux/slices/basketSlice";

export const BasketPage = () => {
    const navigate = useNavigate()
    const onBackButton = () => {
        navigate(-1)
    }
    const orderList = useAppSelector(state => state.basket.order)
    console.log(orderList)
    const dispatch = useAppDispatch()
    const listOfBasketItems = orderList.map(item => <BasketItem itemID={item.itemID}
                                                                price={item.price}
                                                                title={item.itemTitle}
                                                                quantity={item.quantity}
                                                                key={item.itemID}/>)
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <button onClick={onBackButton} className={s.backButton}>Назад</button>
                <div className={s.logo}>PUB13</div>
                <div className={s.fakeLogo}></div>
            </div>
            <div className={s.textareaWrapper}>
                <textarea placeholder={`Комментарий к заказу`}
                          onChange={(e)=>dispatch(addComment(e.currentTarget.value))}
                          className={s.textarea}
                          rows={1}>
                </textarea>
            </div>
            <div className={s.basketBody}>
                <div className={s.title}> ИТОГО:</div>
                <div className={s.basketItemList}>
                    {listOfBasketItems}
                </div>
            </div>
            <div className={s.spacer}></div>
        </div>
    );
};

