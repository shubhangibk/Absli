import React from 'react';
import {useNavigate} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar'
import './Nextpage.css'
import Disclaimer from './Disclaimer';


const Nextpage = () => {

    const navigate = useNavigate();





return (
<>
<Navbar/>
<div>
    <div className='centre'>
    <h1>Thank you for your information!</h1>
    </div>
</div>

<button onClick={() => navigate("/")} className="back btn-sm btn-danger">back</button>




</>
)
};

export default Nextpage;
