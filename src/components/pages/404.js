function Error() {
    return (
        <main className="404-page">
                    <section className="breadcrumb-container paira-margin-bottom-3">
                        <div className="breadcrumb">
                            <div className="container-fluid padding-fix">
                                <ul className="list-inline">
                                    <li><a href="#">Home <i className="fa fa-angle-right"></i></a></li>
                                    <li>404</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="error-content paira-margin-bottom-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 heading-title">
                                    <h2 className="text-capitalize margin-clear text-center"><span>Page Not Found</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 margin-top-30 text-center">
                                    <div className="error">
                                        <p className="margin-bottom-10">Portenta haec esse dicit, neque ea ratione ullo modo posse vivi; Cum sciret confestim esse moriendum eamque mortem eret, quam Epicurus voluptatem petendam putat. Eorum enim</p>
                                        <h1 className="margin-clear">404</h1>
                                        <h3 className="margin-clear">Your page is not found</h3>
                                        <a href="index.html" className="btn btn-lg btn-primary margin-top-20">Back To Home</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
    )
}

export default Error;