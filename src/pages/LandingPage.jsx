import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

  const navigate = useNavigate()
  return (
    <div className='text-black bg-blue-200 h-screen w-full flex justify-center items-center gap-6'>

    <button onClick={()=>{navigate('/sign-in')}}  className='border-2 border-cyan-700'>Sign In</button>
    <button onClick={()=>{navigate('/sign-up')}} className='border-2 border-cyan-700'> Sign Up</button>

    </div>
  )
}

export default LandingPage