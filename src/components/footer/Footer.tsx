import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="footer_main">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 col-12">
                            <div className="relations">
                                <h4 >Download Apps</h4>
                                <ul className="app-icon toggle-body" style={{ display: "block" }}>
                                    <li>
                                        <a href="https://play.google.com/store/apps/details?id=com.salonist&hl=en_IN ">
                                            <img
                                                src="/images/google-play.png"
                                                alt="Google Play"
                                                width={199}
                                                height={59}
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://itunes.apple.com/app/apple-store/id1491659292?mt=8">
                                            <img
                                                src="/images/ios-play.png"
                                                alt="IOS App"
                                                width={199}
                                                height={59}
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3 col-12 custom-width">
                            <div className="relations">
                                <h4>Company</h4>
                                <ul className="toggle-body">
                                    <li>
                                        <a href="#">About us</a>
                                    </li>
                                    <li>
                                        <a href="#">Features</a>
                                    </li>
                                    <li>
                                        <a href="#">Solutions</a>
                                    </li>
                                    <li>
                                        <a href="#">Pricing</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3 col-12 custom-width  ">
                            <div className="relations">
                                <h4>Our Policies</h4>
                                <ul className="toggle-body">
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#">Refund Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3 col-12 custom-width  ">
                            <div className="relations numbers">
                                <h4>For business</h4>
                                <ul className="toggle-body">
                                    <li>
                                        <a href="#">
                                            For partners
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Support
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3 col-12 last-column">
                            <div className="relations">
                                <h4>Find us on Social </h4>
                                <div className="footer-socia clearfix ">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/salonistio" target="_blank">
                                                <i className="fa fa-facebook" aria-hidden="true" />
                                                Facebbok
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/GoSalonist" target="_blank">
                                                <i className="fa fa-twitters" aria-hidden="true">
                                                    <svg
                                                        width={20}
                                                        height={20}
                                                        viewBox="0 0 24 24"
                                                        aria-label="X"
                                                        role="img"
                                                        className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-16y2uox r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                                                    >
                                                        <g>
                                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                                        </g>
                                                    </svg>
                                                </i>
                                                Twitter
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.instagram.com/salonistio/"
                                                target="_blank"
                                            >
                                                <i className="fa fa-instagram" aria-hidden="true" />
                                                Instagram
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.linkedin.com/company/salonist/"
                                                target="_blank"
                                            >
                                                <i className="fa fa-linkedin" aria-hidden="true" />
                                                LinkedIn
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="bottom_footer">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <img src="/images/logo.svg" />
                            </div>
                            <div className="col-md-6 col-12 text-right">
                                <p>Copyright © 2024 salonist.io | All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer