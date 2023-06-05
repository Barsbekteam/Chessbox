import React from 'react';
import Registration from "../Group/Registration";
import {useSelector} from "react-redux";
import Loader from "../../Loader";

const Current = () => {
    const {competition, loader} = useSelector(state => state.main)
    return (
        <div>
            {loader && <Loader/>}
            <div className="group">
                {
                    competition.slice(3, 6).map(el => <Registration el={el} key={el.id}/>)
                }
            </div>
        </div>
    );
};

export default Current;