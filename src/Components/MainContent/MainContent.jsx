import React from 'react';


/*import LabResults from './MainContent/LabResults'; */
import './MainContent.css';
import DiagnosisHistory from './DiagnosisHistory';
import VitalSigns from './VitalSigns/VitalSigns';
import DiagnosticList from './DiagnosList/DiagnosList';

const MainContent = () => {
  return (
    <div className="main-content">
      <DiagnosisHistory />
      <DiagnosticList/>
  {/*      <LabResults /> */}
    </div>
  );
};

export default MainContent;