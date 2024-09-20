import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const HowToWork = () => {
  // SliderList
  const SliderList = {
    backgroundRepeat: "no-repeat",
    display: "flex",
    height: "100%",
    backgroundSize: "26px",
    marginRight: "10px",
  };

  //   OwlCarousel
  const customPrevIcon = '<i class="fa fa-chevron-left"></i>';
  const customNextIcon = '<i class="fa fa-chevron-left"></i>';
  const RecommendedProps = {
    loop: true,
    autoplay: true,
    autoplaytimeout: 4000,
    margin:30,
    responsive: {
      1100: {
        items: 3,
      },
      724: {
        items: 2,
      },
      480: {
        items: 1,
      },
    },
  };
  return (
    <div>
      <section className="section-gap howwork_sec pb-0">
        <div className="container">
          <h2 className="text-center h2">How It Works</h2>
          <div className="row text-center">
            <div className="col-12 col-md-4 col-sm-4">
              <div className="work_sec">
                <p>Search for the service you need or browse categories.</p>
                <img src="images/work.png" alt="" />
              </div>
            </div>
            <div className="col-12 col-md-4 col-sm-4">
              <div className="work_sec">
                <p>Discover top-rated professionals and businesses near you.</p>
                <img src="images/work2.png" alt="" />
              </div>
            </div>
            <div className="col-12 col-md-4 col-sm-4">
              <div className="work_sec">
                <p>Book your appointment and enjoy a fantastic experience.</p>
                <img src="images/work3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-gap review_sec">
        <div className="container">
          <h2 className="titleh2 textmobi-center">Client Reviews</h2>
          <div
            className="owl-carousel owl-theme work-list pt-2"
            id="owl-carousel-3"
            style={SliderList}
          >
            <OwlCarousel
              className="owl-theme"
              {...RecommendedProps}
              navText={[customNextIcon, customPrevIcon]}
              nav
            >
              <div className="review item">
                <div className="star">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                </div>
                <p>
                  "Booking with Salonist is so simple! I love that I can book my
                  beauty treatments whenever I want without needing to call the
                  salon. The reminders are super helpful too!"
                </p>
                <div className="profile">
                  <img src="https://salonist.me/front-images/makeup.jpg" />
                  <div className="pro_detail">
                    <strong>Alicia</strong>
                    <span>Toronto, Canada</span>
                  </div>
                </div>
              </div>
              <div className="review item">
                <div className="star">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                </div>
                <p>
                  "Salonist makes it easy to find and book appointments with the
                  best salons near me. The payment process is seamless, and I
                  love that everything is handled in one software!"
                </p>
                <div className="profile">
                  <img src="https://salonist.me/front-images/makeup.jpg" />
                  <div className="pro_detail">
                    <strong>James</strong>
                    <span>Sydney, Australia</span>
                  </div>
                </div>
              </div>
              <div className="review item">
                <div className="star">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                </div>
                <p>
                  "I've been using Salonist for all my beauty treatments. It is
                  so easy to navigate, and I always find the best salons with
                  great reviews. Highly recommend!"
                </p>
                <div className="profile">
                  <img src="https://salonist.me/front-images/makeup.jpg" />
                  <div className="pro_detail">
                    <strong>Sophie</strong>
                    <span>London, UK</span>
                  </div>
                </div>
              </div>
              <div className="review item">
                <div className="star">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                </div>
                <p>
                  "Since moving to a new city, Salonist has been my go-to for
                  finding top salons. I’ve discovered so many great places I
                  wouldn’t have known about otherwise!"
                </p>
                <div className="profile">
                  <img src="https://salonist.me/front-images/makeup.jpg" />
                  <div className="pro_detail">
                    <strong>Mia</strong>
                    <span>New York, USA</span>
                  </div>
                </div>
              </div>
              <div className="review item">
                <div className="star">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                </div>
                <p>
                  "Salonist offers the best booking experience. It’s so easy to
                  compare salons and read reviews. I love that I can manage all
                  my appointments in one place!"
                </p>
                <div className="profile">
                  <img src="https://salonist.me/front-images/makeup.jpg" />
                  <div className="pro_detail">
                    <strong>David</strong>
                    <span>Los Angeles, USA</span>
                  </div>
                </div>
              </div>
              <div className="review item">
                <div className="star">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                </div>
                <p>
                  "I love how I can book, reschedule, or cancel appointments on
                  the go with Salonist. It’s so convenient and saves my so much
                  time!"
                </p>
                <div className="profile">
                  <img src="https://salonist.me/front-images/makeup.jpg" />
                  <div className="pro_detail">
                    <strong>Lily</strong>
                    <span>Melbourne, Australia</span>
                  </div>
                </div>
              </div>
              <div className="review item">
                <div className="star">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                </div>
                <p>
                  "Salonist has made finding and booking appointments with
                  barbers so easier. It is sleek, user-friendly, and I’ve found
                  my favorite barber through it!"
                </p>
                <div className="profile">
                  <img src="https://salonist.me/front-images/makeup.jpg" />
                  <div className="pro_detail">
                    <strong>Mark</strong>
                    <span>Vancouver, Canada</span>
                  </div>
                </div>
              </div>
              <div className="review item">
                <div className="star">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                </div>
                <p>
                  "Salonist is my favorite platform for beauty appointments. The
                  process is smooth from start to finish, and the exclusive
                  offers are a great bonus!"
                </p>
                <div className="profile">
                  <img src="https://salonist.me/front-images/makeup.jpg" />
                  <div className="pro_detail">
                    <strong>Emily</strong>
                    <span>Dubai, UAE</span>
                  </div>
                </div>
              </div>
              <div className="review item">
                <div className="star">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                </div>
                <p>
                  "Salonist has completely streamlined my beauty routine.
                  Booking is super easy, and I love the convenience of being
                  able to do everything online without any hassle."
                </p>
                <div className="profile">
                  <img src="https://salonist.me/front-images/makeup.jpg" />
                  <div className="pro_detail">
                    <strong>Maria</strong>
                    <span>Mumbai, India</span>
                  </div>
                </div>
              </div>
              <div className="review item">
                <div className="star">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                </div>
                <p>
                  "It helped me discover some amazing barbershops in my area.
                  It’s the best platform I’ve used for finding and booking
                  grooming appointments"
                </p>
                <div className="profile">
                  <img src="https://salonist.me/front-images/makeup.jpg" />
                  <div className="pro_detail">
                    <strong>Alex</strong>
                    <span>New York, USA</span>
                  </div>
                </div>
              </div>
              <div className="review item">
                <div className="star">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                </div>
                <p>
                  "Since using Salonist, I've been able to explore new beauty
                  treatments I hadn't considered before. It makes it easy to
                  book and try out different services"
                </p>
                <div className="profile">
                  <img src="https://salonist.me/front-images/makeup.jpg" />
                  <div className="pro_detail">
                    <strong>Priya</strong>
                    <span>Delhi, India</span>
                  </div>
                </div>
              </div>
              <div className="review item">
                <div className="star">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                </div>
                <p>
                  "Salonist is a game-changer for last-minute appointments. I
                  can always find a spot even at the last minute, and the whole
                  booking process is so straightforward."
                </p>
                <div className="profile">
                  <img src="https://salonist.me/front-images/makeup.jpg" />
                  <div className="pro_detail">
                    <strong>John</strong>
                    <span>Chicago, USA</span>
                  </div>
                </div>
              </div>
              <div className="review item">
                <div className="star">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                </div>
                <p>
                  "With Salonist, I can book, pay, and even get reminders all in
                  one place. It’s made managing my beauty appointments so much
                  easier."
                </p>
                <div className="profile">
                  <img src="https://salonist.me/front-images/makeup.jpg" />
                  <div className="pro_detail">
                    <strong>Samantha</strong>
                    <span>Sydney, Australia</span>
                  </div>
                </div>
              </div>
              <div className="review item">
                <div className="star">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                </div>
                <p>
                  "I've tried many booking platforms, but Salonist is by far the
                  best. It’s easy to use, and I love the feature that lets me
                  compare salons and read reviews before booking."
                </p>
                <div className="profile">
                  <img src="https://salonist.me/front-images/makeup.jpg" />
                  <div className="pro_detail">
                    <strong>Jessica</strong>
                    <span>London, UK</span>
                  </div>
                </div>
              </div>
              <div className="review item">
                <div className="star">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                </div>
                <p>
                  "Salonist has never let me down. It’s reliable, user-friendly,
                  and I can always trust that I’ll find the best salons with
                  great reviews."
                </p>
                <div className="profile">
                  <img src="https://salonist.me/front-images/makeup.jpg" />
                  <div className="pro_detail">
                    <strong>Ravi</strong>
                    <span>Bangalore, India</span>
                  </div>
                </div>
              </div>
              <div className="review item">
                <div className="star">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                </div>
                <p>
                  "As a salon owner, Salonist has been a game-changer. My
                  clients love the easy online booking, and the free SMS
                  reminders are a big hit!"
                </p>
                <div className="profile">
                  <img src="https://salonist.me/front-images/makeup.jpg" />
                  <div className="pro_detail">
                    <strong>Ana</strong>
                    <span>Los Angeles, USA</span>
                  </div>
                </div>
              </div>
              <div className="review item">
                <div className="star">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                </div>
                <p>
                  "Moving to a new city was made so much easier with Salonist. I
                  found great salons quickly and booked appointments with ease."
                </p>
                <div className="profile">
                  <img src="https://salonist.me/front-images/makeup.jpg" />
                  <div className="pro_detail">
                    <strong>Christine</strong>
                    <span>Toronto, Canada</span>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToWork;
