import axios from 'axios';
import { Link } from 'react-router-dom';
import PersonDetails from './PersonDetails';

export function Person(props){
    const person = props.person

    async function DeletePerson(e) {
        const id = e.currentTarget.dataset.id;
        await axios.delete(`https://localhost:7031/api/react/${id}`)
        .then(result => {
          if(result.status === 200) {
            console.log("Person deleted successfully")
          }
          else if(result.status === 404) {
            console.log("Person not found")
          }
        })
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
            <button onClick={DeletePerson} data-id={person.id}>Delete</button>
            </td>
             <td>
                <button>  <Link to={`/PersonDetails/${person.id}`} state={{person: person}}>Details</Link></button>
            </td> 
        </tr>
    )
}