import axios from "axios";

import BASE_URL from './ApiConstant';
// console.log("BASE_URL");
// console.log(APIS);

axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use(
  async function (config: any) {
      let accessToken = await localStorage.getItem('accessToken');
      console.log('axios interceptor========', accessToken);
      if (accessToken) {
        config.headers.Authorization = 'Bearer ' + accessToken; // set access token for axios.
      }    
      return config;
    },
  function (error: any) {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  function (response: any) {
    // console.log("response+++++++");
    // console.log(response);
    // console.log(response?.data);

    if(response?.data?.status == "error"){
       // console.log({ message:"Something went wrong! Please try after some time. ", ...response?.data });
       return Promise.reject({ message:"Something went wrong! Please try after some time.", ...response?.data });
    }else{
      return response?.data;
     
    }
   
  },
  async function (error) {
    // if (error.customSNError) {
    //   return Promise.reject(error);
    // }

    const originalRequest = error.config;
    const status = error.request.status;

    console.log("=====================",status);

    // if (status === 401) {
    //   await logout(dispatch);
    //   // showWarningMessage('Session expired', 'Please log in again.');
    //   return;
    // }
    console.log('\x1B[31m<------------------ API ERROR ----------------->');
    console.log(
      '\x1B[31m' +
        '[' +
        originalRequest?.method?.toUpperCase() +
        '] :  ' +
        originalRequest?.baseURL +
        originalRequest?.url +
        ' -> ' +
        status,
    );
    originalRequest?.data &&
      console.log('\x1B[31mData   : ', originalRequest?.data);
    // @ts-ignore
    console.log('\x1B[31mError  : ' + error?.response?.data?.message);
    console.log('\x1B[31m<------------------ API ERROR ----------------->');
    return Promise.reject(error);
  },
);

export const network = axios;