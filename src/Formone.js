import React  from "react";
import './Formone.css'
import './Form.css'


function Formone({formData,setFormData}){

   
    

    return(
      <>
      
      <div className="formpage1">

        <div>
        <input
           type = "text"
           placeholder = "FirstName"
           value={formData.firstName}
           onChange={(event)=>
            setFormData({...formData, firstName: event.target.value})
          }
        >

        </input>
        </div>

        <div>
        <input 
         type="text"
         placeholder="LastName"
         value={formData.lastName}
         onChange={(event) =>
           setFormData({ ...formData, lastName: event.target.value })
         }
        >

        </input>
        </div>
       
       <div>
        
        <select value={formData.gender}
         onChange={(event) =>
           setFormData({ ...formData, gender: event.target.value })
         } >
            <option > Select Gender</option>
            <option value="male">Male</option>
	        <option value="female">Female</option>
	        <option value="other">other</option>
        </select>
       
        

        {/* <input
         type="text"
         maxlength="10"
         pattern="^[0-9]+$"
         placeholder="PhoneNumber"
         value={formData.phonenumber}
         onChange={(event) =>
           setFormData({ ...formData, phonenumber: event.target.value })
         }

        >

        </input>  */}

       </div>
        
      </div>

      </>
    );
}

export default Formone;