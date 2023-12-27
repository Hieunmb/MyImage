function Login(){
    return(
        <main className="login-page">
        <section className="login-content paira-margin-bottom-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 heading-title">
                        <h2 className="text-capitalize margin-clear text-center"><span>Login</span></h2>
                    </div>
                    <div className="col-md-6 col-xs-12 col-sm-6 margin-top-30">
                        <div className="form-contact">
                            <div className="row">
                                <form accept-charset="UTF-8" action="#" className="contact-form" method="post">
                                    <div className="col-md-12 col-xs-12 col-sm-12">
                                        <input name="form_type" type="hidden" value="contact"/>
                                        <input name="utf8" type="hidden" value="✓"/>
                                        <div className="input-group margin-bottom-20">
                                            <span className="input-group-addon" id="basic-addon13">Email</span>
                                            <input type="text" className="form-control" aria-describedby="basic-addon30"/>
                                        </div>
                                        <div className="input-group margin-bottom-20">
                                            <span className="input-group-addon" id="basic-addon14">Password</span>
                                            <input type="text" className="form-control" aria-describedby="basic-addon3"/>
                                        </div>
                                        <div className="for-pass full-width">
                                            <a href="login.html" className="btn btn-primary btn-lg">Login Account</a>
                                            <div className="new-customer overflow full-width display-inline-b margin-top-15">
                                                <h5 className="text-capitalize display-inline-b position-r pop-light">Forget password?</h5>
                                                <a href="reset-password" className="forget margin-top-15 text-color-1 brand-color text-underline">Reset Password</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12 col-sm-6 margin-top-30">
                        <div className="creat-account">
                            <h4 className="margin-clear">Are you new Customer?</h4>
                            <a href="/register" className="btn btn-lg btn-success margin-top-15">Create An Account</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}
export default Login;