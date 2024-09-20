import React from 'react'

const SalonistApp = () => {
    return (
        <div>
            <section className="pb-0 mt-8">
                <div className="container">
                    <div className="download_app">
                        <div className="row">
                            <div className="col-md-6 col-12 section-gap">
                                <div >
                                    <h2 className="h2">Download the Salonist App</h2>
                                    <p>
                                        The Salonist app is the Quickest, Easiest way to book and keep
                                        track of your appointments.
                                    </p>
                                    <em>Scan the QR Code to get the app now</em>
                                    <img src="images/scan.svg" alt="" />
                                    <ul className="app-icon">
                                        <li>
                                            <a href="https://play.google.com/store/apps/details?id=com.salonist&hl=en_IN ">
                                                <img
                                                    src="images/google-play.png"
                                                    alt="Google Play"
                                                    width={199}
                                                    height={59}
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://itunes.apple.com/app/apple-store/id1491659292?mt=8">
                                                <img
                                                    src="images/ios-play.png"
                                                    alt="IOS App"
                                                    width={199}
                                                    height={59}
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                    <img className="svgsalon" src="images/bg-salon.svg" alt=""  />
                                </div>
                            </div>
                            <div className="col-md-6 col-12 d-flex mobile_img">
                                <img src="images/mobile-hand.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SalonistApp