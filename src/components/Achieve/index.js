import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import Over from "./over";

const Achieve = () => {
    const {competition} = useSelector(state => state.main)
    return (
        <div>
            <div className="group">
                {
                    competition.slice(-3).map(el => <Over el={el} key={el.id}/>)
                }
            </div>
        </div>
    );
};

export default Achieve;