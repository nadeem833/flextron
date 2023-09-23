import React from 'react'
import Navbar from '../components/Navbar'

function DashboardWrapper({ children }) {
    return (
        <>
        <Navbar />
        <div className='h-screen bg-red-200'>
            {children}
        </div>
        </>
    )
}

export default DashboardWrapper