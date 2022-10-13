import React from "react";
import './Formtwo.css'


function Formtwo({formData,setFormData}){
    return(
      <>

      <div className="formpage2">

         <div>
         <input
           type = "text"
           pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
           placeholder = "email"
           value={formData.email}
           onChange={(event)=>
            setFormData({...formData, email: event.target.value})
          }
         >
         </input>
         </div>

         <div>
         <input
         type = "date"
         placeholder = "Date of Birth"
         value={formData.dob}
         onChange={(event)=>
          setFormData({...formData, dob : event.target.value})
        }

         >
         </input>

         
         </div>
         <div>
         <input
         type="text"
         maxlength="10"
         pattern="^[0-9]+$"
         placeholder="PhoneNumber"
         value={formData.phonenumber}
         onChange={(event) =>
           setFormData({ ...formData, phonenumber: event.target.value })
         }

        >

        </input>
         </div>

         

      </div>
      
      </>
    );
}

export default Formtwo;