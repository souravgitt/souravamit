import React from 'react';

export const ModalDialog = ({modalSize, children}) => {
    return <div className={"modal-dialog " + modalSize}>{children}</div>
}

export const ModalContent = ({children}) => {
    return <div className="modal-content">{children}</div>
}

export const ModalHeader = ({modalTitle, closeModal}) => {
    return (
        <div className="modal-header">
            <button type="button" className="close" onClick={closeModal}>&times;</button>
            <h4 className="modal-title">{modalTitle}</h4>
        </div>
    )
}

export const ModalBody = ({children}) => {
    return <div className="modal-body">{children}</div>
}

export const ModalFooter = ({children}) => {
    return <div className="modal-footer">{children}</div>
}

export const Modal = ({modalId, modal, children}) => {
    return (
        <div id={modalId} className={`modal fade ${modal}`} role="dialog" 
            style={{display: modal ? 'block': ""}}
        >
            {children}
        </div>
    )
}