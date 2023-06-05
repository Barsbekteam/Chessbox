import React, {useEffect, useState} from 'react';
import './App.scss'
import Group from "./components/Group";
import {Route, Routes} from "react-router";
import Current from "./components/Current";
import Navigates from "./components/Nav";
import Achieve from "./components/Achieve";
import {useSelector} from "react-redux";
import Loader from "./Loader";

const App = () => {
const {loader} = useSelector(state => state.main)
    return (
        <div className="container">
            <Navigates/>
            {loader && <Loader/>}
            <Routes>
                <Route path={'/'} element={<Group/>}/>
                <Route path={'/current'} element={<Current/>}/>
                <Route path={'/achieve'} element={<Achieve/>}/>
            </Routes>
        </div>
    );
};

export default App;