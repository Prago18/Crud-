import{BrowserRouter,  Route, Routes} from "react-router-dom";
import AddEdit from "./Pages/AddEdit.js"
import {ToastContainer } from 'react-toastify'; 
import Home from "./Pages/Home"
import 'react-toastify/dist/ReactToastify.css';
import View from "./Pages/View.js";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ToastContainer position="top-center"  />
          <Routes>
            <Route exact path  = "/"             element={<Home/>}/>
            <Route path  = "/addContact"         element={<AddEdit/>}/>
            <Route path  = "/update/:id"         element={<AddEdit/>}/>
            <Route path  =  "/view/:id"          element={<View/>}/>
          </Routes>
     
    </div>
    </BrowserRouter>
    
  );
}

export default App;
