import React from 'react';
import {Modal, ModalDialog, ModalContent, ModalHeader, ModalBody, ModalFooter} from '../../../component/Modal/Modal';
import * as BiIcons from 'react-icons/bi';

function GameHistoryModal({modalId, isOpen, removeModal}) {
    return (
        <Modal modalId={modalId} modal={isOpen ? "in" : ""}>
            <ModalDialog modalSize="modal-lg">
                <ModalContent>
                    <ModalHeader closeModal={removeModal} modalTitle="Game History"></ModalHeader>
                    <ModalBody>
                        <div class="giftHistory-content">
                            <form class="form-horizontal">
                                <div class="form-group">
                                    <label class="control-label col-md-2 col-sm-3" for="email">Customer ID :</label>
                                    <div class="col-md-3 col-sm-6">
                                        <p>2654919</p>
                                    </div>
                                </div>
                                <div class="form-group form-fields">
                                    <label class="control-label col-md-2 col-sm-3" for="pwd">Name :</label>
                                    <div class="col-md-3 col-sm-6">
                                        <p>AAA Test</p>
                                    </div>
                                </div>
                                <div class="form-group form-fields">
                                    <div class="row">
                                        <div class="col-md-offset-2 col-sm-offset-3 col-md-10 col-sm-9">
                                            <div class="col-md-3 col-sm-6">
                                                <div class="input-group">
                                                    <input type="password" class="form-control" id="startDate1" placeholder="Start Date" />
                                                    <label for="startDate" class="input-group-addon">
                                                        <BiIcons.BiCalendar />
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-sm-6">
                                                <div class="input-group">
                                                    <input type="password" class="form-control" id="endDate1" placeholder="End Date" />
                                                    <label for="endDate" class="input-group-addon">
                                                        <BiIcons.BiCalendar />
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-sm-6">
                                                <button type="submit" class="btn btn-blue">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-md-offset-2 col-sm-offset-3 col-md-10 col-sm-9 btns-group">
                                        <button type="button" class="btn btn-blue">Today</button>
                                        <button type="button" class="btn btn-blue">Yesterday</button>
                                        <button type="button" class="btn btn-blue">This Week</button>
                                        <button type="button" class="btn btn-blue">Last Week</button>
                                    </div>
                                </div>
                            </form>

                            {/* table */}
                            <div class="table-responsive">
                                <table id="table_id" class="display table table-striped responsive nowrap">
                                    <thead>
                                        <tr>
                                            <th>Round No</th>
                                            <th>Serial No</th>
                                            <th>Time</th>
                                            <th>Begining Enteries</th>
                                            <th>Before Winning</th>
                                            <th>JPBET</th>
                                            <th>Game Bet</th>
                                            <th>Win</th>
                                            <th>Ending Entries</th>
                                            <th>After Winning</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button type="button" className="btn btn-info" onClick={removeModal}>Cancel</button>
                    </ModalFooter>
                </ModalContent>
            </ModalDialog>
        </Modal>
    )
}

export default GameHistoryModal