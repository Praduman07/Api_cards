import React, { useContext } from 'react';
import '../Styles/NoResult.css';
import { UserContext } from '../Context/Context';

export const NoResult = () => {
    const {repopulate,page} = useContext(UserContext);
  return (
    <div className='container-no'>
        <div className='no-result-text'>
            <p>There is no result for your search on {page} page!</p>
            <button className='repopulate' onClick={repopulate}>
                Go Back
            </button>
        </div>
        
    </div>
  )
}
