import React from 'react'
import doctors from '../assets/doctors.png';
const Landing = () => {
    return (
        <body>
        
         <div className="signupLoginBox">
            <div className= "slContainer">
                <div className="formBoxLeftSignup">
                <img className="imagebg"
                src={doctors}
                 />
                </div>
                <div className ="formBoxRight">
                    <div className="formContent">
                    <h2>Welcome</h2>
                        <form>
                           
                            
                            <div className="col-md-3 col-sm-3 col-xs-6"> <a href="/signup" className="btn btn-sm animated-button victoria-one">Sign up</a> </div>
                           

                            <div className="col-md-3 col-sm-3 col-xs-6"> <a href="/login" className="btn btn-sm animated-button victoria-one">Log in </a> </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
        </body>
      
    )
}

export default Landing
