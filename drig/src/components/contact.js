import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Contact extends Component {

    render() {
        return (
            <div className='mainBod'>
                <div className='container'>
                   
                    <div className='contact'>
                        <h3>Email Me</h3>
                        <form method="POST" /*action="contact/send"*/>
                            <p>
                                <label>Name</label>
                                <input type='text' name="name" />
                            </p>
                            <p>
                                <label>Email Address</label>
                                <input type="email" name="email" />
                            </p>
                            <p>
                                <label>Message</label>
                                <textarea name="message" rows="7"></textarea>
                            </p>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}