import React from 'react'
import "../index.css"
import {SidebarData} from './SidebarData'
import { Menu } from "antd";
import { Layout } from "antd";
function Sidebar() {
  return (
    <div className='sidebar'> 
        <div className='row'>
            <h1>Onara Oil</h1>
        </div>
            <ul className='sidebarList'>
        {SidebarData.map((val,key)=>{
            return(
                <li 
                key={key} 
                className='row' 
                onClick={()=>{window.location.pathname = val.link}}
                id={window.location.pathname == val.link ? "active": ""}
                >
                   
                    <div id='icon'>{val.icon}</div>
                    <div id='title'>{val.title}</div>
                </li>
            )
        })}
        </ul>
    </div>
  )
}

export default Sidebar