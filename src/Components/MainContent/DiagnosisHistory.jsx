import React from 'react';

import './DiagnosisHistory.css';
import BloodPressureChart from './BloodPressureChart';
import VitalSigns from './VitalSigns/VitalSigns';
import DiagnosticList from './DiagnosList/DiagnosList';

const DiagnosisHistory = () => {
    return (
        <div className="diagnosis-history">
            <div>

            </div>
            <div className='diagnosis-history-header'> 
                <h2 >Diagnosis History</h2>
            </div>

            <BloodPressureChart />
            <VitalSigns />
            
        </div>
       
    );
};

export default DiagnosisHistory;
