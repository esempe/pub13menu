import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v4} from "uuid";


export type OrderType ={
    itemID:string;
    itemTitle?:string;
    quantity:number;
    price:number;
}
export type BasketStateType = {
    order:OrderType[]
    comment:string;
    tableID:string | undefined;
}
type ChangeQuantityPayloadType = {
    itemID:string;
    quantity:number;
}
const initialState:BasketStateType = {
    order:[],
    comment:'',
    tableID:''
}

export const basketSlice = createSlice({
    name:"basket",
    initialState,
    reducers:{
        addItem(state:BasketStateType, action:PayloadAction<OrderType>){
            if (state.order.find(i => i.itemID === action.payload.itemID)){
                state.order = state.order.filter( i => i.itemID !== action.payload.itemID)
            } else { state.order = [...state.order, action.payload] }
        },
        setTable(state:BasketStateType, action:PayloadAction<string | undefined>){
            state.tableID = action.payload
        },
        changeQuantity(state:BasketStateType,  action:PayloadAction<ChangeQuantityPayloadType>){
            const {itemID,quantity} = action.payload
            state.order = state.order.map( i => i.itemID === itemID ? {...i,quantity} : i)
        },
        addComment(state:BasketStateType,action:PayloadAction<string>){
            state.comment = action.payload
        }
    }
})

export const {addItem,setTable,changeQuantity,addComment} = basketSlice.actions