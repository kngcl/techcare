// React Code
import React, { useState } from 'react';
import './PersonalCard.css';
import PatientComponent from '../../Globalcomponent/PatientComponent';
import jessica from '../../../assets/jessica.png'
import useFetchData from '../../../axiosfetch/data';
import insurance from '../../../assets/insurance.png'
import birthday from '../../../assets/birthday.png'
import gender from '../../../assets/gender.png'
import contact_info from '../../../assets/contact-info.png'

const PersonalCard = () => {
    const [chartData, setChartData] = useState([]);
    const { data, loading, error } = useFetchData();

    const person = {
        profileImage: data[0]?.profile_picture,
        name: data[0]?.name,

        avatar: 'https://via.placeholder.com/150',
    };

    const userInfo = [

        {
            avatar: birthday,
            name: ' dateOfBirth',
            role: data[0]?.date_of_birth,
        },
        {
            avatar: gender,
            name: ' Gender',
            role: data[0]?.gender,
        },
        {
            avatar: contact_info,
            name: 'Contact Info',
            role: data[0]?.phone_number,
        },
        {
            avatar: contact_info,
            name: 'Emergency Contact',
            role: data[0]?.emergency_contact,
        },
        ,
        {
            avatar: insurance,
            name: 'Insurance Type',
            role: data[0]?.insurance_type,
        },
    ]

    return (
        <div className="personal-card">
            <div className="card-header">
                <div className="profile-image">
                    <img src={person.profileImage} alt="Profile" />
                </div>
                <div className="name-info">
                    {/*   <img src={person.avatar} alt="User Avatar" className="user-avata" /> */}
                    <h2>{person.name}</h2>
                    <p>{person.dateOfBirth}</p>
                </div>
            </div>
            <div className='personalcard'>
                {userInfo.map((value, key) => (
                    <PatientComponent key={key} avatar={value.avatar}
                        name={value.name}
                        role={value.role} />
                ))}
            </div>



            <div className="card-footer">
                <button className="show-info-btn">Show All Information</button>
            </div>
        </div >
    );
};

export default PersonalCard;