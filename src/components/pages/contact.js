function Contact() {
    return (
        <main className="contact-page">
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
                                        <p style={{marginBottom:"30px"}}>8a Tôn Thất Thuyết, Mỹ Đình, Cầu Giấy, Hà Nội, Việt Nam</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-xs-12 col-sm-6 margin-top-30">
                                    <div className="text-center official-detail">
                                        <i className="fa fa-phone fa-3x"></i>
                                        <p>096 505 1658<br/>039 632 1425<br/>033 887 7981</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-xs-12 col-sm-6 margin-top-30">
                                    <div className="text-center official-detail">
                                        <i className="fa fa-envelope fa-3x"></i>
                                        <p>abcxyz12433@gmail.com<br/>abcxyzduc075@gmail.com<br/>xxx45204@gmail.com</p>
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
                                {/* <div id="googleMap" className="margin-top-5 full-width"></div> */}
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.096484299949!2d105.77972177471445!3d21.028825087777456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cd376479b%3A0xbc2e0bb9db373ed2!2zOGEgVMO0biBUaOG6pXQgVGh1eeG6v3QsIE3hu7kgxJDDrG5oLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSAxMDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1704524667197!5m2!1svi!2s" width="1150px" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
    )
}
    
export default Contact;