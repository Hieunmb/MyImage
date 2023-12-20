function Contact() {
    return (
        <main className="contact-page">
                <section className="breadcrumb-container paira-margin-bottom-3">
                    <div className="breadcrumb">
                        <div className="container-fluid padding-fix">
                            <ul className="list-inline">
                                <li><a href="#">Home</a></li>
                                <li>-</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="contact-detail paira-margin-bottom-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 heading-title">
                                <h2 className="text-capitalize margin-clear text-center"><span>Contact details</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 margin-top-30">
                                <p className="margin-bottom-30">Portenta haec esse dicit, neque ea ratione ullo modo posse vivi; Cum sciret confestim esse moriendum eamque mortem ardentiore studio pet Graecum enim hunc versum nostis omnes-: Suavis laborum est praeteritorum memoria.
                                </p>
                                <div className="col-md-4 col-xs-12 col-sm-6 margin-top-30">
                                    <div className="text-center official-detail">
                                        <i className="fa fa-map-marker fa-3x"></i>
                                        <p>98 Agnibina Road, Jinnah Super Market, 2nd Floor, Enpek, Jhenida, Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-xs-12 col-sm-6 margin-top-30">
                                    <div className="text-center official-detail">
                                        <i className="fa fa-phone fa-3x"></i>
                                        <p>1800 000 8808<br/>01248 2468 523745<br/>421 25879 145368</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-xs-12 col-sm-6 margin-top-30">
                                    <div className="text-center official-detail">
                                        <i className="fa fa-envelope fa-3x"></i>
                                        <p>support@themetidy.com<br/>admin@themetidy.com<br/>design@themetidy.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="get-touch paira-margin-bottom-3">
                    <div className="contact-form-background">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 margin-bottom-30 heading-title">
                                    <h2 className="text-capitalize margin-clear text-center"><span>Get in Touch</span></h2>
                                </div>
                                <div className="form-contact">
                                    <div className="row">
                                        <div className="col-md-12 col-xs-12 col-sm-12">
                                            <form accept-charset="UTF-8" action="#" className="contact-form" method="post">
                                                <input name="form_type" type="hidden" value="new_comment"/>
                                                <input name="utf8" type="hidden" value="✓"/>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <div className="input-group margin-bottom-20">
                                                        <span className="input-group-addon" id="basic-addon7">Name</span>
                                                        <input type="text" className="form-control" aria-describedby="basic-addon3"/>
                                                    </div>
                                                    <div className="input-group margin-bottom-20">
                                                        <span className="input-group-addon" id="basic-addon8">Phone</span>
                                                        <input type="text" className="form-control" aria-describedby="basic-addon3"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <div className="input-group margin-bottom-20">
                                                        <span className="input-group-addon" id="basic-addon9">Email</span>
                                                        <input type="text" className="form-control" aria-describedby="basic-addon3"/>
                                                    </div>
                                                    <div className="input-group margin-bottom-20">
                                                        <span className="input-group-addon" id="basic-addon10">Subject</span>
                                                        <input type="text" className="form-control" aria-describedby="basic-addon3"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-sm-12 col-xs-12">
                                                    <div className="input-group margin-bottom-20">
                                                        <span className="input-group-addon" id="basic-addon11">Comment</span>
                                                        <textarea rows="10" name="contact[body]" className="form-control"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <button type="submit" className="btn btn-success btn-lg text-capitalize" value="Send">Send Massage</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="map paira-margin-bottom-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="googleMap" className="margin-top-5 full-width"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
    )
}
    
export default Contact;