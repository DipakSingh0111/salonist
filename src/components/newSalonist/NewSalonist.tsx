import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

interface newSalonistType {
  address: string;
  categories: string;
  domainId: string;
  extra_name: string;
  image_url: string;
  logo: string;
  name: string;
  rating: string;
}

const NewSalonist = ({
  children,
  dataArray,
}: {
  children: string,
  dataArray: Array<newSalonistType>;
}) => {
  // Slider
  const SliderList = {
    backgroundRepeat: "no-repeat",
    display: "flex",
    height: "100%",
    backgroundSize: "26px",
    padding: "0 5px",
  };

  // OwlCarousel
  const customPrevIcon = '<i class="fa fa-chevron-left"></i>';
  const customNextIcon = '<i class="fa fa-chevron-left"></i>';
  const RecommendedProps = {
    loop: true,
    autoplay: true,
    autoplaytimeout: 4000,
    responsive: {
      1100: {
        items: 4,
      },
      724: {
        items: 3,
      },
      300: {
        items: 1,
        innerWidth: "100%",
        outerWidth: "100%",
      },
    },
  };

  return (
    <div>
      <section className="recommended_sec section-gap">
        <div className="container">
          <h2
            className="titleh2 textmobi-center"
            style={{ paddingLeft: "20px", fontWeight: "bold" }}
          >
            {children}
          </h2>

          {dataArray && !!dataArray.length && (
            <div
              className="owl-carousel owl-theme work-list"
              style={SliderList}
            >
              <OwlCarousel
                className="owl-theme"
                {...RecommendedProps}
                navText={[customPrevIcon, customNextIcon]}
                nav
              >
                {dataArray.map((data: any, index) => {
                  return (
                    <div className="col-12 item" key={index} style={SliderList}>
                      <div className="detail">
                        <Link to={`/salons/${data.domainName}`}>
                          <div className="circle-icon">
                            <img
                              src={data.image_url}
                              onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = "/images/placeholder/store.jpg";
                              }}
                              alt={data.categories}
                              style={{ maxWidth: "100%" }}
                              width={352}
                              height={245}
                            />
                          </div>
                          <div className="Content">
                            {/* <span className={activeClass}>{data.categories}</span> */}
                            {data.categories && (
                              <span className="sub_head" style={{backgroundColor: data.category_color}} >
                                {data.categories}
                              </span>
                            )}
                            <h3>{data.name}</h3>
                            {/* <span className="rating">{data.rating}</span> */}
                            {data.address.length > 55
                              ? `${data.address.substring(0, 55)}...`
                              : data.address}
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </OwlCarousel>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewSalonist;
