import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-0" >
        <Link className="navbar-brand ms-3" to="home">
          Message Publication
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <div className="navbar-nav">
            <Link to="home" className="nav-item nav-link">
              Home
            </Link>
            <Link to="Kafka" className="nav-item nav-link">
              Kafka Publication
            </Link>
            <Link to="rabbitMq" className="nav-item nav-link">
              Rabbit MQ Publication
            </Link>
            <Link to="ibmMQ" className="nav-item nav-link">
              IBM MQ Publication
            </Link>
            
          </div>
          
        </div>
        <div  className=" justify-content-end text-white mr-4 px-3">
              Env:{process.env.REACT_APP_ENV}
            </div>
      </nav>
       {/* <section > */}
      <Outlet cclassName="vh-100 gradient-custom mt-0"/>
    </>
  );
};
export default Header;
