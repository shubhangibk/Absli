import React from 'react';
import './Carousel.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';


function Carousel() {
    return (
        <>
            <div class="carousel-section">

                <div>

                    <h4 > <strong>+ 10k Happy Customers</strong> </h4>
                    <span>
                        {/* <i class="fa fa-quote-left" style="font-size:36px; padding: 15px;padding-top: 20px; "></i> */}
                        <FormatQuoteIcon fontSize='large'/>
                    </span>
                    <p >
                        The differences with FD++ life Lorem ipsum dolor sit amet, consectutur adipiscing elit.Sed nibh
                        quam,aliquam vitae
                    </p>


                </div>

                <div>

                    <div >

                        <b> Roshni Kumar</b>

                        <br></br>

                            <b> FD++ Customer</b>

                    </div>




                </div>

                <div class="carousel-btn">
                    <button>
                        {/* <i class="fa fa-angle-left" style="font-size: 30px;color: rgb(231, 116, 116);"></i> */}
                        <KeyboardArrowLeftIcon/>
                    </button>
                    <button>
                        {/* <i class="fa fa-angle-right" style="font-size:30px;color: rgb(231, 116, 116);"></i> */}
                        <KeyboardArrowRightIcon/>
                    </button>
                </div>



            </div>
        </>
    );
}

export default Carousel;
