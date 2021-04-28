import React from 'react';

function Button({btnClasses, buttonClick, children}) {
    return (
        <button type="button" className={'btn ' + btnClasses} onClick={buttonClick}>{children}</button>
    )
}

export default Button;