import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import nocArt from './Noc_Art.jpg';
import axios from 'axios';


export default class Books extends Component {
    constructor(props) {
        super(props)
        this.state = {
            charBio: [],
            worldInfo: [],
            isAdmin: false
        }
        console.log(props)
    }

    componentDidMount() {
        axios.get('/books/characters')
            .then(({ data }) => {
                this.setState({
                    charBio: data
                })
            })
            .catch((e) => {
                console.log(e)
            });
        axios.get('/books/worldinfo')
            .then(({ data }) => {
                this.setState({
                    worldInfo: data
                })
            })
            .catch((e) => {
                console.log(e)
            });

        axios.get('auth/me').then(({ data }) => {
            this.setState({
                isAdmin: data
            })
        })
    }

    adminCheck(bool) {
        this.setState({
            isAdmin: !this.state.admin
        })
    }
    deleteChar(id) {
        axios.delete(`/books/delete/${id}`)
            .then((res) => {
                this.setState({
                    charBio: res.data
                })
            })
    }
    deleteWorld(id) {
        axios.delete(`/books/delete/world/${id}`)
            .then((res) => {
                this.setState({
                    worldInfo: res.data
                })
            })
    }

    render() {
        let charBio = this.state.charBio.map(char =>
            <div className='charBio' key={char.id}>
                <br />
                <br />
                <br />
                <br />
                <p>Name: {char.name}</p>
                <p>Full Name: {char.full_name}</p>
                <p>Species: {char.species}</p>
                <p>Sex: {char.sex}</p>
                <p>Height: {char.height}</p>
                <p>Weight: {char.weight}</p>
                <p>Skin Color: {char.skin_color}</p>
                <p>Hair Color: {char.hair_color}</p>
                <p>Eye Color: {char.eye_color}</p>
                <p>Features: {char.features}</p>
                <p>DoB: {char.date_of_birth}</p>
                <p>PoB: {char.place_of_birth}</p>
                <p>DoO: {char.date_of_ordination}</p>
                <p>PoO: {char.place_of_ordination}</p>
                <p>ID#: {char.identification_number}</p>
                <p>Echelon: {char.echelon}</p>
                <p>Occupation: {char.occupation}</p>
                <p>Background: {char.background}</p>
                {this.state.isAdmin ?
                    <div>
                        <button className='delPostBtn' onClick={() => this.deleteChar(char.id)} >Delete</button>
                    </div>
                    : null}
            </div>
        )
        let worldInfo = this.state.worldInfo.map(world =>
            <div className='worldInfo' key={world.id}>
                <br />
                <p>Name: {world.name}</p>
                <p>Description: {world.description}</p>
                {this.state.isAdmin ?
                    <div>
                        <button className='delPostBtn' onClick={() => this.deleteWorld(world.id)} >Delete</button>
                    </div>
                    : null}
            </div>
        )
        return (
            <div className='mainBookCont'>
                {/* <a className='buyLinkBook' href="https://www.amazon.com/Nocturnal-Spirits-1-David-Rigtrup/dp/1975807790/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr="><button className='buybtn'>BUY A COPY TODAY!</button></a> */}
                <div className="worldCont">
                    {charBio}

                    {worldInfo}

                </div>
            </div>
        )
    }
}