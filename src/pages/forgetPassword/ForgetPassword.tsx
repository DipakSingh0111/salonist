import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify'
// import apis from '../utils/ApiConstant';
// import axios from 'axios';


const Logout = () => {
  const [email, setEmail] = useState('');

  // navigate 
  const navigate = useNavigate();


    // handleSubmit
    const handleSubmit = async(e:any) =>{
        e.preventDefault();
        try {
            // const response = await axios.post(apis.forget, email);
            // console.log(response.data);
            toast.success("Password Reset Link Sent to your Email");
            navigate('/')
        } catch (error) {
            toast.error('Error in Logout page!');
        }
    }
    return (
        <div className="appointment-process newlogin">
            <div className="container appointment-main-wrapper">
                <div className="top_nav">
                    <Link to="/" id="backtab" className="btn">
                        Back
                    </Link>
                </div>
                <div className="row display-flex inner align-items-center">
                    <div className="col-md-6 col-12">
                        <div className="services-container">
                            <div className="service_column">
                                <div className="services-section pt-0 servicemain_sec">
                                    <div className="pt-0 service-section px-4 text-center">
                                        <h2 className="titleh2 ">Forgot Password</h2>
                                        <div className="login_inner mt-50">
                                            <form onSubmit={handleSubmit}>
                                            <input
                                                className="form-control mb-3"
                                                placeholder="Email Address"
                                                type="email"
                                                name="email"
                                                required
                                                value={email}
                                                onChange={(e)=> setEmail(e.target.value)}
                                            />
                                            <button
                                                type="submit"
                                                className="button darkBtn full-btn button-large text-center justify-content-center text16">
                                                Continue
                                            </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 image">
                        <img src="/images/register.webp" alt='sideImage'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logout