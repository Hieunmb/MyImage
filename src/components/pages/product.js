import { useState } from "react";

function Product(){
    const [selectedSize, setSelectedSize] = useState('1024 x 1024 px');
    const [imageWidth, setImageWidth] = useState('100%'); // Initial width
    const handleSizeChange = (event) => {
        const newSize = event.target.value;
        setSelectedSize(newSize);
    
        // Get the selected option element
        const selectedOption = event.target.options[event.target.selectedIndex];
    
        // Retrieve the width from the data attribute of the selected option
        const newWidth = selectedOption.getAttribute('data-width');
        
        setImageWidth(newWidth);
    };
    const handleChange = (event) => {
        const selectedOption = event.target.value;
        const productImage = document.getElementById('productImage');

        // Logic to set border color based on the selected option
        switch (selectedOption) {
            case 'Black':
                productImage.style.borderColor = '#000';
                break;
            case 'Orange':
                productImage.style.borderColor = 'orange';
                break;
            case 'Silver':
                productImage.style.borderColor = 'silver';
                break;
            case 'Walnut Flair':
                productImage.style.borderColor = 'brown';
                break;
            default:
                productImage.style.borderColor = '#000';
                break;
        }
    };
    return(
        <main className="product-page">
        <section className="single-product paira-margin-bottom-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-12 col-xs-12">
                        <div className="paira-product single-varients-product">
                            <div className="position-r pull-left full-width margin-bottom-40">
                                <div className="single-product-image paira-single-product-image">
                                    <img id="productImage"
                                     style={{ display: 'inline-block',
                                     textAlign:'center',
                                    width: imageWidth,
                                    border: '15px solid black',
                                    boxShadow: '0 0 0 10px white inset',// Second border
                                    padding: '10px', // Adjust padding to maintain spacing
                                    }}
                                    src="assets/images/product/product-big-1.jpg" alt="Product" className="paira-product-image img-responsive"/>
                                </div>
                                <div className="single-product-container"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-12 col-xs-12">
                        <div className="product-detles">
                            <h1 className="full-width text-capitalize margin-bottom-15 margin-clear">Sleep women with water color</h1>
                            <div className="full-width pull-left margin-bottom-15">
                                <h3 className="margin-right-5 pull-left margin-top-0 margin-bottom-0 del"><del className="margin-clear"><span className="money margin-clear">$200.00</span></del></h3>
                                <h3 className="margin-left-5 pull-left margin-top-0 margin-bottom-0">$80.00</h3>
                            </div>
                            <div className="pull-left full-width margin-bottom-15">
                                <label className="margin-bottom-10 pull-left full-width">Frame :</label>
                                <div className="arrow-d">
                                    <select className="pro-select" onChange={handleChange}>
                                    <option value="Black">Black Matte</option>
                                    <option value="Orange">Orange</option>
                                    <option value="Silver">Vintage Silver</option>
                                    <option value="Walnut Flair">Walnut Flair</option>
                                    </select>
                                </div>
                            </div>
                            <div className="pull-left full-width margin-bottom-15">
                                <label className="margin-bottom-10 pull-left full-width">Size :</label>
                                 <div className="arrow-d">
                                     <select className="pro-select" onChange={handleSizeChange}>
                                       <option value="1024 x 1024 px" data-width="100%">1024 x 1024 px</option>
                                          <option value="890 x 890 px" data-width="90%">890 x 890 px</option>
                                          <option value="620 x 620 px" data-width="80%">620 x 620 px</option>
                                          <option value="320 x 320 px" data-width="50%">320 x 320 px</option>
                                        </select>
                                 </div>
                                <label className="margin-bottom-10 pull-left full-width margin-top-10">Hanger :</label>
                                <div className="arrow-d">
                                    <select className="pro-select">
                                    <option value="1024 x 1024 px" data-width="100%">1024 x 1024 px</option>
                                    <option value="890 x 890 px" data-width="90%">890 x 890 px</option>
                                    <option value="620 x 620 px" data-width="80%">620 x 620 px</option>
                                    <option value="320 x 320 px" data-width="50%">320 x 320 px</option>
                                    </select>
                                </div>
                            </div>
                            <div className="pull-left full-width margin-bottom-20">
                                <label className="margin-bottom-10">Quantity :</label>
                                <div className="quentity">
                                    <div className="product_quantity_group product-quantity-fix">
                                        <input type="text" className="form-control text-center pull-left font-size-16" value="2"/>
                                        <div className="up-down text-center pull-left overflow">
                                            <span className="up" data-direction="up"><i className="fa fa-angle-up"></i></span>
                                            <span className="down" data-direction="down"><i className="fa fa-angle-down"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="product-cart-con btn btn-primary btn-lg text-capitalize margin-bottom-30">Add To Cart</a>
                        </div>
                        <div className="tabs margin-bottom-30">
                            <ul className="nav nav-tabs single-product-tabs product-tabs text-center">
                                <li className="active"><a href="#description" className="text-capitalize" data-toggle="tab">Description</a></li>
                                <li><a href="#shippingreturns" data-toggle="tab" className="text-capitalize">Author Details</a></li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active margin-top-20" id="description">
                                    <p className="rale-light margin-bottom-0">Verum tamen cum de rebus grandioribus dicas, ipsae res verba rapiu Nonne igitur tibi videntur, inquit, mala? Quaesita enim virtus est, non quae relinqueret naturam, sed quae tueretur. Sic consequentibus ves tris sublatis prima tolluntur.</p>
                                    <ul className="list-unstyled lists margin-top-10">
                                        <li> Zenonis est, inquam, hoc Stoici.</li>
                                        <li> Iis igitur est difficilius satis facere, qui se Latina scripta dicunt.</li>
                                        <li> Nunc haec primum fortasse audientis servire debemus.</li>
                                        <li> Esse enim quam vellet iniquus iustus poterat inpune.</li>
                                    </ul>
                                </div>
                                <div className="tab-pane margin-top-20" id="shippingreturns">
                                    <p><strong>Page Shipping Tab:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteuroccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p><strong>Shipping Terms:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteuroccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                        </div>
                        <div className="sicoal-share-widget margin-top-10  full-width pull-left">
                            <label className=" pull-left">Share :</label>
                            <ul className="social-li list-inline">
                                <li><a href="https://www.facebook.com/themetidy" target="_blank"><i className="fa fa-facebook font-size-18"></i></a></li>
                                <li><a href="https://plus.google.com/+Themetidy-Official-Page" target="_blank"><i className="fa fa-google-plus font-size-18"></i></a></li>
                                <li><a href="https://twitter.com/themetidy" target="_blank"><i className="fa fa-twitter font-size-18"></i></a></li>
                                <li><a href="https://www.pinterest.com/themetidy/" target="_blank"><i className="fa fa-pinterest font-size-18"></i></a></li>
                                <li><a href="https://www.linkedin.com/company/themetidy" target="_blank"><i className="fa fa-linkedin font-size-18"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="related-product latest-picture heading-title  paira-margin-bottom-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 heading-title">
                        <h2 className="text-capitalize margin-clear text-center"><span>Related products</span></h2>
                    </div>
                </div>
            </div>
            <div className="margin-bottom-30">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-xs-12 margin-top-30">
                            <div className="product text-center">
                                <div className="product-image position-r">
                                    <a href="#">
                                        <div className="background-overlay"></div>
                                        <img src="assets/images/product/product-5.jpg" alt="" className="img-responsive"/>
                                    </a>
                                </div>
                                <div className="product-hover">
                                    <h4 className="margin-clear"><a href="collection.html">Looking big eyes look</a></h4>
                                    <div className="text-center prices">
                                        <h3 className="pull-left margin-right-5 del"><del><span className="money">$170.00</span></del></h3>
                                        <h3 className="pull-left margin-left-5"><span className="money">$120.00</span></h3>
                                    </div>
                                    <div className="paira-wish-compare-con wish-compare-view-cart">
                                        <a href="#" className="product-cart-con btn btn-success"><i className="fa fa-shopping-cart"></i></a>
                                        <a href="#paira-quick-view" className="paira-quick-view quick-view  btn btn-default"><i className="fa fa-search-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 col-xs-12 margin-top-30">
                            <div className="product text-center">
                                <div className="product-image position-r">
                                    <a href="#">
                                        <div className="background-overlay"></div>
                                        <img src="assets/images/product/product-6.jpg" alt="" className="img-responsive"/>
                                    </a>
                                </div>
                                <div className="product-sale"><span>Sale</span></div>
                                <div className="product-stock-out"><span>Sold</span></div>
                                <div className="product-hover">
                                    <h4 className="margin-clear"><a href="collection.html">Looking big eyes look</a></h4>
                                    <div className="text-center prices">
                                        <h3 className="pull-left margin-right-5 del"><del><span className="money">$170.00</span></del></h3>
                                        <h3 className="pull-left margin-left-5"><span className="money">$120.00</span></h3>
                                    </div>
                                    <div className="paira-wish-compare-con wish-compare-view-cart">
                                        <a href="#" className="product-cart-con btn btn-success"><i className="fa fa-shopping-cart"></i></a>
                                        <a href="#paira-quick-view" className="paira-quick-view quick-view  btn btn-default"><i className="fa fa-search-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 col-xs-12 margin-top-30">
                            <div className="product text-center">
                                <div className="product-image position-r">
                                    <a href="#">
                                        <div className="background-overlay"></div>
                                        <img src="assets/images/product/product-7.jpg" alt="" className="img-responsive"/>
                                    </a>
                                </div>
                                <div className="product-hover">
                                    <h4 className="margin-clear"><a href="collection.html">Looking big eyes look</a></h4>
                                    <div className="text-center prices">
                                        <h3 className="pull-left margin-right-5 del"><del><span className="money">$170.00</span></del></h3>
                                        <h3 className="pull-left margin-left-5"><span className="money">$120.00</span></h3>
                                    </div>
                                    <div className="paira-wish-compare-con wish-compare-view-cart">
                                        <a href="#" className="product-cart-con btn btn-success"><i className="fa fa-shopping-cart"></i></a>
                                        <a href="#paira-quick-view" className="paira-quick-view quick-view  btn btn-default"><i className="fa fa-search-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-container"></div>
            </div>
        </section>
    </main>
    )
}
export default Product;