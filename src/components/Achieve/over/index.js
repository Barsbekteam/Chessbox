import React, {useEffect, useState} from 'react';
import {FaMoneyBill} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import flag from './../../../image/flag.svg'
import star from "../../../image/stars.svg";
import stars from "../../../image/star.svg";
import {getTests} from "../../../Store/testReduce";

const Over = ({el}) => {
    const [registration, setRegistration] = useState(false)
    return (
        <div>
            <div>
                <div className="group__block" style={{borderBottom: el.id !== '3' ? '1px solid #DADADA' : ''}}>
                    <div className="group__block--world">
                        <h2>World Competition of <br/> Chessboxing June 2024</h2>
                        <p>Starts At June 17, 19:00 (Moscow time)</p>
                    </div>
                    <div className="group__block--price">
                        <p>{el.title}</p>
                        <div>
                            <p><FaMoneyBill/> Price: {el.price} $</p>
                            <p><FiUsers/> {el.users} participants enrolled</p>
                        </div>
                    </div>
                    <div style={{display: !registration ? '' : "none"}} className="group__block--registration">
                        <img src={star} className="star" alt="star"/>
                        <img src={star} className="stars" alt="star"/>
                        <img src={stars} className="starr" alt="star"/>
                        <button onClick={() => setRegistration(true)}>You are <br/> participant!</button>
                    </div>
                    <div style={{display: registration ? '' : "none"}} className="group__block--over">
                        <button onClick={() => setRegistration(false)}>This competition <br/> is over</button>
                        <img src={flag} alt="flag"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Over;