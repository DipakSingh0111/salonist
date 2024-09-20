import React, { useEffect, useState } from "react";
import { APIS } from "../../api/ApiConstant";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
// import Calendar from "../../components/calendar/Calendar";
import { Modal } from "react-bootstrap";
import {
  QS_ADD_ITEM_TO_CART,
  QS_DELETE_ITEM_TO_CART,
  QS_UPDATE_STAFF_TO_CART,
} from "../../store/slice/serviceSlice";
// import { getSourceMapRange } from "typescript";
import moment from "moment";
import HorizontalStripDatePicker from "react-horizontal-strip-datepicker";
import "react-horizontal-strip-datepicker/dist/ReactHorizontalDatePicker.css";
import { network } from "../../api/axiosConfig";
import Login from "../login/Login";
const Booking = () => {
  const [isApiLoading, setIsApiLoading] = useState(false);
  const [teamLoading, setTeamLoading] = useState(false);
  const [serviceLoading, setServiceLoading] = useState(false);
  const [timeLoading, setTimeLoading] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  let [currency, setCurrency] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ADD_TO_CART
  const serviceSaleReducer: any = useSelector(
    (state: any) => state?.serviceSale
  );
  const [getServiceStaffs, setGetServiceStaffs] = useState([]);
  console.log(getServiceStaffs);

  let [serviceData, setServiceData] = useState<any>(null);
  let [serviceList, setServiceList] = useState<any>([]);
  let [staffTime, setStaffTime] = useState([]);
  const [activeTab, setActiveTab] = useState("services");
  let [serviceSliderSelected, setServiceSliderSelected] = useState("");

  const ENUM_cartType = { service: "service" };

  console.log("===========serviceSaleReducer======", serviceSaleReducer);

  async function getServiceDataApi(domainName: string) {
    try {
      setIsApiLoading(true);
      const response = await axios.post(`${APIS.bookingPageApi}`, {
        domainName: domainName,
      });
      console.log(response?.data);
      setCurrency(response?.data?.detail?.currency);
      setServiceData(response?.data);
      setServiceList(response?.data?.services);
      setIsApiLoading(false);
    } catch (error: any) {
      console.error(error.message);
      setIsApiLoading(false);
    }
  }
  const { domainName }: any = useParams();
  useEffect(() => {
    getServiceDataApi(domainName)
      .then((rec: any) => {})
      .catch((err: any) => {
        console.log(err.message);
      });
  }, [domainName]);

  //

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  // reducer onCLick
  const addToCart = (childRec: any) => {
    const product: any = {
      cartType: ENUM_cartType.service,
      id: childRec.id,
      name: childRec.name,
      qs_price: childRec.price,
      qs_qty: 1,
      qs_total: childRec.price,
      qs_time: childRec.service_time,
      staff: {},
    };
    dispatch(QS_ADD_ITEM_TO_CART({ cart: product }));
  };

  // deleteHandleClick
  const deleteFromCart = (item: { id: string; cartType: string }) => {
    dispatch(
      QS_DELETE_ITEM_TO_CART({ item: { cartType: item.cartType, id: item.id } })
    );
  };

  // Service Slider
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    variableWidth: true,
    arrows: true,
    slidesToScroll: 1,
    nextArrow: <ChevronRight color="black" />,
    prevArrow: <ChevronLeft color="black" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // Slider
  const Date = {
    className: "center",
    centerMode: true,
    centerPadding: "30px",
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <ChevronRight color="black" />,
    prevArrow: <ChevronLeft color="black" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Team APi
  const getServiceStaff = async () => {
    try {
      setTeamLoading(true);
      const response = await network.post(APIS.getServiceStaff, {
        domainId: serviceData.detail.domainId,
        serviceId: serviceSaleReducer.selectedServiceIds.join(),
      });
      console.log("Get Service Staff", response?.data?.staffs);
      setGetServiceStaffs(response?.data?.staffs);
      setTeamLoading(false);
    } catch (error) {
      console.log(error);
      setTeamLoading(false);
    }
  };

  //get_staff_time_availaibility API

  const getStaffTime = async (selectDate: string) => {
    try {
      ///
      setTimeLoading(true);
      const serviceIdArray: any = [];
      const serviceTimeArray: any = [];

      (serviceSaleReducer.carts || []).forEach((rec: any) => {
        serviceIdArray.push(rec.id);
        serviceTimeArray.push(rec.qs_time);
      });

      const response = await network.post(APIS.get_staff_time_availaibility, {
        domainId: serviceData.detail.domainId,
        date: selectDate,
        serviceId: serviceIdArray.join(),
        staffId: serviceSaleReducer.selectedStaffId,
        servicetime: serviceTimeArray.join(),
      });

      setStaffTime(response?.data?.times);
      setTimeLoading(false);
    } catch (error) {
      console.log(error);
      setTimeLoading(false);
    }
  };

  useEffect(() => {
    getStaffTime(selectedDate);
  }, []);

  const onSelectedDay = (date: Date) => {
    console.log(date);
    const selectDate = moment(date).format("YYYY-MM-DD");
    console.log(selectDate);
    setSelectedDate(selectDate);
    getStaffTime(selectDate);
    // console.log('Selected date:', date);
  };
  const [selectedDate, setSelectedDate] = useState<any | string | null>(
    moment().format("YYYY-MM-DD")
  );

  if (isApiLoading) {
    return (
      <>
        <div className="loader">
          <span></span>
        </div>
      </>
    );
  }

  // Model

  // const openModal = (index: number) => {
  //   setCurrentIndex(index);
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  const openModal = () => {
    setIsModalOpen(true);
    console.log("clicked", setIsModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // console.log("clicked", setIsModalOpen);
  };

  async function saveBooking() {
    try {
      let {
        carts,
        customer,
        tips,
        total,
        saleNote,
        cartDiscount,
        paymentSources,
        subTotal,
        paymentDifferentSource,
        payToAmount,
        taxList,
        tax_flat,
        tax_per,
        booking_date,
      } = serviceSaleReducer;

      let finalResponse = {
        subTotal,
        cartDiscount,
        total,
        carts,
        saleNote,
        tipsArray: tips?.tipsArray,
        // customerId: customer?.id,
        // loginUserId: props?.auth?.auth?.user?.id,
        customerId: "2473632",
        loginUserId: "1900016",
        saleType: "Appointment",
        domainId: serviceData?.detail?.domainId,
        balanceAmount: payToAmount,
        payingNow: paymentDifferentSource,
        paymentSources: paymentSources.paymentSourcesArray,
        tax_per,
        tax_flat,
        taxList,
        // booking_date,
        booking_date: "2024-08-30",
      };

      const response = await network.post(APIS.save_booking, finalResponse);

      console.log("-----------------jsonApiCallNewQuickSale-----------------");
      console.log(response);
      console.log("-----------------jsonApiCallNewQuickSale-----------------");
      // console.log('Success:', data);
      // resetBA()  /// RESET REDUCER
      // setSaveLoading(false) // loader false
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      // setSaveLoading(false) // loader false
      throw error;
    }
  }

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollDistance = window.scrollY;
  //     const sections = document.querySelectorAll('.service-section');
  //     sections.forEach((section:any, i) => {
  //       if (section.offsetTop <= scrollDistance) {
  //         document.querySelector('.services_main a.active')?.classList.remove('active');
  //         document.querySelectorAll('.services_main a')[i]?.classList.add('active');
  //       }
  //     });
  //   };

  //   const handleClick = (e:any) => {
  //     e.preventDefault();
  //     const target = document.querySelector(e.target.getAttribute('href'));
  //     if (target) {
  //       const scrollTo = target.offsetTop;
  //       window.scrollTo({
  //         top: scrollTo,
  //         behavior: 'smooth',
  //       });
  //     }
  //   };

  //   const stickyNavLinks = document.querySelectorAll('.sticky_nav a');
  //   stickyNavLinks.forEach(link => {
  //     link.addEventListener('click', handleClick);
  //   });

  //   window.addEventListener('scroll', handleScroll);
  //   handleScroll(); // Trigger scroll on page load

  //   return () => {
  //     // Cleanup event listeners on component unmount
  //     stickyNavLinks.forEach(link => {
  //       link.removeEventListener('click', handleClick);
  //     });
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div className="appointment-process">
      <div className="container appointment-main-wrapper">
        <div className="top_nav">
          <button
            id="backtab"
            className="btn"
            onClick={() => {
              navigate(`/salons/${domainName}`);
            }}
          >
            Back
          </button>

          <div className="sticky_nav">
            <a
              className={`tablinks ${activeTab === "services" ? "active" : ""}`}
              href="#"
              onClick={() => handleTabClick("services")}
            >
              <span className="sticky_nav_icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_308_4678)">
                    <mask
                      id="mask0_308_4678"
                      maskUnits="userSpaceOnUse"
                      x="8"
                      y="8"
                      width="24"
                      height="24"
                    >
                      <circle cx="20" cy="20" r="12" fill="#D9D9D9"></circle>
                    </mask>
                    <g mask="url(#mask0_308_4678)">
                      <path
                        d="M41.6808 17.5776C41.6119 16.9643 40.8965 16.5029 40.2779 16.5029C38.2787 16.5029 36.5044 15.3295 35.7604 13.5134C35.0008 11.6536 35.4909 9.48512 36.9804 8.11866C37.4495 7.68972 37.5067 6.97148 37.1134 6.4729C36.0898 5.17344 34.927 3.99946 33.657 2.98212C33.1601 2.58356 32.43 2.63904 31.9988 3.11629C30.6984 4.55654 28.3623 5.09172 26.5571 4.33857C24.6792 3.54844 23.4939 1.6449 23.6103 -0.398276C23.6487 -1.04046 23.1791 -1.59848 22.5392 -1.67302C20.9093 -1.86174 19.2651 -1.86721 17.6305 -1.68586C16.9986 -1.61603 16.5295 -1.07122 16.5505 -0.437151C16.6212 1.58603 15.4225 3.45597 13.5628 4.2178C11.7793 4.94642 9.45943 4.41519 8.16166 2.98759C7.73272 2.51732 7.01542 2.45957 6.51515 2.84964C5.20775 3.87567 4.01868 5.0504 2.98567 6.3393C2.58315 6.84033 2.6426 7.56649 3.1157 7.99694C4.63464 9.37246 5.12434 11.5596 4.33572 13.4411C3.58276 15.2348 1.72036 16.3903 -0.411513 16.3903C-1.10333 16.368 -1.59568 16.8328 -1.67211 17.462C-1.86384 19.1005 -1.86591 20.771 -1.68135 22.423C-1.61247 23.039 -0.875932 23.4964 -0.250542 23.4964C1.64978 23.4481 3.47312 24.6238 4.2391 26.4858C5.0013 28.3455 4.51065 30.5131 3.0187 31.8814C2.55201 32.3104 2.49238 33.0269 2.88641 33.5249C3.8996 34.8163 5.06358 35.991 6.33738 37.017C6.83747 37.4197 7.56476 37.3633 7.99823 36.8855C9.30374 35.4418 11.6394 34.9076 13.4373 35.6623C15.3206 36.4503 16.5054 38.3537 16.3897 40.3974C16.3517 41.0396 16.8224 41.5993 17.46 41.6722C18.2942 41.7697 19.1326 41.818 19.9737 41.818C20.7719 41.818 21.5704 41.7744 22.3688 41.6856C23.0014 41.6157 23.4698 41.0704 23.4484 40.4361C23.3754 38.4139 24.5767 36.5437 26.4342 35.7834C28.2296 35.0501 30.5391 35.5868 31.8376 37.0123C32.2688 37.4816 32.9818 37.5386 33.4841 37.1501C34.7892 36.1267 35.9761 34.9525 37.0136 33.6602C37.4165 33.1601 37.3593 32.433 36.8836 32.0018C35.365 30.6272 34.8727 28.4391 35.6613 26.5596C36.4025 24.79 38.1957 23.6019 40.1243 23.6019L40.3942 23.6091C41.0203 23.6598 41.5957 23.1777 41.6714 22.5389C41.864 20.8988 41.8661 19.2302 41.6808 17.5776ZM19.9999 32.5783C13.0529 32.5783 7.42153 26.947 7.42153 20.0001C7.42153 13.0533 13.0531 7.42194 19.9999 7.42194C26.9468 7.42194 32.5783 13.0533 32.5783 20.0001C32.5783 22.3581 31.9282 24.5636 30.7991 26.4495L25.2914 20.9416C25.6901 20.0015 25.9007 18.9822 25.9006 17.9303C25.9006 15.8706 25.0983 13.9342 23.6417 12.4779C22.1854 11.0216 20.249 10.2196 18.1896 10.2196C17.5023 10.2196 16.8182 10.3109 16.1564 10.4911C15.8666 10.5702 15.6295 10.8091 15.5524 11.0995C15.4735 11.3966 15.5624 11.701 15.7945 11.9333C15.7945 11.9333 18.5136 14.6734 19.4234 15.583C19.5187 15.6783 19.5185 15.9057 19.5051 15.9876L19.4966 16.0474C19.4049 17.0476 19.2281 18.2481 19.0822 18.7095C19.0626 18.729 19.0441 18.7454 19.0241 18.7654C19.0031 18.7863 18.9839 18.8065 18.9637 18.8273C18.4963 18.9773 17.2772 19.1562 16.2612 19.2472L16.2614 19.2417L16.2157 19.2532C16.2076 19.2542 16.1925 19.2553 16.1725 19.2553C16.0626 19.2553 15.9011 19.2245 15.7543 19.0779C14.8073 18.1309 12.1948 15.5371 12.1948 15.5371C11.9604 15.3035 11.72 15.2544 11.5598 15.2544C11.1863 15.2544 10.8519 15.5243 10.7466 15.9113C10.0274 18.5727 10.7898 21.4355 12.7368 23.3826C14.1934 24.8391 16.13 25.6411 18.1898 25.6411C19.2417 25.6411 20.2609 25.4307 21.2009 25.0319L26.7684 30.5995C24.8138 31.8503 22.4926 32.5783 19.9999 32.5783Z"
                        fill="#15023A"
                      ></path>
                    </g>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M38.5878 16.7945C39.1549 16.7945 39.8107 17.2174 39.8738 17.7796C40.0437 19.2944 40.0418 20.824 39.8651 22.3274C39.7958 22.913 39.2683 23.3549 38.6944 23.3084L38.447 23.3018C36.6791 23.3018 35.0354 24.391 34.3559 26.013C33.633 27.736 34.0843 29.7417 35.4763 31.0018C35.9124 31.397 35.9648 32.0636 35.5955 32.522C34.6444 33.7066 33.5565 34.7829 32.3602 35.721C31.8997 36.0772 31.2461 36.0249 30.8509 35.5947C29.6605 34.288 27.5435 33.796 25.8978 34.4682C24.1951 35.1652 23.0938 36.8795 23.1608 38.7332C23.1803 39.3146 22.751 39.8145 22.1711 39.8785C21.4392 39.96 20.7073 40 19.9756 40C19.2046 40 18.436 39.9557 17.6714 39.8663C17.0869 39.7995 16.6555 39.2864 16.6903 38.6977C16.7963 36.8243 15.7103 35.0796 13.9839 34.3572C12.3359 33.6654 10.1948 34.1551 8.9981 35.4785C8.60075 35.9165 7.93406 35.9682 7.47565 35.599C6.308 34.6585 5.24102 33.5817 4.31226 32.3979C3.95107 31.9414 4.00573 31.2846 4.43352 30.8914C5.80115 29.6371 6.25091 27.6502 5.55222 25.9454C4.85007 24.2386 3.17868 23.1609 1.43672 23.2051C0.863444 23.2051 0.188281 22.7858 0.125141 22.2212C-0.0440388 20.7069 -0.042136 19.1756 0.133617 17.6736C0.203677 17.0968 0.654996 16.6708 1.28916 16.6912C3.24338 16.6912 4.95058 15.632 5.64079 13.9878C6.3637 12.2631 5.9148 10.2582 4.52244 8.9973C4.08876 8.60272 4.03427 7.93707 4.40325 7.4778C5.35017 6.2963 6.44016 5.21947 7.6386 4.27894C8.09719 3.92138 8.75471 3.97432 9.1479 4.4054C10.3375 5.71403 12.464 6.20099 14.0989 5.53309C15.8037 4.83475 16.9025 3.12063 16.8376 1.26605C16.8184 0.68482 17.2485 0.18541 17.8276 0.121406C19.326 -0.0448336 20.8333 -0.039817 22.3273 0.133169C22.9139 0.201498 23.3443 0.713017 23.3092 1.30169C23.2025 3.1746 24.289 4.91951 26.0104 5.6438C27.6652 6.33419 29.8065 5.8436 30.9986 4.52337C31.3939 4.08589 32.0631 4.03503 32.5186 4.40038C33.6828 5.33295 34.7487 6.40909 35.687 7.60027C36.0475 8.0573 35.9951 8.71568 35.5651 9.10888C34.1997 10.3615 33.7504 12.3492 34.4467 14.054C35.1288 15.7188 36.7552 16.7945 38.5878 16.7945ZM19.5 32.0001C26.4036 32.0001 32 26.4037 32 19.5001C32 12.5966 26.4036 7.00012 19.5 7.00012C12.5964 7.00012 7 12.5966 7 19.5001C7 26.4037 12.5964 32.0001 19.5 32.0001Z"
                      fill="#A2E3B8"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_308_4678">
                      <rect width="40" height="40" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="dark">Services</span>
            </a>

            <a
              className={`tablinks ${activeTab === "team" ? "active" : ""}`}
              href="#"
              onClick={() => handleTabClick("team")}
            >
              <span className="sticky_nav_icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_308_4569)">
                    <path
                      d="M25.8189 21.1719C25.2744 23.843 22.8293 25.8594 20 25.8594C17.1706 25.8594 14.8036 23.843 14.2592 21.1719H11.9153C12.49 25.1367 15.8785 28.2031 20 28.2031C24.1215 28.2031 27.588 25.1367 28.1628 21.1719H25.8189Z"
                      fill="#15023A"
                    ></path>
                    <path
                      d="M30.5066 21.1719C29.9149 26.4309 25.4146 30.5469 20 30.5469C14.5854 30.5469 10.1632 26.4309 9.57156 21.1719H0V22.3438C0 22.8484 0.323906 23.297 0.802266 23.4561L5.62398 25.0297C5.82656 25.6042 6.04055 26.1272 6.26945 26.6101L4.04469 31.0802C3.82039 31.531 3.90961 32.0746 4.26555 32.4305L7.56945 35.7345C7.92766 36.0927 8.47008 36.1773 8.91984 35.9553L13.3899 33.7305C13.8729 33.9595 14.3959 34.1734 14.9703 34.376L16.5439 39.1977C16.703 39.6761 17.1516 40 17.6562 40H22.4219C22.9266 40 23.3752 39.6761 23.5342 39.1977L25.1078 34.376C25.6823 34.1734 26.2053 33.9595 26.6882 33.7305L31.1583 35.9553C31.608 36.1784 32.1516 36.0927 32.5087 35.7345L35.8126 32.4305C36.1685 32.0746 36.2577 31.531 36.0334 31.0802L33.8087 26.6101C34.0376 26.1271 34.2516 25.6041 34.4541 25.0297L39.1977 23.4561C39.6761 23.297 40 22.8484 40 22.3438V21.1719H30.5066Z"
                      fill="#15023A"
                    ></path>
                    <path
                      d="M16.7002 21.1719C17.1856 22.533 18.4742 23.5156 20 23.5156C21.5257 23.5156 22.8925 22.533 23.3779 21.1719H16.7002Z"
                      fill="#15023A"
                    ></path>
                    <path
                      d="M20 0C17.4148 0 15.3125 2.10227 15.3125 4.6875C15.3125 7.27273 17.4148 9.375 20 9.375C22.5852 9.375 24.7656 7.27273 24.7656 4.6875C24.7656 2.10227 22.5852 0 20 0Z"
                      fill="#A2E3B8"
                    ></path>
                    <path
                      d="M31.7969 0C29.2116 0 27.1094 2.10227 27.1094 4.6875C27.1094 7.27273 29.2116 9.375 31.7969 9.375C34.3821 9.375 36.4844 7.27273 36.4844 4.6875C36.4844 2.10227 34.3821 0 31.7969 0Z"
                      fill="#A2E3B8"
                    ></path>
                    <path
                      d="M8.28125 0C5.69602 0 3.59375 2.10227 3.59375 4.6875C3.59375 7.27273 5.69602 9.375 8.28125 9.375C10.8665 9.375 12.9688 7.27273 12.9688 4.6875C12.9688 2.10227 10.8665 0 8.28125 0Z"
                      fill="#A2E3B8"
                    ></path>
                    <path
                      d="M35.7941 10.4596C34.6574 11.2494 33.2828 11.7187 31.7968 11.7187C30.317 11.7187 28.9466 11.2544 27.8127 10.4706C27.2987 10.7657 26.8047 11.0975 26.3574 11.4976C28.6364 13.2012 30.2187 15.8618 30.5534 18.8281H39.9999V17.6562C39.9999 14.5919 38.2905 11.8678 35.7941 10.4596Z"
                      fill="#A2E3B8"
                    ></path>
                    <path
                      d="M20 11.7188C15.8744 11.7188 12.4503 14.8582 11.8804 18.8281H28.1976C27.6278 14.8582 24.1256 11.7188 20 11.7188Z"
                      fill="#A2E3B8"
                    ></path>
                    <path
                      d="M12.2654 10.4706C11.1314 11.2544 9.76109 11.7187 8.28125 11.7187C6.79523 11.7187 5.42062 11.2494 4.28398 10.4596C1.78758 11.8678 0 14.5919 0 17.6562V18.8281H9.52469C9.85938 15.8618 11.4416 13.2012 13.7206 11.4976C13.2733 11.0975 12.7794 10.7657 12.2654 10.4706Z"
                      fill="#A2E3B8"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_308_4569">
                      <rect width="40" height="40" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="dark">Team</span>
            </a>

            <a
              href="#"
              className={`tablinks ${activeTab === "datetime" ? "active" : ""}`}
              onClick={() => handleTabClick("datetime")}
            >
              <span className="sticky_nav_icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.3333 2.43749C17.3333 1.68961 16.7271 1.08333 15.9792 1.08333C15.2313 1.08333 14.625 1.68961 14.625 2.43749V4.06249C14.625 4.81038 15.2313 5.41666 15.9792 5.41666C16.7271 5.41666 17.3333 4.81038 17.3333 4.06249V2.43749Z"
                    fill="#15023A"
                  ></path>
                  <path
                    d="M18.4163 2.70833V4.0625C18.4163 4.70896 18.1595 5.32895 17.7024 5.78607C17.2453 6.24319 16.6253 6.5 15.9788 6.5C15.3324 6.5 14.7124 6.24319 14.2553 5.78607C13.7982 5.32895 13.5413 4.70896 13.5413 4.0625V2.70833H8.66634V4.0625C8.66634 4.70896 8.40953 5.32895 7.95241 5.78607C7.49529 6.24319 6.87531 6.5 6.22884 6.5C5.58238 6.5 4.96239 6.24319 4.50527 5.78607C4.04815 5.32895 3.79134 4.70896 3.79134 4.0625V2.70833C3.07305 2.70833 2.38417 2.99367 1.87626 3.50158C1.36835 4.00949 1.08301 4.69837 1.08301 5.41666V8.125H21.1247V5.41666C21.1247 4.69837 20.8393 4.00949 20.3314 3.50158C19.8235 2.99367 19.1346 2.70833 18.4163 2.70833Z"
                    fill="#15023A"
                  ></path>
                  <path
                    d="M7.58333 2.43749C7.58333 1.68961 6.97705 1.08333 6.22917 1.08333C5.48128 1.08333 4.875 1.68961 4.875 2.43749V4.06249C4.875 4.81038 5.48128 5.41666 6.22917 5.41666C6.97705 5.41666 7.58333 4.81038 7.58333 4.06249V2.43749Z"
                    fill="#15023A"
                  ></path>
                  <path
                    d="M12.9997 19.5C12.9993 18.427 13.2648 17.3706 13.7726 16.4253C14.2804 15.48 15.0146 14.6754 15.9095 14.0833H15.1663C14.879 14.0833 14.6035 13.9692 14.4003 13.766C14.1971 13.5629 14.083 13.2873 14.083 13V11.9167C14.083 11.6293 14.1971 11.3538 14.4003 11.1506C14.6035 10.9475 14.879 10.8333 15.1663 10.8333H16.2497C16.537 10.8333 16.8125 10.9475 17.0157 11.1506C17.2189 11.3538 17.333 11.6293 17.333 11.9167V13C17.3329 13.1397 17.3055 13.2781 17.2523 13.4073C18.4914 12.9413 19.8451 12.8733 21.1247 13.2129V9.20833H1.08301V19.5C1.08301 19.8557 1.15306 20.2078 1.28917 20.5364C1.42527 20.865 1.62477 21.1636 1.87626 21.4151C2.12775 21.6666 2.42632 21.8661 2.75491 22.0022C3.0835 22.1383 3.43568 22.2083 3.79134 22.2083H13.5955C13.2032 21.3593 12.9999 20.4353 12.9997 19.5ZM7.58301 18.4167C7.58301 18.704 7.46887 18.9795 7.26571 19.1827C7.06254 19.3859 6.78699 19.5 6.49968 19.5H5.41634C5.12902 19.5 4.85347 19.3859 4.65031 19.1827C4.44714 18.9795 4.33301 18.704 4.33301 18.4167V17.3333C4.33301 17.046 4.44714 16.7705 4.65031 16.5673C4.85347 16.3641 5.12902 16.25 5.41634 16.25H6.49968C6.78699 16.25 7.06254 16.3641 7.26571 16.5673C7.46887 16.7705 7.58301 17.046 7.58301 17.3333V18.4167ZM7.58301 13C7.58301 13.2873 7.46887 13.5629 7.26571 13.766C7.06254 13.9692 6.78699 14.0833 6.49968 14.0833H5.41634C5.12902 14.0833 4.85347 13.9692 4.65031 13.766C4.44714 13.5629 4.33301 13.2873 4.33301 13V11.9167C4.33301 11.6293 4.44714 11.3538 4.65031 11.1506C4.85347 10.9475 5.12902 10.8333 5.41634 10.8333H6.49968C6.78699 10.8333 7.06254 10.9475 7.26571 11.1506C7.46887 11.3538 7.58301 11.6293 7.58301 11.9167V13ZM12.458 18.4167C12.458 18.704 12.3439 18.9795 12.1407 19.1827C11.9375 19.3859 11.662 19.5 11.3747 19.5H10.2913C10.004 19.5 9.72847 19.3859 9.52531 19.1827C9.32215 18.9795 9.20801 18.704 9.20801 18.4167V17.3333C9.20801 17.046 9.32215 16.7705 9.52531 16.5673C9.72847 16.3641 10.004 16.25 10.2913 16.25H11.3747C11.662 16.25 11.9375 16.3641 12.1407 16.5673C12.3439 16.7705 12.458 17.046 12.458 17.3333V18.4167ZM12.458 13C12.458 13.2873 12.3439 13.5629 12.1407 13.766C11.9375 13.9692 11.662 14.0833 11.3747 14.0833H10.2913C10.004 14.0833 9.72847 13.9692 9.52531 13.766C9.32215 13.5629 9.20801 13.2873 9.20801 13V11.9167C9.20801 11.6293 9.32215 11.3538 9.52531 11.1506C9.72847 10.9475 10.004 10.8333 10.2913 10.8333H11.3747C11.662 10.8333 11.9375 10.9475 12.1407 11.1506C12.3439 11.3538 12.458 11.6293 12.458 11.9167V13Z"
                    fill="#15023A"
                  ></path>
                  <path
                    d="M19.4997 14.0833C18.4284 14.0833 17.3811 14.401 16.4903 14.9962C15.5996 15.5914 14.9053 16.4374 14.4953 17.4271C14.0854 18.4169 13.9781 19.506 14.1871 20.5567C14.3961 21.6075 14.912 22.5726 15.6695 23.3302C16.4271 24.0877 17.3922 24.6036 18.4429 24.8126C19.4937 25.0216 20.5828 24.9143 21.5725 24.5043C22.5623 24.0944 23.4083 23.4001 24.0035 22.5093C24.5987 21.6186 24.9163 20.5713 24.9163 19.5C24.9163 18.7887 24.7762 18.0843 24.504 17.4271C24.2318 16.7699 23.8328 16.1728 23.3298 15.6698C22.8269 15.1668 22.2297 14.7679 21.5725 14.4956C20.9154 14.2234 20.211 14.0833 19.4997 14.0833ZM21.5076 21.508C21.4061 21.6095 21.2683 21.6665 21.1247 21.6665C20.981 21.6665 20.8433 21.6095 20.7417 21.508L19.1167 19.883C19.0151 19.7814 18.958 19.6436 18.958 19.5V16.25C18.958 16.1063 19.0151 15.9686 19.1167 15.867C19.2182 15.7654 19.356 15.7083 19.4997 15.7083C19.6433 15.7083 19.7811 15.7654 19.8827 15.867C19.9843 15.9686 20.0413 16.1063 20.0413 16.25V19.2757L21.5076 20.742C21.6092 20.8436 21.6662 20.9814 21.6662 21.125C21.6662 21.2686 21.6092 21.4064 21.5076 21.508Z"
                    fill="#15023A"
                  ></path>
                </svg>
              </span>
              <span className="dark">Date & Time</span>
            </a>

            <a
              href="#"
              className={`tablinks ${activeTab === "confirm" ? "active" : ""}`}
              onClick={() => handleTabClick("confirm")}
            >
              <span className="sticky_nav_icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.0830078 12C0.0830078 5.4186 5.41828 0.0833282 11.9997 0.0833282C18.581 0.0833282 23.9163 5.4186 23.9163 12C23.9163 18.5814 18.581 23.9167 11.9997 23.9167C5.41828 23.9167 0.0830078 18.5814 0.0830078 12ZM17.099 9.8408C17.5221 9.41774 17.5221 8.73182 17.099 8.30875C16.676 7.88568 15.99 7.88568 15.567 8.30875L10.4976 13.3781L8.44669 11.2484C8.03167 10.8174 7.34587 10.8044 6.9149 11.2195C6.48393 11.6345 6.47098 12.3202 6.88599 12.7513L9.70267 15.6763C9.9044 15.8858 10.1819 16.0054 10.4728 16.0081C10.7637 16.0108 11.0434 15.8965 11.249 15.6908L17.099 9.8408Z"
                    fill="#15023A"
                  ></path>
                </svg>
              </span>
              <span className="dark">Confirm</span>
            </a>
          </div>
        </div>
        <div className="row display-flex inner">
          <div className="col-md-8 col-12">
            <div className="services-container">
              <div className="service_column">
                <div className="services-section servicemain_sec">
                  <div
                    className="tabcontent"
                    style={{
                      display: activeTab === "services" ? "block" : "none",
                    }}
                  >
                    <h2 className="title45">Select Services</h2>
                    <p></p>
                    <div id="services_main_head">
                      <Slider
                        {...settings}
                        className="slider-nav-service slider services_main"
                      >
                        {serviceLoading ? (
                          <div className="loader">
                            <span></span>
                          </div>
                        ) : (
                          serviceData &&
                          serviceData.services.map(
                            (rec: any, index: number) => {
                              return (
                                <div
                                  key={index}
                                  className="service_item_tab_link"
                                >
                                  <a
                                    className={`service_btn js-anchor-link ${
                                      serviceSliderSelected == rec?.Plan?.id
                                        ? "selected"
                                        : ""
                                    }`}
                                    href={`#service${index}`}
                                    id={`#service${index}`}
                                    onClick={(event) => {
                                      console.log("rec");
                                      console.log(rec?.Plan?.id);
                                      setServiceSliderSelected(rec?.Plan?.id);
                                      //  console.log(rec.Child);
                                      //  console.log([...rec]);
                                      setServiceList([rec]);
                                    }}
                                  >
                                    {rec.Plan.name}
                                  </a>
                                </div>
                              );
                            }
                          )
                        )}
                      </Slider>
                    </div>
                    <div
                      className="pt-3 service-section servicesec-content"
                      id="services"
                    >
                      {serviceLoading ? (
                        <div className="loader">
                          <span></span>
                        </div>
                      ) : (
                        serviceList &&
                        serviceList?.map((rec: any, index: number) => {
                          return (
                            <div
                              key={index}
                              className={
                                index === 0
                                  ? `service-items`
                                  : "mt-40 service-items"
                              }
                            >
                              <h3 className="titleh2  mb-4">{rec.Plan.name}</h3>

                              {rec &&
                                rec?.Child.map(
                                  (childRec: any, index: number) => {
                                    return (
                                      <div
                                        key={index}
                                        className={`service-item ${
                                          serviceSaleReducer.selectedServiceIds.includes(
                                            childRec.id
                                          )
                                            ? "active"
                                            : ""
                                        } `}
                                        onClick={() => {
                                          if (
                                            serviceSaleReducer.selectedServiceIds.includes(
                                              childRec.id
                                            )
                                          ) {
                                            deleteFromCart({
                                              id: childRec.id,
                                              cartType: ENUM_cartType.service,
                                            });
                                          } else {
                                            addToCart(childRec);
                                          }
                                        }}
                                      >
                                        {/* <button
                                                      className="service_selector"
                                                      data-toggle="modal"
                                                      data-target="#exampleModal"
                                                    ></button> */}
                                        <div className="service_info">
                                          <h3 className="title_service">
                                            {childRec.name}
                                          </h3>
                                          <p className="srevice_time">
                                            {childRec.service_time}
                                          </p>
                                          <p className="service_price">
                                            From{" "}
                                            <span>
                                              {currency}
                                              {childRec.price}
                                            </span>
                                          </p>
                                        </div>
                                        <div className="service_butns">
                                          <button className="add_service">
                                            {serviceSaleReducer.selectedServiceIds.includes(
                                              childRec.id
                                            ) ? (
                                              <>
                                                <svg
                                                  width="14"
                                                  height="14"
                                                  x="0"
                                                  y="0"
                                                  viewBox="0 0 24 24"
                                                >
                                                  <g transform="matrix(1.6000000000000014,0,0,1.6000000000000014,-7.2000002861023145,-7.199999427795429)">
                                                    <path
                                                      d="M18.7 7.2c-.4-.4-1-.4-1.4 0l-7.5 7.5-3.1-3.1c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3.8 3.8c.2.2.4.3.7.3s.5-.1.7-.3l8.2-8.2c.4-.4.4-1 0-1.4z"
                                                      fill="currentcolor"
                                                      opacity="1"
                                                    ></path>
                                                  </g>
                                                </svg>
                                              </>
                                            ) : (
                                              <>
                                                <svg
                                                  className="icon-right"
                                                  width="14"
                                                  height="14"
                                                  viewBox="0 0 14 14"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    d="M7.87346 6.12654V0H6.12654V6.12654H0V7.87346H6.12654V14H7.87346V7.87346H14V6.12654H7.87346Z"
                                                    fill="#15023A"
                                                  />
                                                </svg>
                                              </>
                                            )}
                                          </button>
                                        </div>
                                      </div>
                                    );
                                  }
                                )}
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>

                  <div
                    className="pt-3 service-section tabcontent"
                    style={{ display: activeTab === "team" ? "block" : "none" }}
                  >
                    <h2 className="titleh2 ">Team</h2>

                    <div className="grid-col">
                      {teamLoading ? (
                        <div className="loader">
                          <span></span>
                        </div>
                      ) : (
                        <>
                          {(getServiceStaffs || []).length > 0 ? (
                            getServiceStaffs.map(
                              (staffs: any, index: number) => {
                                return (
                                  <div
                                    key={index}
                                    className={`staff_selector text-center ${
                                      serviceSaleReducer?.selectedStaffId ===
                                      staffs?.id
                                        ? "active"
                                        : ""
                                    }`}
                                    onClick={() => {
                                      const staffObj = {
                                        id: staffs?.id,
                                        name: staffs?.name,
                                      };
                                      console.log(staffObj);
                                      dispatch(
                                        QS_UPDATE_STAFF_TO_CART({ staffObj })
                                      );
                                    }}
                                  >
                                    <div className="staff_pic">
                                      <span>
                                        <img
                                          src={staffs.image_url}
                                          onError={({ currentTarget }) => {
                                            currentTarget.onerror = null;
                                            currentTarget.src =
                                              "/images/placeholder/store.jpg";
                                          }}
                                          width="120"
                                          height="120"
                                          alt={staffs.username}
                                        />
                                      </span>
                                      <div className="staff_rating">
                                        <svg
                                          className="mr-2"
                                          width="12"
                                          height="12"
                                          viewBox="0 0 20 20"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g clipPath="url(#clip0_331_2302)">
                                            <path
                                              d="M19.9477 7.67117C19.816 7.2662 19.4568 6.97948 19.0335 6.94118L13.2601 6.41703L10.9784 1.07515C10.81 0.682682 10.4267 0.429382 10 0.429382C9.57338 0.429382 9.18992 0.682682 9.02253 1.07515L6.74085 6.41703L0.96652 6.94118C0.543234 6.98024 0.184799 7.26696 0.0523506 7.67117C-0.0793349 8.07615 0.0422796 8.52034 0.362414 8.8011L4.72665 12.6279L3.43986 18.2954C3.34571 18.7122 3.50746 19.1431 3.85323 19.393C4.03908 19.5281 4.25744 19.5955 4.47656 19.5955C4.66486 19.5955 4.8533 19.5455 5.02161 19.4447L10 16.468L14.9775 19.4447C15.3427 19.6629 15.8018 19.643 16.1468 19.393C16.4926 19.1431 16.6543 18.7122 16.5602 18.2954L15.2734 12.6279L19.6376 8.8011C19.9576 8.52034 20.0794 8.07706 19.9477 7.67117Z"
                                              fill="#15023A"
                                            ></path>
                                          </g>
                                          <defs>
                                            <clipPath id="clip0_331_2302">
                                              <rect
                                                width="20"
                                                height="20"
                                                fill="white"
                                              ></rect>
                                            </clipPath>
                                          </defs>
                                        </svg>
                                        <span className="dark">
                                          {staffs.rating}
                                        </span>
                                      </div>
                                    </div>
                                    <p className="dark">{staffs.username}</p>
                                    <p className="light">
                                      {staffs.designation}
                                    </p>
                                  </div>
                                );
                              }
                            )
                          ) : (
                            <h2>No records</h2>
                          )}
                        </>
                      )}
                    </div>
                  </div>

                  <div
                    id="datetime"
                    className="pt-3 service-section tabcontent"
                    style={{
                      display: activeTab === "datetime" ? "block" : "none",
                    }}
                  >
                    <h2 className="titleh2 ">Select Time</h2>
                    <button
                      className="btn"
                      onClick={(event) => {
                        saveBooking()
                          .then((rec: any) => {})
                          .catch((err: any) => {
                            console.log(err.message);
                          });
                      }}
                    >
                      SAVE BOOKING
                    </button>

                    <h2 className="titleh2  mt-40">October</h2>
                    {/* <Calendar/>
                    
                     */}

                    <div>
                      <h1>Select a Date</h1>

                      <HorizontalStripDatePicker
                        selectedDay={onSelectedDay}
                        enableScroll={true}
                        enableDays={364}
                        enableDaysBefore={0}
                      />
                    </div>

                    <div className="time_slot">
                      {timeLoading ? (
                        <div className="loader">
                          <span></span>
                        </div>
                      ) : staffTime && !!staffTime.length ? (
                        (staffTime || []).map((getTime: any, index: any) => {
                          return (
                            <div key={index}>
                              <span className="btn btn-light">
                                {moment(getTime, "HH:mm:00").format("hh:mm A")}
                              </span>
                            </div>
                          );
                        })
                      ) : (
                        <h2>No time available.</h2>
                      )}

                      {/* <span className="btn btn-light">10:45am</span>
                      <span className="btn btn-light">11:00am</span>
                      <span className="btn">11:15am</span>
                      <span className="btn">11:30am</span>
                      <span className="btn">11:45am</span>
                      <span className="btn">12:00pm</span>
                      <span className="btn">12:15pm</span>
                      <span className="btn">12:30pm</span>
                      <span className="btn">12:45pm</span>
                      <span className="btn">12:30pm</span>
                      <span className="btn">12:45pm</span>
                      <span className="btn">12:30pm</span>
                      <span className="btn">12:45pm</span>
                      <span className="btn">01:00pm</span>
                      <span className="btn">01:15pm</span>
                      <span className="btn">01:30pm</span>
                      <span className="btn">01:45pm</span>
                      <span className="btn btn-light">02:00pm</span>
                      <span className="btn btn-light">02:15pm</span>
                      <span className="btn btn-success">02:30pm</span>
                      <span className="btn">03:00pm</span>
                      <span className="btn">03:15pm</span>
                      <span className="btn btn-success">03:30pm</span>
                      <span className="btn btn-success">03:45pm</span>
                      <span className="btn">04:00pm</span>
                      <span className="btn btn-light">04:15pm</span>
                      <span className="btn btn-light">04:30pm</span>
                      <span className="btn">04:45pm</span> */}
                    </div>
                  </div>

                  <button onClick={openModal}>Open Modal</button>
                  <>
                    <Modal
                      show={isModalOpen}
                      onHide={closeModal}
                      size="xl"
                      centered
                      dialogClassName="custom-modal salon-gallery-modal"
                    >
                      <Modal.Header closeButton></Modal.Header>
                      <Modal.Body>
                        <Login />
                      </Modal.Body>
                    </Modal>
                  </>
                  <div
                    id="about"
                    className="pt-3 service-section tabcontent px-4 default-form"
                  >
                    <h2 className="titleh2 ">Log in or sign up</h2>
                    <p>Log in or sign up to complete your booking</p>

                    <div className="payment">
                      <h2 className="titleh2 ">Payment</h2>

                      <form className="mt-40">
                        <div className="form-group">
                          <label>Card Number</label>
                          <input
                            type="number"
                            className="form-control"
                            id="cardnumber"
                            aria-describedby="emailHelp"
                            placeholder="1234  5678  9101  1121"
                          />
                        </div>
                        <div className="row mt-4">
                          <div className="col-md-6 col-12">
                            <div className="form-group">
                              <label>Expiration Date</label>
                              <input
                                type="number"
                                className="form-control"
                                id="cardnumber"
                                aria-describedby="emailHelp"
                                placeholder="1234  5678  9101  1121"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="form-group">
                              <label>CVV</label>
                              <input
                                type="number"
                                className="form-control"
                                id="cardnumber"
                                aria-describedby="emailHelp"
                                placeholder="1234  5678  9101  1121"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-check mt-4">
                          <label className="form-check-label checkbox-label-text custom-checkbox">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="exampleCheck1"
                            />
                            <span></span>
                            Save card details
                          </label>
                        </div>
                        <button
                          type="submit"
                          className="button darkBtn full-btn button-large text-center justify-content-center text16"
                        >
                          Pay $385
                        </button>
                        <p className="mt-4 light d-block font12">
                          Your personal data will be used to process your order,
                          support your experience throughout this website, and
                          for other purposes described in our privacy policy.
                        </p>
                      </form>
                    </div>

                    <div className="thankyou mt-4">
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M56.9805 23.0378C56.9101 22.7652 56.7868 22.509 56.6174 22.284C56.4481 22.059 56.2361 21.8696 55.9935 21.7265C55.7509 21.5834 55.4826 21.4895 55.2037 21.4502C54.9249 21.4108 54.641 21.4268 54.3683 21.4971C54.0957 21.5675 53.8395 21.6908 53.6145 21.8602C53.3895 22.0295 53.2001 22.2415 53.057 22.4841C52.9139 22.7267 52.82 22.995 52.7807 23.2739C52.7413 23.5527 52.7573 23.8366 52.8276 24.1093C54.2141 29.4774 53.664 35.1625 51.2739 40.1652C48.8839 45.1679 44.8069 49.168 39.7596 51.4623C34.7123 53.7567 29.0178 54.1985 23.677 52.71C18.3362 51.2216 13.6911 47.8981 10.558 43.3239C7.425 38.7497 6.00463 33.2175 6.54661 27.6997C7.08858 22.182 9.55821 17.0319 13.5214 13.1547C17.4845 9.27748 22.6876 6.92137 28.2159 6.50051C33.7442 6.07965 39.2439 7.62097 43.7483 10.8535C43.977 11.0179 44.2357 11.1356 44.5099 11.1999C44.784 11.2643 45.0681 11.274 45.346 11.2285C45.6239 11.183 45.8901 11.0833 46.1294 10.9349C46.3687 10.7866 46.5765 10.5925 46.7408 10.3639C46.9052 10.1353 47.0229 9.87649 47.0872 9.60237C47.1515 9.32824 47.1612 9.04413 47.1158 8.76625C47.0703 8.48837 46.9706 8.22217 46.8222 7.98284C46.6739 7.74351 46.4798 7.53575 46.2512 7.37141C41.1745 3.72488 35.0188 1.89171 28.7743 2.16669C22.5297 2.44167 16.559 4.80881 11.8225 8.88746C7.08592 12.9661 3.85871 18.5192 2.65982 24.6538C1.46094 30.7884 2.36005 37.1479 5.21257 42.7097C8.06509 48.2715 12.7053 52.7123 18.3869 55.318C24.0685 57.9237 30.4613 58.5429 36.5374 57.076C42.6134 55.6091 48.0196 52.1413 51.8865 47.2303C55.7533 42.3194 57.8562 36.2506 57.8569 30C57.858 27.6517 57.5635 25.3126 56.9805 23.0378Z"
                          fill="#A2E3B8"
                        />
                        <path
                          d="M17.9374 25.8664C17.4791 25.6832 16.9716 25.6638 16.5006 25.8115C16.0297 25.9592 15.6241 26.2649 15.3526 26.6771C15.081 27.0892 14.96 27.5825 15.0101 28.0736C15.0602 28.5646 15.2782 29.0233 15.6274 29.3721L26.3417 40.0864C26.7436 40.4881 27.2885 40.7138 27.8567 40.7138C28.4249 40.7138 28.9699 40.4881 29.3717 40.0864L52.9431 16.515C53.3394 16.1361 53.5753 15.6198 53.6024 15.0722C53.6295 14.5247 53.4457 13.9875 53.0888 13.5714C52.732 13.1552 52.2292 12.8917 51.6839 12.8349C51.1386 12.7782 50.5923 12.9326 50.1574 13.2664L27.5524 29.7129L17.9374 25.8664Z"
                          fill="#A2E3B8"
                        />
                      </svg>
                      <h1>Thank You</h1>
                      <p className="dark font14">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.
                      </p>
                      <button className="button darkBtn full-btn button-large text-center justify-content-center text16 mt-4">
                        Back to Homepage
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="appointment-info-sidebar booking-sidebar">
              <div className="p-4 gradient-bg">
                <div className="user-info-booking">
                  <div className="business_pic">
                    <img
                      src={serviceData?.detail?.image_url}
                      alt={serviceData?.detail?.name}
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = "/images/profilePlaceHolder.png";
                      }}
                    />
                  </div>
                  <div className="_info">
                    <h2 className="titleh2 ">{serviceData?.detail?.name}</h2>
                    <ul className="details_add">
                      {/* <li>
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_331_2302)">
                          <path
                            d="M19.9477 7.67117C19.816 7.2662 19.4568 6.97948 19.0335 6.94118L13.2601 6.41703L10.9784 1.07515C10.81 0.682682 10.4267 0.429382 10 0.429382C9.57338 0.429382 9.18992 0.682682 9.02253 1.07515L6.74085 6.41703L0.96652 6.94118C0.543234 6.98024 0.184799 7.26696 0.0523506 7.67117C-0.0793349 8.07615 0.0422796 8.52034 0.362414 8.8011L4.72665 12.6279L3.43986 18.2954C3.34571 18.7122 3.50746 19.1431 3.85323 19.393C4.03908 19.5281 4.25744 19.5955 4.47656 19.5955C4.66486 19.5955 4.8533 19.5455 5.02161 19.4447L10 16.468L14.9775 19.4447C15.3427 19.6629 15.8018 19.643 16.1468 19.393C16.4926 19.1431 16.6543 18.7122 16.5602 18.2954L15.2734 12.6279L19.6376 8.8011C19.9576 8.52034 20.0794 8.07706 19.9477 7.67117Z"
                            fill="#15023A"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_331_2302">
                            <rect width="20" height="20" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    {serviceData?.detail?.rating}/5{" "}
                    {serviceData?.detail?.reviewCount} reviews
                  </li>                   */}
                      <li>Singapore</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="services_details p-4 border-top service-detail-booking">
                <div className="booking-data">
                  {serviceSaleReducer?.carts.length === 0 ? (
                    <h2>No records</h2>
                  ) : (
                    <>
                      {serviceSaleReducer?.carts.map(
                        (service: any, index: any) => (
                          <div key={index} className="service-item-selected">
                            <div className="serv grid_item" key={index}>
                              <div className="service_selected">
                                <div className="serv-name dark">
                                  {service.name}
                                </div>
                                <p className="light">{service.qs_time}</p>
                              </div>
                              <div className="dark r_col text16">
                                {currency}
                                {service.qs_price}
                              </div>
                            </div>
                            <button
                              className="remove-item"
                              onClick={() =>
                                deleteFromCart({
                                  id: service.id,
                                  cartType: service.cartType,
                                })
                              }
                            >
                              <i className="fa fa-close"></i>
                            </button>
                          </div>
                        )
                      )}
                    </>
                  )}
                </div>
              </div>

              <div className="p-4  border-top">
                <div className="serv grid_item">
                  <div className="dark text16">
                    <strong>Total</strong>
                  </div>
                  <div className="dark r_col text16">
                    <strong>
                      {currency}
                      {serviceSaleReducer.payToAmount}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <p className="text16 mb-4 mt-0 hide">
                  <strong>Appointment</strong>
                </p>
                <div className="display-flex member_selected mb-4 hide">
                  <div className="staff_member">
                    <img src="/images/alex.png" alt="alex" />
                  </div>
                  <div className="staff_content">
                    <p className="dark mb-0 mt-0">Alex</p>
                    <p className="light">Creative Director</p>
                  </div>
                </div>

                <div className="booking_detail display-flex  mb-4 hide">
                  <div className="cal_icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.95703 5.75C8.54703 5.75 8.20703 5.41 8.20703 5V2C8.20703 1.59 8.54703 1.25 8.95703 1.25C9.36703 1.25 9.70703 1.59 9.70703 2V5C9.70703 5.41 9.36703 5.75 8.95703 5.75Z"
                        fill="#15023A"
                      />
                      <path
                        d="M16.957 5.75C16.547 5.75 16.207 5.41 16.207 5V2C16.207 1.59 16.547 1.25 16.957 1.25C17.367 1.25 17.707 1.59 17.707 2V5C17.707 5.41 17.367 5.75 16.957 5.75Z"
                        fill="#15023A"
                      />
                      <path
                        d="M9.45703 14.5001C9.32703 14.5001 9.19703 14.4701 9.07703 14.4201C8.94703 14.3701 8.84703 14.3001 8.74703 14.2101C8.56703 14.0201 8.45703 13.7701 8.45703 13.5001C8.45703 13.3701 8.48703 13.2401 8.53703 13.1201C8.58703 13.0001 8.65703 12.8901 8.74703 12.7901C8.84703 12.7001 8.94703 12.6301 9.07703 12.5801C9.43703 12.4301 9.88703 12.5101 10.167 12.7901C10.347 12.9801 10.457 13.2401 10.457 13.5001C10.457 13.5601 10.447 13.6301 10.437 13.7001C10.427 13.7601 10.407 13.8201 10.377 13.8801C10.357 13.9401 10.327 14.0001 10.287 14.0601C10.257 14.1101 10.207 14.1601 10.167 14.2101C9.97703 14.3901 9.71703 14.5001 9.45703 14.5001Z"
                        fill="#15023A"
                      />
                      <path
                        d="M12.957 14.4999C12.827 14.4999 12.697 14.4699 12.577 14.4199C12.447 14.3699 12.347 14.2999 12.247 14.2099C12.067 14.0199 11.957 13.7699 11.957 13.4999C11.957 13.3699 11.987 13.2399 12.037 13.1199C12.087 12.9999 12.157 12.8899 12.247 12.7899C12.347 12.6999 12.447 12.6299 12.577 12.5799C12.937 12.4199 13.387 12.5099 13.667 12.7899C13.847 12.9799 13.957 13.2399 13.957 13.4999C13.957 13.5599 13.947 13.6299 13.937 13.6999C13.927 13.7599 13.907 13.8199 13.877 13.8799C13.857 13.9399 13.827 13.9999 13.787 14.0599C13.757 14.1099 13.707 14.1599 13.667 14.2099C13.477 14.3899 13.217 14.4999 12.957 14.4999Z"
                        fill="#15023A"
                      />
                      <path
                        d="M16.457 14.4999C16.327 14.4999 16.197 14.4699 16.077 14.4199C15.947 14.3699 15.847 14.2999 15.747 14.2099C15.707 14.1599 15.667 14.1099 15.627 14.0599C15.587 13.9999 15.557 13.9399 15.537 13.8799C15.507 13.8199 15.487 13.7599 15.477 13.6999C15.467 13.6299 15.457 13.5599 15.457 13.4999C15.457 13.2399 15.567 12.9799 15.747 12.7899C15.847 12.6999 15.947 12.6299 16.077 12.5799C16.447 12.4199 16.887 12.5099 17.167 12.7899C17.347 12.9799 17.457 13.2399 17.457 13.4999C17.457 13.5599 17.447 13.6299 17.437 13.6999C17.427 13.7599 17.407 13.8199 17.377 13.8799C17.357 13.9399 17.327 13.9999 17.287 14.0599C17.257 14.1099 17.207 14.1599 17.167 14.2099C16.977 14.3899 16.717 14.4999 16.457 14.4999Z"
                        fill="#15023A"
                      />
                      <path
                        d="M9.45703 17.9999C9.32703 17.9999 9.19703 17.97 9.07703 17.92C8.95703 17.87 8.84703 17.7999 8.74703 17.7099C8.56703 17.5199 8.45703 17.2599 8.45703 16.9999C8.45703 16.8699 8.48703 16.7399 8.53703 16.6199C8.58703 16.4899 8.65703 16.38 8.74703 16.29C9.11703 15.92 9.79703 15.92 10.167 16.29C10.347 16.48 10.457 16.7399 10.457 16.9999C10.457 17.2599 10.347 17.5199 10.167 17.7099C9.97703 17.8899 9.71703 17.9999 9.45703 17.9999Z"
                        fill="#15023A"
                      />
                      <path
                        d="M12.957 17.9999C12.697 17.9999 12.437 17.8899 12.247 17.7099C12.067 17.5199 11.957 17.2599 11.957 16.9999C11.957 16.8699 11.987 16.7399 12.037 16.6199C12.087 16.4899 12.157 16.38 12.247 16.29C12.617 15.92 13.297 15.92 13.667 16.29C13.757 16.38 13.827 16.4899 13.877 16.6199C13.927 16.7399 13.957 16.8699 13.957 16.9999C13.957 17.2599 13.847 17.5199 13.667 17.7099C13.477 17.8899 13.217 17.9999 12.957 17.9999Z"
                        fill="#15023A"
                      />
                      <path
                        d="M16.457 17.9999C16.197 17.9999 15.937 17.8899 15.747 17.7099C15.657 17.6199 15.587 17.5099 15.537 17.3799C15.487 17.2599 15.457 17.1299 15.457 16.9999C15.457 16.8699 15.487 16.7399 15.537 16.6199C15.587 16.4899 15.657 16.3799 15.747 16.2899C15.977 16.0599 16.327 15.9499 16.647 16.0199C16.717 16.0299 16.777 16.0499 16.837 16.0799C16.897 16.0999 16.957 16.1299 17.017 16.1699C17.067 16.1999 17.117 16.2499 17.167 16.2899C17.347 16.4799 17.457 16.7399 17.457 16.9999C17.457 17.2599 17.347 17.5199 17.167 17.7099C16.977 17.8899 16.717 17.9999 16.457 17.9999Z"
                        fill="#15023A"
                      />
                      <path
                        d="M21.457 9.83984H4.45703C4.04703 9.83984 3.70703 9.49984 3.70703 9.08984C3.70703 8.67984 4.04703 8.33984 4.45703 8.33984H21.457C21.867 8.33984 22.207 8.67984 22.207 9.08984C22.207 9.49984 21.867 9.83984 21.457 9.83984Z"
                        fill="#15023A"
                      />
                      <path
                        d="M16.957 22.75H8.95703C5.30703 22.75 3.20703 20.65 3.20703 17V8.5C3.20703 4.85 5.30703 2.75 8.95703 2.75H16.957C20.607 2.75 22.707 4.85 22.707 8.5V17C22.707 20.65 20.607 22.75 16.957 22.75ZM8.95703 4.25C6.09703 4.25 4.70703 5.64 4.70703 8.5V17C4.70703 19.86 6.09703 21.25 8.95703 21.25H16.957C19.817 21.25 21.207 19.86 21.207 17V8.5C21.207 5.64 19.817 4.25 16.957 4.25H8.95703Z"
                        fill="#15023A"
                      />
                    </svg>
                  </div>
                  <div className="booking_content">
                    <p className="dark mb-0 mt-0">Tuesday 24 October</p>
                    <p className="light">02:15pm - 05:15pm</p>
                  </div>
                </div>

                <button
                  id="continueButton"
                  className="button darkBtn full-btn button-large text-center justify-content-center text16"
                  onClick={(event) => {
                    if (activeTab === "services") {
                      setActiveTab("team");
                      getServiceStaff()
                        .then((rec: any) => {})
                        .catch((err: any) => {
                          console.log(err.message);
                        });
                    } else if (activeTab === "team") {
                      setActiveTab("datetime");
                      getServiceStaff()
                        .then((rec: any) => {})
                        .catch((err: any) => {
                          console.log(err.message);
                        });
                    }
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
