import React from 'react';
import './PatientItem.css';

const PatientItem = ({ name }) => {
    return (
        <div className="patient-item">
            <span className="patient-name">{name}</span>
        </div>
    );
};

export default PatientItem