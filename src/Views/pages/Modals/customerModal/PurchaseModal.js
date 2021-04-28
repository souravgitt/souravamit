import React from 'react';
import {Modal, ModalDialog, ModalContent, ModalHeader, ModalBody, ModalFooter} from '../../../component/Modal/Modal';

function PurchaseModal({modalId, isOpen, removeModal}) {
    return (
        <Modal modalId={modalId} modal={isOpen ? "in" : ""}>
            <ModalDialog>
                <ModalContent>
                    <ModalHeader closeModal={removeModal} modalTitle="Purchase"></ModalHeader>
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
                                    <label class="control-label col-md-4 col-sm-5 col-xs-6" for="pwd">Internet Time :</label>
                                    <div class="col-md-8 col-sm-7 col-xs-6">
                                        <p><span>10:10:00</span></p>
                                    </div>
                                </div>
                                <div class="form-group form-fields">
                                    <label class="control-label col-md-4 col-sm-5 col-xs-6" for="pwd">Entries :</label>
                                    <div class="col-md-8 col-sm-7 col-xs-6">
                                        <p><span>7900</span></p>
                                    </div>
                                </div>
                                <div class="form-group form-fields">
                                    <label class="control-label col-md-4 col-sm-5 col-xs-6" for="pwd">Purchase Amount :</label>
                                    <div class="col-md-8 col-sm-7 col-xs-6">
                                        <p>
                                            <span>0$</span>
                                            <button type="button" class="btn btn-red btn-sm" id="clearBtn">Clear</button>
                                        </p>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-4 col-sm-5" for="pwd">Purchase Select :</label>
                                    <div class="col-md-8 col-sm-7 btns-group">
                                        <button type="button" class="btn btn-blue">$1</button>
                                        <button type="button" class="btn btn-blue">$5</button>
                                        <button type="button" class="btn btn-blue">$10</button>
                                        <button type="button" class="btn btn-blue">$20</button>
                                        <button type="button" class="btn btn-blue">$50</button>
                                        <button type="button" class="btn btn-blue">$100</button>
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

export default PurchaseModal