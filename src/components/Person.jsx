import axios from 'axios';
import { Link } from 'react-router-dom';

export function Person(props){
    const person = props.person

    async function DeletePerson(props){
        await axios.delete(`https://localhost:7031/api/react/${props}`)
        .then(response => response.data)
    }
    return(
        <tr>
            <td>
                <p>{person.name}</p>
            </td>
            <td>
                <p>{person.numberOfBooks}</p>
            </td>
            <td>
                <button onClick={()=> DeletePerson(person.id)}>Delete</button>
            </td>
            <td>
                <Link to={person.id} state={{ person: person }}>
                    <button className="btn btn-outline-dark" >View Details</button>
                </Link>
            </td>
        </tr>
    )

}