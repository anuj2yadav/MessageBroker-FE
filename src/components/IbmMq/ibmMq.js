import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";


const IBMMQ = () => {
  // toast.configure();
  const topicList=[{id:1,topic:"kafka"},
    {id:2,topic:"Topic2"},
    {id:3,topic:"Topic3"}
]
  const [form,setForm]=useState({
    topicName:"",
    messageBody:""
  })
  const handleChange=(e)=>{
        
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form)
    
}

const handleSubmit= async (e)=>{
    e.preventDefault();
    try{
    const response = await axios({
        method: "post",  // Define the HTTP method here
        url: "http://localhost:8080/kafka",
        data: JSON.stringify(form),  // Send the JSON string
        headers: {
          "Content-Type": "application/json"
        }
      }).catch(err=>{
        throw new Error(err)
    });

      console.log(response.status)
      if(response.status!=200) throw new Error("Invalid response");
      if(response.status==200)
      {
      toast.success("Message published successfully!", {
        position: "bottom-center",
        autoClose: 3000, // Closes after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
    });
  }
    } catch (error) {
    // Show error toast
    toast.error("Failed to fetch data. Please try again.",  {
      position: "bottom-center",
      autoClose: 3000, // Closes after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
  });
}
}
   

  
  return <>
  <div className="vh-100 gradient-custom mt-0 overflow-auto">
        <div class="container py-5 h-10">
          <div className="row d-flex justify-content-center align-item-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ "border-radius": "1rem" }}
              >
                <div className="card-body py-5 px-5">
                  <label for="exampleDataList jus" class="form-label">
                   Select Queue Name:
                  </label>
                  {/* <input
                    class="form-control"
                    list="datalistOptions"
                    id="exampleDataList"
                    placeholder="Type to search..."
                  /> */}
                  <select id="datalistOptions" className="form-select" onChange={handleChange} value={form.topic} name="topicName">
                    {topicList.map((item,index)=>{
                        return <option value={item.topic} key={item.id}> {item.topic}</option>
                    })}

                    <option value="San Franciso"> San Francisco</option>
                    <option value="San Francisco"> San Francisco</option>
                    <option value="San Francisco"> San Francisco</option>
                    <option value="San Francisco"> San Francisco</option>
                  </select>
                  
                  <div className="mb-3 mt-3">
          <label className="form-label">Message</label>
          <textarea className="form-control"  name="message" onChange={handleChange} value={form.messageBody} name="messageBody"></textarea>
         </div>
         <div className="mb-3 mt-3">
            <button className="btn btn-primary form-control" onClick={handleSubmit} disabled> Published</button>
            <p className="form-text text-danger text-center">It is under construction please wait</p>
         </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position="bottom-center"/> 
      </div>
    </>
  
  
};
export default IBMMQ;
