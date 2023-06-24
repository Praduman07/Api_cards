import React, { useContext } from 'react'
import '../Styles/NavBar.css'
import {BsSearch} from 'react-icons/bs'
import { UserContext } from '../Context/Context'
export const NavBar = () => {
    const {searchData,changeInSearch,serachForData} = useContext(UserContext);

  return (
    <div className='nav-items'>
        <div className='logo'>
            LOGO
        </div>
        <div className='search-param'>
            <input type='text' 
            placeholder='search'
            value={searchData}
            onChange={changeInSearch}>
            </input>
            <div className='icons'>
                <BsSearch onClick={()=>serachForData(searchData)}></BsSearch>
            </div>
        </div>
    </div>
  )
}
