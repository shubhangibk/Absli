import React from 'react';
import './Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Card() {
    return (
        <>

            <div class="card-section">
                <div>

                    <div class='card-head' >
                        <h4><strong>Choose from FD++ Plan options</strong></h4>
                        <p >Lorem ipsum
                            dolor sit amet,consectetur adipiscing elit.Sed nibh quam,aliquam vitae</p>
                    </div>


                    <div class="container">



                        <h6 class='container-h'>
                            <strong>Higher Returns
                                <span class='color'>6.5%</span>
                            </strong>

                        </h6>





                        <p class='container-p'>
                            Lorem ipsum dolor sit amet,consectetur adipiscing elit.Sed nibh quam,aliquam vitae.Nullam et quam
                            nec nisl suscipit malesuada.In nisi neque,imperdiet in magna non,mattis.
                        </p>

                    </div>




                    <div class="container">

                        <h6 class='container-h'>
                            <strong> Free Returns
                                <span class='color2' >5.5%</span>
                            </strong>

                        </h6>




                        <p class='container-p'>
                            Lorem ipsum dolor sit amet,consectetur adipiscing elit.Sed nibh quam,aliquam vitae.Nullam et quam
                            nec nisl suscipit malesuada.In nisi neque,imperdiet in magna non,mattis.
                        </p>

                    </div>


                </div>


            </div>

        </>
    );
}

export default Card;