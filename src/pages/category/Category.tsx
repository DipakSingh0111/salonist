import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import {APIS} from "../../api/ApiConstant";
import { network } from "../../api/axiosConfig";




const Category = () => {
  
  const [category, setCategory] = useState([]);
  // navigate 
  const navigate = useNavigate();  

  const {categoryId}:any = useParams();

  const [isApiLoading, setIsApiLoading] = useState(false);

  const [categorySalonData, setCategorySalonData] = useState({
    domains: [],
    subCategories: [],
    totalRecords: 0,
    categoryName:""
    
  });

  


  //   OwlCarousel
  const customPrevIcon = '<i class="fa fa-chevron-left"></i>';
  const customNextIcon = '<i class="fa fa-chevron-left"></i>';
  const RecommendedProps = {
    items: 4,
    margin: 10,
    autoWidth: true,
    loop: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 8,
      },
    },
  };

  const getCategoryListing = async (categoryId:string) => {
    try {
      setIsApiLoading(true);
      const response = await network.post(APIS.getListing,{"category":categoryId});
      
      setCategorySalonData(response?.data);
      setCategory(response?.data?.subCategories);
    } catch (error) {
      console.error(error);
    }finally{
      setIsApiLoading(false);
    }
  };

  useEffect(() => {
    getCategoryListing(categoryId).then(rec=>{

    }).catch(err=>{
      console.error(err.message);
    });
  }, [categoryId]);

  return (
    <>
       {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  */}
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
                // onClick="myFunction()"
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
                  <Link to="/" className="btn">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section className="home-banner-main small d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="banner-content mt-4">
            <form action="">
              <label>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8896 15.1295L11.7586 11.0646C12.8404 9.8893 13.5051 8.33495 13.5051 6.62455C13.5045 2.96568 10.4908 0 6.77296 0C3.05508 0 0.0413818 2.96568 0.0413818 6.62455C0.0413818 10.2834 3.05508 13.2491 6.77296 13.2491C8.37934 13.2491 9.85267 12.6935 11.01 11.7697L15.1569 15.8507C15.359 16.0498 15.687 16.0498 15.8891 15.8507C16.0916 15.6517 16.0916 15.3286 15.8896 15.1295ZM6.77296 12.2299C3.62723 12.2299 1.07713 9.72029 1.07713 6.62455C1.07713 3.52881 3.62723 1.01923 6.77296 1.01923C9.91871 1.01923 12.4688 3.52881 12.4688 6.62455C12.4688 9.72029 9.91871 12.2299 6.77296 12.2299Z"
                    fill="#15023A"
                  />
                </svg>
                <input
                  type="text"
                  name="Treatment or Venue"
                  defaultValue=""
                  placeholder="Treatment or Venue"
                />
              </label>
              <label>
                <svg
                  width={17}
                  height={16}
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3035 1.98207C12.0254 0.703908 10.326 0 8.51842 0C6.71086 0 5.01141 0.703908 3.73329 1.98207C2.45513 3.26026 1.75122 4.95963 1.75122 6.76717C1.75122 10.4238 5.20867 13.4652 7.06614 15.0992C7.32426 15.3262 7.54717 15.5223 7.72476 15.6882C7.94726 15.896 8.23286 16 8.51839 16C8.80398 16 9.08952 15.896 9.31205 15.6882C9.48964 15.5223 9.71255 15.3262 9.97067 15.0992C11.8281 13.4652 15.2856 10.4238 15.2856 6.76717C15.2856 4.95963 14.5817 3.26026 13.3035 1.98207ZM9.35161 14.3955C9.08783 14.6275 8.86005 14.8279 8.67223 15.0033C8.58595 15.0838 8.45083 15.0839 8.36452 15.0033C8.17673 14.8278 7.94892 14.6275 7.68514 14.3954C5.93889 12.8593 2.68841 9.99999 2.68841 6.7672C2.68841 3.55257 5.3037 0.937283 8.51836 0.937283C11.733 0.937283 14.3483 3.55257 14.3483 6.7672C14.3483 9.99999 11.0979 12.8593 9.35161 14.3955Z"
                    fill="#15023A"
                  />
                  <path
                    d="M8.51848 3.52936C6.87407 3.52936 5.53625 4.86714 5.53625 6.51155C5.53625 8.15596 6.87407 9.49374 8.51848 9.49374C10.1629 9.49374 11.5007 8.15596 11.5007 6.51155C11.5007 4.86714 10.1629 3.52936 8.51848 3.52936ZM8.51848 8.55646C7.39088 8.55646 6.47351 7.63908 6.47351 6.51152C6.47351 5.38396 7.39088 4.46658 8.51848 4.46658C9.64608 4.46658 10.5634 5.38396 10.5634 6.51152C10.5634 7.63908 9.64608 8.55646 8.51848 8.55646Z"
                    fill="#15023A"
                  />
                </svg>
                <input
                  type="text"
                  name="Current location"
                  defaultValue=""
                  placeholder="Current location"
                />
              </label>
              <label>
                <svg
                  width={17}
                  height={16}
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.3291 3.83331C6.05577 3.83331 5.8291 3.60665 5.8291 3.33331V1.33331C5.8291 1.05998 6.05577 0.833313 6.3291 0.833313C6.60243 0.833313 6.8291 1.05998 6.8291 1.33331V3.33331C6.8291 3.60665 6.60243 3.83331 6.3291 3.83331Z"
                    fill="#15023A"
                  />
                  <path
                    d="M11.6624 3.83331C11.389 3.83331 11.1624 3.60665 11.1624 3.33331V1.33331C11.1624 1.05998 11.389 0.833313 11.6624 0.833313C11.9357 0.833313 12.1624 1.05998 12.1624 1.33331V3.33331C12.1624 3.60665 11.9357 3.83331 11.6624 3.83331Z"
                    fill="#15023A"
                  />
                  <path
                    d="M6.66239 9.66673C6.57573 9.66673 6.48906 9.64673 6.40906 9.61339C6.32239 9.58006 6.25573 9.53339 6.18906 9.47339C6.06906 9.34673 5.99573 9.18006 5.99573 9.00006C5.99573 8.91339 6.01573 8.82673 6.04906 8.74673C6.08239 8.66673 6.12906 8.59339 6.18906 8.52673C6.25573 8.46673 6.32239 8.42006 6.40906 8.38673C6.64906 8.28673 6.94906 8.34006 7.13573 8.52673C7.25573 8.65339 7.32906 8.82673 7.32906 9.00006C7.32906 9.04006 7.32239 9.08673 7.31573 9.13339C7.30906 9.17339 7.29573 9.21339 7.27573 9.25339C7.26239 9.29339 7.24239 9.33339 7.21573 9.37339C7.19573 9.40673 7.16239 9.44006 7.13573 9.47339C7.00906 9.59339 6.83573 9.66673 6.66239 9.66673Z"
                    fill="#15023A"
                  />
                  <path
                    d="M8.99577 9.66658C8.9091 9.66658 8.82243 9.64658 8.74243 9.61324C8.65577 9.57991 8.5891 9.53324 8.52243 9.47324C8.40243 9.34658 8.3291 9.17991 8.3291 8.99991C8.3291 8.91324 8.3491 8.82658 8.38243 8.74658C8.41577 8.66658 8.46243 8.59324 8.52243 8.52658C8.5891 8.46658 8.65577 8.41991 8.74243 8.38658C8.98243 8.27991 9.28243 8.33991 9.4691 8.52658C9.5891 8.65324 9.66243 8.82658 9.66243 8.99991C9.66243 9.03991 9.65577 9.08658 9.6491 9.13324C9.64243 9.17324 9.6291 9.21324 9.6091 9.25324C9.59577 9.29324 9.57577 9.33324 9.5491 9.37324C9.5291 9.40658 9.49577 9.43991 9.4691 9.47324C9.34244 9.59324 9.1691 9.66658 8.99577 9.66658Z"
                    fill="#15023A"
                  />
                  <path
                    d="M11.329 9.66658C11.2424 9.66658 11.1557 9.64658 11.0757 9.61324C10.989 9.57991 10.9224 9.53324 10.8557 9.47324C10.829 9.43991 10.8024 9.40658 10.7757 9.37324C10.749 9.33324 10.729 9.29324 10.7157 9.25324C10.6957 9.21324 10.6824 9.17324 10.6757 9.13324C10.669 9.08658 10.6624 9.03991 10.6624 8.99991C10.6624 8.82658 10.7357 8.65324 10.8557 8.52658C10.9224 8.46658 10.989 8.41991 11.0757 8.38658C11.3224 8.27991 11.6157 8.33991 11.8024 8.52658C11.9224 8.65324 11.9957 8.82658 11.9957 8.99991C11.9957 9.03991 11.989 9.08658 11.9824 9.13324C11.9757 9.17324 11.9624 9.21324 11.9424 9.25324C11.929 9.29324 11.909 9.33324 11.8824 9.37324C11.8624 9.40658 11.829 9.43991 11.8024 9.47324C11.6757 9.59324 11.5024 9.66658 11.329 9.66658Z"
                    fill="#15023A"
                  />
                  <path
                    d="M6.66239 11.9999C6.57573 11.9999 6.48906 11.98 6.40906 11.9467C6.32906 11.9133 6.25573 11.8666 6.18906 11.8066C6.06906 11.6799 5.99573 11.5066 5.99573 11.3333C5.99573 11.2466 6.01573 11.1599 6.04906 11.0799C6.08239 10.9933 6.12906 10.92 6.18906 10.86C6.43573 10.6133 6.88906 10.6133 7.13573 10.86C7.25573 10.9867 7.32906 11.1599 7.32906 11.3333C7.32906 11.5066 7.25573 11.6799 7.13573 11.8066C7.00906 11.9266 6.83573 11.9999 6.66239 11.9999Z"
                    fill="#15023A"
                  />
                  <path
                    d="M8.99577 11.9999C8.82243 11.9999 8.6491 11.9266 8.52243 11.8066C8.40243 11.6799 8.3291 11.5066 8.3291 11.3333C8.3291 11.2466 8.3491 11.1599 8.38243 11.0799C8.41577 10.9933 8.46243 10.92 8.52243 10.86C8.7691 10.6133 9.22243 10.6133 9.4691 10.86C9.5291 10.92 9.57577 10.9933 9.6091 11.0799C9.64243 11.1599 9.66243 11.2466 9.66243 11.3333C9.66243 11.5066 9.5891 11.6799 9.4691 11.8066C9.34244 11.9266 9.1691 11.9999 8.99577 11.9999Z"
                    fill="#15023A"
                  />
                  <path
                    d="M11.329 11.9999C11.1557 11.9999 10.9824 11.9266 10.8557 11.8066C10.7957 11.7466 10.749 11.6733 10.7157 11.5866C10.6824 11.5066 10.6624 11.4199 10.6624 11.3333C10.6624 11.2466 10.6824 11.1599 10.7157 11.0799C10.749 10.9933 10.7957 10.9199 10.8557 10.8599C11.009 10.7066 11.2424 10.6333 11.4557 10.6799C11.5024 10.6866 11.5424 10.6999 11.5824 10.7199C11.6224 10.7333 11.6624 10.7533 11.7024 10.7799C11.7357 10.7999 11.769 10.8333 11.8024 10.8599C11.9224 10.9866 11.9957 11.1599 11.9957 11.3333C11.9957 11.5066 11.9224 11.6799 11.8024 11.8066C11.6757 11.9266 11.5024 11.9999 11.329 11.9999Z"
                    fill="#15023A"
                  />
                  <path
                    d="M14.6624 6.55988H3.3291C3.05577 6.55988 2.8291 6.33321 2.8291 6.05988C2.8291 5.78654 3.05577 5.55988 3.3291 5.55988H14.6624C14.9358 5.55988 15.1624 5.78654 15.1624 6.05988C15.1624 6.33321 14.9358 6.55988 14.6624 6.55988Z"
                    fill="#15023A"
                  />
                  <path
                    d="M11.6624 15.1666H6.32906C3.89573 15.1666 2.49573 13.7666 2.49573 11.3333V5.66665C2.49573 3.23331 3.89573 1.83331 6.32906 1.83331H11.6624C14.0957 1.83331 15.4957 3.23331 15.4957 5.66665V11.3333C15.4957 13.7666 14.0957 15.1666 11.6624 15.1666ZM6.32906 2.83331C4.42239 2.83331 3.49573 3.75998 3.49573 5.66665V11.3333C3.49573 13.24 4.42239 14.1666 6.32906 14.1666H11.6624C13.5691 14.1666 14.4957 13.24 14.4957 11.3333V5.66665C14.4957 3.75998 13.5691 2.83331 11.6624 2.83331H6.32906Z"
                    fill="#15023A"
                  />
                </svg>
                <input type="date" name="Any Date" defaultValue="Any Date" />
              </label>
              <label>
                <svg
                  width={17}
                  height={16}
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_101_135)">
                    <path
                      d="M8.33508 16C12.7457 16 16.3351 12.4107 16.3351 8C16.3351 3.58934 12.7458 0 8.33508 0C3.92438 0 0.335083 3.58934 0.335083 8C0.335083 12.4107 3.92442 16 8.33508 16ZM8.33508 1.06665C12.1591 1.06665 15.2684 4.17597 15.2684 8C15.2684 11.824 12.1591 14.9334 8.33508 14.9334C4.51105 14.9334 1.40173 11.824 1.40173 8C1.40173 4.17597 4.5111 1.06665 8.33508 1.06665Z"
                      fill="#15023A"
                    />
                    <path
                      d="M10.6684 10.5493C10.7671 10.6293 10.8844 10.6667 11.0017 10.6667C11.1591 10.6667 11.3137 10.5974 11.4177 10.4667C11.6017 10.2373 11.5644 9.90135 11.3351 9.71734L8.86841 7.744V3.73334C8.86841 3.44 8.62842 3.20001 8.33508 3.20001C8.04174 3.20001 7.80176 3.44 7.80176 3.73334V8.00002C7.80176 8.1627 7.87644 8.31469 8.00175 8.416L10.6684 10.5493Z"
                      fill="#15023A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_101_135">
                      <rect
                        width={16}
                        height={16}
                        fill="white"
                        transform="translate(0.335083)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <input type="time" name="Time" />
              </label>
              <input type="submit" defaultValue="Search" />
            </form>
          </div>
        </div>
      </section>

   {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<  */}


      <section className="section-gap Services_sec pb-0">
        <div className="container">
          <h1 className="">Best {categorySalonData?.categoryName} Near Me in Brisbane</h1>
          <p>
            Choose from {categorySalonData.totalRecords} venues offering {categorySalonData?.categoryName} near you in
            Brisbane
          </p>
          <div className="row">
            <div className="col-12">
              <ul
                className="text-center owl-carousel owl-theme categories"
                id="owl-carousel-8"
              >
                {category && !!category.length && (
                  <ul>
                    <OwlCarousel
                      className="owl-theme"
                      {...RecommendedProps}
                      navText={[customNextIcon, customPrevIcon]}
                      nav
                    >
                      {category.map((item:any, index:any) => {
                        return (
                          <>
                            <li className="item" key={index}>
                              <a onClick={(event:any)=>{
                                event.preventDefault();
                                console.log(item.id);
                                navigate(`/category/${item.id}`);

                              }}>{item.label}</a>
                            </li>
                          </>
                        );
                      })}
                    </OwlCarousel>
                  </ul>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="recommended_sec section-gap pb-0">
        <div className="container">
          
          <div className="work-list row gap-15 grid are-images-unloaded">
            <div className="grid__col-sizer" />
            <div className="grid__gutter-sizer" />
 
 {
    isApiLoading ? <div className="loader"><span></span></div> : 
    
categorySalonData?.domains.map((salonData:any, index:any) => {
                      return (
                        <div key={index} className="col-md-4 col-xs-12 item grid__item">
                          <div className="detail">
                            <Link to={`/salons/${salonData.domainName}`}>
                              <div className="circle-icon card-image">
                                 <img 
                                   onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src = "/images/placeholder/store.jpg";
                                  }}
                                 src={salonData.image_url} alt={salonData.label}  style={{ maxWidth: "100%" }} width={352} height={235} />
                              </div>
                              <div className="Content">
                                <span className="sub_head bg-yellow">{salonData.categories}</span>
                                <h3 className="">{salonData.name}</h3>
                                <span className="rating">{salonData.rating} ({salonData.reviewCount})</span>
                                <p>{salonData.address}</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      );
                    })

    

 }

 
 
          </div>
          <div className="page-load-status">
            <div className="loader-ellips infinite-scroll-request">
              <span className="loader-ellips__dot" />
              <span className="loader-ellips__dot" />
              <span className="loader-ellips__dot" />
              <span className="loader-ellips__dot" />
            </div>
            <p className="infinite-scroll-last">End of content</p>
            <p className="infinite-scroll-error">No more pages to load</p>
          </div>
        </div>
      </section>
      {/* <section className="recommended_sec section-gap">
        <div className="container">
          <h2 className="titleh2 textmobi-center">New to Salonist</h2>
          <div className="owl-carousel owl-theme work-list">
            <OwlCarousel
              className="owl-theme"
              {...RecommendedProps}
              navText={[customNextIcon, customPrevIcon]}
              nav
            >
              <div className="col-12 item">
                <div className="detail">
                  <a href="Listingdetial.html">
                    <div className="circle-icon">
                      <img
                        src="https://salonist.me/front-images/salon1.jpg"
                        alt="hair salon"
                        style={{ maxWidth: "100%" }}
                        width={352}
                        height={235}
                      />
                    </div>
                    <div className="Content">
                      <span className="sub_head">Hair Salon</span>
                      <h3 className="">Alanta Hair &amp; Beauty</h3>
                      <span className="rating">5.0 (1,245)</span>
                      <p>36 Store St, London</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-12 item">
                <div className="detail">
                  <a href="Listingdetial.html">
                    <div className="circle-icon">
                      <img
                        src="https://salonist.me/front-images/beauty-shop.jpg"
                        alt="hair salon"
                        style={{ maxWidth: "100%" }}
                        width={352}
                        height={235}
                      />
                    </div>
                    <div className="Content">
                      <span className="sub_head bg-yellow">Hair Salon</span>
                      <h3 className="">Alanta Hair &amp; Beauty</h3>
                      <span className="rating">5.0 (1,245)</span>
                      <p>36 Store St, London</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-12 item">
                <div className="detail">
                  <a href="Listingdetial.html">
                    <div className="circle-icon">
                      <img
                        src="https://salonist.me/front-images/makeup.jpg"
                        alt="hair salon"
                        style={{ maxWidth: "100%" }}
                        width={352}
                        height={235}
                      />
                    </div>
                    <div className="Content">
                      <span className="sub_head bg-blue">Hair Salon</span>
                      <h3 className="">Alanta Hair &amp; Beauty</h3>
                      <span className="rating">5.0 (1,245)</span>
                      <p>36 Store St, London</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-12 item">
                <div className="detail">
                  <a href="Listingdetial.html">
                    <div className="circle-icon">
                      <img
                        src="https://salonist.me/front-images/massage1.jpg"
                        alt="hair salon"
                        style={{ maxWidth: "100%" }}
                        width={352}
                        height={235}
                      />
                    </div>
                    <div className="Content">
                      <span className="sub_head bg-dryellow">Hair Salon</span>
                      <h3 className="">Alanta Hair &amp; Beauty</h3>
                      <span className="rating">5.0 (1,245)</span>
                      <p>36 Store St, London</p>
                    </div>
                  </a>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="recommended_sec section-gap blog_sec">
        <div className="container">
          <h2 className="titleh2">Latest Blog’s</h2>
          <div className="owl-carousel owl-theme work-list pt-2">
            <OwlCarousel
              className="owl-theme"
              {...RecommendedProps}
              navText={[customNextIcon, customPrevIcon]}
              nav
            >
              <div className="col-12 item">
                <div className="detail">
                  <div className="circle-icon">
                    <img
                      src="https://salonist.me/front-images/salon1.jpg"
                      alt="hair salon"
                      style={{ maxWidth: "100%" }}
                      width={352}
                      height={235}
                    />
                  </div>
                  <div className="Content">
                    <p>10 Oct 2023</p>
                    <h3 className="">Most popular hair trends for male</h3>
                    <Link to="/" className="btn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 item">
                <div className="detail">
                  <div className="circle-icon">
                    <img
                      src="https://salonist.me/front-images/bridal.jpg"
                      alt="hair salon"
                      style={{ maxWidth: "100%" }}
                      width={352}
                      height={235}
                    />
                  </div>
                  <div className="Content">
                    <p>10 Oct 2023</p>
                    <h3 className="">Most popular hair trends for male</h3>
                    <Link to="/" className="btn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 item">
                <div className="detail">
                  <div className="circle-icon">
                    <img
                      src="https://salonist.me/front-images/nail.jpg"
                      alt="hair salon"
                      style={{ maxWidth: "100%" }}
                      width={352}
                      height={235}
                    />
                  </div>
                  <div className="Content">
                    <p>10 Oct 2023</p>
                    <h3 className="">Most popular hair trends for male</h3>
                    <Link to="/" className="btn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Category;
