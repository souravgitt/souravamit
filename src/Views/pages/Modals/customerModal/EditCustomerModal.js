import React from 'react';
import Button from '../../../component/Button/Button';
import {Modal, ModalDialog, ModalContent, ModalHeader, ModalBody, ModalFooter} from '../../../component/Modal/Modal';
import * as BiIcons from 'react-icons/bi';

function EditCustomerModal({modalId, isOpen, removeModal}) {
    return (
        <Modal modalId={modalId} modal={isOpen ? "in" : ""}>
            <ModalDialog>
                <ModalContent>
                    <ModalHeader closeModal={removeModal} modalTitle="Edit Customer"></ModalHeader>
                    <ModalBody>
                        <div className="form-group model_body_text">
                            <div className="form">
                                <div className="form-row clearfix">
                                    <div className="col-sm-6">
                                        <label className="control-label">First Name</label>
                                        <div className="form-group">
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="control-label">Last Name</label>
                                        <div className="form-group">
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>
                                </div>    
                                <div className="form-row clearfix">
                                    <div className="col-sm-6">
                                        <label className="control-label">Mobile Number</label>
                                        <div className="form-group">
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Gender</label>
                                        <div className="form-group">
                                            <input type="radio" name="r1" checked/> Male
                                            <input type="radio" name="r1" className="ml-5" /> Female
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row clearfix">
                                    <div className="col-lg-6">
                                        <label className="control-label">Pin ID</label>
                                        <div className="form-group">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <label className="control-label">Kiosk ID</label>
                                        <div className="form-group">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row clearfix">
                                    <div className="col-lg-6">
                                        <label className="control-label">Mobile ID</label>
                                        <div className="form-group">
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label className="control-label">Date of Birth</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control hasDatepicker" placeholder="MM/DD/YYYY" />
                                            <label className="input-group-addon">
                                                <BiIcons.BiCalendar />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row clearfix">
                                    <div className="col-lg-6">
                                        <label className="control-label">Email ID</label>
                                        <div className="form-group">
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label className="control-label">Driver License</label>
                                        <div className="form-group">
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button btnClasses="btn-info" buttonClick={removeModal}>Cancel</Button>
                        <Button btnClasses="btn-default">Reset</Button>
                        <Button btnClasses="btn-primary">Save</Button>
                    </ModalFooter>
                </ModalContent>
            </ModalDialog>
        </Modal>
    )
}

export default EditCustomerModal