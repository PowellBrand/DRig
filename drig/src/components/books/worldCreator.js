import React, { Component } from 'react';
import axios from 'axios';

export default class WorldCreator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            locid: '',
            description: '',
            isAdmin: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleLocid = this.handleLocid.bind(this);
        this.handleDes = this.handleDes.bind(this);
    }

    componentWillMount() {
        axios.get('/auth/me').then(({ data }) => {
            this.setState({
                isAdmin: data
            })

        }).catch(e => { })
    }

    handleName(e) {
        this.setState({
            name: e
        })
    }
    handleLocid(e) {
        this.setState({
            locid: e
        })
    }
    handleDes(e) {
        this.setState({
            description: e
        })
    }
    handleClick(e) {
        e.preventDefault()
        axios.post('/books/worldinfo/post', {
            name: this.state.name,
            locid: this.state.locid,
            description: this.state.description
        })
        alert("Created");

        this.setState({
            name: '',
            locid: '',
            description: ''
        })
    }

    render() {
        return (
            <div className='mainBod'>
                <div className='blogCont'>
                    <form onSubmit={this.handleClick}>
                        <p>
                            <label>Name:</label>
                            <input onChange={(e) => this.handleName(e.target.value, 'name')} type='text' ref='name' value={this.state.name} />
                        </p>
                        <p>
                            <label>Location ID:</label>
                            <input onChange={(e) => this.handleLocid(e.target.value, 'locid')} type='text' ref='locid' value={this.state.locid} />
                        </p>
                        <p>
                            <label>Description:</label>
                            <textarea onChange={(e) => this.handleDes(e.target.value, 'description')} className='msgBox' ref='description' rows="20" cols='50' value={this.state.description} />
                        </p>
                        {this.state.isAdmin ?
                            <button className='blogbtn' type="submit">In the beginning...</button>
                            : null}
                    </form>
                </div>

            </div>
        )
    }
}