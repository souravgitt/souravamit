import React from 'react';
import {Modal, ModalDialog, ModalContent, ModalHeader, ModalBody, ModalFooter} from '../../../component/Modal/Modal';

function RevertPurchaseModal({modalId, isOpen, removeModal}) {
    return (
        <Modal modalId={modalId} modal={isOpen ? "in" : ""}>
            <ModalDialog>
                <ModalContent>
                    <ModalHeader closeModal={removeModal} modalTitle="Revert Purchase"></ModalHeader>
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
                                    <label class="control-label col-md-4 col-sm-5 col-xs-6" for="pwd">Last Purchase :</label>
                                    <div class="col-md-8 col-sm-7 col-xs-6">
                                        <p><span>2020-10-26 10:05:23</span></p>
                                    </div>
                                </div>
                                <div class="form-group form-fields">
                                    <label class="control-label col-md-4 col-sm-5 col-xs-6" for="pwd">Purchase Amonut :</label>
                                    <div class="col-md-8 col-sm-7 col-xs-6">
                                        <p><span>$1</span></p>
                                    </div>
                                </div>
                                <div class="form-group form-fields">
                                    <label class="control-label col-md-4 col-sm-5 col-xs-6" for="pwd">Comps Amonut :</label>
                                    <div class="col-md-8 col-sm-7 col-xs-6">
                                        <p><span>$0</span></p>
                                    </div>
                                </div>
                                <div class="form-group form-fields">
                                    <label class="control-label col-md-4 col-sm-5 col-xs-6" for="pwd">Added Internet Time :</label>
                                    <div class="col-md-8 col-sm-7 col-xs-6">
                                        <p><span>00:05:00 (5min / $1.00)</span></p>
                                    </div>
                                </div>
                                <div class="form-group form-fields">
                                    <label class="control-label col-md-4 col-sm-5 col-xs-6" for="pwd">Added Entries :</label>
                                    <div class="col-md-8 col-sm-7 col-xs-6">
                                        <p><span>100 (100 Entries / $1.00)</span></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button type="button" className="btn btn-info" onClick={removeModal}>Cancel</button>
                        <button type="button" className="btn btn-red">Reverse</button>
                        <button type="button" className="btn btn-primary">Save</button>
                    </ModalFooter>
                </ModalContent>
            </ModalDialog>
        </Modal>
    )
}

export default RevertPurchaseModal