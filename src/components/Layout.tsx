import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";
import {ReactComponent as BackToTop} from "../assets/backToTop.svg";
import {useAppDispatch, useAppSelector} from "../common/hooks";
import {setTable} from "../redux/slices/basketSlice";

export const Layout = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 800) {
                setToTopButtonVisible(true)
            } else {
                setToTopButtonVisible(false)
            }
        });
    }, []);

    const [basketButtonMode, setBasketButtonMode] = useState('menu');
    const {tableID} = useParams()

    useEffect(() => {
        if (pathname === `/table/${tableID}`) {
            setBasketButtonMode('menu')
        } else {
            setBasketButtonMode('basket')
        }
    }, [pathname]);

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const userOrder = useAppSelector(state => state.basket.order)
    const tableIDFromStore = useAppSelector(state => state.basket.tableID)
    const comment = useAppSelector(state => state.basket.comment)
    const userOrderQuantitySum = userOrder.reduce(
        (previousValue, currentValue) => previousValue + currentValue.quantity,
        0,
    );
    const userOrderTotalSum = userOrder.reduce(
        (previousValue, currentValue) => previousValue + currentValue.price * currentValue.quantity,
        0,
    );
    const onBasketButtonClick = () => {
        if (basketButtonMode === 'menu') {
            navigate('basket')
        } else {

            const listOfStrings = userOrder.map(i => `• ${i.itemTitle} | ШТ: ${i.quantity}\n`)
            const log =       `кол-во позиций: <b>${userOrder.length}</b>\n` +
                ` стол номер: <b>${tableIDFromStore}\n</b>` +
                ` комментарий к заказу: <b>${comment}\n</b>` +
                listOfStrings
            axios.post('https://api.telegram.org/bot5754948674:AAEVROck_Qpe1uDUF-kbYXNqYHoN1Zl_W7g/sendMessage', {
                chat_id: '-765117305',
                text: log.replaceAll(',', ''),
                parse_mode: 'HTML'
            }).then(res => console.log(res))
        }
    }
    const [toTopButtonVisible, setToTopButtonVisible] = useState(false);
    return (
        <>
            <div className="toTopButton">
                {toTopButtonVisible && (
                    <ScrollIntoView selector={'#start'}>
                        <BackToTop className={'BackToTopButtonSVG'}/>
                    </ScrollIntoView>
                )}
                <div className="basketButtonWrapper">
                    <button onClick={onBasketButtonClick}>
                        <div className="basketButtonInner">
                            <div className="basketButtonInfo">
                                {userOrderQuantitySum} позиций | {userOrderTotalSum}р
                            </div>
                            <div className="basketButtonText">
                                {basketButtonMode === 'basket' ? 'отправить заказ официанту' : 'В коризну'}
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <Outlet/>
        </>
    );
};

