import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import coverPic from './coverPic.jpg';
import TealBox from '../tealBox';


export default class Landing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            //Test admin functions
            isAdmin: false
        }

    }

    render() {
        ////////////////////////
        //Test Admin Functions//
        ////////////////////////
        let adminDisplay = this.state.isAdmin&& <TealBox/> 
        //End Test//
        return (
            <div className='mainBod'>
                <div className="socialContainer">
                    <div className='recentmsg'>This will display a message from the author</div>
                    <div className='social-box'>
                        <a className='ytb' href="https://www.youtube.com/user/Davrilor"><div className='socialbtn'>YouTube</div></a>
                        <a className='twttr' href ="https://twitter.com/davrilor"><div className='socialbtn'>Twitter</div></a>
                        <a className='fcbk' href ="https://www.facebook.com/david.rigtrup.5"><div className='socialbtn'>FaceBook</div></a>
                        <div className='socialbtn'>Other</div>
                        {adminDisplay}
                        <a className="secLogin" href="http://localhost:4000/auth/login"><button>;)</button></a>
                        <a className="secLogin" href="http://localhost:4000/auth/logout"><button>:(</button></a>
                    </div>
                </div>
                <div className="bookinfo">
                    <div className='coverPic'>
                        <img src={coverPic} />

                    </div>
                    <div className='bookDesc'>
                        <p>This is a small description of the book</p>
                    </div>
                    <a className='buyLinkLanding' href="https://www.amazon.com/Nocturnal-Spirits-1-David-Rigtrup/dp/1975807790/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr="><button className='buybtnLand'>BUY A COPY TODAY!</button></a><br />

                </div>

            </div>
        )
    }
}