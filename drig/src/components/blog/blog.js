import React, { Component } from 'react';
import axios from 'axios';
// import EditBlog from './blogEdit';


export default class Blog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            title: '',
            date: '',
            author: '',
            message: '',
            toEdit: false,
            isAdmin: false,
            messageid: ''
        }

    }


    componentDidMount() {
        axios.get('/blog/messages')
            .then(({ data }) => {
                this.setState({
                    messages: data
                })

            })
            .catch((error) => {
                console.log(error)
            });
        axios.get('/auth/me').then(({ data }) => {
            this.setState({
                isAdmin: data
            })

        }).catch(e => { })
    }
    //Admin Auth check
    adminCheck(bool) {
        this.setState({
            isAdmin: !this.state.admin
        })
    }

    deletePost(id) {
        axios.delete(`/blog/delete/${id}`)
            .then((res) => {
                this.setState({
                    messages: res.data
                })

            })
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

    editPost(id) {
        this.setState({
            toEdit: !this.state.toEdit,
            messageid: id
        })
    }

    handleClick(id) {
        var obj = {
            title: this.state.title,
            date: this.state.date,
            author: this.state.author,
            message: this.state.message
        }
        axios.put(`/blog/editPost/${id}`, obj)
            .then((res) => {
                this.setState({
                    messages: res.data
                })
            })
    }

    render() {

        let messages = this.state.messages.map(message =>
            <div className='blogPost' key={message.id}>
            <br />
                <h1 className='blogTitle'>{message.title}</h1>
                <h3 className='blogDate'>{message.date}</h3><br />
                <h2 className='blogAuth'>{message.author}</h2><br />
                <div className='blogMes'>{message.message.split('\n').map(line => <p>{line}<br/></p>)}</div><br /><br />
                {this.state.isAdmin ?
                    <div><button className='delPostBtn' onClick={() => this.deletePost(message.id)} >Delete</button>
                        <button className='editPostBtn' onClick={() => this.editPost(message.id)} >Edit</button>
                    </div>
                    : null}
                    {/* === was == */}
                {this.state.toEdit && this.state.messageid === message.id ?
                    <p>
                        <div className='postEdit'>
                            <label>Title:</label>
                            <input onChange={(e) => this.handleTitle(e.target.value, 'title')} type='text' ref='Title' value={this.state.title} />
                            <label>Date:</label>
                             <input onChange={(e) => this.handleDate(e.target.value, 'date')} type='text' ref='Date' value={this.state.date} />
                            <label>Author:</label>
                            <input onChange={(e) => this.handleAuthor(e.target.value, 'author')} type='text' ref='Author' value={this.state.author} />
                            <label>Message:</label>
                            <textarea onChange={(e) => this.handleMessage(e.target.value, 'message')} className='msgBox' ref='message' rows="25" cols='50' value={this.state.message} />
                            <button className='blogbtn' onClick={(e) => this.handleClick(message.id)}>Submit Change</button>
                    </div>
                    </p>
                    : null}
            </div>

        )

        return (
            <div className='mainBlogBod'>
                
                    <div className='blogMesBox'>
                        {messages}
                    </div>
                
            </div>
        )
    }
}