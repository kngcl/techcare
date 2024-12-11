import React, { useEffect, useState } from 'react'
import './header.css'
import jessica from '../../assets/jessica.png'
import PatientComponent from '../Globalcomponent/PatientComponent';


function UserProfile() {
  
    const userInfo = {
        avatar: jessica,
        name: 'Dr. Jessie Simmons',
        role: 'General Practitioner',
    };

    return (
        <header>
            <PatientComponent
                avatar={userInfo.avatar}
                name={userInfo.name}
                role={userInfo.role}
            />
        </header>
    );
}

export default UserProfile