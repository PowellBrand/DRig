import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Landing extends Component {

    render() {
        return (
            <div className='mainBod'>
                <div className="social">                   
                    <div className='socialBox'>
                        <div className='socialbtn'></div>
                        <div className='socialbtn'></div>
                        <div className='socialbtn'></div>
                        <div className='socialbtn'></div>                      
                    </div>
                </div>
                <div className="bookinfo">
                    <div className='coverPic'></div>
                    <div className='bookDesc'></div>
                    <div className='buyLink'></div>
                    <div className='buyLink'></div>
                </div>

            </div>
        )
    }
}