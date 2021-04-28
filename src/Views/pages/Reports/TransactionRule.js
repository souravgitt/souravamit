import React from 'react';
import * as BiIcons from 'react-icons/bi';
import Button from '../../component/Button/Button';

function TransactionRule() {
    return (
        <div classNameName="transaction-rule">
            <h2 className="page-title">Transaction Search Rule</h2>

            <section className="section">
                <div className="section-head">
                    <h2>Transaction Search Rule</h2>
                </div>

                <div className="section-body">
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="email">Customer :</label>
                            <div className="col-sm-3">
                                <input type="email" className="form-control" id="email" placeholder="Enter Pin ID" />
                            </div>
                        </div>
                        <div className="form-group form-fields">
                            <label className="control-label col-sm-2" for="pwd">Period :</label>
                            <div className="col-sm-3">
                                <div className="input-group">
                                    <input type="text" className="form-control" id="startDate1" placeholder="Start Date" />
                                    <label for="startDate" className="input-group-addon">
                                        <BiIcons.BiCalendar />
                                    </label>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="input-group">
                                    <input type="text" className="form-control" id="endDate1" placeholder="End Date" />
                                    <label for="endDate" className="input-group-addon">
                                        <BiIcons.BiCalendar />
                                    </label>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <Button btnClasses="btn-blue">Reports</Button>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10 btns-group">
                                <Button btnClasses="btn-blue">Today</Button>
                                <Button btnClasses="btn-blue">Yesterday</Button>
                                <Button btnClasses="btn-blue">This Week</Button>
                                <Button btnClasses="btn-blue">Last Week</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            <section className="section">
                <div className="section-head">
                    <h2>Transaction Summary</h2>
                </div>

                <div className="section-body">
                    <div className="table-responsive">
                        <table id="table1" className="display table table-striped responsive nowrap">
                            <thead>
                                <tr>
                                    <th>Total Purchase</th>
                                    <th>POS Purchase</th>
                                    <th>Reloader Purchase</th>
                                    <th>Daily Comps</th>
                                    <th>Special Comps</th>
                                    <th>Free Enteries</th>
                                    <th>Redeem</th>
                                    <th>Reverse</th>
                                    <th>Gross Net</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>$0.00</td>
                                    <td>$0.00</td>
                                    <td>$0.00</td>
                                    <td>$0.00</td>
                                    <td>$0.00</td>
                                    <td>$0.00</td>
                                    <td>$0.00</td>
                                    <td>$0.00</td>
                                    <td>$0.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="section-head">
                    <h2>Transaction Detail Report</h2>
                </div>

                <div className="section-body">
                    <p>2020-09-16 05:00:00 ~ 2020-09-17 05:00:00</p>
                    <div className="table-responsive">
                        <table id="table2" className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Station</th>
                                    <th>Customer ID</th>
                                    <th>Type</th>
                                    <th>Amount</th>
                                    <th>Free Enteries</th>
                                    <th>Comps</th>
                                    <th>Free</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>$0.00</td>
                                    <td>$0.00</td>
                                    <td>$0.00</td>
                                    <td>$0.00</td>
                                    <td>$0.00</td>
                                    <td>$0.00</td>
                                    <td>$0.00</td>
                                    <td>$0.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TransactionRule;