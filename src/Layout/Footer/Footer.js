import React from 'react';

function Footer(props) {
    return (
        <footer className={props.sidebar ? '' : 'toggle'}>2020 © All right reserved by S`ourav</footer>
    )
}

export default Footer;