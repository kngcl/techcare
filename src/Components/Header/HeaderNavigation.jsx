import React, { useState } from 'react';
import './header.css'
import overview from '../../assets/house.png'
import fillo from '../../assets/fillo.png'
import calender from '../../assets/calender.png'
import chat from '../../assets/chat.png'
import patient from '../../assets/patient.png'
const HeaderNavigation = () => {
    const [activeLink, setActiveLink] = useState('Patients');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const links = [
        { label: 'Overview', icon: overview, path: '#' },
        { label: 'Patients', icon: patient, path: '#' },
        { label: 'Schedule', icon: calender, path: '#' },
        { label: 'Message', icon: chat, path: '#' },
        { label: 'Transactions', icon: fillo, path: '#' },
    ];

    return (
        <div className="container">
            {links.map((link) => (
                <a
                    href={link.path}
                    key={link.label}
                    className={activeLink === link.label ? 'active' : ''}
                    onClick={() => handleLinkClick(link.label)}
                >
                    <img className='card' src={link.icon}></img>   {link.label}
                </a>
            ))}
        </div>
    );
};

export default HeaderNavigation;