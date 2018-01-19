import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'


export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state ={
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
        alert("Email sent");

        this.setState({
            name: '',
            from: '',
            message:''
        })

    }

    render() {
        return (
            <div className='mainBod'>
                <div className='container'>

                    <div className='contact'>
                        <h3>Email Me</h3>
                        <form onSubmit={this.handleClick}>
                            <p>
                                <label>Name</label>
                                <input type='text' ref="name" />
                            </p>
                            <p>
                                <label>Email Address</label>
                                <input type="email" ref="email" />
                            </p>
                            <p>
                                <label>Message</label>
                                <textarea  ref="message" rows="7"></textarea>
                            </p>
                            <button type="submit">Submit</button>

                        </form>
                    </div>
                </div>

            </div>
        )
    }
}