import React from 'react'
import Logo from './Logo'
import UserProfile from './UserProfile'
import HeaderNavigation from './HeaderNavigation'

function Header() {
    return (
        <header className="header">
            <Logo />
            <HeaderNavigation />
            <UserProfile />
        </header>
    )
}

export default Header