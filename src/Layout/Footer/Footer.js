import React from 'react';

function Footer(props) {
    return (
        <footer className={props.sidebar ? '' : 'toggle'}>2020 © All right</footer>
    )
}

export default Footer;