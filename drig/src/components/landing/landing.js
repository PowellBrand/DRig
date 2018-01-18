import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import coverPic from './coverPic.jpg';
import TealBox from '../tealBox';
import axios from 'axios';


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
                    <div className='welcomeCont'>
                        <h1 className='welcome'>Welcome to my site!</h1>
                        <p className='intro'>Check out my book to the right, or for more information click Books up above.</p><br/>
                        <p className='intro'>Follow me on facebook, twitter, youtube and instagram, or email me by clicking the Contact link</p><br/>
                        <p className='intro'>See what else I have to say on my blog page.</p>
                    </div>
                        <a className="secLogin" href="http://localhost:4000/auth/login"><button>;)</button></a>
                        <a className="secLogin" href="http://localhost:4000/auth/logout"><button>:(</button></a>
                    <div className='social-box'>
                        <a className='socialbtn' href="https://www.youtube.com/user/Davrilor"><div className='ytb'></div></a>
                        <a className='socialbtn' href ="https://twitter.com/davrilor"><div className='twttr'></div></a>
                        <a className='socialbtn' href ="https://www.facebook.com/david.rigtrup.5"><div className='fcbk'></div></a>
                        <a className='socialbtn' href ="https://www.instagram.com/david_rigtrup/"><div className='nstgrm'></div></a>
                        
                        {adminDisplay}
                    </div>
                </div>
                <div className="bookinfo">
                    <div className='coverPic'>
                        <img src={coverPic} />

                    </div>
                    <div className='bookDesc'>
                        <p className='bookDes'>A sci-fantasy novel set in a dystopien city with a strong female protagonist surrounded by complex side characters.</p><br/>
                        <p className='bookDes'>Nocturnal is built on interesting dialogue, intense action, with a bit of philosphy tying everything together.</p><br/>
                    <a className='buyLinkLanding' href="https://www.amazon.com/Nocturnal-Spirits-1-David-Rigtrup/dp/1975807790/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr="><button className='buybtnLand'>BUY A COPY TODAY!</button></a><br />
                    </div>

                </div>

            </div>
        )
    }
}