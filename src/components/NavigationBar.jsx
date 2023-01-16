import React, { useContext } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavigationBar = () => {

    // This navigation bar is used as a layout for this app.

    return(

            <nav className="navbar navbar-expand-sm navbar-light bg-light">

                <div className="container-fluid">

                   

                    <Link to="/Home"><p>Home</p></Link>

                    <Link to="/CreatePerson"><p>Add person</p></Link>

                    <Link to="/PersonList"><p>List of people</p></Link>

            
                </div>

            </nav>

    )

}