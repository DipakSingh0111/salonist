import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import { APIS } from "../../api/ApiConstant";
import { Link } from "react-router-dom";
import { network } from "../../api/axiosConfig";

const RelatedService = ({
  domainName,
  categories,
}: {
  domainName: String;
  categories: String;
}) => {
  const [relatedServices, setRelatedServices] = useState([]);

  // OwlCarousel
  const customPrevIcon = '<i class="fa fa-chevron-left"></i>';
  const customNextIcon = '<i class="fa fa-chevron-left"></i>';
  const RecommendedProps = {
    loop: true,
    autoplay: true,
    margin: 15,
    autoplaytimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      680: {
        items: 2,
      },
      1000: {
        items: 4,
        //innerWidth: "100%",
        //outerWidth: "100%",
      },
    },
  };

  //
  // const domainName = useParams();

  const relatedService = async () => {
    try {
      const response = await network.post(APIS.getRelatedSalons, {
        category: categories,
        currentDomain: domainName,
      });
      console.log("get related salons", response?.data?.domains);
      setRelatedServices(response?.data?.domains);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    relatedService();
  }, [categories, domainName]);

  const classes = ["", "bg-yellow", "bg-blue", "bg-dryellow"];
  return (
    <div>
      <section className="recommended_sec section-gap pb-0 related_ser">
        <div className="container_">
          <h2 className="titleh2 textmobi-center">Related Services</h2>

          <div className="owl-carousel owl-theme work-list">
            {relatedServices && !!relatedServices.length && (
              <OwlCarousel
                className="owl-theme"
                {...RecommendedProps}
                navText={[customPrevIcon, customNextIcon]}
                nav
              >
                {(relatedServices || []).map((service: any, index: any) => {
                  return (
                    <div className="col-12 item" key={index}>
                      <div className="detail">
                        <Link to={`/salons/${service?.domainName}`}>
                          <div className="circle-icon">
                            <img
                              src={service.image_url}
                              onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src =
                                  "/images/placeholder/store.jpg";
                              }}
                              alt="hair salon"
                              style={{ maxWidth: "100%" }}
                              width="352px"
                              height="235px"
                            />
                          </div>
                          <div className="Content">
                            <span
                              className="sub_head"
                              style={{
                                backgroundColor: service.category_color,
                              }}
                            >
                              {service.categories}
                            </span>
                            <h3 className="">{service.name}</h3>
                            <span className="rating">{service.rating}</span>
                            <p>{service.address}</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </OwlCarousel>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RelatedService;
