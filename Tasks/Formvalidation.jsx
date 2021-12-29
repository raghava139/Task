import React from 'react'
import './FormValidation.css'
    class Formvalid extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
           firstName:"",
            lastName:"",
            mobileNumber:"",
            email:"",
            password:"",
            firstNameError:"",
            lastNameError:"",
            mobileNumberError:"",
            emailError:"",
            passwordError:"",
          
        }
    }

    changedValue(e){
        const myName=e.target.name
        const myValue=e.target.value;
        this.setState({[myName]:myValue})   
    }
    Handling(e){
    e.preventDefault()
    var isValid=this.Validation()
   
    if(isValid)
    {
        alert('form is submitted successfully')
        this.setState({firstName:"",lastName:"",mobileNumber:"",email:"",password:""})
        // console.log(this.state)
    }

    }
 Validation(){
       let firstNameError=""
       let lastNameError=""
       let mobileNumberError=""
       let emailError=""
       let passwordError=""


    if(this.state.firstName.length>7||this.state.firstName.length=="")
    {
        firstNameError='please Enter minimum 6 characters'
    }
    if(this.state.lastName.length>7||this.state.lastName.length=="")
    {
        lastNameError='please Enter minimum 6 characters'
    }
    if(isNaN(this.state.mobileNumber)||this.state.mobileNumber.length>=11||this.state.mobileNumber.length=="")
    {
     mobileNumberError="please Enter Correct Mobile Number"
    }
    if(!this.state.email.includes("@")||this.state.email.length=="")
        {
            emailError="please Enter Correct Email Address"
        }

        if(this.state.password.length>10||this.state.password.length=="")
        {
            passwordError="please Enter password Less than 10"
        }

    if(firstNameError||lastNameError||mobileNumberError||emailError||passwordError){
        this.setState({firstNameError,lastNameError,mobileNumberError,emailError,passwordError})
        return false;
    }

    else{
        this.setState({firstNameError,lastNameError,mobileNumberError,emailError,passwordError})
        return true;
    }
}

 
 render(){
        return(
            <div className='Edit_Form col-md-12'>
                <form className='My_Form'onSubmit={(e)=>{this.Handling(e)}} noValidate>
                <h2 className='Main_Heading'>Register Form</h2>
                    <div>
                    <label className='myLabel'>FIRSTNAME</label>
                    <input type='text'className='elemnt'name='firstName'onChange={(e)=>{this.changedValue(e)}}/>
                    </div>
                    <div style={{color:'black',fontWeight:"bold"}}>{this.state.firstNameError}</div>

                    <div >
                    <label className='myLabel'>LASTNAME</label>
                    <input type='text'className='elemnt'name='lastName'onChange={(e)=>{this.changedValue(e)}}/>
                    </div>
                    <div style={{color:'black',fontWeight:"bold"}}>{this.state.lastNameError}</div>
                  
                    <div>
                    <label className='myLabel'>MOBILE NUMBER</label>
                    <input type='text'className='elemnt'name='mobileNumber'onChange={(e)=>{this.changedValue(e)}}/>
                    </div>
                    <div style={{color:'black',fontWeight:"bold"}}>{this.state.mobileNumberError}</div>
                  


                    <div>
                    <label className='myLabel'>EMAIL</label>
                    <input type='Email'className='elemnt'name='email'onChange={(e)=>{this.changedValue(e)}}/>
                    </div>
                    <div style={{color:'black',fontWeight:"bold"}}>{this.state.emailError}</div>
                  


                    <div>
                    <label className='myLabel'>Password</label>
                    <input type='password'className='elemnt'name='password'onChange={(e)=>{this.changedValue(e)}}/>
                    </div>
                    <div style={{color:'black',fontWeight:"bold"}}>{this.state.passwordError}</div>
                

                    <button type='submit'className="btn btn-danger w-100 m-2">SUBMIT</button>


           
                </form>
            </div>

        )
    }
}
   
    export default Formvalid