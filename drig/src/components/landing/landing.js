import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import coverPic from './coverPic.jpg';


export default class Landing extends Component {

    render() {
        return (
            <div className='mainBod'>
                <div className="socialContainer"> 
                    <div className='recentmsg'>This will display a message from the author</div>      
                    <div className='social-box'>
                        <div className='socialbtn'>YouTube</div>
                        <div className='socialbtn'>Twitter</div>
                        <div className='socialbtn'>FaceBook</div>
                        <div className='socialbtn'>Other</div>
                        <a href={process.env.APP_LOGIN}><button>;)</button></a>                      
                    </div>
                </div>
                <div className="bookinfo">
                    <div className='coverPic'>
                        <img src = {coverPic}/> 
                        
                    </div>
                    <div className='bookDesc'>
                        <p>This is a small description of the book</p>
                    </div>
                    <a className='buyLink' href="https://www.amazon.com/Nocturnal-Spirits-1-David-Rigtrup/dp/1975807790/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr="><button className='buybtn'>BUY A COPY TODAY!</button></a><br/>
                    
                </div>

            </div>
        )
    }
}