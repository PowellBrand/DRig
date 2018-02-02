import React, { Component } from 'react';
import axios from 'axios';


export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdmin: false,
            logOut: false
        } 
    }
    componentDidMount() {
        axios.get('auth/me').then(({ data }) => {
            this.setState({
                isAdmin: data
            })
        })
    }
    auth() {
        this.setState({
            logOut: !this.state.logOut,
        })
    }


    render() {
        return (
            <div className='mainLanding'>
                <div className="socialContainer">
                    <div className='welcomeCont'>
                        <h1 className='welcome'>Welcome!</h1>
                        <p className='intro'>Check out my book to the right, or for more information click Books up above.</p><br />
                        <p className='intro'>Follow me on facebook, twitter, youtube and instagram, or email me by clicking the Contact link</p><br />
                        <p className='intro'>See what else I have to say on my blog page.</p>
                    </div>
                    {/* auth buttons */}
                    <div className='authCont'>
                        <a href={process.env.REACT_APP_LOGOUT}><button onClick={this.auth} className={this.state.isAdmin ? 'logOut' : 'hide'}>Logout</button></a>
                        <a href={process.env.REACT_APP_LOGIN}><button onClick={this.auth} className={this.state.isAdmin ? 'hide' : 'logIn'}>Login</button></a>


                    </div>
                    <div className='social-box'>
                        <a className='socialbtn' href="https://www.youtube.com/user/Davrilor"><div className='ytb'></div></a>
                        <a className='socialbtn' href="https://twitter.com/DavidRigtrup"><div className='twttr'></div></a>
                        <a className='socialbtn' href="https://www.facebook.com/david.rigtrup.5"><div className='fcbk'></div></a>
                        <a className='socialbtn' href="https://www.instagram.com/david_rigtrup/"><div className='nstgrm'></div></a>
                    </div>
                </div>
                <div className="bookinfo">
                    <div className='coverPic'></div>
                    <div className='bookDesCont'>
                        <div className='bookBox'>
                            <p className='bookDes'>A sci-fantasy novel set in a dystopian city with a strong female protagonist surrounded by complex side characters.</p><br />
                            <p className='bookDes'>Nocturnal is built on interesting dialogue, intense action, with a bit of philosphy tying everything together.</p><br />
                        </div>
                        <a className='buyLinkLanding' href="https://www.amazon.com/Nocturnal-Spirits-1-David-Rigtrup/dp/1975807790/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr="><button className='buybtnLand'>BUY A COPY TODAY!</button></a><br />
                    </div>

                </div>

            </div>
        )
    }
}