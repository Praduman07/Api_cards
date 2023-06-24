import React, { useContext } from 'react'
import '../Styles/Footer.css'
import { UserContext } from '../Context/Context'
import { Shimmer } from './Shimmer';

export const Footer = () => {
    const {listData,page, prevButton , nextButton} = useContext(UserContext);
  return (
    listData === undefined ? <Shimmer></Shimmer> : 
    <div className='footer-part'>
        <div className='toggle-footer'>
            <button onClick={prevButton} className={page === 1 ? 'non-active-btn' : 'active-btn'}>previous</button>
            <button onClick={nextButton} className={page === listData.total_pages ? 'non-active-btn' : 'active-btn'}>next</button>
        </div>
        <div className='pages'>
            Page <span> {listData.page} </span> of <span>{listData.total_pages}</span>
        </div>
    </div>
  )
}
