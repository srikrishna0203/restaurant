import React, { useState } from 'react';
import './Reserve.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Reserve = () => {
    let [data, setdata] = useState({});
    let navigate = useNavigate();

    let fun = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    };
    const handleSubmit = () => {
        if (Object.values(data).some((val) => val === " ")) {
            alert('Please fill in all fields');
            return;
        }
        axios.post('http://localhost:3000/store', data)
            .then((res) => {
                navigate('/timer');
            })
            .catch((err) => console.log(err));
    };    
    return (
        <div className='reserve-cont'>
            <h3 style={{ fontSize: '25px', padding: '10px', fontFamily: '-moz-initial' }}>Please fill the details</h3>
            <div className='cont'>
                <input type='text' placeholder='Enter Your Name' name='name' onChange={fun} />
                <input type='number' placeholder='Phone Number' name='phone' onChange={fun} />
                <input type='text' placeholder='Email Id' name='email' onChange={fun} />
                <input type='date' name='date' onChange={fun} />
                <input type='text' placeholder='Address' name='Address' onChange={fun} />
            </div>
            <div className='submit-button'>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default Reserve;
