import React from 'react';
import Button from '../../component/Button/Button';

function Machine() {
    return (
        <div className="machine">
            <h2 className="page-title">Machine</h2>

            <section className="section">
                <div className="section-head clearfix">
                    <h2 className="heading">Max Machine Count 20, <span className="totalMachine">Total Machines - <span className="badge">1</span></span></h2>
                    <Button btnClasses="btn-blue pull-right">Refresh</Button>
                </div>

                <div className="section-body">
                    <div className="machineStatus">
                        <div className="badge b-play">
                            <div className="icons">0</div>
                            <h4>Playing</h4>
                        </div>
                        <div className="badge b-cont">
                            <div className="icons">0</div>
                            <h4>Connected</h4>
                        </div>
                        <div className="badge b-disc">
                            <div className="icons">1</div>
                            <h4>Disconnected</h4>
                        </div>
                    </div>
                    <div className="machine-list">
                        <div className="item machineLabel">1</div>
                        <div className="item machineLabel">1</div>
                        <div className="item machineLabel">1</div>
                        <div className="item machineLabel">1</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Machine