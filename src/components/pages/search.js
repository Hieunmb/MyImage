function Search(){
    return(
        <main className="search-page">
        <section className="search-result latest-picture paira-margin-bottom-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 heading-title">
                        <h2 className="text-capitalize margin-clear text-center"><span>Search Result</span></h2>
                    </div>
                </div>
            </div>
            <div className="search-content margin-top-30">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-xs-12">
                            <div className="product text-center">
                                <div className="product-image position-r">
                                    <a href="#">
                                        <div className="background-overlay"></div>
                                        <img src="assets/images/product/product-5.jpg" alt="" className="img-responsive"/>
                                    </a>
                                </div>
                                <div className="product-hover">
                                    <h3 className="margin-clear"><a href="collection.html">Looking big eyes look</a></h3>
                                    <div className="text-center prices margin-top-15 margin-bottom-10">
                                        <h4 className="pull-left margin-clear"><span className="money">$120.00</span></h4>
                                    </div>
                                    <p className="margin-bottom-15">Negat esse eam, inquit, propter se expetendam. Honesta oratio, Socra tica, Platonis etiam. Positum est a nostris in iis esse rebus, quae secu ndum naturam essent, non dolere; Non est ista, inquam, Piso, magna dissensio. Non quaeritur autem quid naturae tuae consentaneum sit sed quid disciplinae. Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec.</p>
                                    <div className="paira-wish-compare-con wish-compare-view-cart">
                                        <a href="#" className="product-cart-con btn btn-success"><i className="fa fa-shopping-cart"></i></a>
                                        <a href="#paira-quick-view" className="paira-quick-view quick-view  btn btn-default"><i className="fa fa-search-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 col-xs-12">
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
                                    <h3 className="margin-clear"><a href="collection.html">Looking big eyes look</a></h3>
                                    <div className="text-center prices margin-top-15 margin-bottom-10">
                                        <h4 className="pull-left margin-clear margin-right-5 del"><del><span className="money">$170.00</span></del></h4>
                                        <h4 className="pull-left margin-clear margin-left-5"><span className="money">$120.00</span></h4>
                                    </div>
                                    <p className="margin-bottom-15">Negat esse eam, inquit, propter se expetendam. Honesta oratio, Socra tica, Platonis etiam. Positum est a nostris in iis esse rebus, quae secu ndum naturam essent, non dolere; Non est ista, inquam, Piso, magna dissensio. Non quaeritur autem quid naturae tuae consentaneum sit sed quid disciplinae. Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec.</p>
                                    <div className="paira-wish-compare-con wish-compare-view-cart">
                                        <a href="#" className="product-cart-con btn btn-success"><i className="fa fa-shopping-cart"></i></a>
                                        <a href="#paira-quick-view" className="paira-quick-view quick-view  btn btn-default"><i className="fa fa-search-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-xs-11 col-sm-12">
                            <h3 className="margin-clear">Al people like your paint</h3>
                            <p className="margin-top-15 margin-bottom-0">Potius ergo illa dicantur: turpe esse, viri non esse debilitari dolore, frangi, succumbere. Sed ea mala virtuti magnitudine obruebantur. Sapiens autem semper beatus est et est aliquando in dolore; Sed vos squalidius, illorum vides quam niteat oratio. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Nihil sane. Sic consequentibus vestris sublatis prima tolluntur. Quod quidem nobis non saepe contingit. Sic enim censent oportunitatis esse beate vivere. Zenonis est, inquam, hoc Stoici. Magna laus. Quid enim est a Chrysippo praetermissum in Stoicis?</p>
                        </div>
                    </div>
                </div>
                <div className="product-container"></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 margin-top-30 text-center">
                        <ul className="list-inline pagination margin-clear">
                            <li><a href="#" className="next-page"><i className="fa fa-caret-left"></i></a></li>
                            <li className="active font-bold"><span>1</span></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#" className="prev-page"><i className="fa fa-caret-right"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}
export default Search;