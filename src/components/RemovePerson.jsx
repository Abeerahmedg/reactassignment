import React from "react";
import axios from "axios";

export default class RemovePerson extends React.Component{
    state = {
        id: ''
    }

    handleChange = event =>{
        this.setState({id: event.target.value});
    }

        handleSubmit = event=>{
            event.preventDefault();

            axios.delete(`https://localhost:7031/api/react/${this.state.id}`)
            .then(result=>{
                console.log(result);
                console.log(result.data);
            })
        }
        render(){
            return(
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Person Id: 
                        <input type="text" name="id" onChange={this.handleChange}></input>
                       </label>
                       <button type="submit">Delete</button>
                    </form>
                </div>
            )
        }
}