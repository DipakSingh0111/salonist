import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { APIS } from "../../api/ApiConstant";
import { useDispatch } from "react-redux";
import { login } from "../../store/slice/authSlice";
import { network } from "../../api/axiosConfig";

const Login = () => {
  // useDispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputForm, setInputForm] = useState({
    email: "",
    password: "",
  });
  const [isLoginApiLoading, setIsLoginApiLoading] = useState(false);

  // handle Change
  const handleChange = (key: any, value: any) => {
    setInputForm((_) => ({
      ..._,
      [key]: value,
    }));
  };

  // handleSubmit
  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      const user = { inputForm };
      setIsLoginApiLoading(true);
      const response = await network.post(APIS.login, inputForm);
      const accessToken = response.data.accessToken;
      // toekn
      localStorage.setItem("accessToken", accessToken);
      toast.success("Login Successfully");
      dispatch(login({ user, accessToken }));
      navigate("/");
    } catch (error: any) {
      setIsLoginApiLoading(false);
      toast.error(error?.message);
    }
  };

  //   const axiosAPIcall = async ()=>{

  //     try{
  //     const response:any = await network.post(`${APIS.login}`, {
  //      email: "demo1@yopmail.com",
  //      password: "demo1@yopmail.com",
  //     });
  //     console.log("response?.data");
  //     console.log(response);
  //   }catch(e:any){
  //     console.log("==============");
  //     console.log("====================================");
  //     console.log(e.message);
  //     toast.error(e.message)
  //   }

  //   }

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
            <div className="services-container">
              <div className="service_column">
                <div className="services-section pt-0 servicemain_secd">
                  <div className="pt-0 service-section px-4 text-center">
                    <h2 className="titleh2 text-center">Log in or sign up</h2>
                    <p className="textlight text-center">
                      Log in or sign up to complete your booking
                    </p>
                    <div className="login_inner mt-50 default-form">
                      <button className="form-control mb-2 d-flex justify-content-center align-items-center">
                        <svg
                          className="mr-3"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M24 12C24 17.9897 19.6116 22.9542 13.875 23.8542V15.4688H16.6711L17.2031 12H13.875V9.74906C13.875 8.79984 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9703 4.6875 14.6573 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C4.38844 22.9542 0 17.9897 0 12C0 5.37281 5.37281 0 12 0C18.6272 0 24 5.37281 24 12Z"
                            fill="#1877F2"
                          />
                          <path
                            d="M16.6711 15.4688L17.2031 12H13.875V9.74902C13.875 8.80003 14.3399 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9165 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C10.736 23.95 11.3621 24 12 24C12.6379 24 13.264 23.95 13.875 23.8542V15.4688H16.6711Z"
                            fill="white"
                          />
                        </svg>
                        Continue with Facebook
                      </button>
                      <button className="form-control mb-2 d-flex justify-content-center align-items-center">
                        <svg
                          className="mr-3"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_422_3808)">
                            <path
                              d="M5.31891 14.5035L4.4835 17.6222L1.43011 17.6868C0.517594 15.9943 0 14.0578 0 12C0 10.0101 0.483938 8.13362 1.34175 6.48132H1.34241L4.06078 6.9797L5.25159 9.68176C5.00236 10.4084 4.86652 11.1884 4.86652 12C4.86661 12.8809 5.02617 13.7249 5.31891 14.5035Z"
                              fill="#FBBB00"
                            />
                            <path
                              d="M23.7902 9.75824C23.928 10.4841 23.9999 11.2338 23.9999 12C23.9999 12.8591 23.9095 13.6971 23.7375 14.5055C23.1533 17.2563 21.6269 19.6582 19.5124 21.358L19.5118 21.3574L16.0878 21.1827L15.6032 18.1576C17.0063 17.3347 18.1028 16.047 18.6804 14.5055H12.2637V9.75824H18.774H23.7902Z"
                              fill="#518EF8"
                            />
                            <path
                              d="M19.5114 21.3574L19.5121 21.358C17.4556 23.011 14.8433 24 11.9996 24C7.42969 24 3.45652 21.4457 1.42969 17.6868L5.31848 14.5035C6.33187 17.2081 8.94089 19.1334 11.9996 19.1334C13.3143 19.1334 14.546 18.778 15.6029 18.1576L19.5114 21.3574Z"
                              fill="#28B446"
                            />
                            <path
                              d="M19.6596 2.76262L15.7721 5.94525C14.6783 5.26153 13.3853 4.86656 12 4.86656C8.87213 4.86656 6.21431 6.88017 5.25169 9.68175L1.34245 6.48131H1.3418C3.33895 2.63077 7.36223 0 12 0C14.9117 0 17.5814 1.03716 19.6596 2.76262Z"
                              fill="#F14336"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_422_3808">
                              <rect width={24} height={24} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>{" "}
                        Continue with Google
                      </button>
                      <div className="or">
                        <p>OR</p>
                      </div>
                      <form onSubmit={handleSubmit} method="post">
                        <input
                          className="form-control mb-2"
                          placeholder="Email Address"
                          type="email"
                          name="email"
                          required
                          value={inputForm.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                        />
                        <input
                          className="form-control  mb-2"
                          placeholder="Password"
                          type="password"
                          name="password"
                          required
                          value={inputForm.password}
                          onChange={(e) =>
                            handleChange("password", e.target.value)
                          }
                        />
                        <p className="text-right">
                          <Link to="/forgetPassword">Forgot Password?</Link>
                        </p>
                        <button
                          disabled={isLoginApiLoading}
                          type="submit"
                          className="button darkBtn full-btn button-large text-center justify-content-center text16"
                        >
                          {isLoginApiLoading ? (
                            <div className="loader">
                              <span></span>
                            </div>
                          ) : (
                            "Continue"
                          )}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 image">
            <img src="/images/register.webp" alt="images" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
