import React from 'react';
import './PatientComponent.css';


function PatientComponent({ avatar, name, role }) {
  return (
    <div className="user-profiles">
      <div className='user-profile'>
        <img src={avatar} alt="User Avatar" className="user-avatar" />
        <div className="user-info">
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
      </div>

   
    </div>
  );
}

export default PatientComponent;