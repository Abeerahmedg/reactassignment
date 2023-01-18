import { useState } from 'react';
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Country from './Country';

export default function AddPerson(){
    const navigate = useNavigate();
    const[person, setPerson] = useState({
        name: "",
        numberOfBooks: "",
        cityid: 1
    });

    const handleChange = (event)=>{
        setPerson({...person, [event.target.name]: event.target.value});
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        setPerson({
            name: this.state.name,
            numberOfBooks: this.state.numberOfBooks,
            cityid: this.state.cityid
        });
    }

    function CreatePerson(){
        axios.post(`https://localhost:7031/api/react/create`,person)
        .then(result=>result.status)

        navigate('/');
    }

    return(
        <div>
            <h3>Create new person:</h3>
            <form onSubmit={handleSubmit}>
               <label>Name:</label>
               <input type="text" name="name" onChange={handleChange}></input>
               <label>numberOfBooksnumber:</label>
               <input type="text" name="numberOfBooks" onChange={handleChange}></input>
               <Country/>
               <button type="submit" onClick={()=>CreatePerson()}>Create person</button>
            </form>
        </div>
        )
}
