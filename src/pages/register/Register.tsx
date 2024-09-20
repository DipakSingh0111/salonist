import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import {APIS} from '../../api/ApiConstant';
import { useDispatch} from 'react-redux';
import { login } from '../../store/slice/authSlice'
import { network } from '../../api/axiosConfig';

const Register = () => {
  const navigate = useNavigate();

  const [inputForm, setInputForm] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  
  const dispatch = useDispatch();
  // handle Change
  const handleChange = (key: any, value: any) => {
    setInputForm((_) => ({
      ..._,
      [key]: value
    }));
  };
  // Handle Submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await network.post(APIS.signup, inputForm);
      console.log('API Response:', response.data);
    
        const accessToken = response.data.accessToken;
        // toekn 
        localStorage.setItem('accessToken', accessToken);
        toast.success(response.data.message);
        dispatch(login( { user:{},accessToken}));
        navigate("/");
      
    } catch (error:any) {
      toast.error(error?.message);
    }
  };

  return (
    <div className="appointment-process newlogin">
      <div className="container appointment-main-wrapper">
        <div className="top_nav">
          <Link to="/" id="backtab" className="btn">
            Back
          </Link>
        </div>
        <div className="row display-flex inner">
          <div className="col-md-6 col-12">
            <div className="services-container mt-4 mb-4">
              <div className="service_column">
                <div className="services-section pt-0 servicemain_sec default-form">
                  <div className="pt-0 service-section px-4">
                    <h2 className="titleh2  text-center">Create Account</h2>
                    <p className="textlight text-center">
                      You are almost there.
                      <br /> Create your new account by completing these details
                    </p>
                    <div className="register_form mt-50">
                      <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                          <label>Name<span>*</span></label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder='Name'
                            name="name"
                            defaultValue=""
                            required
                            value={inputForm.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                          />
                        </div>
                        {/* <div className="mb-2">
                          <label>Last name<span>*</span></label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder='Last Name'
                            name="lastName"
                            defaultValue=""
                            required
                            value={inputForm.lastName}
                            onChange={(e) => handleChange('lastName', e.target.value)}
                          />
                        </div> */}
                        <div className="mb-2">
                          <label>Email<span>*</span></label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder='Email'
                            name="email"
                            defaultValue=""
                            required
                            value={inputForm.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                          />
                        </div>
                        <div className="mb-2">
                          <label>Password<span>*</span></label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder='Password'
                            name="password"
                            required
                            value={inputForm.password}
                            onChange={(e) => handleChange('password', e.target.value)}
                          />
                        </div>
                        <div className="mb-2">
                          <label>Contact<span>*</span></label>
                          <input
                            type="number"
                            id="contact"
                            className="form-control"
                            placeholder="Contact"
                            name="contact"
                            required
                            value={inputForm.contact}
                            onChange={(e) => handleChange('contact', e.target.value)}
                          />
                        </div>
                        <div className="mb-1 left">
                          
                          <label htmlFor="vehicle1" className="checkbox-label-text custom-checkbox">
                          <input type="checkbox" id="vehicle1" name="vehicle1" required={true} checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)} /> <span></span>
                            {" "}
                            I agree to the <Link to="#"> Privacy Policy </Link>{" "}
                            <Link to="#">Terms of Use </Link> and{" "}
                            <Link to="#">Terms of Service</Link>
                          </label>
                          <br />
                        </div>
                        <div className="mb-4 left">
                          
                         
                          <label htmlFor="vehicle2" className="checkbox-label-text custom-checkbox">
                          <input type="checkbox" id="vehicle2" name="vehicle2" /><span></span>
                            {" "}
                            I agree to receive marketing notifications with offers
                            and news
                          </label>
                          <br />
                        </div>
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
            <img src="/images/register.webp" alt='images'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;