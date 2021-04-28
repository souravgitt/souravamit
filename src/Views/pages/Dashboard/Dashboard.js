import React from 'react';

function Customer() {
    return (
        <div className="dashboard">
            <h2 className="page-title">Drawer Drawer <span>01</span></h2>
            <div className="drawer">
                <section className="section">
                    <div className="section-body">
                        <form className="fonr-horizontal">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-horizontal drawerForm">
                                        <div className="form-group">
                                            <label className="control-label">Initial Amount</label>
                                            <div className="col-md-8">
                                                <div className="input-group">
                                                    <span className="input-group-addon" id="basic-addon1">$</span>
                                                    <input className="form-control" placeholder="0" type="number"
                                                        value="" />
                                                    <span className="input-group-btn">
                                                        <input type="submit" value="Initial" id="btnsubmit"
                                                            className="btn btn-blue" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group" id="divfills">

                                            <label className="control-label" for="Fills">Fills</label>
                                            <div className="col-md-8">
                                                <div className="input-group">
                                                    <span className="input-group-addon" id="basic-addon1">$</span>
                                                    <input className="form-control" id="Fills" placeholder="0"
                                                        type="text" />
                                                    <span className="input-group-btn">
                                                        <input type="submit" id="btnsubmit" className="btn btn-blue" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group" id="Withdrawals">
                                            <label className="control-label" for="Withdrawals">Withdraw</label>
                                            <div className="col-md-8">
                                                <div className="input-group">
                                                    <span className="input-group-addon" id="basic-addon1">$</span>
                                                    <input className="form-control" id="Withdrawals" placeholder="0"
                                                        type="text" value="" />
                                                    <span className="input-group-btn">
                                                        <input type="submit" id="btnsubmit" className="btn btn-blue" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>

                <section className="section">
                    <div className="section-head">
                        <h2>Current Information (Drawer 01)</h2>
                    </div>
                    <div className="section-body">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-5 col-xs-10 col-100">
                                <div className="customer-info">
                                    <div className="drawer-info">
                                        <div className="drawer-content">
                                            <span>Initial Amount</span>
                                            <span className="available-amount">$200.00</span>
                                        </div>
                                        <div className="drawer-content">
                                            <span>Fills</span>
                                            <span className="available-amount">$200.00</span>
                                        </div>
                                        <div className="drawer-content">
                                            <span>Withdraw</span>
                                            <span className="available-amount">$200.00</span>
                                        </div>
                                    </div>

                                    <div className="drawer-info">
                                        <div className="drawer-content">
                                            <span>Total Purchase</span>
                                            <span className="available-amount">$200.00</span>
                                        </div>
                                        <div className="drawer-content">
                                            <span>Total Redeem</span>
                                            <span className="available-amount">$200.00</span>
                                        </div>
                                    </div>

                                    <div className="drawer-info">
                                        <div className="drawer-content">
                                            <span>Balanace</span>
                                            <span className="available-amount">$200.00</span>
                                        </div>
                                        <div className="drawer-content">
                                            <span>Daily Comps</span>
                                            <span className="available-amount">$200.00</span>
                                        </div>
                                        <div className="drawer-content">
                                            <span>Special Comps</span>
                                            <span className="available-amount">$200.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Customer;