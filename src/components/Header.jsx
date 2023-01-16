import {Link} from "react-router-dom";

function Header(){
    return(
        <div>
            <ul>
                <link to="/">Home</link>
                <link to="/PersonList">People</link>
            </ul>
        </div>
    )
}
export default Header;
// export const Header = props=> {
//     return (
//         <div>
//             <h3>{props.headerValue}</h3>
//         </div>
//     )
// }