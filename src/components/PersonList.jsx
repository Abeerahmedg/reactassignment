import React from 'react';
import axios from 'axios';
import { Person } from './Person';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export function PersonList () {
  
  const [person, setPerson] = useState([]);
  const [sortState, setSortState] = useState("none");
  const [striped, setStriped] = useState(true);

  const sortMethods = {
    none: { method: (a, b) => null },
    descending: { method: (a, b) => a.name.localeCompare(b.name) },
  };

  useEffect(() => {
    axios.get("https://localhost:7031/api/react")
    .then(result => setPerson(result.data))
  },[]);

  return (
    <div className="container">
      <h1 id="main-heading">Welcome to my website</h1>
      <h3> Writers Table:</h3>
      <br/>
      <table striped={striped.toString()}>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Number of Books</th>
                  <th>Option</th>
                  <th>Option</th>
              </tr>
          </thead>
          <tbody>
            {person.sort(sortMethods[sortState].method).map((person) => (
              <Person key={person.id} person={person} />
            ))
            }
          </tbody>
      </table>
      <br></br>
      <div>
      <button className='btn' onClick={() => setSortState("descending")}>Sort by name</button></div> 
      <br/>
      <div>
      <Link to="/Create">
        <button>Add new writer</button>
      </Link></div>
    </div>
  )
}