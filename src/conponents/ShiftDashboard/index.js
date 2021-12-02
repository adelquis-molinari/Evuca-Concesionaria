import React, {useState} from 'react';
import {useAuth0} from '@auth0/auth0-react';
import MainPanel from './MainPanel';
import Config from './Config';
import './ShiftDashboard.css';

const ShiftDashboard = () => {
    const {user} = useAuth0();
    const [showConfig, setShowConfig] = useState(true);
    const [showMainPanel, setShowMainPanel] = useState(true);
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
            <div className="content-dashboard-shift">
                {showConfig && <Config />}
                {/* {showMainPanel && <MainPanel />} */}
            </div>
        </div>
    );
}

export default ShiftDashboard;