import React, {useState} from 'react';
import {useAuth0} from '@auth0/auth0-react';
import MainPanel from './MainPanel';
import Config from './Config';
import './ShiftDashboard.css';

const ShiftDashboard = () => {
    const {user} = useAuth0();
    const [showConfig, setShowConfig] = useState(false);
    const [showMainPanel, setShowMainPanel] = useState(true);
    console.log('showConfig');
    const toggleConfig = () => {
        setShowConfig(true);
        setShowMainPanel(false);
    }
    const toggleMainPanel = () => {
        setShowMainPanel(true);
        setShowConfig(false);
    }

    return ( 
        <div className="content-db-main" >
            <div className="content-db-main-header">
                <span>Hola {user.name}  👋🏻 </span>
            </div>
            <div className="btn-content-db">
                <button 
                    className="btn-shift"
                    onClick={toggleMainPanel}> Panel Principal</button>
                <button 
                    className="btn-shift"
                    onClick={toggleConfig}>Config</button>
            </div>
            <div className="content-dashboard-shift">
                {showConfig && <Config />}
                {showMainPanel && <MainPanel />}
            </div>
        </div>
    );
}

export default ShiftDashboard;