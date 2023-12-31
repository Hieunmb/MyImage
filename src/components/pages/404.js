function Error() {
    return (
        <main style={{marginTop:"80px", marginBottom:"150px"}} className="404-page">
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