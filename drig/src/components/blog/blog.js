import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Blog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
        console.log(props)
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
    }

    deletePost(id){
        axios.delete(`/blog/delete/${id}`)
        .then((res)=> {
            this.setState({
                messages: res.data
            })
            
        })
    }

    editPost(id){
        axios.put(`/blogPost/${id}`, {title: `sub`})
        .then((res)=>{
            this.setState({
                messages: res.data
            })
        })
    }

    render() { 
        let messages= this.state.messages.map(message => 
            <div key={message.id}>
                <h1 className='blogTitle'>{message.title}</h1><br/>
                <h3 className='blodDate'>{message.date}</h3><br/>
                <h2 className='blogAuth'>{message.author}</h2><br/>
                <p className='blogMes'>{message.message}</p><br/>
                <button className='delPostBtn' onClick={()=> this.deletePost(message.id)} >Delete</button>
                <button className='editPostBtn' onClick={()=> this.editPost(message.id)} >Edit</button>
            </div>
            )
        
        return (
            <div className='mainBod'>
                <div className='blogCont'>
                    {messages}
                </div>
            </div>
        )
    }
}