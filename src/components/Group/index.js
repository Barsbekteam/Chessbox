import React, {useEffect, useState} from 'react';
import '../../App.scss'
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {getCompetitions, getLoader} from "../../Store/testReduce";
import Registration from "./Registration";

const Group = () => {
    const {competition, loader, f} = useSelector(s => s.main)
    const dispatch = useDispatch()

    const getCompetition = async () => {
        try {
            dispatch(getLoader(true))
            const tests = await axios(`https://63f48a6e2213ed989c44ef9c.mockapi.io/test`)
            const {data} = await tests
            dispatch(getCompetitions(data))
            dispatch(getLoader(false))
        } catch (e) {
            console.log(e)
        }
    }
    console.log(f)
    useEffect(() => {
        getCompetition()
    }, [])
    return (
        <div>
            <div className="group">
                {
                    competition.slice(0, 3).map(el => <Registration el={el} key={el.id}/>)
                }
            </div>
        </div>
    );
};

export default Group;