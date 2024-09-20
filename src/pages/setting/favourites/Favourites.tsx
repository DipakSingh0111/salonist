import React from "react";
import "../../../profile-setup.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Favourites = () => {
  // Slider
  const Date = {
    className: "center",
    centerMode: true,
    centerPadding: "30px",
    infinite: true,
    speed: 300,
    slidesToShow: 5,
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
  return (
    <>
      <header className="header-profile">
        <div className="container">
          <div className="navbar-header">
            <a className="btn btn-border" href="/">
              Back
            </a>
            <div className="profile-nav">
              <div className="owl-carousel owl-theme" id="owl-carousel-profile">
                <Slider {...Date} className="">
                  <div className="item">
                    <a href="profile.html" className="profile-link">
                      <span className="icon-50">
                        <img src="/images/profile/user.svg" alt="user" />
                      </span>{" "}
                      My profile
                    </a>
                  </div>
                  <div className="item">
                    <a href="reviews.html" className="profile-link">
                      <span className="icon-50">
                        <img src="/images/profile/reviews.svg" alt="reviews" />
                      </span>{" "}
                      Reviews
                    </a>
                  </div>
                  <div className="item">
                    <a href="settings.html" className="profile-link">
                      <span className="icon-50">
                        <img src="/images/profile/setting.svg" alt="Settings" />
                      </span>{" "}
                      Settings
                    </a>
                  </div>
                  <div className="item">
                    <a href="appointments.html" className="profile-link">
                      <span className="icon-50">
                        <img
                          src="/images/profile/calendar.svg"
                          alt="Appointments"
                        />
                      </span>{" "}
                      Appointments
                    </a>
                  </div>
                  <div className="item">
                    <a href="gift-cards.html" className="profile-link">
                      <span className="icon-50">
                        <img src="/images/profile/gift.svg" alt="Gift Card" />
                      </span>{" "}
                      Gift Card
                    </a>
                  </div>
                  <div className="item">
                    <a href="vouchers.html" className="profile-link">
                      <span className="icon-50">
                        <img src="/images/profile/voucher.svg" alt="voucher" />
                      </span>{" "}
                      Vouchers
                    </a>
                  </div>
                  <div className="item">
                    <a href="membership.html" className="profile-link">
                      <span className="icon-50">
                        <img
                          src="/images/profile/membership.svg"
                          alt="membership"
                        />
                      </span>{" "}
                      Membership
                    </a>
                  </div>
                  <div className="item">
                    <a href="favourites.html" className="profile-link">
                      <span className="icon-50">
                        <img
                          src="/images/profile/favourite.svg"
                          alt="favourite"
                        />
                      </span>{" "}
                      Favourites
                    </a>
                  </div>
                  <div className="item">
                    <a href="form.html" className="profile-link">
                      <span className="icon-50">
                        <img src="/images/profile/forms.svg" alt="form" />
                      </span>{" "}
                      Form
                    </a>
                  </div>
                  <div className="item">
                    <a href="products.html" className="profile-link">
                      <span className="icon-50">
                        <img
                          src="/images/profile/products.svg"
                          alt="products"
                        />
                      </span>{" "}
                      Products Orders
                    </a>
                  </div>
                  <div className="item">
                    <a href="payment.html" className="profile-link">
                      <span className="icon-50">
                        <img src="/images/profile/payments.svg" alt="Payment" />
                      </span>{" "}
                      Payment Methods
                    </a>
                  </div>
                  <div className="item">
                    <a href="download.html" className="profile-link">
                      <span className="icon-50">
                        <img
                          src="/images/profile/download.svg"
                          alt="Download"
                        />
                      </span>{" "}
                      Download
                    </a>
                  </div>
                  <div className="item">
                    <a href="customer-support.html" className="profile-link">
                      <span className="icon-50">
                        <img
                          src="/images/profile/support.svg"
                          alt="Customer Support"
                        />
                      </span>{" "}
                      Customer Support
                    </a>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container white-box-outer">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1 className="title-small text-24 medium mb-0 group-title">
              Favourites 5
            </h1>
          </div>
          <div className="col-md-4 text-right d-flex align-items-center justify-content-end">
            <Link to="/" className="btn">
              Add
            </Link>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-12 col-xs-12 mt-3">
            <div className="light-gray-bg p-3">
              <div className="d-flex row justify-content-between">
                <div className="col-md-5">
                  <input
                    type="text"
                    placeholder="Search by client or membership name"
                    className="search-box"
                  />
                </div>
                <div className="ml-3">
                  <Link to="/" className="btn-border-light-white btn equal">
                    Category{" "}
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.8573 16.0716C12.4716 16.0716 12.2144 15.8144 12.2144 15.4287V13.5001H10.2859C9.90014 13.5001 9.643 13.243 9.643 12.8573C9.643 12.4716 9.90014 12.2144 10.2859 12.2144H12.2144V10.2859C12.2144 9.90014 12.4716 9.643 12.8573 9.643C13.243 9.643 13.5001 9.90014 13.5001 10.2859V12.2144H15.4287C15.8144 12.2144 16.0716 12.4716 16.0716 12.8573C16.0716 13.243 15.8144 13.5001 15.4287 13.5001H13.5001V15.4287C13.5001 15.8144 13.243 16.0716 12.8573 16.0716ZM6.75014 16.0716H3.53585C2.63585 16.0716 1.92871 15.3644 1.92871 14.4644V11.2501C1.92871 10.3501 2.63585 9.643 3.53585 9.643H6.75014C7.65014 9.643 8.35728 10.3501 8.35728 11.2501V14.4644C8.35728 15.3644 7.65014 16.0716 6.75014 16.0716ZM3.53585 10.9287C3.343 10.9287 3.21443 11.0573 3.21443 11.2501V14.4644C3.21443 14.6573 3.343 14.7859 3.53585 14.7859H6.75014C6.943 14.7859 7.07157 14.6573 7.07157 14.4644V11.2501C7.07157 11.0573 6.943 10.9287 6.75014 10.9287H3.53585ZM14.4644 8.35728H11.2501C10.3501 8.35728 9.643 7.65014 9.643 6.75014V3.53585C9.643 2.63585 10.3501 1.92871 11.2501 1.92871H14.4644C15.3644 1.92871 16.0716 2.63585 16.0716 3.53585V6.75014C16.0716 7.65014 15.3644 8.35728 14.4644 8.35728ZM11.2501 3.21443C11.0573 3.21443 10.9287 3.343 10.9287 3.53585V6.75014C10.9287 6.943 11.0573 7.07157 11.2501 7.07157H14.4644C14.6573 7.07157 14.7859 6.943 14.7859 6.75014V3.53585C14.7859 3.343 14.6573 3.21443 14.4644 3.21443H11.2501ZM6.75014 8.35728H3.53585C2.63585 8.35728 1.92871 7.65014 1.92871 6.75014V3.53585C1.92871 2.63585 2.63585 1.92871 3.53585 1.92871H6.75014C7.65014 1.92871 8.35728 2.63585 8.35728 3.53585V6.75014C8.35728 7.65014 7.65014 8.35728 6.75014 8.35728ZM3.53585 3.21443C3.343 3.21443 3.21443 3.343 3.21443 3.53585V6.75014C3.21443 6.943 3.343 7.07157 3.53585 7.07157H6.75014C6.943 7.07157 7.07157 6.943 7.07157 6.75014V3.53585C7.07157 3.343 6.943 3.21443 6.75014 3.21443H3.53585Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <ul className="tab-nav">
            <li className="active">
              <a href="#tab1">All Reports</a>
            </li>
            <li>
              <a href="#tab2">Sale</a>
            </li>
            <li>
              <a href="#tab3">Finance</a>
            </li>
            <li>
              <a href="#tab4">Appointments</a>
            </li>
            <li>
              <a href="#tab5">Team</a>
            </li>
            <li>
              <a href="#tab6">Clients</a>
            </li>
            <li>
              <a href="#tab7">Inventory</a>
            </li>
          </ul>
        </div>
        <div className="tab-container">
          <div className="tab-content tab-pan active" id="tab1">
            <div className="bordered-box mb-4 p-3 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <div className="mr-3">
                  <img src="/images/profile/graph.svg" alt="" />
                </div>
                <div className="">
                  <h3 className="semibold text-18 group-title m-0">
                    Performance Dashboard
                  </h3>
                  <p className="mb-0">Dashboard of your business perfornabce</p>
                </div>
              </div>
              <div className="ml-3">
                <img src="/images/profile/star.png" alt="star" />
              </div>
            </div>
            <div className="bordered-box mb-4 p-3 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <div className="mr-3">
                  <img src="/images/profile/graph.svg" alt="" />
                </div>
                <div className="">
                  <h3 className="semibold text-18 group-title m-0">
                    Performance Over Time
                  </h3>
                  <p className="mb-0">Dashboard of your business perfornabce</p>
                </div>
              </div>
              <div className="ml-3">
                <img src="/images/profile/star.png" alt="star" />
              </div>
            </div>
            <div className="bordered-box mb-4 p-3 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <div className="mr-3">
                  <img src="/images/profile/graph.svg" alt="" />
                </div>
                <div className="">
                  <h3 className="semibold text-18 group-title m-0">
                    Finance Summary
                  </h3>
                  <p className="mb-0">Dashboard of your business perfornabce</p>
                </div>
              </div>
              <div className="ml-3">
                <img src="/images/profile/star.png" alt="star" />
              </div>
            </div>
            <div className="bordered-box mb-4 p-3 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <div className="mr-3">
                  <img src="/images/profile/graph.svg" alt="" />
                </div>
                <div className="">
                  <h3 className="semibold text-18 group-title m-0">
                    Payments Summer
                  </h3>
                  <p className="mb-0">Dashboard of your business perfornabce</p>
                </div>
              </div>
              <div className="ml-3">
                <img src="/images/profile/star.png" alt="star" />
              </div>
            </div>
            <div className="bordered-box mb-4 p-3 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <div className="mr-3">
                  <img src="/images/profile/graph.svg" alt="" />
                </div>
                <div className="">
                  <h3 className="semibold text-18 group-title m-0">
                    Appointments Summery
                  </h3>
                  <p className="mb-0">Dashboard of your business perfornabce</p>
                </div>
              </div>
              <div className="ml-3">
                <img src="/images/profile/star.png" alt="star" />
              </div>
            </div>
          </div>
          <div className="tab-content tab-pan" id="tab2">
            <div className="bordered-box mb-4 p-3 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <div className="mr-3">
                  <img src="/images/profile/graph.svg" alt="" />
                </div>
                <div className="">
                  <h3 className="semibold text-18 group-title m-0">
                    Performance Dashboard
                  </h3>
                  <p className="mb-0">Dashboard of your business perfornabce</p>
                </div>
              </div>
              <div className="ml-3">
                <img src="/images/profile/star.png" alt="star" />
              </div>
            </div>
          </div>
          <div className="tab-content tab-pan" id="tab3">
            <div className="bordered-box mb-4 p-3 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <div className="mr-3">
                  <img src="/images/profile/graph.svg" alt="" />
                </div>
                <div className="">
                  <h3 className="semibold text-18 group-title m-0">
                    Performance Dashboard
                  </h3>
                  <p className="mb-0">Dashboard of your business perfornabce</p>
                </div>
              </div>
              <div className="ml-3">
                <img src="/images/profile/star.png" alt="star" />
              </div>
            </div>
          </div>
          <div className="tab-content tab-pan" id="tab4">
            <div className="bordered-box mb-4 p-3 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <div className="mr-3">
                  <img src="/images/profile/graph.svg" alt="" />
                </div>
                <div className="">
                  <h3 className="semibold text-18 group-title m-0">
                    Performance Dashboard
                  </h3>
                  <p className="mb-0">Dashboard of your business perfornabce</p>
                </div>
              </div>
              <div className="ml-3">
                <img src="/images/profile/star.png" alt="star" />
              </div>
            </div>
          </div>
          <div className="tab-content tab-pan" id="tab5">
            <div className="bordered-box mb-4 p-3 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <div className="mr-3">
                  <img src="/images/profile/graph.svg" alt="" />
                </div>
                <div className="">
                  <h3 className="semibold text-18 group-title m-0">
                    Performance Dashboard
                  </h3>
                  <p className="mb-0">Dashboard of your business perfornabce</p>
                </div>
              </div>
              <div className="ml-3">
                <img src="/images/profile/star.png" alt="star" />
              </div>
            </div>
          </div>
          <div className="tab-content tab-pan" id="tab6">
            <div className="bordered-box mb-4 p-3 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <div className="mr-3">
                  <img src="/images/profile/graph.svg" alt="" />
                </div>
                <div className="">
                  <h3 className="semibold text-18 group-title m-0">
                    Performance Dashboard
                  </h3>
                  <p className="mb-0">Dashboard of your business perfornabce</p>
                </div>
              </div>
              <div className="ml-3">
                <img src="/images/star.png" alt="star" />
              </div>
            </div>
          </div>
          <div className="tab-content tab-pan" id="tab7">
            <div className="bordered-box mb-4 p-3 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <div className="mr-3">
                  <img src="/images/profile/graph.svg" alt="" />
                </div>
                <div className="">
                  <h3 className="semibold text-18 group-title m-0">
                    Performance Dashboard
                  </h3>
                  <p className="mb-0">Dashboard of your business perfornabce</p>
                </div>
              </div>
              <div className="ml-3">
                <img src="/images/profile/star.png" alt="star" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favourites;
