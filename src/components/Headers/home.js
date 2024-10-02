import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Home = () => {
  const [showPassword, setShowPassword] = useState("password");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

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

  return (
    <>
      <div className=" d-flex justify-content-center align-items-center min-vh-100">
        <form className="border" style={{borderRadius:"8%"}}>
            <br/>
          <div className="form-group row" >
            <label htmlFor="email" className="col-sm-3 col-form-label offset-md-1">
              UserName
            </label>
            <div className="col-sm-5">
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
          <br />
          <div className="form-group row">
            <label htmlFor="password" className="col-sm-3 col-form-label offset-md-1">
              Password
            </label>

            <div className="col-sm-5">
              <input
                type={showPassword}
                id="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
              />
            </div>

            <button
              onClick={changeInputTypePassword}
              className="btn btn-primary col-sm-2"
            >
              {showPassword == "password" ? "Show" : "Hide"}
            </button>
          </div>
          <br />
          <div className="form-group row">
            <button className="btn btn-primary col-md-3 offset-md-4 btn-sm">Login</button>
            <button className="btn btn-danger col-md-3 offset-md-1 btn-sm">
              Cancel
            </button>
          </div>
          <br/>
        </form>
      </div>
    </>
  );
};
export default Home;
