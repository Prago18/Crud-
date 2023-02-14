import React,{useState, useEffect}  from "react";
import { useParams, Link} from "react-router-dom";
import {useHistory} from'react-router-use-history';
import axios from "axios"
import { toast } from "react-toastify";
import "./AddEdit.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const initialState = {
    name:"",
    email:"",
    contact:""
}



const AddEdit = () => {

    const [state, setState] = useState(initialState);
    const {name , email, contact} = state;
    const history = useHistory();

    const {id} = useParams();
    useEffect(()=>{
            axios.get(`http://localhost:5000/api/get/${id}`).then((resp) => setState( {...resp.data[0]} ))
                              },[id]);

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if(!name || !email || !contact){
            toast.error("please provide value into each input field");

        }
        else{


            if(!id)
            {   axios.post("http://localhost:5000/api/post",{
                name,email,contact
            }).then(()=> {
                setState ({name:"", email: "", contact:""})
            }).catch((err) => toast.error(err.response.data));
            toast.success("contact added succesfully")}
            
            else{

                axios.put(`http://localhost:5000/api/update/${id}`,{
                            
                     name,
                     email,
                     contact,
                    }).then(()=>{
                            setState({name:"", email:"", contact:""});
                           })
                            .catch((err)=> toast.error(err.response.data));
                            toast.success("update succesfully");

                }

                    setTimeout(() => history.push("/",500));

            }
                    
                

            }

            
         
        
    

    const handleInputChange = (e) => {
        const{name, value} = e.target
        setState({...state, [name] : value})
    }

    return(

    <div className="container ">
        <form 

       onSubmit={handleSubmit}
       >
       
       <label for ="name">Name</label>
       <input type="text" id ="name" name="name" placeholder="your name.."
       value={name || ""}
       onChange={handleInputChange}
       />

      
       <label for ="email">Email</label>
       <input type="email" id ="email" name="email" placeholder="your email.."
       value={email || ""}
       onChange={handleInputChange}
       />
       
 
       <label for ="contact">Contact</label>
       <input type="contact" id ="contact" name="contact" placeholder="your contact.."
       value={contact || ""}
       onChange={handleInputChange}
       />
       <br></br>

       <input  className="btn btn-primary " type= "submit" value={id ? "Update" : "Save"} style={{margin:"2px"}}/>
<br></br>
       <Link to ="/">
            <input type="button" className="btn btn-danger" value="Go Back"/>
       </Link>


       </form>

        
    </div>)
}


export default AddEdit;