import React, { Component } from 'react';
import axios from 'axios'


export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            from: '',
            message: ''
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault()
        axios.post('/contact/send', {
            name: this.refs.name.value,
            from: this.refs.email.value,
            to: 'brandoTestMail@gmail.com',
            subject: 'Email from your site',
            message: this.refs.message.value

        })
       this.refs.name.value = '';
       this.refs.email.value = '';
       this.refs.message.value = '';


        alert("Email sent");
        
    }

    render() {
        return (
            <div className='mainBodContact'>
                <div className='container'>

                    <div className='contact'>
                        <h3 className='email'>Email Me</h3><br/>
                        <form className='contForm' onSubmit={this.handleClick}>
                            <p>
                                <label>Name:</label>
                                <input className='contIn' type='text' ref="name" />
                            </p>
                            <p>
                                <label>Email Address:</label>
                                <input className='contIn' type="email" ref="email" />
                            </p>
                            <p>
                                <label>Message:</label>
                                <textarea className='contMes' ref="message" rows="7"></textarea>
                            </p>
                            <button type="submit">Submit</button>

                        </form>
                    </div>
                </div>

            </div>
        )
    }
}