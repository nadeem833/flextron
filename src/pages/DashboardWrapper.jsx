import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function DashboardWrapper({ children }) {
    return (
        <>
        <Navbar />
        <div className='min-h-[calc(100vh-185px)] bg-gray-100 flex justify-center'>
            {children}
        </div>
        <Footer/>
        </>
    )
}

export default DashboardWrapper