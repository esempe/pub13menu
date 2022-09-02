import React, {ChangeEvent, FC, useState} from 'react';
import {ReactComponent as DeleteIcon} from "../../../assets/delete-icon.svg";
import s from './BasketItem.module.css'
import {useAppDispatch} from "../../../common/hooks";
import {addItem, changeQuantity} from "../../../redux/slices/basketSlice";

type BasketItemProps = {
    title:string |undefined;
    price:number;
    itemID:string;
    quantity:number;

}

export const BasketItem:FC<BasketItemProps> = ({title,price,itemID,quantity}) => {
    const dispatch = useAppDispatch()
    const [quantityV, setQuantityV] = useState(1);
    const onRemoveClickHandler = () => {
        dispatch(addItem({itemID,quantity,price}))
    }
    console.log(title,quantityV)
    const onSelectChange = (e:ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeQuantity({itemID,quantity:+e.currentTarget.value}))
    }
    return (
        <div  className={s.wrapper}>
            <div className={s.deleteButtonWrapper} onClick={onRemoveClickHandler}>
                <DeleteIcon  className={s.deleteIconSvg}/>
            </div>
            <div className={s.title}>{title}</div>
            <div className={s.quantity}>
                <select onChange={onSelectChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <div className={s.price}>{price} p</div>
        </div>
    );
};

