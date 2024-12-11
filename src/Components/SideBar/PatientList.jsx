
import React from 'react';
import PatientItem from './PatientItem';
import './PatientList.css';
import search from '../../assets/search.png'

const PatientList = ({ children }) => {
  return (
    <div className="patient-list">
      <div className='patient_search'>
        <h2>Patients</h2>
        <p><img src={search} alt="" srcset="" /></p>
      </div>

      {children}
    </div>
  );
};

export default PatientList;