import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import nocArt from './Noc_Art.jpg';


export default class Books extends Component {

    render() {
        return (
            <div className='mainBod'>
                <a className='buyLinkBook' href="https://www.amazon.com/Nocturnal-Spirits-1-David-Rigtrup/dp/1975807790/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr="><button className='buybtn'>BUY A COPY TODAY!</button></a>
                <div className="bookCont">

                </div>
            </div>
        )
    }
}