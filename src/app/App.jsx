import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { Alert } from '../_components';
import { Home } from '../home';
import { MultiAlerts } from '../multi-alerts';

function App() {
    return (
        <BrowserRouter>
            {/* nav */}
            <div className="container text-center">
                <Link to="/" className="btn btn-link">Single Alert</Link>
                <Link to="/multi-alerts" className="btn btn-link">Multiple Alerts</Link>
            </div>

            {/* main app container */}
            <div className="jumbotron p-4">
                <div className="container text-center">
                    <Alert />
                    <Route exact path="/" component={Home} />
                    <Route path="/multi-alerts" component={MultiAlerts} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export { App }; 