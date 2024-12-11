import React from 'react'
import Header from '../Components/Header/Header'
import './dashboard.css'
import Sidebar from '../Components/SideBar/SideBar'
import MainContent from '../Components/MainContent/MainContent'
import PersonalCard from '../Components/MainContent/Profile/Profile'
import Profilepart from '../Components/MainContent/Profile/Profilepart'

function Dasboard() {
    return (
        <div className="app-container">

            <div>
                <Header />
            </div>
            <div className='main-layout'>
                <Sidebar />
                <MainContent />
                <Profilepart />
            </div>


        </div>
    )
}

export default Dasboard