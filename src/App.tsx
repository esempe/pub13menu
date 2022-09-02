import React, {useEffect} from 'react';
import './App.css';
import {MenuItem} from "./components/MenuSection/MenuSection";
import {MainPage} from "./components/MainPage/MainPage";
import {Navigate, Route, Routes, useParams} from "react-router-dom";
import {BasketPage} from "./components/BasketPage/BasketPage";
import {Layout} from "./components/Layout";
import {setTable} from "./redux/slices/basketSlice";
import {useAppDispatch} from "./common/hooks";


export type MenuSectionType = {
    title: string;
    items: MenuItem[]
}

export function App() {

    return (
        <div className="globalWrapper">
            <Routes>
                <Route path={'/'} element={<Navigate to={"/table/0"}/>}/>
                <Route path={'/table/'} element={<Navigate to={"/table/0"}/>}/>
                <Route path="/table/" element={<Layout/>}>
                    <Route path={'/table/:tableID'} element={<MainPage/>}/>
                    <Route path={'basket/'} element={<BasketPage/>}/>
                </Route>

            </Routes>
        </div>
    );
}

