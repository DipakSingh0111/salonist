import React, { useState, useEffect, useRef } from "react";
// import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// File import
import RelatedService from "../../components/relatedService/RelatedService";
import { Modal, Carousel } from "react-bootstrap";
import Map from "../../components/map/Map";
import axios from "axios";
import { APIS } from "../../api/ApiConstant";
import { Link, useNavigate, useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import About from "../../components/About/About";
import {
  QS_ADD_ITEM_TO_CART,
  QS_DELETE_ITEM_TO_CART,
} from "../../store/slice/serviceSlice";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { QS_ADD_ITEM_TO_CART } from "../../../store/slice/serviceSlice";

const SalonDetail = () => {
  // const navigate = useNavigate();
  const currentDay = moment().format("dddd");
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const ENUM_cartType = { service: "service" };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isApiLoading, setIsApiLoading] = useState(false);
  const [serviceLoading, setServiceLoading] = useState(false);
  let [storeOpenOrCloseLabel, setStoreOpenOrCloseLabel] = useState("");
  let [serviceSliderSelected, setServiceSliderSelected] = useState("");
  let [currency, setCurrency] = useState("");

  let [salonDetailData, setSalonDetailData] = useState<any>({
    firstChildServices: [],
    services: [],
    staffs: [],
    bannerImages: [],
  });
  let [serviceData, setServiceData] = useState<any>([]);

  const serviceSaleReducer: any = useSelector(
    (state: any) => state?.serviceSale
  );

  // slick-slider

  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSelect = (selectedIndex: number) => {
    setCurrentIndex(selectedIndex);
  };

  const domainName: any = useParams();

  const salonDetail = async () => {
    try {
      setIsApiLoading(true);
      const response = await axios.post(`${APIS.salonDetail}`, {
        domainName: domainName.domainName,
      });

      const businessTimeArry: any = [];
      (response?.data?.businessHours || []).forEach((rec: any) => {
        const tempObj: {
          day: string;
          status: string;
          isSelected: boolean;
          label: string;
        } = {
          day: rec.days,
          status: rec.status,
          label: rec.status,
          isSelected: rec.days == currentDay ? true : false,
        };
        if (rec.status == "Open") {
          const st = moment(rec.start, "HH:mm:00").format("hh:mm a");
          const et = moment(rec.end, "HH:mm:00").format("hh:mm a");
          tempObj.label = `${st} - ${et}`;
        }

        if (rec.days == currentDay) {
          if (rec.status == "Open") {
            const st = moment(rec.start, "HH:mm:00").format("hh:mm a");
            setStoreOpenOrCloseLabel(`Opens at ${st}`);
          } else {
            setStoreOpenOrCloseLabel(`Closed`);
          }
        }

        businessTimeArry.push(tempObj);
      });

      setCurrency(response?.data?.detail?.currency);
      setSalonDetailData({
        ...response?.data,
        businessHours: businessTimeArry,
      });
      setServiceData(response?.data?.firstChildServices);

      setIsApiLoading(false);
      // console.log("staffs data======", response?.data?.data?.staffs);
    } catch (error: any) {
      setIsApiLoading(false);
      console.error(error.message);
    }
  };

  async function getServiceDataApi(
    domainId: string | number,
    serviceId: string | number
  ) {
    try {
      setServiceLoading(true);
      const response = await axios.post(`${APIS.getServiceChild}`, {
        domainId,
        serviceId,
      });
      setServiceData(response?.data?.data?.childServices);
      setServiceLoading(false);
    } catch (error: any) {
      console.error(error.message);
      setServiceLoading(false);
    }
  }

  useEffect(() => {
    salonDetail();
  }, [domainName]);

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

  // OwlCarousel
  const customPrevIcon = '<i class="fa fa-chevron-left"></i>';
  const customNextIcon = '<i class="fa fa-chevron-left"></i>';
  const RecommendedProps = {
    loop: true,
    autoplay: false,
    autoplaytimeout: 4000,
    autoWidth: true,
    nav: true,
    dots: false,
    responsive: {
      1100: {
        items: 4,
      },
      767: {
        items: 3,
      },
      480: {
        items: 1,
        innerWidth: "100%",
        outerWidth: "100%",
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollDistance = window.scrollY;
      const sections = document.querySelectorAll(".service-section");
      sections.forEach((section: any, i) => {
        if (section.offsetTop <= scrollDistance) {
          document
            .querySelector(".sticky_nav a.active")
            ?.classList.remove("active");
          document
            .querySelectorAll(".sticky_nav a")
            [i]?.classList.add("active");
        }
      });
    };

    const handleClick = (e: any) => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute("href"));
      if (target) {
        const scrollTo = target.offsetTop;
        window.scrollTo({
          top: scrollTo,
          behavior: "smooth",
        });
      }
    };

    const stickyNavLinks = document.querySelectorAll(".sticky_nav a");
    stickyNavLinks.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger scroll on page load

    return () => {
      // Cleanup event listeners on component unmount
      stickyNavLinks.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickFindClosesScroll = (e: any) => {
    e.preventDefault();
    console.log(e.target);
    const anchor = e.target.closest("a");
    const findTargetClosestAnchor = anchor.closest(".selfcontaindiv_js");
    const target = document.querySelector(
      findTargetClosestAnchor.getAttribute("href")
    );
    if (target) {
      const scrollTo = target.offsetTop;
      window.scrollTo({
        top: scrollTo,
        behavior: "smooth",
      });
    }
  };

  function myFunction(button: any) {
    let element: any = document.getElementById("map_div_");
    element.classList.toggle("active");
    console.log(button);

    if (button?.target) {
      document.body.classList.toggle("active_map");
      button?.target?.classList?.toggle("active");
    } else {
      document.body.classList.toggle("active_map");
    }
  }

  if (isApiLoading) {
    return (
      <>
        <div className="loader">
          <span></span>
        </div>
      </>
    );
  }

  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-header">
              <a className="logo" href="/">
                <img src="/images/logo.svg" alt="Salonist logo" />
              </a>
              <button
                type="button"
                className="navbar-toggle"
                aria-controls="navbar"
              >
                <span className="navbar-toggler-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </button>
              <ul className="nav" id="menu">
                <li>
                  <Link to="/">Why Salonist</Link>
                </li>
                <li>
                  <Link to="/">Features</Link>
                </li>
                <li>
                  <Link to="/">Solutions</Link>
                </li>
                <li>
                  <Link to="/">Pricing</Link>
                </li>
                <li>
                  <Link to="/" className="btn btn_border">
                    Free Trial
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="btn">
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="btn">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="container appointment-main-wrapper">
        <span className="breadcrumbs">
          {" "}
          <Link to="/"> Home</Link> / <Link to="/">Salons</Link> /{" "}
          <Link to="/">{`${salonDetailData?.detail?.name}`}</Link>
        </span>
        <div className="listdetail_main">
          <div className="row display-flex">
            <div className="col-md-8 col-12">
              {/* <Slider {...settings}> */}
              {/* <div className="booking_slider">
                <div className="rtl-slider-flex">
                  {banner && !!banner.length && (
                    <>
                      <div className="rtl-slider-nav">
                        
                        <Slider
                          className="rtl-slider"
                          asNavFor={slider2}
                          ref={(slider: any) => setSlider1(slider)}
                          {...sliderSettings1}
                        >
                          {banner.map((banner: any, index: any) => {
                            const imgUrl = banner.image_url;
                            return (
                              <div
                                key={index}
                                style={{ width: "100%", height: "400px" }}
                              >
                                <div
                                  className="rtl-slider-slide"
                                  style={{ backgroundImage: `url(${imgUrl})` }}
                                ></div>{" "}
                              </div>
                            );
                          })}
                        </Slider>
                      </div>
                      <div className="rtl-slider">
                        
                        <Slider
                          asNavFor={slider1}
                          ref={(slider: any) => setSlider2(slider)}
                          {...sliderSettings2}
                        >
                          {banner.map((banner: any, index: any) => {
                            const imgUrl = banner.image_url;
                            return (
                              <div
                                key={index}
                                style={{ width: "100%", height: "400px" }}
                              >
                                <div
                                  className="rtl-slider-slide"
                                  style={{ backgroundImage: `url(${imgUrl})` }}
                                ></div>
                              </div>
                            );
                          })}
                        </Slider>
                      </div>
                    </>
                  )}
                </div>
              </div> */}
              <Modal
                show={showModal}
                onHide={closeModal}
                size="xl"
                centered
                dialogClassName="custom-modal salon-gallery-modal"
              >
                <Modal.Header closeButton>
                  <h4>Gallery</h4>
                </Modal.Header>
                <Modal.Body>
                  {(salonDetailData.bannerImages || []).map(
                    (images: any, index: number) => (
                      <div className="gallery" key={index}>
                        <img
                          src={images.image_url}
                          className="w-100"
                          alt={`Slide ${index}`}                          
                        />
                      </div>
                    )
                  )}
                </Modal.Body>
              </Modal>

              <div className="grid-col-3">
                {(salonDetailData.bannerImages || []).map(
                  (images: any, index: number) => (
                    <div key={index} onClick={() => openModal(index)}>
                      <img
                        src={images.image_url}
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null;
                          currentTarget.src = "/images/placeholder/store.jpg";
                        }}
                        alt=""
                      />
                    </div>
                  )
                )}
              </div>

              {/* </Slider> */}
              <div className="services-container">
                <div className="sticky_nav">
                  <a
                    href="#services"
                    className="js-anchor-link selfcontaindiv_js"
                    onClick={(event) => {
                      event.preventDefault();
                      handleClickFindClosesScroll(event);
                    }}
                  >
                    <span className="sticky_nav_icon">
                      <svg
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_308_4678)">
                          <mask
                            id="mask0_308_4678"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x={8}
                            y={8}
                            width={24}
                            height={24}
                          >
                            <circle cx={20} cy={20} r={12} fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_308_4678)">
                            <path
                              d="M41.6808 17.5776C41.6119 16.9643 40.8965 16.5029 40.2779 16.5029C38.2787 16.5029 36.5044 15.3295 35.7604 13.5134C35.0008 11.6536 35.4909 9.48512 36.9804 8.11866C37.4495 7.68972 37.5067 6.97148 37.1134 6.4729C36.0898 5.17344 34.927 3.99946 33.657 2.98212C33.1601 2.58356 32.43 2.63904 31.9988 3.11629C30.6984 4.55654 28.3623 5.09172 26.5571 4.33857C24.6792 3.54844 23.4939 1.6449 23.6103 -0.398276C23.6487 -1.04046 23.1791 -1.59848 22.5392 -1.67302C20.9093 -1.86174 19.2651 -1.86721 17.6305 -1.68586C16.9986 -1.61603 16.5295 -1.07122 16.5505 -0.437151C16.6212 1.58603 15.4225 3.45597 13.5628 4.2178C11.7793 4.94642 9.45943 4.41519 8.16166 2.98759C7.73272 2.51732 7.01542 2.45957 6.51515 2.84964C5.20775 3.87567 4.01868 5.0504 2.98567 6.3393C2.58315 6.84033 2.6426 7.56649 3.1157 7.99694C4.63464 9.37246 5.12434 11.5596 4.33572 13.4411C3.58276 15.2348 1.72036 16.3903 -0.411513 16.3903C-1.10333 16.368 -1.59568 16.8328 -1.67211 17.462C-1.86384 19.1005 -1.86591 20.771 -1.68135 22.423C-1.61247 23.039 -0.875932 23.4964 -0.250542 23.4964C1.64978 23.4481 3.47312 24.6238 4.2391 26.4858C5.0013 28.3455 4.51065 30.5131 3.0187 31.8814C2.55201 32.3104 2.49238 33.0269 2.88641 33.5249C3.8996 34.8163 5.06358 35.991 6.33738 37.017C6.83747 37.4197 7.56476 37.3633 7.99823 36.8855C9.30374 35.4418 11.6394 34.9076 13.4373 35.6623C15.3206 36.4503 16.5054 38.3537 16.3897 40.3974C16.3517 41.0396 16.8224 41.5993 17.46 41.6722C18.2942 41.7697 19.1326 41.818 19.9737 41.818C20.7719 41.818 21.5704 41.7744 22.3688 41.6856C23.0014 41.6157 23.4698 41.0704 23.4484 40.4361C23.3754 38.4139 24.5767 36.5437 26.4342 35.7834C28.2296 35.0501 30.5391 35.5868 31.8376 37.0123C32.2688 37.4816 32.9818 37.5386 33.4841 37.1501C34.7892 36.1267 35.9761 34.9525 37.0136 33.6602C37.4165 33.1601 37.3593 32.433 36.8836 32.0018C35.365 30.6272 34.8727 28.4391 35.6613 26.5596C36.4025 24.79 38.1957 23.6019 40.1243 23.6019L40.3942 23.6091C41.0203 23.6598 41.5957 23.1777 41.6714 22.5389C41.864 20.8988 41.8661 19.2302 41.6808 17.5776ZM19.9999 32.5783C13.0529 32.5783 7.42153 26.947 7.42153 20.0001C7.42153 13.0533 13.0531 7.42194 19.9999 7.42194C26.9468 7.42194 32.5783 13.0533 32.5783 20.0001C32.5783 22.3581 31.9282 24.5636 30.7991 26.4495L25.2914 20.9416C25.6901 20.0015 25.9007 18.9822 25.9006 17.9303C25.9006 15.8706 25.0983 13.9342 23.6417 12.4779C22.1854 11.0216 20.249 10.2196 18.1896 10.2196C17.5023 10.2196 16.8182 10.3109 16.1564 10.4911C15.8666 10.5702 15.6295 10.8091 15.5524 11.0995C15.4735 11.3966 15.5624 11.701 15.7945 11.9333C15.7945 11.9333 18.5136 14.6734 19.4234 15.583C19.5187 15.6783 19.5185 15.9057 19.5051 15.9876L19.4966 16.0474C19.4049 17.0476 19.2281 18.2481 19.0822 18.7095C19.0626 18.729 19.0441 18.7454 19.0241 18.7654C19.0031 18.7863 18.9839 18.8065 18.9637 18.8273C18.4963 18.9773 17.2772 19.1562 16.2612 19.2472L16.2614 19.2417L16.2157 19.2532C16.2076 19.2542 16.1925 19.2553 16.1725 19.2553C16.0626 19.2553 15.9011 19.2245 15.7543 19.0779C14.8073 18.1309 12.1948 15.5371 12.1948 15.5371C11.9604 15.3035 11.72 15.2544 11.5598 15.2544C11.1863 15.2544 10.8519 15.5243 10.7466 15.9113C10.0274 18.5727 10.7898 21.4355 12.7368 23.3826C14.1934 24.8391 16.13 25.6411 18.1898 25.6411C19.2417 25.6411 20.2609 25.4307 21.2009 25.0319L26.7684 30.5995C24.8138 31.8503 22.4926 32.5783 19.9999 32.5783Z"
                              fill="#15023A"
                            />
                          </g>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M38.5878 16.7945C39.1549 16.7945 39.8107 17.2174 39.8738 17.7796C40.0437 19.2944 40.0418 20.824 39.8651 22.3274C39.7958 22.913 39.2683 23.3549 38.6944 23.3084L38.447 23.3018C36.6791 23.3018 35.0354 24.391 34.3559 26.013C33.633 27.736 34.0843 29.7417 35.4763 31.0018C35.9124 31.397 35.9648 32.0636 35.5955 32.522C34.6444 33.7066 33.5565 34.7829 32.3602 35.721C31.8997 36.0772 31.2461 36.0249 30.8509 35.5947C29.6605 34.288 27.5435 33.796 25.8978 34.4682C24.1951 35.1652 23.0938 36.8795 23.1608 38.7332C23.1803 39.3146 22.751 39.8145 22.1711 39.8785C21.4392 39.96 20.7073 40 19.9756 40C19.2046 40 18.436 39.9557 17.6714 39.8663C17.0869 39.7995 16.6555 39.2864 16.6903 38.6977C16.7963 36.8243 15.7103 35.0796 13.9839 34.3572C12.3359 33.6654 10.1948 34.1551 8.9981 35.4785C8.60075 35.9165 7.93406 35.9682 7.47565 35.599C6.308 34.6585 5.24102 33.5817 4.31226 32.3979C3.95107 31.9414 4.00573 31.2846 4.43352 30.8914C5.80115 29.6371 6.25091 27.6502 5.55222 25.9454C4.85007 24.2386 3.17868 23.1609 1.43672 23.2051C0.863444 23.2051 0.188281 22.7858 0.125141 22.2212C-0.0440388 20.7069 -0.042136 19.1756 0.133617 17.6736C0.203677 17.0968 0.654996 16.6708 1.28916 16.6912C3.24338 16.6912 4.95058 15.632 5.64079 13.9878C6.3637 12.2631 5.9148 10.2582 4.52244 8.9973C4.08876 8.60272 4.03427 7.93707 4.40325 7.4778C5.35017 6.2963 6.44016 5.21947 7.6386 4.27894C8.09719 3.92138 8.75471 3.97432 9.1479 4.4054C10.3375 5.71403 12.464 6.20099 14.0989 5.53309C15.8037 4.83475 16.9025 3.12063 16.8376 1.26605C16.8184 0.68482 17.2485 0.18541 17.8276 0.121406C19.326 -0.0448336 20.8333 -0.039817 22.3273 0.133169C22.9139 0.201498 23.3443 0.713017 23.3092 1.30169C23.2025 3.1746 24.289 4.91951 26.0104 5.6438C27.6652 6.33419 29.8065 5.8436 30.9986 4.52337C31.3939 4.08589 32.0631 4.03503 32.5186 4.40038C33.6828 5.33295 34.7487 6.40909 35.687 7.60027C36.0475 8.0573 35.9951 8.71568 35.5651 9.10888C34.1997 10.3615 33.7504 12.3492 34.4467 14.054C35.1288 15.7188 36.7552 16.7945 38.5878 16.7945ZM19.5 32.0001C26.4036 32.0001 32 26.4037 32 19.5001C32 12.5966 26.4036 7.00012 19.5 7.00012C12.5964 7.00012 7 12.5966 7 19.5001C7 26.4037 12.5964 32.0001 19.5 32.0001Z"
                            fill="#A2E3B8"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_308_4678">
                            <rect width={40} height={40} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span className="dark">Select Services</span>
                  </a>
                  <a
                    href="#team"
                    className="js-anchor-link selfcontaindiv_js"
                    onClick={(event) => {
                      event.preventDefault();
                      handleClickFindClosesScroll(event);
                    }}
                  >
                    <span className="sticky_nav_icon">
                      <svg
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_308_4569)">
                          <path
                            d="M25.8189 21.1719C25.2744 23.843 22.8293 25.8594 20 25.8594C17.1706 25.8594 14.8036 23.843 14.2592 21.1719H11.9153C12.49 25.1367 15.8785 28.2031 20 28.2031C24.1215 28.2031 27.588 25.1367 28.1628 21.1719H25.8189Z"
                            fill="#15023A"
                          />
                          <path
                            d="M30.5066 21.1719C29.9149 26.4309 25.4146 30.5469 20 30.5469C14.5854 30.5469 10.1632 26.4309 9.57156 21.1719H0V22.3438C0 22.8484 0.323906 23.297 0.802266 23.4561L5.62398 25.0297C5.82656 25.6042 6.04055 26.1272 6.26945 26.6101L4.04469 31.0802C3.82039 31.531 3.90961 32.0746 4.26555 32.4305L7.56945 35.7345C7.92766 36.0927 8.47008 36.1773 8.91984 35.9553L13.3899 33.7305C13.8729 33.9595 14.3959 34.1734 14.9703 34.376L16.5439 39.1977C16.703 39.6761 17.1516 40 17.6562 40H22.4219C22.9266 40 23.3752 39.6761 23.5342 39.1977L25.1078 34.376C25.6823 34.1734 26.2053 33.9595 26.6882 33.7305L31.1583 35.9553C31.608 36.1784 32.1516 36.0927 32.5087 35.7345L35.8126 32.4305C36.1685 32.0746 36.2577 31.531 36.0334 31.0802L33.8087 26.6101C34.0376 26.1271 34.2516 25.6041 34.4541 25.0297L39.1977 23.4561C39.6761 23.297 40 22.8484 40 22.3438V21.1719H30.5066Z"
                            fill="#15023A"
                          />
                          <path
                            d="M16.7002 21.1719C17.1856 22.533 18.4742 23.5156 20 23.5156C21.5257 23.5156 22.8925 22.533 23.3779 21.1719H16.7002Z"
                            fill="#15023A"
                          />
                          <path
                            d="M20 0C17.4148 0 15.3125 2.10227 15.3125 4.6875C15.3125 7.27273 17.4148 9.375 20 9.375C22.5852 9.375 24.7656 7.27273 24.7656 4.6875C24.7656 2.10227 22.5852 0 20 0Z"
                            fill="#A2E3B8"
                          />
                          <path
                            d="M31.7969 0C29.2116 0 27.1094 2.10227 27.1094 4.6875C27.1094 7.27273 29.2116 9.375 31.7969 9.375C34.3821 9.375 36.4844 7.27273 36.4844 4.6875C36.4844 2.10227 34.3821 0 31.7969 0Z"
                            fill="#A2E3B8"
                          />
                          <path
                            d="M8.28125 0C5.69602 0 3.59375 2.10227 3.59375 4.6875C3.59375 7.27273 5.69602 9.375 8.28125 9.375C10.8665 9.375 12.9688 7.27273 12.9688 4.6875C12.9688 2.10227 10.8665 0 8.28125 0Z"
                            fill="#A2E3B8"
                          />
                          <path
                            d="M35.7941 10.4596C34.6574 11.2494 33.2828 11.7187 31.7968 11.7187C30.317 11.7187 28.9466 11.2544 27.8127 10.4706C27.2987 10.7657 26.8047 11.0975 26.3574 11.4976C28.6364 13.2012 30.2187 15.8618 30.5534 18.8281H39.9999V17.6562C39.9999 14.5919 38.2905 11.8678 35.7941 10.4596Z"
                            fill="#A2E3B8"
                          />
                          <path
                            d="M20 11.7188C15.8744 11.7188 12.4503 14.8582 11.8804 18.8281H28.1976C27.6278 14.8582 24.1256 11.7188 20 11.7188Z"
                            fill="#A2E3B8"
                          />
                          <path
                            d="M12.2654 10.4706C11.1314 11.2544 9.76109 11.7187 8.28125 11.7187C6.79523 11.7187 5.42062 11.2494 4.28398 10.4596C1.78758 11.8678 0 14.5919 0 17.6562V18.8281H9.52469C9.85938 15.8618 11.4416 13.2012 13.7206 11.4976C13.2733 11.0975 12.7794 10.7657 12.2654 10.4706Z"
                            fill="#A2E3B8"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_308_4569">
                            <rect width={40} height={40} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span className="dark">Team</span>
                  </a>
                  <a
                    href="#client"
                    className="js-anchor-link selfcontaindiv_js"
                    onClick={(event) => {
                      event.preventDefault();
                      handleClickFindClosesScroll(event);
                    }}
                  >
                    <span className="sticky_nav_icon">
                      <svg
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_308_4692)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.0001 18.1941C22.4219 18.1941 24.3852 20.1574 24.3852 22.5791C24.3852 25.0009 22.4219 26.9642 20.0001 26.9642C17.5783 26.9642 15.6151 25.0009 15.6151 22.5791C15.6151 20.1573 17.5783 18.1941 20.0001 18.1941ZM28.6229 35.485C28.1573 31.1341 24.4746 27.7454 20.0001 27.7454C15.5256 27.7454 11.8428 31.1341 11.3772 35.4851V37.2381C11.3772 38.5146 12.4184 39.5558 13.6949 39.5558H26.3052C27.5817 39.5558 28.6229 38.5146 28.6229 37.2381V35.485ZM33.1054 21.3785C34.9172 21.3785 36.386 22.8473 36.386 24.659C36.386 26.4708 34.9172 27.9396 33.1054 27.9396C31.2936 27.9396 29.8249 26.4708 29.8249 24.659C29.8248 22.8473 31.2935 21.3785 33.1054 21.3785ZM6.89479 21.3785C8.70659 21.3785 10.1753 22.8473 10.1753 24.659C10.1753 26.4708 8.70659 27.9396 6.89479 27.9396C5.083 27.9396 3.61425 26.4708 3.61425 24.659C3.61425 22.8473 5.083 21.3785 6.89479 21.3785ZM6.89471 28.8159C8.80659 28.8159 10.5253 29.6428 11.7128 30.9584C10.8747 32.2273 10.319 33.7039 10.1399 35.3044H2.11229C1.62581 35.3044 1.20721 35.0929 0.918542 34.7014C0.62987 34.3098 0.551667 33.8474 0.695573 33.3826C1.51471 30.7374 3.98042 28.8159 6.89471 28.8159ZM33.1053 28.8159C36.0198 28.8159 38.4854 30.7374 39.3045 33.3826C39.4484 33.8474 39.3702 34.3097 39.0815 34.7014C38.7928 35.093 38.3743 35.3044 37.8878 35.3044H29.8601C29.681 33.7039 29.1253 32.2274 28.2873 30.9584C29.4749 29.6428 31.1935 28.8159 33.1053 28.8159Z"
                            fill="#15023A"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.2454 5.85387L21.5049 9.17137C21.5428 9.27113 21.6309 9.33512 21.7375 9.34035L25.2818 9.51309C25.3928 9.51848 25.4842 9.5884 25.5186 9.6941C25.5529 9.7998 25.5201 9.91012 25.4334 9.97973L22.6676 12.2028C22.5844 12.2696 22.5508 12.3732 22.5787 12.4761L23.5097 15.9004C23.5388 16.0076 23.5006 16.1161 23.4107 16.1814C23.3208 16.2468 23.2058 16.2496 23.1127 16.1887L20.1437 14.2452C20.0545 14.1868 19.9455 14.1868 19.8563 14.2452L16.8874 16.1887C16.7944 16.2496 16.6793 16.2468 16.5895 16.1814C16.4996 16.1161 16.4614 16.0075 16.4905 15.9004L17.4215 12.4761C17.4494 12.3732 17.4158 12.2696 17.3326 12.2028L14.5668 9.97973C14.4801 9.91012 14.4472 9.7998 14.4816 9.6941C14.5159 9.5884 14.6074 9.51855 14.7184 9.51309L18.2627 9.34035C18.3693 9.3352 18.4574 9.27113 18.4952 9.17137L19.7547 5.85387C19.7942 5.74996 19.8889 5.68465 20.0001 5.68465C20.1112 5.68465 20.2059 5.74996 20.2454 5.85387ZM13.381 4.8102L15.5979 6.80637C15.854 7.03691 16.2486 7.01613 16.4792 6.75996C16.7097 6.50379 16.689 6.10918 16.4328 5.87863L14.2159 3.88246C13.9597 3.65191 13.5651 3.6727 13.3346 3.92887C13.104 4.18504 13.1247 4.57965 13.381 4.8102ZM25.7841 3.88246L23.5543 5.89027C23.2981 6.12082 23.2773 6.51543 23.5079 6.7716C23.7384 7.02777 24.133 7.04855 24.3892 6.81801L26.619 4.8102C26.8752 4.57965 26.896 4.18504 26.6654 3.92887C26.4348 3.6727 26.0403 3.65191 25.7841 3.88246ZM20.6251 3.36301C20.6251 3.70816 20.3452 3.98801 20.0001 3.98801C19.6549 3.98801 19.375 3.70816 19.375 3.36301V1.06934C19.375 0.72418 19.6549 0.444336 20.0001 0.444336C20.3452 0.444336 20.6251 0.72418 20.6251 1.06934V3.36301ZM6.40216 5.85387L7.66169 9.17137C7.69958 9.27113 7.78771 9.33512 7.89427 9.34035L11.4386 9.51309C11.5496 9.51848 11.641 9.5884 11.6754 9.6941C11.7097 9.7998 11.6768 9.91012 11.5902 9.97973L8.82435 12.2028C8.74122 12.2696 8.70755 12.3732 8.73552 12.4761L9.66646 15.9004C9.6956 16.0076 9.65739 16.1161 9.56747 16.1814C9.47755 16.2468 9.36255 16.2496 9.2695 16.1887L6.30052 14.2452C6.2113 14.1868 6.10232 14.1868 6.0131 14.2452L3.04419 16.1887C2.95122 16.2496 2.83614 16.2468 2.7463 16.1814C2.65638 16.1161 2.61818 16.0075 2.64732 15.9004L3.57825 12.4761C3.60622 12.3732 3.57255 12.2696 3.48943 12.2028L0.723566 9.97965C0.636925 9.91004 0.604035 9.79973 0.63841 9.69402C0.672707 9.58832 0.764191 9.51848 0.875207 9.51301L4.4195 9.34027C4.52607 9.33512 4.61419 9.27106 4.652 9.17129L5.91161 5.85387C5.95107 5.74996 6.04575 5.68465 6.15693 5.68465C6.2681 5.68465 6.36271 5.74996 6.40216 5.85387ZM34.0472 5.85387L35.3067 9.17137C35.3446 9.27113 35.4327 9.33512 35.5393 9.34035L39.0836 9.51309C39.1946 9.51848 39.286 9.5884 39.3204 9.6941C39.3547 9.7998 39.3218 9.91012 39.2352 9.97973L36.4693 12.2028C36.3862 12.2696 36.3526 12.3732 36.3805 12.4761L37.3115 15.9004C37.3406 16.0076 37.3024 16.1161 37.2126 16.1814C37.1226 16.2468 37.0076 16.2496 36.9146 16.1887L33.9456 14.2452C33.8564 14.1868 33.7474 14.1868 33.6582 14.2452L30.6893 16.1887C30.5963 16.2496 30.4812 16.2468 30.3913 16.1814C30.3014 16.1161 30.2632 16.0075 30.2923 15.9004L31.2233 12.4761C31.2512 12.3732 31.2176 12.2696 31.1344 12.2028L28.3686 9.97973C28.2819 9.91012 28.249 9.7998 28.2834 9.6941C28.3177 9.5884 28.4092 9.51855 28.5202 9.51309L32.0645 9.34035C32.1711 9.3352 32.2592 9.27113 32.297 9.17137L33.5565 5.85387C33.596 5.74996 33.6907 5.68465 33.8018 5.68465C33.913 5.68465 34.0077 5.74996 34.0472 5.85387Z"
                            fill="#A2E3B8"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_308_4692">
                            <rect width={40} height={40} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span className="dark">Client</span>
                  </a>
                  <a
                    href="#about"
                    className="js-anchor-link selfcontaindiv_js"
                    onClick={(event) => {
                      event.preventDefault();
                      handleClickFindClosesScroll(event);
                    }}
                  >
                    <span className="sticky_nav_icon">
                      <svg
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20 8.56665C17.7387 8.56665 15.5282 9.2372 13.648 10.4935C11.7678 11.7498 10.3023 13.5355 9.43697 15.6246C8.5716 17.7138 8.34519 20.0127 8.78634 22.2305C9.2275 24.4484 10.3164 26.4856 11.9154 28.0846C13.5144 29.6835 15.5516 30.7725 17.7695 31.2136C19.9873 31.6548 22.2862 31.4284 24.3753 30.563C26.4645 29.6976 28.2501 28.2322 29.5065 26.352C30.7628 24.4718 31.4333 22.2613 31.4333 20C31.4274 16.9695 30.221 14.0648 28.0781 11.9219C25.9352 9.77899 23.0305 8.57252 20 8.56665ZM20 14.2555C20.2491 14.2556 20.4926 14.3291 20.7001 14.4669C20.9076 14.6047 21.0699 14.8006 21.1667 15.0301C21.2635 15.2596 21.2904 15.5126 21.2442 15.7573C21.198 16.0021 21.0806 16.2278 20.9068 16.4062C20.7329 16.5846 20.5104 16.7078 20.2669 16.7603C20.0234 16.8129 19.7699 16.7925 19.5379 16.7018C19.306 16.611 19.1059 16.4538 18.9628 16.2499C18.8197 16.0461 18.7399 15.8045 18.7333 15.5555C18.7289 15.3864 18.7583 15.2181 18.82 15.0606C18.8817 14.903 18.9743 14.7594 19.0923 14.6382C19.2104 14.5171 19.3515 14.4208 19.5074 14.355C19.6633 14.2893 19.8308 14.2555 20 14.2555ZM21.2667 24.4444C21.2667 24.7804 21.1332 25.1025 20.8957 25.3401C20.6581 25.5776 20.3359 25.7111 20 25.7111C19.664 25.7111 19.3419 25.5776 19.1043 25.3401C18.8668 25.1025 18.7333 24.7804 18.7333 24.4444V19.3333C18.7333 18.9974 18.8668 18.6752 19.1043 18.4376C19.3419 18.2001 19.664 18.0667 20 18.0667C20.3359 18.0667 20.6581 18.2001 20.8957 18.4376C21.1332 18.6752 21.2667 18.9974 21.2667 19.3333V24.4444Z"
                          fill="#15023A"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20 2.22217C16.4838 2.22217 13.0467 3.26482 10.1231 5.21826C7.19961 7.17171 4.92099 9.94822 3.57543 13.1967C2.22987 16.4451 1.87781 20.0197 2.56377 23.4682C3.24973 26.9168 4.9429 30.0845 7.42917 32.5707C9.91543 35.057 13.0831 36.7502 16.5317 37.4361C19.9802 38.1221 23.5548 37.77 26.8032 36.4245C30.0517 35.0789 32.8282 32.8003 34.7816 29.8768C36.7351 26.9532 37.7777 23.5161 37.7777 19.9999C37.7777 15.285 35.9047 10.7631 32.5707 7.42916C29.2368 4.09518 24.7149 2.22217 20 2.22217ZM20 33.9666C17.2376 33.9666 14.5373 33.1475 12.2405 31.6128C9.94368 30.0781 8.15354 27.8968 7.09644 25.3448C6.03933 22.7927 5.76275 19.9845 6.30165 17.2752C6.84056 14.5659 8.17076 12.0773 10.124 10.124C12.0773 8.17075 14.5659 6.84055 17.2752 6.30164C19.9845 5.76274 22.7927 6.03932 25.3448 7.09643C27.8968 8.15353 30.0781 9.94368 31.6128 12.2405C33.1475 14.5373 33.9666 17.2376 33.9666 19.9999C33.9607 23.7023 32.4874 27.2514 29.8694 29.8694C27.2514 32.4874 23.7023 33.9607 20 33.9666Z"
                          fill="#A2E3B8"
                        />
                      </svg>
                    </span>
                    <span className="dark">About</span>
                  </a>
                </div>
                <div className="service_column">
                  <h2 className="titleh2">Services</h2>
                  {/* <p className="font14">
                    Alanta Hair &amp; Beauty offers a range of services
                    including haircuts, styling, facials, massages, and more.
                    Our skilled professionals use the latest techniques and
                    high-quality products to ensure a rejuvenating experience.
                  </p> */}
                  <div className="services-section">
                    <div className="slider-nav-service slider">
                      {salonDetailData?.services &&
                        !!salonDetailData?.services.length && (
                          <OwlCarousel
                            className="owl-theme"
                            {...RecommendedProps}
                            navText={[customPrevIcon, customNextIcon]}
                          >
                            {salonDetailData?.services.map(
                              (service: any, index: any) => {
                                return (
                                  <div
                                    className={`service_item_tab_link ${
                                      serviceSliderSelected == service.id
                                        ? "selected"
                                        : ""
                                    }`}
                                    key={index}
                                    onClick={(e) => {
                                      setServiceSliderSelected(service.id);
                                      getServiceDataApi(
                                        salonDetailData.detail.domainId,
                                        service.id
                                      )
                                        .then((rec: any) => {})
                                        .catch((err: any) => {
                                          console.log(err.message);
                                        });
                                    }}
                                  >
                                    <button
                                      className="service_btn"
                                      // style={{
                                      //   backgroundColor: "lightgreen",
                                      // }}
                                    >
                                      {service.name}
                                    </button>
                                  </div>
                                );
                              }
                            )}
                          </OwlCarousel>
                        )}
                    </div>
                    <div className="pt-3 service-section" id="services">
                      {serviceLoading ? (
                        <div className="loader">
                          <span></span>
                        </div>
                      ) : (
                        serviceData.map((data: any, index: any) => {
                          return (
                            <div
                              key={index}
                              className={`service-item ${
                                serviceSaleReducer.selectedServiceIds.includes(
                                  data.id
                                )
                                  ? "active"
                                  : ""
                              } `}
                              onClick={() => {
                                console.log(
                                  "serviceSaleReducer.selectedServiceIds.includes(childRec.id)"
                                );
                                console.log(
                                  serviceSaleReducer.selectedServiceIds.includes(
                                    data.id
                                  )
                                );

                                if (
                                  serviceSaleReducer.selectedServiceIds.includes(
                                    data.id
                                  )
                                ) {
                                  deleteFromCart({
                                    id: data.id,
                                    cartType: ENUM_cartType.service,
                                  });
                                  navigate(
                                    `/booking/${salonDetailData?.detail?.domainName}`
                                  );
                                } else {
                                  addToCart(data);
                                  navigate(
                                    `/booking/${salonDetailData?.detail?.domainName}`
                                  );
                                }
                              }}
                            >
                              {/* <button className="service_selector" /> */}
                              <div className="service_info">
                                <h3
                                  className="title_service"
                                  style={{
                                    width: "287px",
                                    fontWeight: "700",
                                  }}
                                >
                                  {data.name}
                                </h3>
                                <p className="srevice_time">
                                  {data.service_time}
                                </p>
                                <p className="service_price">
                                  From{" "}
                                  <span>
                                    {currency}
                                    {data.price}
                                  </span>
                                </p>
                              </div>

                              <div className="service_butns">
                                <button className="add_service">
                                  {serviceSaleReducer.selectedServiceIds.includes(
                                    data.id
                                  ) ? (
                                    <>
                                      <svg
                                        width="20"
                                        height="20"
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
                        })
                      )}
                    </div>

                    {/* Team & client Terminology */}

                    <div className="line" />
                    <div className="pt-3 service-section" id="team">
                      <h2 className="titleh2">Team</h2>

                      <div className="grid-col">
                        {/* team */}
                        {salonDetailData?.staffs.map(
                          (member: any, index: any) => {
                            return (
                              <div
                                className="staff_selector text-center"
                                key={index}
                              >
                                <button className="staff_select" />
                                <div className="staff_pic">
                                  <span>
                                    <img
                                      src={member.image_url}
                                      onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src =
                                          "/images/placeholder/person.png";
                                      }}
                                      alt={member.name}
                                      width={120}
                                      height={120}
                                    />
                                  </span>
                                  <div className="staff_rating">
                                    <svg
                                      className="mr-2"
                                      width={12}
                                      height={12}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_331_2302)">
                                        <path
                                          d="M19.9477 7.67117C19.816 7.2662 19.4568 6.97948 19.0335 6.94118L13.2601 6.41703L10.9784 1.07515C10.81 0.682682 10.4267 0.429382 10 0.429382C9.57338 0.429382 9.18992 0.682682 9.02253 1.07515L6.74085 6.41703L0.96652 6.94118C0.543234 6.98024 0.184799 7.26696 0.0523506 7.67117C-0.0793349 8.07615 0.0422796 8.52034 0.362414 8.8011L4.72665 12.6279L3.43986 18.2954C3.34571 18.7122 3.50746 19.1431 3.85323 19.393C4.03908 19.5281 4.25744 19.5955 4.47656 19.5955C4.66486 19.5955 4.8533 19.5455 5.02161 19.4447L10 16.468L14.9775 19.4447C15.3427 19.6629 15.8018 19.643 16.1468 19.393C16.4926 19.1431 16.6543 18.7122 16.5602 18.2954L15.2734 12.6279L19.6376 8.8011C19.9576 8.52034 20.0794 8.07706 19.9477 7.67117Z"
                                          fill="#15023A"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_331_2302">
                                          <rect
                                            width={20}
                                            height={20}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>{" "}
                                    <span className="dark">
                                      {" "}
                                      {member.rating}
                                    </span>
                                  </div>
                                </div>
                                <p className="dark">{member.name}</p>
                                <p className="light">{member.designation}</p>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>

                    <div className="line" />
                    <div className="pt-3 service-section" id="client">
                      <h2 className="titleh2">Client Reviews</h2>

                      <div className="row mb-4">
                        <div className="col-md-6 col-xs-12 pt-0">
                          <p>
                            <img src="/images/rate.png" alt="rating" />
                          </p>
                          <p className="review">
                            "Salonist made finding a salon so easy! The variety
                            of options and user-friendly interface made my
                            experience delightful."
                          </p>
                          <div className="display-flex align-items-center">
                            <span className="testimonial_client">
                              <img src="/images/sarah-smith.png" alt="client" />
                            </span>
                            <div className="ml-2 testimonial_client_info">
                              <p className="dark">
                                <strong>Sarah Smith</strong>
                              </p>
                              <p className="light">CEO at Loreal Paris</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-xs-12 pt-0">
                          <p>
                            <img src="/images/rate.png" alt="rating" />
                          </p>
                          <p className="review">
                            "Salonist made finding a salon so easy! The variety
                            of options and user-friendly interface made my
                            experience delightful."
                          </p>
                          <div className="display-flex align-items-center">
                            <span className="testimonial_client">
                              <img src="/images/sarah-smith.png" alt="client" />
                            </span>
                            <div className="ml-2 testimonial_client_info">
                              <p className="dark">
                                <strong>Sarah Smith</strong>
                              </p>
                              <p className="light">CEO at Loreal Paris</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-3 mb-4">
                        <a href="#" className="button">
                          See all
                        </a>
                      </div>
                    </div>

                    {/* About */}
                    <About
                      aboutUs={salonDetailData?.detail?.aboutUs}
                      businessHours={salonDetailData?.businessHours}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="appointment-info-sidebar">
                <div className="p-4">
                  <div className="business_pic">
                    <img
                      src={salonDetailData?.detail?.image_url}
                      alt={salonDetailData?.detail?.name}
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = "/images/profilePlaceHolder.png";
                      }}
                    />
                  </div>
                  <h2 className="titleh2">{salonDetailData?.detail?.name}</h2>
                  <ul className="details_add">
                    <li>
                      <span>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_331_2302)">
                            <path
                              d="M19.9477 7.67117C19.816 7.2662 19.4568 6.97948 19.0335 6.94118L13.2601 6.41703L10.9784 1.07515C10.81 0.682682 10.4267 0.429382 10 0.429382C9.57338 0.429382 9.18992 0.682682 9.02253 1.07515L6.74085 6.41703L0.96652 6.94118C0.543234 6.98024 0.184799 7.26696 0.0523506 7.67117C-0.0793349 8.07615 0.0422796 8.52034 0.362414 8.8011L4.72665 12.6279L3.43986 18.2954C3.34571 18.7122 3.50746 19.1431 3.85323 19.393C4.03908 19.5281 4.25744 19.5955 4.47656 19.5955C4.66486 19.5955 4.8533 19.5455 5.02161 19.4447L10 16.468L14.9775 19.4447C15.3427 19.6629 15.8018 19.643 16.1468 19.393C16.4926 19.1431 16.6543 18.7122 16.5602 18.2954L15.2734 12.6279L19.6376 8.8011C19.9576 8.52034 20.0794 8.07706 19.9477 7.67117Z"
                              fill="#15023A"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_331_2302">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>{" "}
                      {salonDetailData?.detail?.rating}/5{" "}
                      {salonDetailData?.detail?.reviewCount} reviews
                    </li>
                    <li>
                      <span>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_331_2306)">
                            <path
                              d="M9.99992 0.833313C8.18693 0.833313 6.41465 1.37093 4.9072 2.37817C3.39974 3.38542 2.22483 4.81706 1.53103 6.49205C0.837224 8.16704 0.655693 10.0101 1.00939 11.7883C1.36309 13.5665 2.23613 15.1998 3.51811 16.4818C4.80009 17.7638 6.43344 18.6368 8.21159 18.9905C9.98975 19.3442 11.8329 19.1627 13.5079 18.4689C15.1828 17.7751 16.6145 16.6002 17.6217 15.0927C18.629 13.5853 19.1666 11.813 19.1666 9.99998C19.1637 7.56971 18.197 5.2398 16.4786 3.52133C14.7601 1.80287 12.4302 0.83618 9.99992 0.833313ZM13.0891 13.0891C12.9328 13.2454 12.7209 13.3331 12.4999 13.3331C12.279 13.3331 12.067 13.2454 11.9108 13.0891L9.41076 10.5891C9.25447 10.4329 9.16664 10.221 9.16659 9.99998V4.99998C9.16659 4.77897 9.25439 4.567 9.41067 4.41072C9.56695 4.25444 9.77891 4.16665 9.99992 4.16665C10.2209 4.16665 10.4329 4.25444 10.5892 4.41072C10.7455 4.567 10.8333 4.77897 10.8333 4.99998V9.65498L13.0891 11.9108C13.2453 12.0671 13.3331 12.279 13.3331 12.5C13.3331 12.721 13.2453 12.9329 13.0891 13.0891Z"
                              fill="#15023A"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_331_2306">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>{" "}
                      {storeOpenOrCloseLabel}
                    </li>
                    <li>
                      <span>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.0001 0C6.00613 0 2.75684 3.2493 2.75684 7.2432C2.75684 12.1998 9.23883 19.4763 9.5148 19.7836C9.77402 20.0723 10.2266 20.0718 10.4854 19.7836C10.7613 19.4763 17.2433 12.1998 17.2433 7.2432C17.2432 3.2493 13.994 0 10.0001 0ZM10.0001 10.8875C7.99062 10.8875 6.35586 9.25266 6.35586 7.2432C6.35586 5.23375 7.99066 3.59898 10.0001 3.59898C12.0095 3.59898 13.6443 5.23379 13.6443 7.24324C13.6443 9.2527 12.0095 10.8875 10.0001 10.8875Z"
                            fill="#15023A"
                          />
                        </svg>
                      </span>{" "}
                      {salonDetailData?.detail?.address}
                    </li>
                  </ul>
                </div>

                <div className="p-4 pt-0">
                  <Link
                    to={`/booking/${salonDetailData?.detail?.domainName}`}
                    className="button darkBtn full-btn button-large text-center justify-content-center text16"
                  >
                    <strong>Book Now</strong>
                  </Link>
                </div>
                <button
                  className="map_btn"
                  type="button"
                  onClick={() => myFunction(null)}
                >
                  <svg
                    width={14}
                    height={12}
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.53157 0.191706L0.191415 5.53176C0.0676107 5.65566 -0.00038857 5.82112 1.67037e-06 5.99781C-0.00038857 6.1738 0.0676107 6.33936 0.191415 6.46336L5.53654 11.8083C5.66005 11.9319 5.82493 12 6.00073 12C6.17654 12 6.34132 11.9319 6.46493 11.8083L6.85819 11.4152C6.9817 11.2915 7.0499 11.1267 7.0499 10.9508C7.0499 10.7751 6.9817 10.6104 6.85819 10.4867L2.36896 5.99751L6.85321 1.51326C7.10912 1.25745 7.10912 0.841066 6.85321 0.584873L6.45995 0.191706C6.33644 0.068097 6.17156 0 5.99576 0C5.81995 0 5.65508 0.068097 5.53157 0.191706ZM11.5316 0.191706L6.19142 5.53176C6.06761 5.65566 5.99961 5.82112 6 5.99781C5.99961 6.1738 6.06761 6.33936 6.19142 6.46336L11.5365 11.8083C11.6601 11.9319 11.8249 12 12.0007 12C12.1765 12 12.3413 11.9319 12.4649 11.8083L12.8582 11.4152C12.9817 11.2915 13.0499 11.1267 13.0499 10.9508C13.0499 10.7751 12.9817 10.6104 12.8582 10.4867L8.36896 5.99751L12.8532 1.51326C13.1091 1.25745 13.1091 0.841066 12.8532 0.584873L12.4599 0.191706C12.3364 0.068097 12.1716 0 11.9958 0C11.82 0 11.6551 0.068097 11.5316 0.191706Z"
                      fill="#15023A"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* {show && <Map />} */}
          <div className="list_map" id="map_div_">
            <button
              className="map_btn top_mapbtn"
              type="button"
              onClick={(event) => {
                myFunction(event);
              }}
            >
              <svg
                width={14}
                height={12}
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.53157 0.191706L0.191415 5.53176C0.0676107 5.65566 -0.00038857 5.82112 1.67037e-06 5.99781C-0.00038857 6.1738 0.0676107 6.33936 0.191415 6.46336L5.53654 11.8083C5.66005 11.9319 5.82493 12 6.00073 12C6.17654 12 6.34132 11.9319 6.46493 11.8083L6.85819 11.4152C6.9817 11.2915 7.0499 11.1267 7.0499 10.9508C7.0499 10.7751 6.9817 10.6104 6.85819 10.4867L2.36896 5.99751L6.85321 1.51326C7.10912 1.25745 7.10912 0.841066 6.85321 0.584873L6.45995 0.191706C6.33644 0.068097 6.17156 0 5.99576 0C5.81995 0 5.65508 0.068097 5.53157 0.191706ZM11.5316 0.191706L6.19142 5.53176C6.06761 5.65566 5.99961 5.82112 6 5.99781C5.99961 6.1738 6.06761 6.33936 6.19142 6.46336L11.5365 11.8083C11.6601 11.9319 11.8249 12 12.0007 12C12.1765 12 12.3413 11.9319 12.4649 11.8083L12.8582 11.4152C12.9817 11.2915 13.0499 11.1267 13.0499 10.9508C13.0499 10.7751 12.9817 10.6104 12.8582 10.4867L8.36896 5.99751L12.8532 1.51326C13.1091 1.25745 13.1091 0.841066 12.8532 0.584873L12.4599 0.191706C12.3364 0.068097 12.1716 0 11.9958 0C11.82 0 11.6551 0.068097 11.5316 0.191706Z"
                  fill="#15023A"
                />
              </svg>
            </button>

            <div className="map_main">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.119642964469!2d-0.37527492337971896!3d51.51102097181411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760d5458feea1d%3A0x1a935d6c1cf6dca8!2sRubix%20House!5e0!3m2!1sen!2sin!4v1718340987025!5m2!1sen!2sin"
                width="100%"
                height={430}
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          {/* <Map /> */}
          {/* Related Services */}
          {salonDetailData?.detail?.domainName && (
            <RelatedService
              categories={salonDetailData?.detail?.categories}
              domainName={salonDetailData?.detail?.domainName}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SalonDetail;
