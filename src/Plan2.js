import React from 'react';
import './Plan2.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DownloadIcon from '@mui/icons-material/Download';

function Plan2() {

    
     return (

        <>

            <div className='plan2'>
            <h4 ><strong>More about ABSLI FD++ Plan</strong></h4>

            <div className="ds-1">



                <span>
                    <h6><strong>What is ABSLI DigiShield Plan?</strong></h6>

                    A Term insurance plan is designed to secure your family's financial future against uncertainities
                    and unforeseen circumstances.
                </span>





            </div>

            <div className="ds-2">

                <h6><strong>Introducing ABSLI DigiShield Plan</strong></h6>


            </div>

            <div className="ds-3">

                <h6><strong>Key Features of the Plan</strong></h6>

            </div>

            <div className="ds-4">

                <h6><strong>Payout term</strong></h6>

            </div>


            <div className="ds-5">

            <button type="submit" className="btn btn-danger btn-lg" id="download" >
                <DownloadIcon/>
                DOWNLOAD ABSLI FD++ PLAN
            </button>
                
                    
                
            </div>
            </div>
            </>

            );
            
}

            
export default Plan2;