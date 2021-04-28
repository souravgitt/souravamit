import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function SidebarMenu({item}) {
    const [submenu, setSubmenu] = useState(false);
    const showSubmenu = () => setSubmenu(!submenu);

    return (
        <>
            <Link to={item.path} onClick={item.subnav && showSubmenu}>
                <span className="fa">{item.icon}</span>
                <span className="m-name">{item.title}</span>
                <span className="down-icon">
                    {
                        item.subnav && submenu
                        ? item.iconOpen : item.subnav
                        ? item.iconClose : null
                    }
                </span>
            </Link>
            <ul>
                {
                    submenu && item.subnav.map((child, ind) => {
                        return (
                            <li key={ind}>
                                <Link to={child.path}>
                                    <i className="fa">{child.icon}</i>
                                    {child.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default SidebarMenu;