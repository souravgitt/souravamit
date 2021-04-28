import React from 'react';
import SidebarData from './SidebarData';
import SidebarMenu from './SidebarMenu';
import {Link} from 'react-router-dom';
import * as TiIcons from 'react-icons/ti';

function Sidebar(props) {
    return (
        <>
            <aside className={`sidebar-wrapper ${props.sidebar}`}>
                <span className="hidesidemenu" onClick={props.toggleSideMenu}>
                    <i className="fa fa-times-circle" aria-hidden="true"><TiIcons.TiDeleteOutline /></i>
                </span>
                <div className="sidepanel-logo">
                    <Link to="/#">
                        <img src="./assets/images/logo.png" alt="Logo" />
                    </Link>
                </div>
                <div className="sidebar-menu">
                    <div id="sidebar-menu" className="left-menu side-panel">
                        <ul>
                            {SidebarData.map((item, ind) => {
                                return (
                                    <li className="drop_down_action has_sub" key={ind}>
                                        <SidebarMenu item={item} />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar;