import  'bootstrap/dist/css/bootstrap.min.css';
import { Outlet ,Link} from "react-router-dom";


const Header=()=>{
    return <>
    <nav className="navbar navbar-expand-lg navbar-light blue"> 
        <Link className="navbar-brand" to="home">Message Publication</Link>
        <Link to="home">Home</Link>
        <Link to="Kafka">Kafka Publication</Link>
        <Link to="rabbitMq">Rabbit MQ Publication</Link>
        <Link to="ibmMQ">IBM MQ Publication</Link>
        
    </nav>
    <Outlet/>
  
    </>
}
export default Header;