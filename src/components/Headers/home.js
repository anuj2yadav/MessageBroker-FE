import { GoogleLogin } from "@react-oauth/google";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";


const Home = () => {
  const [showPassword, setShowPassword] = useState("password");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isPublished,setIsPublished]=useState(false);
  const navigate=useNavigate();

  const changeInputTypePassword = (event) => {
    event.preventDefault();
    if (showPassword == "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };
  const handleUserName=(event)=>{
    setUserName(event.target.value)
  }
  const handlePassword=(event)=>{
    setPassword(event.target.value)
  }
  const handleSuccess = (response) => {
    console.log('Success:', response);
    // Send the token to your backend for verification
    localStorage.setItem("oauthToken",response.credential);
     navigate('/kafka')
    console.log(response);
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <form className="border" style={{borderRadius:"8%"}}>
            <br/>
          <div className="form-group row" >
            <label htmlFor="email" className="col-sm-3 col-form-label offset-md-1">
              UserName
            </label>
            <div className="col-sm-7">
            <div className="input-group">
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="User name"
                value={userName}
                onChange={handleUserName}
              />
             </div>
            </div>
          </div>
          <br />
          <div className="form-group row">
            <label htmlFor="password" className="col-sm-3 col-form-label offset-md-1">
              Password
            </label>
 
          <div className="col-sm-7">
            <div className="input-group">
              <input
                type={showPassword}
                id="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
              />
               <span className="input-group-text" onClick={changeInputTypePassword} style={{ cursor: "pointer" }}> 
                {showPassword=="password"?<FaEyeSlash/> : <FaEye/>}
              </span>
            </div>
            </div>

          </div>
          <br />
          <div className="form-group row">
            <button className="btn btn-primary col-md-3 offset-md-4 btn-sm">Login</button>
            <button className="btn btn-danger col-md-3 offset-md-1 btn-sm">
              Cancel
            </button>
            <div>
      
      <div className="form-group col-sm-7 offset-md-4 mt-3">
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} className="form-control" />
      </div>
    </div>
          </div>
          <br/>
        </form>
      </div>
    </>
  );
};
export default Home;
