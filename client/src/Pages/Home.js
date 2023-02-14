import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import axios from "axios";
import { toast } from "react-toastify";



const Home = () =>{

    const[data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/get");
        setData(response.data);

    };

    useEffect(() => {
        loadData();
    },[]);

    const deleteContact = (id) =>{
        if(window.confirm("are u want to delete?"))
{
    axios.delete(`http://localhost:5000/api/remove/${id}`);
    toast.success("success deletion");
    setTimeout(() => loadData(), 500);
}
    }



    return (
        <div className="container">
            <br
            ></br>
            <Link to ="/addContact">
              <button className="btn btn-primary">Create</button>
           
            </Link>
            <br></br>
            <br></br>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th style={{textalign:"center"}}>No.</th>
                        <th style={{textalign:"center"}}>Name</th>
                        <th style={{textalign:"center"}}>Email</th>
                        <th style={{textalign:"center"}}>Contact</th>
                        <th style={{textalign:"center"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item , index) => { 
                    
                       return( 
                        <tr key = {item.id}>
                        <th scope ="row">{index+1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                        <td>
                            <Link to={`update/${item.id}`} >
                              <button className="btn btn-info" style={{margin:"7px"}}>Update</button>
                            </Link>
                            <button className="btn btn-danger" onClick={()=>deleteContact(item.id)}>Delete</button>
                            <Link to={`/view/${item.id}`} >

                              <button className="btn btn-warning" style={{margin:"7px"}}>Read</button>
                            </Link>
                        </td> 
                        </tr>

                    )})}
                </tbody>
            </table>

        </div>
    )
}

export default Home;