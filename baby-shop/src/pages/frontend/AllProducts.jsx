import React from 'react'



function AllProducts() {
    return (
        <>
            <div>
                {/* --------------------Breadcrumb------------ */}
                <div className="breadcrumb-container">
                    <nav data-depth={2} className="breadcrumb container">
                        <h1 className="h1 category-title breadcrumb-title">Category</h1>
                        <ul>
                            <li>
                                <a href="#">
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Women</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* -----------Category page------------- */}
                <section id="wrapper">
                    <div className="container">
                        <div className="row">
                            {/* ------------------Left-column------------------ */}
                            <div id="_desktop_left_column" className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
                                <div id="left-column">
                                    <div className="category-block-container">
                                        <div className="block-title clearfix hidden-lg-up collapsed" data-target="#subcategories-container" data-toggle="collapse">
                                            <span className="h1 products-section-title text-uppercase">
                                                <a className="text-uppercase h6" href="#">Women</a>
                                            </span>
                                            <span className="navbar-toggler collapse-icons">
                                                <i className="material-icons add"></i>
                                                <i className="material-icons remove"></i>
                                            </span>
                                        </div>
                                        <h3 className="hidden-md-down">
                                            <a className="block-title text-uppercase h6" href="#">Women</a>
                                        </h3>
                                        <div id="subcategories-container" className="block-categories collapse data-toggler">
                                            <ul className="category-top-menu">
                                                <li>
                                                    <ul className="category-sub-menu">
                                                        <li data-depth={0}>
                                                            <a href="#">Tops</a>
                                                            <div className="navbar-toggler collapse-icons" data-toggle="collapse" data-target="#exCollapsingNavbar4">
                                                                <i className="material-icons add"></i>
                                                                <i className="material-icons remove"></i>
                                                            </div>
                                                            <div className="collapse" id="exCollapsingNavbar4">
                                                                <ul className="category-sub-menu">
                                                                    <li data-depth={1}>
                                                                        <a className="category-sub-link" href="#">T-shirts</a>
                                                                    </li>
                                                                    <li data-depth={1}>
                                                                        <a className="category-sub-link" href="#">Blouses</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li data-depth={0}>
                                                            <a href="#">Dresses</a>
                                                            <div className="navbar-toggler collapse-icons" data-toggle="collapse" data-target="#exCollapsingNavbar8">
                                                                <i className="material-icons add"></i>
                                                                <i className="material-icons remove"></i>
                                                            </div>
                                                            <div className="collapse" id="exCollapsingNavbar8">
                                                                <ul className="category-sub-menu">
                                                                    <li data-depth={1}>
                                                                        <a className="category-sub-link" href="#">Casual Dresses</a>
                                                                    </li>
                                                                    <li data-depth={1}>
                                                                        <a className="category-sub-link" href="#">Evening
                                                                            Dresses</a>
                                                                    </li>
                                                                    <li data-depth={1}>
                                                                        <a className="category-sub-link" href="#">Summer Dresses</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li data-depth={0}>
                                                            <a href="#">Sarees</a>
                                                            <div className="navbar-toggler collapse-icons" data-toggle="collapse" data-target="#exCollapsingNavbar14">
                                                                <i className="material-icons add"></i>
                                                                <i className="material-icons remove"></i>
                                                            </div>
                                                            <div className="collapse" id="exCollapsingNavbar14">
                                                                <ul className="category-sub-menu">
                                                                    <li data-depth={1}>
                                                                        <a className="category-sub-link" href="#">Printed</a>
                                                                    </li>
                                                                    <li data-depth={1}>
                                                                        <a className="category-sub-link" href="#">Trackwear</a>
                                                                    </li>
                                                                    <li data-depth={1}>
                                                                        <a className="category-sub-link" href="#">Summer Wear</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="search_filters_wrapper">
                                        <div className="block-title clearfix hidden-lg-up collapsed" data-target="#search_filters" data-toggle="collapse">
                                            <span className="h1 products-section-title text-uppercase">
                                                <a className="text-uppercase h6" href="#">Filter</a>
                                            </span>
                                            <span className="navbar-toggler collapse-icons">
                                                <i className="material-icons add"></i>
                                                <i className="material-icons remove"></i>
                                            </span>
                                        </div>
                                        <div id="search_filters" className="collapse data-toggler">
                                            <h3 className="hidden-md-down">
                                                <a className="block-title text-uppercase h6" href="#">Filter</a>
                                            </h3>
                                            <div id="_desktop_search_filters_clear_all" className="hidden-md-down clear-all-wrapper">
                                                <button data-search-url="#" className="btn btn-tertiary js-search-filters-clear-all"><i className="material-icons"></i> Clear all</button>
                                            </div>
                                            <div className="facet clearfix">
                                                <h1 className="h6 facet-title hidden-md-down">Categories</h1>
                                                <div className="title hidden-lg-up collapsed" data-target="#facet_71002" data-toggle="collapse">
                                                    <h1 className="h6 facet-title">Categories</h1>
                                                    <span className="float-xs-right">
                                                        <span className="navbar-toggler collapse-icons">
                                                            <i className="material-icons add"></i>
                                                            <i className="material-icons remove"></i>
                                                        </span>
                                                    </span>
                                                </div>
                                                <ul id="facet_71002" className="collapse">
                                                    <li>
                                                        <label className="facet-label" htmlFor="facet_input_71002_0">
                                                            <span className="custom-checkbox">
                                                                <input id="facet_input_71002_0" data-search-url="#" type="checkbox" />
                                                                <span className="ps-shown-by-js"><i className="material-icons checkbox-checked"></i></span>
                                                            </span>
                                                            <a href="#" className="_gray-darker search-link js-search-link" rel="nofollow">Tops<span className="magnitude">(19)</span></a>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="facet-label" htmlFor="facet_input_71002_1">
                                                            <span className="custom-checkbox">
                                                                <input id="facet_input_71002_1" data-search-url="#" type="checkbox" />
                                                                <span className="ps-shown-by-js"><i className="material-icons checkbox-checked"></i></span>
                                                            </span>
                                                            <a href="#" className="_gray-darker search-link js-search-link" rel="nofollow">Dresses<span className="magnitude">(20)</span></a>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="facet clearfix">
                                                <h1 className="h6 facet-title hidden-md-down">Size</h1>
                                                <div className="title hidden-lg-up collapsed" data-target="#facet_41135" data-toggle="collapse">
                                                    <h1 className="h6 facet-title">Size</h1>
                                                    <span className="float-xs-right">
                                                        <span className="navbar-toggler collapse-icons">
                                                            <i className="material-icons add"></i>
                                                            <i className="material-icons remove"></i>
                                                        </span>
                                                    </span>
                                                </div>
                                                <ul id="facet_41135" className="collapse">
                                                    <li>
                                                        <label className="facet-label" htmlFor="facet_input_41135_0">
                                                            <span className="custom-checkbox">
                                                                <input id="facet_input_41135_0" data-search-url="#" type="checkbox" />
                                                                <span className="ps-shown-by-js"><i className="material-icons checkbox-checked"></i></span>
                                                            </span>
                                                            <a href="#" className="_gray-darker search-link js-search-link" rel="nofollow">S<span className="magnitude">(7)</span></a>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="facet-label" htmlFor="facet_input_41135_1">
                                                            <span className="custom-checkbox">
                                                                <input id="facet_input_41135_1" data-search-url="#" type="checkbox" />
                                                                <span className="ps-shown-by-js"><i className="material-icons checkbox-checked"></i></span>
                                                            </span>
                                                            <a href="#" className="_gray-darker search-link js-search-link" rel="nofollow">M<span className="magnitude">(7)</span></a>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="facet-label" htmlFor="facet_input_41135_2">
                                                            <span className="custom-checkbox">
                                                                <input id="facet_input_41135_2" data-search-url="#" type="checkbox" />
                                                                <span className="ps-shown-by-js"><i className="material-icons checkbox-checked"></i></span>
                                                            </span>
                                                            <a href="#" className="_gray-darker search-link js-search-link" rel="nofollow">L<span className="magnitude">(7)</span></a>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="facet clearfix">
                                                <h1 className="h6 facet-title hidden-md-down">Color</h1>
                                                <div className="title hidden-lg-up collapsed" data-target="#facet_56250" data-toggle="collapse">
                                                    <h1 className="h6 facet-title">Color</h1>
                                                    <span className="float-xs-right">
                                                        <span className="navbar-toggler collapse-icons">
                                                            <i className="material-icons add"></i>
                                                            <i className="material-icons remove"></i>
                                                        </span>
                                                    </span>
                                                </div>
                                                <ul id="facet_56250" className="collapse">
                                                    <li>
                                                        <label className="facet-label" htmlFor="facet_input_56250_0">
                                                            <span className="custom-checkbox">
                                                                <input id="facet_input_56250_0" data-search-url="#" type="checkbox" />
                                                                <span className="color" style={{ backgroundColor: '#f5f5dc' }} />
                                                            </span>
                                                            <a href="#" className="_gray-darker search-link js-search-link" rel="nofollow">Beige<span className="magnitude">(1)</span></a>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="facet-label" htmlFor="facet_input_56250_1">
                                                            <span className="custom-checkbox">
                                                                <input id="facet_input_56250_1" data-search-url="#" type="checkbox" />
                                                                <span className="color" style={{ backgroundColor: '#ffffff' }} />
                                                            </span>
                                                            <a href="#" className="_gray-darker search-link js-search-link" rel="nofollow">White<span className="magnitude">(2)</span></a>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="facet-label" htmlFor="facet_input_56250_2">
                                                            <span className="custom-checkbox">
                                                                <input id="facet_input_56250_2" data-search-url="#" type="checkbox" />
                                                                <span className="color" style={{ backgroundColor: '#434A54' }} />
                                                            </span>
                                                            <a href="#" className="_gray-darker search-link js-search-link" rel="nofollow">Black<span className="magnitude">(2)</span></a>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="facet-label" htmlFor="facet_input_56250_3">
                                                            <span className="custom-checkbox">
                                                                <input id="facet_input_56250_3" data-search-url="#" type="checkbox" />
                                                                <span className="color" style={{ backgroundColor: '#F39C11' }} />
                                                            </span>
                                                            <a href="#" className="_gray-darker search-link js-search-link" rel="nofollow">Orange<span className="magnitude">(3)</span></a>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="facet-label" htmlFor="facet_input_56250_4">
                                                            <span className="custom-checkbox">
                                                                <input id="facet_input_56250_4" data-search-url="#" type="checkbox" />
                                                                <span className="color" style={{ backgroundColor: '#5D9CEC' }} />
                                                            </span>
                                                            <a href="#" className="_gray-darker search-link js-search-link" rel="nofollow">Blue<span className="magnitude">(2)</span></a>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="facet-label" htmlFor="facet_input_56250_5">
                                                            <span className="custom-checkbox">
                                                                <input id="facet_input_56250_5" data-search-url="#" type="checkbox" />
                                                                <span className="color" style={{ backgroundColor: '#A0D468' }} />
                                                            </span>
                                                            <a href="#" className="_gray-darker search-link js-search-link" rel="nofollow">Green<span className="magnitude">(1)</span></a>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="facet clearfix">
                                                <h1 className="h6 facet-title hidden-md-down">Compositions</h1>
                                                <div className="title hidden-lg-up collapsed" data-target="#facet_91981" data-toggle="collapse">
                                                    <h1 className="h6 facet-title">Compositions</h1>
                                                    <span className="float-xs-right">
                                                        <span className="navbar-toggler collapse-icons">
                                                            <i className="material-icons add"></i>
                                                            <i className="material-icons remove"></i>
                                                        </span>
                                                    </span>
                                                </div>
                                                <ul id="facet_91981" className="collapse">
                                                    <li>
                                                        <label className="facet-label" htmlFor="facet_input_91981_0">
                                                            <span className="custom-checkbox">
                                                                <input id="facet_input_91981_0" data-search-url="#" type="checkbox" />
                                                                <span className="ps-shown-by-js"><i className="material-icons checkbox-checked"></i></span>
                                                            </span>
                                                            <a href="#" className="_gray-darker search-link js-search-link" rel="nofollow">Cotton<span className="magnitude">(3)</span></a>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="facet-label" htmlFor="facet_input_91981_1">
                                                            <span className="custom-checkbox">
                                                                <input id="facet_input_91981_1" data-search-url="#" type="checkbox" />
                                                                <span className="ps-shown-by-js"><i className="material-icons checkbox-checked"></i></span>
                                                            </span>
                                                            <a href="#" className="_gray-darker search-link js-search-link" rel="nofollow">Polyester<span className="magnitude">(2)</span></a>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="facet-label" htmlFor="facet_input_91981_2">
                                                            <span className="custom-checkbox">
                                                                <input id="facet_input_91981_2" data-search-url="#" type="checkbox" />
                                                                <span className="ps-shown-by-js"><i className="material-icons checkbox-checked"></i></span>
                                                            </span>
                                                            <a href="#" className="_gray-darker search-link js-search-link" rel="nofollow">
                                                                Viscose<span className="magnitude">(2)</span></a>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="facet clearfix">
                                                <div className="popular-blog clearfix">
                                                    <h1 className="h6 facet-title hidden-md-down">Popular Tag</h1>
                                                    <div className="title hidden-lg-up collapsed" data-target="#facet_91982" data-toggle="collapse">
                                                        <h1 className="h6 facet-title">Popular Tag</h1>
                                                        <span className="float-xs-right">
                                                            <span className="navbar-toggler collapse-icons">
                                                                <i className="material-icons add"></i>
                                                                <i className="material-icons remove"></i>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <ul id="facet_91982" className="collapse">
                                                        <li><a href="#">Home</a></li>
                                                        <li><a href="#">Top</a></li>
                                                        <li><a href="#">Blouses</a></li>
                                                        <li><a href="#">Dress</a></li>
                                                        <li><a href="#">Outfits</a></li>
                                                        <li><a href="#">Accessories</a></li>
                                                        <li><a href="#">Blog</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <section className="featured-products clearfix mt-3">
                                        <h3 className="h1 products-section-title block-title hidden-md-down">New products</h3>
                                        <div className="block-title clearfix  hidden-lg-up collapsed" data-target="#newproducts-container" data-toggle="collapse">
                                            <span className="products-section-title">New products</span>
                                            <span className="navbar-toggler collapse-icons">
                                                <i className="material-icons add"></i>
                                                <i className="material-icons remove"></i>
                                            </span>
                                        </div>
                                        <div id="newproducts-container" className="collapse data-toggler">
                                            <div className="products">
                                                <article className="product-miniature js-product-miniature">
                                                    <div className="product-container">
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/1.jpg" alt="Pellentesque et pharetra" />
                                                            </a>
                                                        </div>
                                                        <div className="caption">
                                                            <div className="product-title"><a href="#">Pellentesque et pharetra</a>
                                                            </div>
                                                            <div className="product-price-and-shipping">
                                                                <span className="sr-only">Regular price</span>
                                                                <span className="regular-price">$50.00</span>
                                                                <span className="discount-percentage discount-product">-10%</span>
                                                                <span className="sr-only">Price</span>
                                                                <span className="price">$45.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="product-miniature js-product-miniature">
                                                    <div className="product-container">
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/2.jpg" alt="Pellentesque et pharetra" />
                                                            </a>
                                                        </div>
                                                        <div className="caption">
                                                            <div className="product-title"><a href="#">Vis feugiat delenit</a></div>
                                                            <div className="product-price-and-shipping">
                                                                <span className="sr-only">Regular price</span>
                                                                <span className="regular-price">$23.00</span>
                                                                <span className="discount-percentage discount-product">-5%</span>
                                                                <span className="sr-only">Price</span>
                                                                <span className="price">$21.85</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="product-miniature js-product-miniature">
                                                    <div className="product-container">
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/3.jpg" alt="Pellentesque et pharetra" />
                                                            </a>
                                                        </div>
                                                        <div className="caption">
                                                            <div className="product-title"><a href="#">Curabitur laoret luctus</a>
                                                            </div>
                                                            <div className="product-price-and-shipping">
                                                                <span className="sr-only">Price</span>
                                                                <span className="price">$50.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="product-miniature js-product-miniature">
                                                    <div className="product-container">
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/4.jpg" alt="Pellentesque et pharetra" />
                                                            </a>
                                                        </div>
                                                        <div className="caption">
                                                            <div className="product-title"><a href="#">Aliquam fringilla juste</a>
                                                            </div>
                                                            <div className="product-price-and-shipping">
                                                                <span className="sr-only">Price</span>
                                                                <span className="price">$24.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <a className="all-product-link h4" href="#">All new products <i className="material-icons"></i></a>
                                        </div>
                                    </section>
                                    <div id="ishileftbanners" className="clearfix">
                                        <div className="image-container">
                                            <a className="ishi-customhover-fadeinflip" href="#">
                                                <img src="assets/images/leftbanner.jpg" alt="leftbanner1" />
                                            </a>
                                        </div>
                                    </div>
                                    <section className="featured-products clearfix mt-3">
                                        <h3 className="h1 products-section-title block-title hidden-md-down">Popular Products</h3>
                                        <div className="block-title clearfix hidden-lg-up collapsed" data-target="#bestsellers-container" data-toggle="collapse">
                                            <span className="products-section-title">Popular Products</span>
                                            <span className="navbar-toggler collapse-icons">
                                                <i className="material-icons add"></i>
                                                <i className="material-icons remove"></i>
                                            </span>
                                        </div>
                                        <div id="bestsellers-container" className="collapse data-toggler">
                                            <div className="products">
                                                <article className="product-miniature js-product-miniature">
                                                    <div className="product-container">
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/5.jpg" alt="Pellentesque et pharetra" />
                                                            </a>
                                                        </div>
                                                        <div className="caption">
                                                            <div className="product-title"><a href="#">Simul dolorem voluptaria</a>
                                                            </div>
                                                            <div className="product-price-and-shipping">
                                                                <span className="sr-only">Price</span>
                                                                <span className="price">$61.21</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="product-miniature js-product-miniature">
                                                    <div className="product-container">
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/6.jpg" alt="Pellentesque et pharetra" />
                                                            </a>
                                                        </div>
                                                        <div className="caption">
                                                            <div className="product-title"><a href="#">Vis feugiat delenit</a></div>
                                                            <div className="product-price-and-shipping">
                                                                <span className="sr-only">Regular price</span>
                                                                <span className="regular-price">$23.00</span>
                                                                <span className="discount-percentage discount-product">-5%</span>
                                                                <span className="sr-only">Price</span>
                                                                <span className="price">$21.85</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="product-miniature js-product-miniature">
                                                    <div className="product-container">
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/7.jpg" alt="Pellentesque et pharetra" />
                                                            </a>
                                                        </div>
                                                        <div className="caption">
                                                            <div className="product-title"><a href="#">Omnis dicam mentitum</a>
                                                            </div>
                                                            <div className="product-price-and-shipping">
                                                                <span className="sr-only">Price</span>
                                                                <span className="price">$25.99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="product-miniature js-product-miniature">
                                                    <div className="product-container">
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/8.jpg" alt="Pellentesque et pharetra" />
                                                            </a>
                                                        </div>
                                                        <div className="caption">
                                                            <div className="product-title"><a href="#">Vidit dolore eu qui</a></div>
                                                            <div className="product-price-and-shipping">
                                                                <span className="sr-only">Price</span>
                                                                <span className="price">$30.50</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <a className="all-product-link h4" href="#">All best sellers <i className="material-icons"></i></a>
                                        </div>
                                    </section>
                                </div>
                            </div>
                            <div id="content-wrapper" className="col-xs-12 col-sm-12 col-md-12 col-lg-9">
                                <section id="main">
                                    <input id="ishiCartURL" name="ishicarturl" defaultValue="#" type="hidden" />
                                    <input id="ishiStaticToken" name="ishistatictoken" defaultValue="3d2187fdc78a54510e1e1670c3ff42b0" type="hidden" />
                                    <div className="block-category card card-block">
                                        <div className="category-cover">
                                            <img src="assets/images/category_img.jpg" alt="category-img" />
                                        </div>
                                    </div>
                                    <div className="category-info">
                                        <h1 className="h1">Women</h1>
                                        <div id="category-description">
                                            <p>You will find here all woman fashion collections.</p>
                                            <p>This category includes all the basics of your wardrobe and much more:</p>
                                            <p>shoes, accessories, printed t-shirts, feminine dresses, women's jeans!</p>
                                        </div>
                                    </div>
                                    <section id="products" className="category-product-info">
                                        <div id="product-list-top">
                                            <div id="js-product-list-top" className="row products-selection">
                                                <div className="col-lg-6 total-products">
                                                    <span className="layout-options">
                                                        <span id="grid-view" className="checked" />
                                                        <span id="list-view" />
                                                    </span>
                                                    <p>There are 20 products.</p>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="row sort-by-row">
                                                        <span className="col-sm-3 col-xs-12 col-md-3 hidden-lg-down sort-by">Sort
                                                            by:</span>
                                                        <div className="col-sm-9 col-xs-12 col-md-9 products-sort-order dropdown">
                                                            <a className="select-title" rel="nofollow" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Relevance<i className="material-icons pull-xs-right"></i></a>
                                                            <div className="dropdown-menu">
                                                                <a rel="nofollow" href="#" className="select-list current js-search-link">Relevance</a>
                                                                <a rel="nofollow" href="#" className="select-list js-search-link">Name, A to Z</a>
                                                                <a rel="nofollow" href="#" className="select-list js-search-link">Name, Z to A</a>
                                                                <a rel="nofollow" href="#" className="select-list js-search-link">Price, low to high</a>
                                                                <a rel="nofollow" href="#" className="select-list js-search-link">Price, high to low</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 hidden-md-up showing">Showing 1-20 of 20 item(s)</div>
                                            </div>
                                        </div>
                                        <div className="hidden-sm-down">
                                            <section id="js-active-search-filters" className="hide">
                                                <h1 className="h6 hidden-xs-up">Active filters</h1>
                                            </section>
                                        </div>
                                        <div id="js-product-list">
                                            <div className="products row">
                                                <article className="product-miniature js-product-miniature col-xs-12 col-sm-6 col-md-4 col-lg-6 col-xl-4">
                                                    <div className="product-container product-thumb">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Aroma Mocha</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/1.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/2.jpg" />
                                                            </a>
                                                            <span className="outstock-overlay">SOLD OUT</span>
                                                            <div className="product-flags">
                                                                <div className="sale">Sale</div>
                                                            </div>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="price">
                                                                <span className="regular price-old">$55.00</span>
                                                                <span className="price-discount">9%</span>
                                                                <span className="price-sale">$50.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button sold-out">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">SOLD OUT</span>
                                                                </a>
                                                            </div>
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x
                                                                1600 pixel resolution. Designed sp..</p>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                                <title>eye-open</title>
                                                                                <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                                        </svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                                <title>heart-shape-outline</title>
                                                                                <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="product-miniature js-product-miniature col-xs-12 col-sm-6 col-md-4 col-lg-6 col-xl-4">
                                                    <div className="product-container product-thumb">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">autem euaiure</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/3.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/4.jpg" />
                                                            </a>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="price">
                                                                <span className="price-sale">$45.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Add to cart</span>
                                                                </a>
                                                            </div>
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x
                                                                1600 pixel resolution. Designed sp..</p>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                                <title>eye-open</title>
                                                                                <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                                        </svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                                <title>heart-shape-outline</title>
                                                                                <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="product-miniature js-product-miniature col-xs-12 col-sm-6 col-md-4 col-lg-6 col-xl-4">
                                                    <div className="product-container product-thumb">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Authletic Stud</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/14.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/15.jpg" />
                                                            </a>
                                                            <span className="outstock-overlay">SOLD OUT</span>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="price">
                                                                <span className="price-sale">$80.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button sold-out">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">SOLD OUT</span>
                                                                </a>
                                                            </div>
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x
                                                                1600 pixel resolution. Designed sp..</p>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                                <title>eye-open</title>
                                                                                <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                                        </svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                                <title>heart-shape-outline</title>
                                                                                <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="product-miniature js-product-miniature col-xs-12 col-sm-6 col-md-4 col-lg-6 col-xl-4">
                                                    <div className="product-container product-thumb">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Black Tour Bag</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/5.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/6.jpg" />
                                                            </a>
                                                            <div className="product-flags">
                                                                <div className="sale">Sale</div>
                                                            </div>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="price">
                                                                <span className="regular price-old">$42.00</span>
                                                                <span className="price-discount">4%</span>
                                                                <span className="price-sale">$40.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Add to cart</span>
                                                                </a>
                                                            </div>
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x
                                                                1600 pixel resolution. Designed sp..</p>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                                <title>eye-open</title>
                                                                                <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                                        </svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                                <title>heart-shape-outline</title>
                                                                                <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="product-miniature js-product-miniature col-xs-12 col-sm-6 col-md-4 col-lg-6 col-xl-4">
                                                    <div className="product-container product-thumb">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Authletic Stud</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/9.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/10.jpg" />
                                                            </a>
                                                            <span className="outstock-overlay">SOLD OUT</span>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="price">
                                                                <span className="price-sale">$80.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button sold-out">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">SOLD OUT</span>
                                                                </a>
                                                            </div>
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x
                                                                1600 pixel resolution. Designed sp..</p>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                                <title>eye-open</title>
                                                                                <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                                        </svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                                <title>heart-shape-outline</title>
                                                                                <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="product-miniature js-product-miniature col-xs-12 col-sm-6 col-md-4 col-lg-6 col-xl-4">
                                                    <div className="product-container product-thumb">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Skillofun Junior</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/11.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/12.jpg" />
                                                            </a>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="price">
                                                                <span className="price-sale">$64.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Add to cart</span>
                                                                </a>
                                                            </div>
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x
                                                                1600 pixel resolution. Designed sp..</p>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                                <title>eye-open</title>
                                                                                <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                                        </svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                                <title>heart-shape-outline</title>
                                                                                <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="product-miniature js-product-miniature col-xs-12 col-sm-6 col-md-4 col-lg-6 col-xl-4">
                                                    <div className="product-container product-thumb">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Crinkle Leaf</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/16.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/17.jpg" />
                                                            </a>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="price">
                                                                <span className="price-sale">$60.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Add to cart</span>
                                                                </a>
                                                            </div>
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x
                                                                1600 pixel resolution. Designed sp..</p>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                                <title>eye-open</title>
                                                                                <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                                        </svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                                <title>heart-shape-outline</title>
                                                                                <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="product-miniature js-product-miniature col-xs-12 col-sm-6 col-md-4 col-lg-6 col-xl-4">
                                                    <div className="product-container product-thumb">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">corporis suscipit</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/18.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/19.jpg" />
                                                            </a>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="price">
                                                                <span className="price-sale">$50.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Add to cart</span>
                                                                </a>
                                                            </div>
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x
                                                                1600 pixel resolution. Designed sp..</p>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                                <title>eye-open</title>
                                                                                <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                                        </svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                                <title>heart-shape-outline</title>
                                                                                <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="product-miniature js-product-miniature col-xs-12 col-sm-6 col-md-4 col-lg-6 col-xl-4">
                                                    <div className="product-container product-thumb">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Shake Spin Lion</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/20.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/1.jpg" />
                                                            </a>
                                                            <div className="product-flags">
                                                                <div className="sale">Sale</div>
                                                            </div>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="price">
                                                                <span className="regular price-old">$50.00</span>
                                                                <span className="price-discount">9%</span>
                                                                <span className="price-sale">$55.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Add to cart</span>
                                                                </a>
                                                            </div>
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x
                                                                1600 pixel resolution. Designed sp..</p>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                                <title>eye-open</title>
                                                                                <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                                        </svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                                <title>heart-shape-outline</title>
                                                                                <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="product-miniature js-product-miniature col-xs-12 col-sm-6 col-md-4 col-lg-6 col-xl-4">
                                                    <div className="product-container product-thumb">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Sensory Sweet</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/8.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/9.jpg" />
                                                            </a>
                                                            <div className="product-flags">
                                                                <div className="sale">Sale</div>
                                                            </div>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="price">
                                                                <span className="regular price-old">$25.00</span>
                                                                <span className="price-discount">16%</span>
                                                                <span className="price-sale">$30.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Add to cart</span>
                                                                </a>
                                                            </div>
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x
                                                                1600 pixel resolution. Designed sp..</p>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                                <title>eye-open</title>
                                                                                <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                                        </svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                                <title>heart-shape-outline</title>
                                                                                <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="product-miniature js-product-miniature col-xs-12 col-sm-6 col-md-4 col-lg-6 col-xl-4">
                                                    <div className="product-container product-thumb">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Link 'n Go Pack</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/12.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/13.jpg" />
                                                            </a>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="price">
                                                                <span className="regular price-old">$15.00</span>
                                                                <span className="price-discount">25%</span>
                                                                <span className="price-sale">$20.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Add to cart</span>
                                                                </a>
                                                            </div>
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x
                                                                1600 pixel resolution. Designed sp..</p>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                                <title>eye-open</title>
                                                                                <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                                        </svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                                <title>heart-shape-outline</title>
                                                                                <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="product-miniature js-product-miniature col-xs-12 col-sm-6 col-md-4 col-lg-6 col-xl-4">
                                                    <div className="product-container product-thumb">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Scoop ’n Bath</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/4.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/5.jpg" />
                                                            </a>
                                                            <span className="outstock-overlay">SOLD OUT</span>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="price">
                                                                <span className="price-sale">$15.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button sold-out">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">SOLD OUT</span>
                                                                </a>
                                                            </div>
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x
                                                                1600 pixel resolution. Designed sp..</p>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                                <title>eye-open</title>
                                                                                <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                                        </svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                                <title>heart-shape-outline</title>
                                                                                <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="product-miniature js-product-miniature col-xs-12 col-sm-6 col-md-4 col-lg-6 col-xl-4">
                                                    <div className="product-container product-thumb">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Comdaq Stroller</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/7.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/9.jpg" />
                                                            </a>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="price">
                                                                <span className="price-sale">$90.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Add to cart</span>
                                                                </a>
                                                            </div>
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x
                                                                1600 pixel resolution. Designed sp..</p>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                                <title>eye-open</title>
                                                                                <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                                        </svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                                <title>heart-shape-outline</title>
                                                                                <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="product-miniature js-product-miniature col-xs-12 col-sm-6 col-md-4 col-lg-6 col-xl-4">
                                                    <div className="product-container product-thumb">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Brown cushion</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/10.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/20.jpg" />
                                                            </a>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="price">
                                                                <span className="price-sale">$60.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">Add to cart</span>
                                                                </a>
                                                            </div>
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x
                                                                1600 pixel resolution. Designed sp..</p>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                                <title>eye-open</title>
                                                                                <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                                        </svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                                <title>heart-shape-outline</title>
                                                                                <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="product-miniature js-product-miniature col-xs-12 col-sm-6 col-md-4 col-lg-6 col-xl-4">
                                                    <div className="product-container product-thumb">
                                                        <div className="product-desc">
                                                            <div className="product-title"><a href="#">Classic Fisher Gift</a></div>
                                                            <div className="product-comments">
                                                                <div className="star_content">
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                    <div className="star star_on" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="image">
                                                            <a href="#" className="thumbnail product-thumbnail">
                                                                <img src="assets/images/product/19.jpg" alt="product-img" />
                                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/2.jpg" />
                                                            </a>
                                                            <span className="outstock-overlay">SOLD OUT</span>
                                                        </div>
                                                        <div className="caption">
                                                            <p className="price">
                                                                <span className="regular price-old">$55.00</span>
                                                                <span className="price-discount">9%</span>
                                                                <span className="price-sale">$50.00 </span>
                                                            </p>
                                                            <div className="btn-cart">
                                                                <a data-button-action="add-to-cart" className="button sold-out">
                                                                    <i className="fa fa-shopping-cart" />
                                                                    <span className="lblcart">SOLD OUT</span>
                                                                </a>
                                                            </div>
                                                            <p className="description">
                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x
                                                                1600 pixel resolution. Designed sp..</p>
                                                            <div className="button-group">
                                                                <div className="btn-quickview">
                                                                    <a className="quickbox" href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                                <title>eye-open</title>
                                                                                <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                                        </svg>
                                                                        <span className="lblcart">Quick View</span>
                                                                    </a>
                                                                </div>
                                                                <div className="btn-wishlist">
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                                <title>heart-shape-outline</title>
                                                                                <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                            </symbol>
                                                                        </svg>
                                                                        <svg className="icon" viewBox="0 0 30 30">
                                                                            <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="pagination">
                                                <div className="col-xl-4 col-lg-5 col-md-5 col-xs-12 pagination-desc">Showing 1-15
                                                    of 19 item(s)</div>
                                                <div className="col-xl-8  col-lg-7 col-md-7 col-xs-12 pagination-right">
                                                    <ul className="page-list clearfix">
                                                        <li>
                                                            <a rel="prev" href="#" className="previous">
                                                                <i className="material-icons"></i><span className="pagination-lbl">Previous</span>
                                                            </a>
                                                        </li>
                                                        <li className="current">
                                                            <a rel="nofollow" href="#" className="disabled js-search-link">1</a>
                                                        </li>
                                                        <li>
                                                            <a rel="nofollow" href="#" className="js-search-link">2</a>
                                                        </li>
                                                        <li>
                                                            <a rel="next" href="#" className="next js-search-link">
                                                                <span className="pagination-lbl">Next</span><i className="material-icons"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div id="_mobile_left_column" />
                    <div id="_mobile_right_column" />
                    <div className="clearfix" />
                </div>
            </div>

        </>
    )
}

export default AllProducts;