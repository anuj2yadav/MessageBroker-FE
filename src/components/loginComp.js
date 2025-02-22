import { GoogleLogin } from "@react-oauth/google";
import { MDBInput } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateLocaleAndSetLanguage } from "typescript";



const LoginNew=()=>{
  const [isEmailValid ,setIsEmailValid]=useState(false);
  const [isPassword,setIsPassword]=useState(false);

const [login ,setLogin]=useState({
  userName:"",
  password:""
})
const handleCre=(e)=>{
 setLogin({...login,[e.target.name]:e.target.value})
 console.log(login)  

}
const ValidateAndLogin=()=>{
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/;
    if(!emailRegex.test(login.email))
    {
      setIsEmailValid(true);
      return;
    }
    else setIsEmailValid(false);
    if(login.password.length<=0)
    {
      setIsPassword(true);
      return;
    }
    else setIsPassword(false);
    localStorage.setItem("oauthToken","logn");
    window.location.reload()
    navigate("/kafka");

}
const navigate=useNavigate();
  const handleSuccess=(response)=>{
    console.log('Success:', response);
    // Send the token to your backend for verification
    localStorage.setItem("oauthToken",response.credential);
    navigate('/kafka')
    console.log(response);
  };
  const handleError = () => {
    console.log('Login Failed');
  };
  useEffect(()=>{
    console.log("hello");
    if(localStorage.getItem("oauthToken") ){
      navigate('/kafka');
      console.log("hell0");
    }
  },[])
  const handleLogin=()=>{

  }
    return<>
       <section className="h-100 gradient-custom mt-0.5">
        <div class="container py-5 h-10">
            <div className="row d-flex justify-content-center align-item-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white" style={{"border-radius":"1rem"}}>
                 <div className="card-body p5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                        <h2 classsName="fw-bold mb-2 text-uppercase">Login</h2>
                        <p className="text-white-50 mb-5">Please enter your login and password!</p>
                       
                        <div data-mdb-input-init class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" class="form-control form-control-lg" placeholder="Please enter your email" value={login.email} name="email" onChange={handleCre}/>
                {isEmailValid && (<p className="form form-text text-danger">Please check email</p>)}
               
              </div>
              <div data-mdb-input-init class="form-outline form-white mb-4 d-flex">
                <input type="password" id="typeEmailX" class="form-control form-control-lg" placeholder="Please enter your password" value={login.password} name="password" onChange={handleCre}/>
                
              </div>
              {isPassword && (<p className="form-text text-danger">Password shouldn't be empty</p>)}
              <p class="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
              <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={ValidateAndLogin}>Login</button>

              <div  class="form-outline form-white mb-4 mt-4">
                {/* <input type="password" id="typeEmailX" class="form-control form-control-lg" placeholder="Please enter your password"/> */}
                <GoogleLogin onSuccess={handleSuccess} onError={handleError} className="form-control" />
              </div>            
              
              
               
              
                    </div>
                 </div>
                </div>
            </div>
            </div>
        </div>

       </section>
    </>
}
export default LoginNew;