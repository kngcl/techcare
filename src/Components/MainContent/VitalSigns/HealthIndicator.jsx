import React from 'react';
import './HealthIndicator.css'

const HealthIndicator = ({ icon, value, label, status }) => {
    const statusClass = status === 'Normal' ? 'normal' : status === 'higher' ? 'higher' : 'Lower than Average';

    return (
        <div className={`health-indicator ${statusClass}`}>
            <div className="icon">{icon}</div>
            <div className="label">{label}</div>
            <div className="value">{value}</div>
            <div className="label">{status}</div>
        </div>
    );
};

export default HealthIndicator;
