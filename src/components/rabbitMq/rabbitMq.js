import { useState } from "react"

const RabbitMq=()=>{
    const[exchange,setExchange]=useState(["anuj","anuj","anuj"])
    const[hostName,setHostName]=useState(["rmq.host","rmq.hostName.2"]);
    const [message,setMessage]=useState("");
    const [backEndPostPayload,setBackEndPostPayload]=useState({exchange:"",hostName:"",message:""});  
    const [isPublished,setIsPublished]=useState(false)
    const publishMessage=(e)=>{
      e.preventDefault();
      // axios.post("anuj",{
      //   exchange,
      //   hostName
      // })
      setIsPublished(true);
      alert("Your message successfully published")
    }
    const handleForm=(e)=>{
      e.preventDefault();
      const {name}=e.target;
      console.log(name)
      setBackEndPostPayload({...backEndPostPayload,[name]:e.target.value})
      console.log(backEndPostPayload)
    }
  
    return<>
    
      <form className="container col-md-6 offset-md-auto form-select-lg mt-3 border " > 
        <div className="mb-3">
          <label className="form-label">Exchange</label>
          <select className="form-select" value={backEndPostPayload.exchange} onChange={handleForm} name="exchange">
            {
              (exchange).map((key,index)=>{
                return<>
                 <option value={key} key={index}>{key}</option>
                </> 
              })
              }
            </select>
            
        </div>
        <div className="mb-3">
          <label className="form-label">HostName</label>
          <select className="form-select" value={backEndPostPayload.hostName} onChange={handleForm} name="hostName">
            {
              (hostName).map((key,index)=>{
                return<>
                 <option value={key}>{key}</option>
                </> 
              })
              }
            </select>
          
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" value={backEndPostPayload.message} onChange={handleForm} name="message"></textarea>
         </div>
         { isPublished?
         <div className="mb-3">
          <lable className="form-text text-success italic ">Message published successfully</lable>
         </div>:""
         }
         <div className="mb-3">
          <span>
          <button className="btn btn-primary col-md-4 " onClick={publishMessage}>Publish</button>
          <button className="btn btn-danger col-md-4 offset-md-2" >Cancel</button>
          </span>
         </div>
      </form>
    </>
}
export default RabbitMq