import React from 'react';
import './Form.css'
import 'bootstrap/dist/css/bootstrap.css';
import img2 from './image2.PNG'
import { useState } from 'react';
import CalculateIcon from '@mui/icons-material/Calculate';
import { useNavigate } from "react-router-dom"
import Axios from 'axios'
import Formone from './Formone';
import Formtwo from './Formtwo';
import { ActionTypes } from '@mui/base';
import axios from 'axios';

// var CryptoJS = require("crypto-js");



function Form() {

    // const [Username,setUsername] = useState('');
    // const [PhoneNumber,setPhoneNumber] =useState('');
    // const [Email,setEmail] = useState('');
    // const navigate = useNavigate();

    // const Action = (event) => {



    //     Axios.post('http://localhost:3002/api/nextpage',{PAN : Username , Phone : PhoneNumber, email:Email }).then( (result)=> {
    //         alert(result.data)

    //     })




    //     console.log(Username)
    //     console.log(PhoneNumber)
    //     console.log(Email)

    //     navigate("/nextpage",{replace:true});







    //  };

    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({


        firstName: "",
        lastName: "",
        phonenumber: "",
        email: "",
        dob: "",
        gender:"",
    });


    const FormTitles = ["Page1", "Page2"];

    const PageDisplay = () => {
        if (page === 0) {
            return <Formone formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <Formtwo formData={formData} setFormData={setFormData} />;
        }
    };

    const FormValidate = (formData) =>{
           
        const errors = {};

        if (!formData.firstName) {
          errors.firstName = 'Please Enter Employee Name';
          alert("Please Enter Employee Name");
          return false;
        }
        
        else if (formData.firstName.length > 20) {
          errors.firstName = 'Name cannot exceed 20 characters';
          alert('Name cannot exceed 20 characters');
          return false;
        }

        else if(!formData.lastName) {
            errors.lastName = 'Please Enter Employee Name';
            alert('Please Enter Employee Name')
            return false;
          } 
          
        else if (formData.lastName.length > 20) {
            errors.lastName = 'Name cannot exceed 20 characters';
            alert('Name cannot exceed 20 characters')
            return false;
          }

      
        else if (!formData.phonenumber) {
          errors.phonenumber = 'Please Enter Phone Number';
          alert('Please Enter Phone Number');
          return false;
        } 
        
        else if (!/^[0-9]+$/.test(formData.phonenumber)){
            errors.phonenumber = " Invalid phone number"
            alert('Invalid phone number');
            return false;
        }
      
        else if (!formData.email) {
          errors.email = 'Please Enter Email ID';
          alert('Please Enter Email ID')
          return false;
        } 
        
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
          errors.email = 'Invalid email address';
          alert('Invalid email address')
          return false;
        }

        else {
            return true;
        }

        
      
       






    }

    const Action = (formData) =>{


        // const Data = 
        //     {
        //         "product": "AFD",
        //         "uid": "FDHK01X01",
        //         "customer": {
        //         "firstName": formData.firstName,
        //         "lastName": formData.lastName,
        //         "dob": formData.dob,
        //         "gender": formData.gender,
        //         "mobile": formData.phonenumber,
        //         "emailId": formData.email,
        //         "isJointLife": "false",
        //         "isWhatsapp": true
        //         },
        //         "policy": {
        //         "premiumAmount": "180000",
        //         "premiumPayingTerm": "7",
        //         "term": 7,
        //         "premiumPayingFrequency": "1",
        //         "sumAssuredOption": "A",
        //         "source": "IIFL"
        //         },
        //         "customerIdentity": {
        //         "nationality": "IND"
        //         }
        //     }
        
        // var ciphertext = Crypto.AES.encrypt(JSON.stringify(Data),'aesEncrytionKey').toString();

        // console.log(ciphertext);


        Axios.post('http://localhost:3005/api/nextpage',

              { firstName: formData.firstName,
                lastName: formData.lastName,
                dob : formData.dob,
                gender: formData.gender,
                mobile : formData.phonenumber,
                emailId : formData.email,
               }).then( (result)=> {
                  alert(result.data)
               })





    }





    return (

        <>
            <div className='d-flex form'>

                <div className='form-img'>

                    <img src={img2}></img>

                </div>

                <div className='form-section'>

                    {/* <form method='post'> */}



                        <div className="form-group " >
                            <label className='lb1'> <span>%</span> Only available online</label>
                            <br></br>
                            <label className="lb2" >Invest in <span class="lb2-color"> ABSLI Fixed Deposit Plan </span></label>
                            <br></br>
                            <label className="lb3">India's favourite investment</label>
                        </div>
                        <br></br>

                        {/* <div className=' form-group nameinput'>
                            {/* <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name as on PAN" pattern="^[a-zA-Z ]+$" required value={Username} onChange={event => setUsername(event.target.value)} /> 
                            {/* regex for pan  *
                            <input type="text" className="form-control " id="exampleInputEmail1" name='Username'aria-describedby="emailHelp" placeholder="Your Name as on PAN" pattern="^([A-z]){5}([0-9]){4}([A-z]){1}?$" required value={Username} onChange={event => setUsername(event.target.value)} />
                        
                        </div>

                        <br></br>


                        <div className="form-group phinput">
                            <input type="text" maxlength="10" pattern="^[0-9]+$" className="form-control " name='PhoneNumber'id="exampleInputPassword1" placeholder=" +91  |  Phone Number" required value={PhoneNumber} onChange={event => setPhoneNumber(event.target.value)} />
                        </div>

                        <br></br>

                        <div className='form-group emailinput'>
                              <input type='text' pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" className='form-control' placeholder='rohitsuri@gmail.com' name="email" id="email" required value={Email} onChange={event => setEmail(event.target.value)} />
                        </div> */}
                        <div>

                            {/* <div>
                                <h1>{FormTitles[page]}</h1>
                            </div> */}
                            <div className="body">
                                {PageDisplay()}

                            </div>

                            <div className="buttons">
                                <button
                                    disabled={page == 0}
                                    onClick={() => {
                                        setPage((currPage) => currPage - 1);
                                    }}
                                >
                                    Prev

                                </button>
                                <button
                                    onClick={() => {
                                        if (page === FormTitles.length - 1) {

                                            
                                            if(FormValidate(formData)){
                                                Action(formData);
                                                alert("Form Submitted!")

                                            }
                                            else{
                                                alert("form not submitted!")
                                            }
                                            // console.log(formData);
                                            

                                        } else {
                                            setPage((currPage) => currPage + 1);
                                        }
                                    }
                                    }
                                >


                                    {page === FormTitles.length - 1 ? "Submit" : "Next"}
                                </button>

                            </div>
                        </div>



                        <br></br>

                        {/* <div className='form-group formbtn'>
                            <button type="submit" className="btn btn-danger btn-lg" id="calculate" ><CalculateIcon /> CALCULATE RETURN</button>
                        </div> */}

                        <br></br>

                         {/* <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
                            <label className="form-check-label" for="exampleCheck1" >
                                <p className="fs-6">I agree to the <span class=" text-color">Terms of Usage</span> and <span class="text-color">Privacy Policy </span> and by submitting my contacts details here,I
                                    override my NDNC registration and authorise ABSLI and it's authorised representatives to contact me
                                    by phone/e-mail/SMS/Whatsapp for further assistance and information about this
                                    proposal and resulting insurance policy.
                                </p></label>
                        </div>  */}

                        {/* <div className='form-end'>
                            <span >
                                Error style you have to accept the T&C to procced
                            </span>
                        </div> */}

                    {/* </form> */}

                </div>

            </div>

        </>

    );
}


export default Form;