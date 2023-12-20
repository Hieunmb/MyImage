function Register(){
    return(
        <main className="register-page">
        <section className="breadcrumb-container paira-margin-bottom-3">
            <div className="breadcrumb">
                <div className="container-fluid padding-fix">
                    <ul className="list-inline">
                        <li><a href="#">Home</a></li>
                        <li>-</li>
                        <li>Register</li>
                    </ul>
                </div>
            </div>
            </section>
        <section className="register-content paira-margin-bottom-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 heading-title">
                        <h2 className="text-capitalize margin-clear text-center"><span>Register</span></h2>
                    </div>
                    <div className="col-md-6 col-xs-12 col-sm-6 margin-top-30">
                        <div className="form-contact">
                            <div className="row">
                                <form accept-charset="UTF-8" action="#" className="contact-form" method="post">
                                    <div className="col-xs-12 col-md-12 col-sm-12">
                                        <input name="form_type" type="hidden" value="contact"/>
                                        <input name="utf8" type="hidden" value="✓"/>
                                        <div className="input-group margin-bottom-20">
                                            <span className="input-group-addon" id="basic-addon15">First Name</span>
                                            <input type="text" className="form-control" aria-describedby="basic-addon3"/>
                                        </div>
                                        <div className="input-group margin-bottom-20">
                                            <span className="input-group-addon" id="basic-addon16">Last Name</span>
                                            <input type="text" className="form-control" aria-describedby="basic-addon3"/>
                                        </div>
                                        <div className="input-group margin-bottom-20">
                                            <span className="input-group-addon" id="basic-addon13">Email</span>
                                            <input type="text" className="form-control" aria-describedby="basic-addon3"/>
                                        </div>
                                        <div className="input-group margin-bottom-20">
                                            <span className="input-group-addon" id="basic-addon14">Password</span>
                                            <input type="text" className="form-control" aria-describedby="basic-addon3"/>
                                        </div>
                                        <div className="for-pass full-width">
                                            <a href="login.html" className="btn btn-primary btn-lg">Create An Account</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12 col-sm-6 margin-top-30">
                        <div className="creat-account">
                            <h4 className="margin-clear">Already have a account?</h4>
                            <a href="login" className="btn btn-lg btn-success margin-top-15">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </main>
    )
}
export default Register;