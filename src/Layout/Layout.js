import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import Dashboard from '../Views/pages/Dashboard/Dashboard';
import Customer from '../Views/pages/Customer/Customer';
import Machine from '../Views/pages/Machine/Machine';
import ShiftRule from '../Views/pages/Reports/ShiftRule';
import TransactionRule from '../Views/pages/Reports/TransactionRule';
import Comps from '../Views/pages/Settings/Comps/Comps';
import Kiosk from '../Views/pages/Settings/Kiosk/Kiosk';
import Lock from '../Views/pages/Lock/Lock';

function Layout() {
    const [sidebar, setSidebar] = useState(true);

    const toggleSideMenu = () => {
        setSidebar(!sidebar);
    }

    return (
        <>
            <Router>
                <Sidebar toggleSideMenu={toggleSideMenu} sidebar={sidebar ? "" : "toggle"} />
                <div className={`main ${sidebar ? "" : "toggle"}`}>
                    <div className="main-content">
                        <Header toggleSideMenu={toggleSideMenu} sidebar={sidebar} />
                        <Switch>
                            <Route path="/" component={Dashboard} exact />
                            <Route path="/Customer" component={Customer} exact />
                            <Route path="/Machine" component={Machine}  exact />
                            <Route path="/Reports/ShiftRule" component={ShiftRule} exact />
                            <Route path="/Reports/TransactionRule" component={TransactionRule} exact />
                            <Route path="/Settings/Comps" component={Comps} exact />
                            <Route path="/Settings/Kiosk" component={Kiosk} exact />
                            <Route path="/Lock" component={Lock} exact />
                        </Switch>
                    </div>
                    <Footer sidebar={sidebar} />
                </div>
            </Router>
        </>
    )
}

export default Layout;