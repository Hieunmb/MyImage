import { useState } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { useNavigate } from "react-router-dom";

function Product(){
    const navigate = useNavigate();
    const [price, setPrice] = useState(0.00);
    const [selectedSize, setSelectedSize] = useState('10x15');
    const [imageWidth, setImageWidth] = useState('100%'); // Initial width
    const [quantity, setQuantity] = useState(1);
    const [imageFile, setImageFile] = useState(null);
    const [projects, setProjects] = useState({
        thumbnail: "",
        frame_id:1,
        material_id: 1,
        size_id: 1,
        quantity:1,
      });

    // Other existing code...

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
    const [selectedSizePrice, setSelectedSizePrice] = useState(25.00);
    const handleSizeChange = (newSize) => {
        setSelectedSize(newSize);
        const sizeData = {
            '10x15': { width: '100%', price: 25.00 },
            '10x12': { width: '70%', price: 20.00 },
            '6x8': { width: '50%', price: 15.00 },
            '4x6': { width: '40%', price: 10.00 },
            // Add other sizes as needed
        };
        const selectedSizeData = sizeData[newSize] || { width: '100%', price: 25.00 };

        setImageWidth(selectedSizeData.width);
        setSelectedSizePrice(selectedSizeData.price);

    };
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleImageUpload = (event) => {
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setUploadedImage(imageUrl);
        setImageFile(imageFile);
        setProjects((prevProjects) => ({
            ...prevProjects,
            thumbnail: imageFile,
        }));
    };
    const formHandle = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Your existing code for adding to cart with image upload
        if (uploadedImage) {
            const formData = new FormData();
            formData.append("thumbnail", imageFile);
            formData.append("frame_id", projects.frame_id);
            formData.append("material_id", projects.material_id);
            formData.append("size_id", projects.size_id);
            formData.append("quantity", quantity);

            api.post(url.IMAGE.POST, formData)
                .then((response) => {
                    // Handle successful image upload
                    window.alert('Add To Cart Success');
                    navigate('/');
                })
                .catch((error) => {
                    // Handle error
                    console.error("Error uploading image:", error);
                });
        } else {
            // Handle case where no image is uploaded
            console.log("No image uploaded");
        }
    };

    const [selectedOption, setSelectedOption] = useState('None');
    const handleChange = (event) => {
        const newSelectedOption = event.target.value;
        const productImage = document.getElementById('productImage');
    
        const optionStyles = {
            None: { price: 0.00, borderColor: 'white', boxShadow: '0 0 0 10px white inset' },
            Black: { price: 10.00, borderColor: '#000', boxShadow: '0 0 0 10px #333333 inset' },
            Silver: { price: 15.00, borderColor: '#b3b3b3', boxShadow: '0 0 0 10px #333333 inset' },
            'Walnut Flair': { price: 20.00, borderColor: '#A0522D', boxShadow: '0 0 0 10px #8B4513 inset' },
        };
    
        const selectedStyle = optionStyles[newSelectedOption] || {
            price: 80.00,
            borderColor: 'white',
            boxShadow: '0 0 0 10px white inset',
        };
    
        setPrice(selectedStyle.price);
        productImage.style.borderColor = selectedStyle.borderColor;
        productImage.style.boxShadow = selectedStyle.boxShadow;
    
        setSelectedOption(newSelectedOption); // Update the selected option in state
    };
    return(
        <main className="product-page">
            <form method='POST' onSubmit={formHandle}>
        <section className="single-product paira-margin-bottom-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-12 col-xs-12">
                        <div className="paira-product single-varients-product">
                        <div className="position-r pull-left full-width margin-bottom-40">
    <div className="single-product-image paira-single-product-image">
        <div style={{
            position: 'relative',
            display: 'inline-block'
        }}>
            <img
                id="productImage"
                style={{
                    textAlign: 'center',
                    width: imageWidth,
                    border: '15px solid white',
                    boxShadow: '0 0 0 10px white inset',
                    padding: '10px'
                }}
                src={uploadedImage ? uploadedImage : "assets/images/product/product-big-1.jpg"}
                alt="Uploaded"
                className="paira-product-image img-responsive"
            />
{!uploadedImage && (
    <div style={{ position: 'relative', textAlign: 'center' }}>
        <input
            className="input-file" 
            id="my-file"
            required
            name="uploadedImage"
            type="file"
            onChange={handleImageUpload}
            style={{
                position: 'absolute',
                bottom: '50%', // Adjust this value to center vertically
                right: '50%', // Adjust this value to center horizontally
                transform: 'translate(50%, 50%)', // Centering trick
                padding: '5px 10px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                opacity: '0', // Hide the original file input
                zIndex: '1' // Ensure it's clickable
            }}
        />
        <label
            htmlFor="my-file"
            style={{
                position: 'absolute',
                bottom: '225px', // Adjust this value to center vertically
                right: '50%', // Adjust this value to center horizontally
                transform: 'translate(50%, 50%)', // Centering trick
                color: 'white',
                display: 'inline-block',
                padding: '14px 45px',
                background: '#39D2B4',
                color: '#fff',
                fontSize: '1em',
                transition: 'all .4s',
                cursor: 'pointer',
            }}
        >
            <i className="fa fa-upload"></i>
               Upload File
        </label>
    </div>
)}

        </div>
    </div>
    <div className="single-product-container"></div>
</div>

                        </div>
                    </div>
                    <div className="col-md-7 col-sm-12 col-xs-12">
                        <div className="product-detles">
                            <h1 className="full-width text-capitalize margin-bottom-15 margin-clear">Sleep women with water color</h1>
                            <div className="full-width pull-left margin-bottom-15">
                                <h3 className="margin-left-5 pull-left margin-top-0 margin-bottom-0">${(selectedSizePrice+price).toFixed(2)}</h3>
                            </div>
                            <div className="pull-left full-width margin-bottom-15">
                                <label className="margin-bottom-10 pull-left full-width">Frame :</label>
                                <div className="frame-options">
                                    <label className="radio-option" style={{marginRight:"15px"}}>
                                        <input
                                            style={{webkitAppearance:"auto"}}
                                            type="radio"
                                            value="None"
                                            name="None"
                                            checked={selectedOption === 'None'}
                                            onChange={handleChange}
                                        />
                                        None
                                        <p>$0.00</p>
                                    </label>
                                    
                                    <label className="radio-option" style={{marginRight:"15px"}}>
                                        <input
                                            style={{webkitAppearance:"auto"}}
                                            type="radio"
                                            value="Black"
                                            checked={selectedOption === 'Black'}
                                            onChange={handleChange}
                                        />
                                        Black Matte
                                        <p>$10.00</p>
                                    </label>
                                    <label className="radio-option" style={{marginRight:"15px"}}>
                                        <input
                                            style={{webkitAppearance:"auto"}}
                                            type="radio"
                                            value="Silver"
                                            checked={selectedOption === 'Silver'}
                                            onChange={handleChange}
                                        />
                                        Vintage Silver
                                        <p>$15.00</p>
                                    </label>
                                    <label className="radio-option" style={{marginRight:"15px"}}>
                                        <input
                                            style={{webkitAppearance:"auto"}}
                                            type="radio"
                                            value="Walnut Flair"
                                            checked={selectedOption === 'Walnut Flair'}
                                            onChange={handleChange}
                                        />
                                        Walnut Flair
                                        <p>$20.00</p>
                                    </label>
                                </div>
                            </div>
                            <div className="pull-left full-width margin-bottom-15">
    <label className="margin-bottom-10 pull-left full-width">Size :</label>
    <div className="frame-options">
        <label className="radio-option" style={{ marginRight: "20px" }}>
            <input
                style={{ webkitAppearance: "auto" }}
                type="radio"
                value="10x15"
                checked={selectedSize === '10x15'}
                onChange={() => handleSizeChange('10x15')}
            />
            10x15
            <p>$25.00</p>
        </label>
        
        <label className="radio-option" style={{ marginRight: "20px" }}>
            <input
                style={{ webkitAppearance: "auto" }}
                type="radio"
                value="10x12"
                checked={selectedSize === '10x12'}
                onChange={() => handleSizeChange('10x12')}
            />
            10x12
            <p>$20.00</p>
        </label>
        <label className="radio-option" style={{ marginRight: "20px" }}>
            <input
                style={{ webkitAppearance: "auto" }}
                type="radio"
                value="6x8"
                checked={selectedSize === '6x8'}
                onChange={() => handleSizeChange('6x8')}
            />
            6x8
            <p>$15.00</p>
        </label>
        <label className="radio-option" style={{ marginRight: "20px" }}>
            <input
                style={{ webkitAppearance: "auto" }}
                type="radio"
                value="4x6"
                checked={selectedSize === '4x6'}
                onChange={() => handleSizeChange('4x6')}
            />
            4x6
            <p>$10.00</p>
        </label>
    </div>
</div>

                                 <div className="pull-left full-width margin-bottom-15">
                                <label className="margin-bottom-10 pull-left full-width margin-top-10">Hanger :</label>
                                <div className="arrow-d">
                                    <select className="pro-select">
                                    <option value="10x15" data-width="100%">None</option>
                                    <option value="10x15" data-width="100%">Hanger set</option>
                                    </select>
                                </div>
                            </div>
                            <div className="pull-left full-width margin-bottom-20">
                                <label className="margin-bottom-10">Quantity :</label>
                                <div className="quentity">
                                    <div className="product_quantity_group product-quantity-fix">
                                        <input type="text" className="form-control text-center pull-left font-size-16" value={quantity}/>
                                        <div className="up-down text-center pull-left overflow">
                                            <span className="up" data-direction="up"><i className="fa fa-angle-up" onClick={increaseQuantity}></i></span>
                                            <span className="down" data-direction="down"><i className="fa fa-angle-down" onClick={decreaseQuantity}></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="product-cart-con btn btn-primary btn-lg text-capitalize margin-bottom-30" type="submit">Add To Cart</button>
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
        </form>
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