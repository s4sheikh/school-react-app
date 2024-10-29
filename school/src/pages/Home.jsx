import React from 'react'

function Home() {
  return (
    <div>
      {/*header */}
      <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark stroke">
            <h1>
              <a className="navbar-brand" href="index.html">
                <span className="fa fa-diamond"></span>Study Course 
                <span className="logo">Journey to success</span>
                </a>
            </h1>

            {/* if logo is image enable this   
                <a className="navbar-brand" href="#index.html">
                  <img src="image-path" alt="Your logo" title="Your logo" style={"height:35px;"} />
                </a>  
              */}
            <button className="navbar-toggler  collapsed bg-gradient" 
                    type="button" 
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02" 
                    aria-controls="navbarTogglerDemo02" 
                    aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
              <span className="navbar-toggler-icon fa icon-close fa-times"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mx-lg-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item @@about__active">
                  <a className="nav-link" href="about.html">About</a>
                </li>
                <li className="nav-item @@courses__active">
                  <a className="nav-link" href="courses.html">Courses</a>
                </li>
                <li className="nav-item @@contact__active">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>

              {/*/search-right */}
              <div className="search-right">
                <a href="#search" title="search"><span className="fa fa-search" aria-hidden="true"></span></a>
                {/* search popup  */}
                <div id="search" className="pop-overlay">
                  <div className="popup">

                    <form action="error.html" method="GET" className="search-box">
                      <input type="search" placeholder="Search" name="search" required="required" autofocus=""/>
                      <button type="submit" className="btn"><span className="fa fa-search" aria-hidden="true"></span></button>
                    </form>

                  </div>
                  <a className="close" href="#close">×</a>
                </div>
                {/* /search popup  */}
              </div>
              <div className="top-quote mr-lg-2 text-center">
                <a href="#login" className="btn login mr-2"><span className="fa fa-user"></span> login</a>
              </div>
            </div>
            {/* toggle switch for light and dark theme  */}
            <div className="mobile-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch" for="checkbox">
                    <input type="checkbox" id="checkbox"/>
                    <div className="mode-container py-1">
                      <i className="gg-sun"></i>
                      <i className="gg-moon"></i>
                    </div>
                  </label>
                </div>
              </nav>
            </div>
            {/* //toggle switch for light and dark theme  */}
          </nav>
        </div>
      </header>
      {/*/header */}
      {/* header */}

      {/* main-slider  */}
<section className="w3l-main-slider" id="home">
    <div className="companies20-content">
        <div className="owl-one owl-carousel owl-theme">
            <div className="item">
                <li>
                    <div className="slider-info banner-view bg bg2">
                        <div className="banner-info">
                            <div className="container">
                                <div className="banner-info-bg">
                                    <h5>50% Discount on all Popular Courses</h5>
                                    <p className="mt-4 pr-lg-4">Take the first step to your journey to success with us</p>
                                    <a className={"btn btn-style btn-primary mt-sm-5 mt-4 mr-2"} href="about.html"> Ready to
                                        get started?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </div>
            <div className="item">
                <li>
                    <div className="slider-info  banner-view banner-top1 bg bg2">
                        <div className="banner-info">
                            <div className="container">
                                <div className="banner-info-bg">
                                    <h5>Learn and Improve Yourself in Less Time </h5>
                                    <p className="mt-4 pr-lg-4">Our self improvement courses is very effective </p>
                                    <a className={"btn btn-style btn-primary mt-sm-5 mt-4 mr-2"} href="about.html"> Ready to
                                        get started?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </div>
            <div className="item">
                <li>
                    <div className="slider-info banner-view banner-top2 bg bg2">
                        <div className="banner-info">
                            <div className="container">
                                <div className="banner-info-bg">
                                    <h5>Be More Productive to Be More Successful</h5>
                                    <p className={"mt-4 pr-lg-4"}>Don't waste your time, check out our productive courses</p>
                                    <a className={"btn btn-style btn-primary mt-sm-5 mt-4 mr-2"} href="about.html"> Ready to
                                        get started?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </div>
            <div className="item">
                <li>
                    <div className="slider-info banner-view banner-top3 bg bg2">
                        <div className="banner-info">
                            <div className="container">
                                <div className="banner-info-bg">
                                    <h5>Enhance your skills with best online courses</h5>
                                    <p className="mt-4 pr-lg-4">Take the first step to your journey to success with us</p>
                                    <a className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="about.html"> Ready to
                                        get started?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </div>
        </div>
    </div>

    <div className="waveWrapper waveAnimation">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={"stroke: none;"}></path>
        </svg>
    </div>
</section>
{/* /main-slider  */}
          </div>
  )
}

export default Home