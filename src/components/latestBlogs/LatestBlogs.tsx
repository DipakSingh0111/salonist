import React, { useEffect, useState } from 'react'
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import Apis from '../utils/ApiConstant';

const LatestBlogs = () => {
  const [latestBlogs, setLastestBlog] = useState([]);
  // Slider List
  const SliderList = {
    backgroundRepeat: "no-repeat",
    display: "flex",
    backgroundSize: "26px",
    padding: "0 5px",
  };
      //   OwlCarousel
      const customPrevIcon = '<i class="fa fa-chevron-left"></i>';
      const customNextIcon = '<i class="fa fa-chevron-left"></i>';
        const options = {
          // items: 3,
          loop: true,
          autoplay: true,
          autoplaytimeout: 4000,
          animateOut: 'slideOutUp',
          nav: true,
          dost: "true",
          margin: 0,
          responsive: {
            1100: {
              items: 3
            }, 724: {
              items: 2
            }, 300: {
              items: 1,
              innerWidth: "100%",
                outerWidth: "100%"
            }
          }
        }

  // fetch api data


  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        const response = await axios.get("/home.json");
        setLastestBlog(response?.data?.latestBlog || []);
        // console.log('response ======================= >', response?.data?.latestBlog);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLatestBlogs();
  },[]);
  return (
    <div>
      <section className="recommended_sec section-gap blog_sec">
        <div className="container">
          <h2 className="titleh2" style={{ paddingLeft: "20px", marginTop: "12px", fontWeight: "bold" }}>Latest Blog’s</h2>
          {latestBlogs && latestBlogs.length &&(
            <div className="owl-carousel owl-theme work-list pt-2" style={SliderList}>
            <OwlCarousel className='owl-theme' {...options} navText={[customPrevIcon, customNextIcon]} nav>
              {latestBlogs.map((latestBlog:any, index) => {
                return(
                  <div className="col-12 item" key={index} style={{ height: "448px", ...SliderList }}>
                  <div className="detail">
                    <div className="circle-icon">
                      <img
                        src={latestBlog.image_url}
                        alt="hair salon"
                        style={{ maxWidth: "100%" }}
                        width={352}
                        height={235}
                      />
                    </div>
                    <div className="Content">
                      <p>{latestBlog.date}</p>
                      <h3 >{latestBlog.heading}</h3>
                      <a href="/" className="btn">
                        {latestBlog.anchor}
                      </a>
                    </div>
                  </div>
                </div>
                )
              })}
              </OwlCarousel>
          </div>
          )}
          
        </div>
      </section>
    </div>
  )
}

export default LatestBlogs