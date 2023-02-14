import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import './View.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



const View = () => {
    const[user, setUser] = useState ({});

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/get/${id}`)
        .then((res)=> setUser( {...res.data[0] }));
    }, [id]);

    return(
   
        <div style = {{marginTop : "150px"}}>
            <div className ="card">
                <div className = "card-header">
                    <p><b>User Contact Details</b></p>

                </div>
                <div className="container">
                    <strong>ID : </strong>
                    <span> {id}</span>
                    <br/>
                    <br/>
                    <strong>Name : </strong>
                    <span>{user.name}</span>
                    <br/>
                    <br/>
                    <strong>Email : </strong>
                    <span>{user.email}</span>
                    <br/>
                    <br/>
                    <strong>Contact : </strong>
                    <span>{user.contact}</span>
                    <br/>
                    <br/>
                    
                </div>
            </div>
            <br></br>
             <Link to="/">
               <button className="btn btn-primary">Go Back</button>
               </Link>
          


        </div>
      
    )
}

export default View;