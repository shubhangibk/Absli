import React from 'react';
import './Navbar.css'
import abclogo from './abc-logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';



function Navbar() {
    return(
       <>

         <nav className='navbar1'>
           <img src={abclogo}></img>
         </nav>
         <nav className='navbar2'>
            <div class='nav2'>
            
            <a>LIFE INSURANCE</a> 
            </div>
                 {/* <div class='menu'>
                     <MenuIcon/>
                 </div> */}
            {/* </div> */}
            

         </nav>
         <nav className='navbar3'>
           <div><a>Aditya Birla Sun Life Insurance Company Limited</a></div> 
         </nav>
       
       </>
       



    );
}


export default Navbar;