import React from 'react';
import './Form.css'
import 'bootstrap/dist/css/bootstrap.css';
import img2 from './image2.PNG'
import {useState} from 'react';
import CalculateIcon from '@mui/icons-material/Calculate';


function Form() {

    const [Username,setUsername] = useState('');
    const [PhoneNumber,setPhoneNumber] =useState('');
          

    return (

        <>
            <div class='d-flex form'>

                <div class='form-img'>

                    <img src={img2}></img>

                </div>

                <div class='form-section'>

                    <form action='' method='post'>



                        <div class="form-group " >
                            <label class='lb1'>% Only available online</label>
                            <br></br>
                            <label class="lb2" >Invest in <span class="lb2-color"> ABSLI Fixed Deposit Plan </span></label>
                            <br></br>
                            <label class="lb3">India's favourite investment</label>
                        </div>
                        <br></br>

                        <div class=' form-group nameinput'>
                            {/* <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name as on PAN" pattern="^[a-zA-Z ]+$" required value={Username} onChange={event => setUsername(event.target.value)} /> */}
                            {/* regex for pan  */}
                            <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name as on PAN" pattern="^([A-z]){5}([0-9]){4}([A-z]){1}?$" required value={Username} onChange={event => setUsername(event.target.value)} />
                        
                        </div>

                        <br></br>


                        <div class="form-group phinput">
                            <input type="text" maxlength="10" pattern="^[0-9]+$" class="form-control " id="exampleInputPassword1" placeholder=" +91  |  Phone Number" required value={PhoneNumber} onChange={event => setPhoneNumber(event.target.value)} />
                        </div>

                        <br></br>

                        <div class='form-group emailinput'>
                              <input type='text' pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" class='form-control' placeholder='rohitsuri@gmail.com' name="email" id="email" required/>
                        </div>

                        <br></br>

                        <div class='form-group formbtn'>
                            <button type="submit" class="btn btn-danger btn-lg" id="calculate" ><CalculateIcon/> CALCULATE RETURN</button>
                        </div>

                        <br></br>

                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" required />
                            <label class="form-check-label" for="exampleCheck1" >
                                <p class="fs-6">I agree to the <span class=" text-color">Terms of Usage</span> and <span class="text-color">Privacy Policy </span> and by submitting my contacts details here,I
                                    override my NDNC registration and authorise ABSLI and it's authorised representatives to contact me
                                    by phone/e-mail/SMS/Whatsapp for further assistance and information about this
                                    proposal and resulting insurance policy.
                                </p></label>
                        </div>

                        <div class='form-end'>
                            <span >
                            Error style you have to accept the T&C to procced
                            </span>
                        </div>

                    </form>

                </div>

            </div>

        </>

    );
}


export default Form;