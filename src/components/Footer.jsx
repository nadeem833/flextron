import React from 'react'
import styles from '../styles'
const Footer = () => {
  return (
    <div className='h-[60px] w-full bg-gray-300 flex justify-center'>
      <div className='h-full flex-1 max-w-[1280px] px-5 lg:px-0 flex items-center justify-between'>
            <p className={`${styles.footerText}`}>Copyright &copy; 2023</p>
            <p className={`${styles.footerText}`}>Flextron</p>
      </div>
    </div>
  )
}

export default Footer