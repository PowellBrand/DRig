import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import profilePic from './David_Pic.jpg';


export default class About extends Component {

    render() {
        return (
            <div className='mainBod'>
                <div className="profilePic">
                    <img src={profilePic}/>
                </div>

            </div>
        )
    }
}