import axios from "axios";
import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify";


const RabbitMq=()=> {
  // toast.configure();
  const topicList=[{id:1,topic:"rabbitMQ_queue"},
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
        url: "http://localhost:8080/rabbitMQ",
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
// useEffect(() => {
//   document.body.style.overflow = "hidden"; // Disable scrolling

//   return () => {
//     document.body.style.overflow = "auto"; // Re-enable scrolling when unmounting
//   };
// }, []);
   

  
  return <>
  {/* <div className="container-fluid vh-100"> */}
  <div className="vh-100 gradient-custom mt-0 position-sticky">
        <div class="container py-5 h-10">
          <div className="row d-flex justify-content-center align-item-center h-100">
            <div className="col-12 col-md-12 col-lg-12 col-xl-5">
              <div
                className="card bg-dark text-white overflow-hidden"
                style={{ "border-radius": "1rem" }}
              >
                <div className="card-body py-5 px-5">
                  <label for="exampleDataList jus" class="form-label">
                   Select Exchange Name:
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
            <button className="btn btn-primary form-control" onClick={handleSubmit} > Published</button>
            
            
         </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position="bottom-center"/> 
      </div>
      {/* </div> */}
    </>
  
  
};
export default RabbitMq