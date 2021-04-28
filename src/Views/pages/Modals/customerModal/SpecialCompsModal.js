import React from 'react';
import {Modal, ModalDialog, ModalContent, ModalHeader, ModalBody, ModalFooter} from '../../../component/Modal/Modal';

function SpecialCompsModal({modalId, isOpen, removeModal}) {
    return (
        <Modal modalId={modalId} modal={isOpen ? "in" : ""}>
            <ModalDialog>
                <ModalContent>
                    <ModalHeader closeModal={removeModal} modalTitle="Special Comps"></ModalHeader>
                    <ModalBody>
                        <div class="giftHistory-content">
                            <form class="form-horizontal">
                                <div class="form-group">
                                    <label class="control-label col-md-4 col-sm-5 col-xs-6" for="email">Customer ID :</label>
                                    <div class="col-md-8 col-sm-7 col-xs-6">
                                        <p><span>2654919</span></p>
                                    </div>
                                </div>
                                <div class="form-group form-fields">
                                    <label class="control-label col-md-4 col-sm-5 col-xs-6" for="pwd">Entries :</label>
                                    <div class="col-md-8 col-sm-7 col-xs-6">
                                        <p><span>10:10:00</span></p>
                                    </div>
                                </div>
                                <div class="form-group form-fields">
                                    <label class="control-label col-md-4 col-sm-5" for="pwd">Special Comps Amount :</label>
                                    <div class="col-md-6 col-sm-6">
                                        <div class="input-group">
                                            <span class="input-group-addon">$</span>
                                            <select class="custom-select form-control">
                                                <option selected>Choose...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button type="button" className="btn btn-info" onClick={removeModal}>Cancel</button>
                        <button type="button" className="btn btn-primary">Save</button>
                    </ModalFooter>
                </ModalContent>
            </ModalDialog>
        </Modal>
    )
}

export default SpecialCompsModal