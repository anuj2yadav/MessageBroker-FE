import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import KafkaPublication from './components/KafkaComponents/kafka';
import RabbitMq from './components/rabbitMq/rabbitMq';
import Header from './components/Headers/header';
import Home from './components/Headers/home';


 

function App() {
  return <>
  <BrowserRouter>
   <Routes>
  
    <Route path="/" element={<Header/>}>
    <Route index element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="kafka" element={<KafkaPublication/>}/>
        
    <Route path="rabbitMq" element={<RabbitMq/>}/>
    
    </Route>
   </Routes>
  </BrowserRouter>
  </>
}

export default App;