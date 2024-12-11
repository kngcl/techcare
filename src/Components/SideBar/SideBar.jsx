import React from 'react';
import './SideBar.css';
import PatientList from './PatientList';
import PatientItem from './PatientItem';
import PatientComponent from '../Globalcomponent/PatientComponent';
import jessica from '../../assets/jessica.png'
import useFetchData from '../../axiosfetch/data';
import dot from '../../assets/slipdots.png'

const Sidebar = () => {
    const { data, loading, error } = useFetchData();

    const userInfo = {
        avatar: data[0]?.profile_picture,
        name: data[0]?.name,
        role: `${data[0]?.gender}, ${data[0]?.age} `,
    };

    return (
        <aside className="sidebar">
            <div className='sidebar-content'>
                <PatientList>
                    <div className='sidebarprofile'>
                        <PatientComponent avatar={userInfo.avatar}
                            name={userInfo.name}
                            role={userInfo.role} />
                        <p> <img src={dot} alt="" srcset="" /></p>
                    </div>

                </PatientList>
            </div>

        </aside>
    );
};

export default Sidebar;