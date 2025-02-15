import { GoogleLogin } from "@react-oauth/google";
import { MDBInput } from "mdb-react-ui-kit";

const LoginNew=()=>{
    return<>
       <section className="vh-100 gradient-custom mt-0">
        <div class="container py-5 h-10">
            <div className="row d-flex justify-content-center align-item-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white" style={{"border-radius":"1rem"}}>
                 <div className="card-body p5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                        <h2 classsName="fw-bold mb-2 text-uppercase">Login</h2>
                        <p className="text-white-50 mb-5">Please enter your login and password!</p>
                       
                        <div data-mdb-input-init class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" class="form-control form-control-lg" placeholder="Please enter your email"/>
               
              </div>
              <div data-mdb-input-init class="form-outline form-white mb-4 d-flex">
                <input type="password" id="typeEmailX" class="form-control form-control-lg" placeholder="Please enter your password"/>
               
              </div>
              <p class="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
              <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

              <div  class="form-outline form-white mb-4 mt-4">
                {/* <input type="password" id="typeEmailX" class="form-control form-control-lg" placeholder="Please enter your password"/> */}
                <GoogleLogin className="form-control" />
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