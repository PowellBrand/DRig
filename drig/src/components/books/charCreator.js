import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class CharCreator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            full_name: '',
            species: '',
            sex: '',
            height: '',
            weight: '',
            skin_color: '',
            hair_color: '',
            eye_color: '',
            features: '',
            date_of_birth: '',
            place_of_birth: '',
            locid: '',
            date_of_ordination: '',
            place_of_ordination: '',
            identification_number: '',
            echelon: '',
            occupation: '',
            background: ''
        }
        this.handleName = this.handleName.bind(this);
        this.handleFName = this.handleFName.bind(this);
        this.handleSpecies = this.handleSpecies.bind(this);
        this.handleSex = this.handleSex.bind(this);
        this.handleHeight = this.handleHeight.bind(this);
        this.handleWeight = this.handleWeight.bind(this);
        this.handleSkin = this.handleSkin.bind(this);
        this.handleHair = this.handleHair.bind(this);
        this.handleEye = this.handleEye.bind(this);
        this.handleFeatures = this.handleFeatures.bind(this);
        this.handleDoB = this.handleDoB.bind(this);
        this.handlePoB = this.handlePoB.bind(this);
        this.handleLocId = this.handleLocId.bind(this);
        this.handleDoO = this.handleDoO.bind(this);
        this.handlePoO = this.handlePoO.bind(this);
        this.handleIdNum = this.handleIdNum.bind(this);
        this.handleEchelon = this.handleEchelon.bind(this);
        this.handleOcc = this.handleOcc.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    
    handleName(e) {
        
        this.setState({
            name: e,
                     
        })
    }
    handleFName(e) {
        
        this.setState({
            full_name: e
           
        })
    }
    handleSpecies(e) {
        
        this.setState({
            species: e
           
        })
    }
    handleSex(e) {
        
        this.setState({
            sex: e
           
        })
    }
    handleHeight(e) {
        
        this.setState({
            height: e
           
        })
    }
    handleWeight(e) {
        
        this.setState({
            weight: e
           
        })
    }
    handleSkin(e) {
        
        this.setState({
            skin_color: e
           
        })
    }
    handleHair(e) {
        
        this.setState({
            hair_color: e
           
        })
    }
    handleEye(e) {
        
        this.setState({
            eye_color: e
           
        })
    }
    handleFeatures(e) {
        
        this.setState({
            features: e
           
        })
    }
    handleDoB(e) {
        
        this.setState({
            date_of_birth: e
           
        })
    }
    handlePoB(e) {
        
        this.setState({
            place_of_birth: e
           
        })
    }
    handleLocId(e) {
        
        this.setState({
            locid: e
           
        })
    }
    handleDoO(e) {
        
        this.setState({
            date_of_ordination: e
           
        })
    }
    handlePoO(e) {
        
        this.setState({
            place_of_ordination: e
           
        })
    }
    handleIdNum(e) {
        
        this.setState({
            identification_number: e
           
        })
    }
    handleEchelon(e) {
        
        this.setState({
            echelon: e
           
        })
    }
    handleOcc(e) {
        
        this.setState({
            occupation: e
           
        })
    }
    handleBack(e) {
        
        this.setState({
            background: e
           
        })
    }
    handleClick(e) {
        e.preventDefault()
        axios.post('/books/character/post', {
            name: this.state.name,
            full_name: this.state.full_name,
            species: this.state.species,
            sex: this.state.sex,
            height: this.state.height,
            weight: this.state.weight,
            skin_color: this.state.skin_color,
            hair_color: this.state.hair_color,
            eye_color: this.state.eye_color,
            features: this.state.features,
            date_of_birth: this.state.date_of_birth,
            place_of_birth: this.state.place_of_birth,
            locid: this.state.locid,
            date_of_ordination: this.state.date_of_ordination,
            place_of_ordination: this.state.place_of_ordination,
            identification_number: this.state.identification_number,
            echelon: this.state.echelon,
            occupation: this.state.occupation,
            background: this.state.background
        })
        alert("Created");
        
        this.setState({
            name: '',
            full_name: '',
            species: '',
            sex: '',
            height: '',
            weight: '',
            skin_color: '',
            hair_color: '',
            eye_color: '',
            features: '',
            date_of_birth: '',
            place_of_birth: '',
            locid: '',
            date_of_ordination: '',
            place_of_ordination: '',
            identification_number: '',
            echelon: '',
            occupation: '',
            background: ''
        })
    }



    render() {
        return (
            <div className='mainBod'>
                <div className='blogCont'>
                    <form onSubmit={this.handleClick}>
                        <p>
                            <label>Name:</label>
                            <input onChange={(e)=> this.handleName(e.target.value, 'name')} type='text' ref='name' value={this.state.name} />
                        </p>
                        <p>
                            <label>Full Name:</label>
                            <input onChange={(e)=> this.handleFName(e.target.value, 'full_name')} type='text' ref='full_name' value={this.state.full_name} />
                        </p>
                        <p>
                            <label>Species:</label>
                            <input onChange={(e)=> this.handleSpecies(e.target.value, 'species')} type='text' ref='species' value={this.state.species} />
                        </p>
                        <p>
                            <label>Sex:</label>
                            <input onChange={(e)=> this.handleSex(e.target.value, 'sex')} type='text' ref='sex' value={this.state.sex} />
                        </p>
                        <p>
                            <label>Height:</label>
                            <input onChange={(e)=> this.handleHeight(e.target.value, 'height')} type='text' ref='height' value={this.state.height} />
                        </p>
                        <p>
                            <label>Weight:</label>
                            <input onChange={(e)=> this.handleWeight(e.target.value, 'weight')} type='text' ref='weight' value={this.state.weight} />
                        </p>
                        <p>
                            <label>Skin Color:</label>
                            <input onChange={(e)=> this.handleSkin(e.target.value, 'skin_color')} type='text' ref='skin_color' value={this.state.skin_color} />
                        </p>
                        <p>
                            <label>Hair Color:</label>
                            <input onChange={(e)=> this.handleHair(e.target.value, 'hair_color')} type='text' ref='hair_color' value={this.state.hair_color} />
                        </p>
                        <p>
                            <label>Eye Color:</label>
                            <input onChange={(e)=> this.handleEye(e.target.value, 'eye_color')} type='text' ref='eye_color' value={this.state.eye_color} />
                        </p>
                        <p>
                            <label>Features:</label>
                            <input onChange={(e)=> this.handleFeatures(e.target.value, 'features')} type='text' ref='features' value={this.state.features} />
                        </p>
                        <p>
                            <label>DoB:</label>
                            <input onChange={(e)=> this.handleDoB(e.target.value, 'date_of_birth')} type='text' ref='date_of_birth' value={this.state.date_of_birth} />
                        </p>
                        <p>
                            <label>PoB:</label>
                            <input onChange={(e)=> this.handlePoB(e.target.value, 'place_of_birth')} type='text' ref='place_of_birth' value={this.state.place_of_birth} />
                        </p>
                        <p>
                            <label>LocId:</label>
                            <input onChange={(e)=> this.handleLocId(e.target.value, 'locid')} type='text' ref='locid' value={this.state.locid} />
                        </p>
                        <p>
                            <label>DoO:</label>
                            <input onChange={(e)=> this.handleDoO(e.target.value, 'date_of_ordination')} type='text' ref='date_of_ordination' value={this.state.date_of_ordination} />
                        </p>
                        <p>
                            <label>PoO:</label>
                            <input onChange={(e)=> this.handlePoO(e.target.value, 'place_of_ordination')} type='text' ref='place_of_ordination' value={this.state.place_of_ordination} />
                        </p>
                        <p>
                            <label>ID#:</label>
                            <input onChange={(e)=> this.handleIdNum(e.target.value, 'identification_number')} type='text' ref='identification_number' value={this.state.identification_number} />
                        </p>
                        <p>
                            <label>Echelon:</label>
                            <input onChange={(e)=> this.handleEchelon(e.target.value, 'echelon')} type='text' ref='echelon' value={this.state.echelon} />
                        </p>
                        <p>
                            <label>Occupation:</label>
                            <input onChange={(e)=> this.handleOcc(e.target.value, 'occupation')} type='text' ref='occupation' value={this.state.occupation} />
                        </p>
                        <p>
                            <label>Background:</label>
                            <textarea onChange={(e)=> this.handleBack(e.target.value, 'background')} className='msgBox' ref='background' rows="20" cols='50' value={this.state.background} />
                        </p>
                        <button type="submit">I am a God!!</button>
                    </form>
                </div>
            </div>
        )
    }
}