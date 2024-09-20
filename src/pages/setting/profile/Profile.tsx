import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "../../../profile-setup.css";

const Setting = () => {
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
          <div className="col-md-6">
            <h1 className="title-small text-24 medium">Your profile</h1>
          </div>
          <div className="col-md-6 text-right">
            <a href="#" className="btn-border-light btn">
              Edit
            </a>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-4 col-xs-12 mt-3">
            <div className="profile bordered-box p-5">
              <div className="profile-info">
                <div className="profile-picture">
                  <span className="text-30 semibold text-uppercase">NG</span>
                </div>
              </div>
              <h2 className="text-24 text-center medium">Neeraj Gupta</h2>
              <ul className="defalut-list-with-icon">
                <li>
                  <span>
                    <img src="/images/profile/cal.svg" alt="calendar" />
                  </span>{" "}
                  Joined Jan 2017
                </li>
                <li>
                  <span>
                    <img src="/images/profile/globe.svg" alt="globe" />
                  </span>{" "}
                  Chandigarh,India
                </li>
                <li>
                  <span>
                    <img src="/images/profile/review.svg" alt="review" />
                  </span>{" "}
                  No reviews
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            <ul className="bordered-list">
              <li>
                <a href="#">About me</a>
              </li>
              <li>
                <a href="#">Add description</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
