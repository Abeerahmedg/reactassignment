import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function PersonDetails (){
    const location = useLocation();
    const person = location.state?.person;
   
    const id = person.id;
    const navigate = useNavigate();
    const [details, setDetails] = useState(null);

    useEffect(() => {
      axios.get(`https://localhost:7031/api/react/${id}`)
        .then(result => setDetails(result.data))
        .then(result => {
      if(result.status === 200) {
        setDetails(result.data)
      } else if(result.status === 404) {
        console.log("Person not found")
      }
    })
    }, [id]);

    if(!details)
    {
       return(
        <></>
       )
    }
    return(
        <div className="container">
            <br/>
            <br/>
            <h3>Writer Details:</h3>
            <br></br>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{person.name}</td>
                    </tr>
                    <tr>
                        <th>Number of Books</th>
                        <td>{person.numberOfBooks}</td>
                    </tr>
                    <tr>
                        <th>City</th>
                        <td>{details.city}</td>
                    </tr>
                    <tr>
                        <th>Country</th>
                        <td>{details.country}</td>
                    </tr>
                    <tr>
                        <th>Languages</th>
                        <td>{details.languages?.map((language) => (
                            <p>{language}</p>
                        ))}
                        </td>
                    </tr>
                    <br />
                    <Link to="/">
        <button>Back to the list</button>
      </Link>
                </tbody>
            </table>
        </div>
        )
}

