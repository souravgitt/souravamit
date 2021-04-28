import React from 'react';

function Comps() {
    return (
        <div classNameName="comps">
            <h2 className="page-title">Daily Comps Setting</h2>

            <section className="section">
                <div className="section-body">
                    <div className="comps-setting cm-setting1">
                        <div className="row">
                            <div className="col-xs-9">
                                <p>Daily Free Entry ($1)</p>
                            </div>
                            <div className="col-xs-3 text-right">
                                <div className="checkbox switcher">
                                    <label for="test">
                                        <input type="checkbox" id="test" value="" />
                                        <span><small></small></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="section-body">
                    <div className="comps-setting cm-setting2">
                        <h2 className="heading">Auto Daily Comp Setup</h2>

                        <div className="row">
                            <div className="col-xs-9">
                                <p>Daily <strong>5</strong> Comps with $ <strong>20</strong> Purchase</p>
                            </div>
                            <div className="col-xs-3 text-right">
                                <div className="checkbox switcher">
                                    <label for="test1">
                                        <input type="checkbox" id="test1" value="" checked />
                                        <span><small></small></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-9">
                                <p>Daily <strong>10</strong> Comps with $ <strong>50</strong> Purchase</p>
                            </div>
                            <div className="col-xs-3 text-right">
                                <div className="checkbox switcher">
                                    <label for="test1">
                                        <input type="checkbox" id="test1" value="" checked />
                                        <span><small></small></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-9">
                                <p>Daily <strong>15</strong> Comps with $ <strong>100</strong> Purchase</p>
                            </div>
                            <div className="col-xs-3 text-right">
                                <div className="checkbox switcher">
                                    <label for="test1">
                                        <input type="checkbox" id="test1" value="" checked />
                                        <span><small></small></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Comps