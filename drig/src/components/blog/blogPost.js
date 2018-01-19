import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class BlogPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            date: '',
            author: '',
            message: '',
            isAdmin: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
    }

    componentWillMount(){
        axios.get('/auth/me').then(({ data }) => {
            this.setState({
                isAdmin: data
            })

        }).catch(e => { })
    }
    

    handleTitle(e) {
        
        this.setState({
            title: e,
                     
        })
    }
    handleDate(e) {
        
        this.setState({
            date: e
           
        })
    }
    handleAuthor(e) {
        
        this.setState({
            author: e
           
        })
    }
    handleMessage(e) {
        
        this.setState({
            message: e
           
        })
    }
    //Admin Auth check
    adminCheck(bool) {
        this.setState({
            isAdmin: !this.state.admin
        })
        
    }

    handleClick(e) {
        e.preventDefault()
        axios.post('/blog/post', {
            title: this.state.title,
            date: this.state.date,
            author: this.state.author,
            message: this.state.message
        })
        
        alert("Posted");
        
        this.setState({
            title: '',
            date: '',
            author: '',
            message:''
        })
    }



    render() {


        return (
            <div className='mainBod'>
                <div className='blogCont'>
                    <form onSubmit={this.handleClick}>
                        <p>
                            <label>Title:</label>
                            <input onChange={(e)=> this.handleTitle(e.target.value, 'title')} type='text' ref='Title' value={this.state.title} />
                        </p>
                        <p>
                            <label>Date:</label>
                            <input onChange={(e)=> this.handleDate(e.target.value, 'date')} type='text' ref='Date' value={this.state.date} />
                        </p>
                        <p>
                            <label>Author:</label>
                            <input onChange={(e)=> this.handleAuthor(e.target.value, 'author')} type='text' ref='Author' value={this.state.author} />
                        </p>
                        <p>
                            <label>Message:</label>
                            <textarea onChange={(e)=> this.handleMessage(e.target.value, 'message')} className='msgBox' ref='message' rows="50" cols='145' value={this.state.message} />
                        </p>
                    {this.state.isAdmin?
                        <button type="submit">Submit</button>
                        : null}
                    </form>
                </div>
            </div>
        )
    }
}