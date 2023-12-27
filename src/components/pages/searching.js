function Searching(){
    return(
        <div className="modal fade paira-search-popup search-pops" id="paira-search" tabindex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-lg">
        <div className="modal-content">
            <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true"><i className="fa fa-times"></i></span></button>
                <div className="row">
                    <div className="col-md-12 paira-margin-top-1">
                        <form className="popup-search-form">
                            <input type="text" className="form-control padding-clear text-capitalize pop-light" name="q" value="" placeholder="Search here..."/>
                            <button className="search"><i className="fa fa-search fa-2x"></i></button>
                            <button className="btn btn-success btn-lg text-uppercase pull-right margin-top-15">go</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}
export default Searching;