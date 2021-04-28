import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import {Link} from 'react-router-dom';

function Header(props) {
    return (
        <>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className ={`menu-toggle ${props.sidebar ? '' : 'toggle'}`} onClick={props.toggleSideMenu}>
                        <i className="fa fa-bars" aria-hidden="true"><BsIcons.BsList /></i>
                    </div>
                    <div className="top-rightMenu">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <Link to="/#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <span className="dropdown-toggle bell" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa"><AiIcons.AiTwotoneBell /></i> 
                                        <span className="data-col">0</span>
                                    </span>
                                </Link>
                            </li>
                            <li className="dropdown">
                                <Link to="/#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <figure><img src="./assets/images/placeholder.png" alt="profile" /></figure>Mr Admin 
                                    <span className="caret"></span>
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="/#">Profile</Link></li>
                                    <li><Link to="/#">Password</Link></li>
                                    <li><Link to="/#">Logout</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;