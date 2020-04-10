import React, { useState } from 'react';

import { alertService } from '../_services';

function Home() {
    const [options, setOptions] = useState({
        autoClose: false,
        keepAfterRouteChange: false
    });

    function handleOptionChange(e) {
        const { name, checked } = e.target;
        setOptions(options => ({ ...options, [name]: checked }));
    }

    return (
        <div>
            <h1>React Hooks + Bootstrap Alerts</h1>
            <button className="btn btn-success m-1" onClick={() => alertService.success('Success!!', options)}>Success</button>
            <button className="btn btn-danger m-1" onClick={() => alertService.error('Error :(', options)}>Error</button>
            <button className="btn btn-info m-1" onClick={() => alertService.info('Some info....', options)}>Info</button>
            <button className="btn btn-warning m-1" onClick={() => alertService.warn('Warning: ...', options)}>Warn</button>
            <button className="btn btn-outline-dark m-1" onClick={() => alertService.clear()}>Clear</button>
            <div className="form-group mt-2">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" name="autoClose" id="autoClose" checked={options.autoClose} onChange={handleOptionChange} />
                    <label htmlFor="autoClose">Auto close alert after three seconds</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" name="keepAfterRouteChange" id="keepAfterRouteChange" checked={options.keepAfterRouteChange} onChange={handleOptionChange} />
                    <label htmlFor="keepAfterRouteChange">Keep displaying after one route change</label>
                </div>
            </div>
        </div>
    );
}

export { Home };