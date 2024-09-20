import React from "react";
import "../../App.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const ServicesOverview = ({
  categoryData,
}: {
  categoryData: Array<{
    id: string;
    image_url: string;
    label: string;
  }>;
}) => {
  // Slider List
  const SliderList = {
    backgroundRepeat: "no-repeat",
    display: "flex",
    height: "100%",
    backgroundSize: "26px",
    marginRight: "10px",
  };

  // OwlCarousel options
  const customPrevIcon = '<i class="fa fa-chevron-left"></i>';
  const customNextIcon = '<i class="fa fa-chevron-left"></i>';
  const options = {
    items: 7,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: "slideOutUp",
    nav: true,
    dots: true,
    margin: 0,
    responsive: {
      1100: {
        items: 7,
      },
      724: {
        items: 3,
      },
      500: {
        items: 2,
      },
      300: {
        items: 2,
        innerWidth: "100%",
        outerWidth: "100%",
      },
    },
    navText: [customPrevIcon, customNextIcon],
  };

  // List of Services Overview
  return (
    <div>
      <section className="section-gap Services_sec pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2
                className="titleh2 textmobi-center"
                style={{ fontWeight: "bold", paddingLeft: "22px" }}
              >
                Services Overview
              </h2>
              {categoryData && !!categoryData.length && (
                <ul
                  className="work-list text-center owl-carousel owl-theme"
                  id="owl-carousel-8"
                  style={SliderList}
                >
                  <OwlCarousel
                    className="owl-theme"
                    {...options}
                    navText={[customPrevIcon, customNextIcon]}
                    nav
                  >
                    {categoryData.map((user: any, index: any) => {
                      return (
                        <Link to={`/category/${user.id}`} key={index}>
                          <li
                            className="item"
                            style={{
                              display: "table-cell",
                              padding: "20px",
                              height: "180px",
                              width: "156px",
                              borderRadius: "8px",
                              cursor: "pointer",
                            }}
                          >
                            <div className="work-box">
                              <img src={user.image_url} alt={user.label} />
                            </div>
                            <p>{user.label}</p>
                          </li>
                        </Link>
                      );
                    })}
                  </OwlCarousel>
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesOverview;
