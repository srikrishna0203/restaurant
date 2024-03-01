import React, { useEffect, useState } from 'react';
import './Timer.css';
import { useNavigate } from "react-router-dom";
const Timer = () => {
    let [time, settime] = useState(5);
    let [msg, setmsg] = useState('');
    let navigate = useNavigate();
    useEffect(() => {
        let interval = setInterval(() => {
            if (time >=1) {
                settime(time - 1);
                setmsg("Congrats table Reserved");
            } else {
                clearInterval(interval);     
                navigate('/')
            }
        }, 1200);
        return () => clearInterval(interval);
    },[time]);
    return (
        <div className='container'>
            <div className="min-cont">
                <h1>{msg}</h1>
                <div className="timer">
                    <p>{time}</p>  
                </div> 
            </div>
        </div>
    );
};
export default Timer;