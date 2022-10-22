import React from 'react'

function AboutUs() {
    return (
        <>
            <div>
                {/* --------------------Breadcrumb------------ */}
                <div className="breadcrumb-container">
                    <nav data-depth={2} className="breadcrumb container">
                        <h1 className="h1 category-title breadcrumb-title">About Us</h1>
                        <ul>
                            <li>
                                <a href="#">
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>About Us</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* -----------Cart page----------- */}
                <section id="wrapper">
                    <div className="container">
                        <div id="content-wrapper" className="col-xs-12">
                            <section id="main">
                                <div className="about-page">
                                    <div className="about-container">
                                        <h2 className="home-title">Story Block</h2>
                                        <div className="row">
                                            <div className="col-lg-6 col-sm-12">
                                                <div className="about-us">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                                        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                                                        erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                                                        tation ullamcorper suscipit lobortis nisl ut aliquip.
                                                    </p>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                                        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                                                        erat volutpat. Ut wisi enim ad minim veniam,
                                                    </p>
                                                    <p>
                                                        quis nostrud exercitation ullamcorper suscipit lobortis nisl ut aliquip.
                                                    </p>
                                                    <button className="btn btn-primary" name="continue" type="submit"> Shop Now
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-12">
                                                <a href="#"><img alt="about-img" src="assets/images/about-img.png" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-title">
                                        <h2 className="home-title">Something about us</h2>
                                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.
                                            Iterative to corporate strategy to the table win-win survival strategies to ensure
                                        </p>
                                    </div>
                                    <div className="about-services">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6 service">
                                                <img alt="icon-1" src="assets/images/icons/icon-1.png" />
                                                <h3>free resources</h3>
                                                <p>Bring to the table win-win survival strategies to ensure proactive
                                                    domination. At the end of the day, going forward</p>
                                            </div>
                                            <div className="col-lg-4 col-md-6 service">
                                                <img alt="icon-2" src="assets/images/icons/icon-2.png" />
                                                <h3>multi-purpose</h3>
                                                <p>Bring to the table win-win survival strategies to ensure proactive
                                                    domination. At the end of the day, going forward</p>
                                            </div>
                                            <div className="col-lg-4 col-md-12 service">
                                                <img alt="icon-3" src="assets/images/icons/icon-3.png" />
                                                <h3>fully responsive</h3>
                                                <p>Bring to the table win-win survival strategies to ensure proactive
                                                    domination. At the end of the day, going forward</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default AboutUs;