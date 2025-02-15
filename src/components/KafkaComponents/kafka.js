import { useState } from "react";
const KafkaPublication = () => {
    const topicList=["Topic 1 ","Topic 2","Topic 3","Topic 5"]
    const[topic,setTopic]=useState(topicList);

  return (
    <>
      <section className="vh-100 gradient-custom mt-0 overflow-auto">
        <div class="container py-5 h-10">
          <div className="row d-flex justify-content-center align-item-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ "border-radius": "1rem" }}
              >
                <div className="card-body py-5 px-5">
                  <label for="exampleDataList jus" class="form-label">
                   Select Topic Name:
                  </label>
                  {/* <input
                    class="form-control"
                    list="datalistOptions"
                    id="exampleDataList"
                    placeholder="Type to search..."
                  /> */}
                  <select id="datalistOptions" className="form-select">
                    {topic.map((item,index)=>{
                        return <option value="item" key="index"> {item}</option>
                    })}

                    <option value="San Francisco"> San Francisco</option>
                    <option value="San Francisco"> San Francisco</option>
                    <option value="San Francisco"> San Francisco</option>
                    <option value="San Francisco"> San Francisco</option>
                  </select>
                  <label for="exampleDataList jus" class="form-label mt-3">
                   Message Type:
                  </label>
                  {/* <input
                    class="form-control"
                    list="datalistOptions"
                    id="exampleDataList"
                    placeholder="Type to search..."
                  /> */}
                  <select id="datalistOptions" className="form-select">
                    

                    <option value="string">String</option>
                    <option value="json"> JSON</option>
                    
                  </select>
                  <div className="mb-3 mt-3">
          <label className="form-label">Message</label>
          <textarea className="form-control"  name="message"></textarea>
         </div>
         <div className="mb-3 mt-3">
            <button className="btn btn-primary form-control"> Published</button>
         </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default KafkaPublication;
