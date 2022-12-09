import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { toggleSidebar } from '../../store/features/sideBarToggleSlice'
import './style.scss'
function Sidebar() {
  const {toggle}=useSelector(state=>state.toggleSideBar);
  const dispatch=useDispatch();
  return (
    <div className={toggle?"sidebar active":'sidebar'}>
    <span className="closeSidebar" onClick={()=>dispatch(toggleSidebar())}>
      <i className="fas fa-times"></i>
    </span>
    <div>
      <ul className="page_links">
        <li><Link  onClick={()=>dispatch(toggleSidebar())} to="/">Home</Link></li>
        <li><Link  onClick={()=>dispatch(toggleSidebar())} to="/page404" className="info">Xüsusiyyətlər</Link></li>
        <li><Link  onClick={()=>dispatch(toggleSidebar())} to="/blog">Blog</Link></li>
        <li><Link  onClick={()=>dispatch(toggleSidebar())} to="/about">Haqqımızda</Link></li>
        <li><Link  onClick={()=>dispatch(toggleSidebar())} to="/contact">Əlaqə</Link></li>
      </ul>
    </div>
  </div>
  )
}

export default Sidebar