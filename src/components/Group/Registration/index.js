import React, {useState} from 'react';
import {FaMoneyBill} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import star from "../../../image/stars.svg";
import stars from "../../../image/star.svg";

const Registration = ({el}) => {
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
                    <div style={{display: registration ? '' : "none"}} className="group__block--ends">
                        <h2>Registration ends in:</h2>
                        <div className="group__block--ends__time">
                            <div>
                                <h3>12</h3>
                                <span>Days</span>
                            </div>
                            <div>
                                <h3>05</h3>
                                <span>Hours</span>
                            </div>
                            <div>
                                <h3>05</h3>
                                <span>minutes</span>
                            </div>
                        </div>
                        <button onClick={() => setRegistration(false)}>Participate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;