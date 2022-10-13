import React from 'react';
import './Disclaimer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import abclogo from './abc-logo.png'
import CopyrightIcon from '@mui/icons-material/Copyright';

function Disclaimer(){

    const [isActive, setIsActive] = useState(false);



    const accordionData = {
        title: 'Disclaimer',
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.`
      };
    
      const { title, content } = accordionData;




    return(
     <>

       
        
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
            <div>{title}</div>
            <div>{isActive ? '-' : '+'}</div>
            
          </div>
          {isActive && <div className="accordion-content">{content}</div>}
        </div>
      </div>

      <div class="footer" >
        <img src={abclogo}/>
        <div>
            <CopyrightIcon/> 2021, Aditya Birla Capital Inc.All Right Reserved
        </div>

    </div>
        

     </>
    );
}

export default Disclaimer;