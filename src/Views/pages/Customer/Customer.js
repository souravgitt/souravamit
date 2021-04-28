import React, {useState} from 'react';
import Button from '../../component/Button/Button';
import {CustomerData, DashTableData} from './CustomerData';
import AddCustomerModal from '../Modals/customerModal/AddCustomerModal';
import EditCustomerModal from '../Modals/customerModal/EditCustomerModal';
import RevertPurchaseModal from '../Modals/customerModal/RevertPurchaseModal';
import GiftHistoryModal from '../Modals/customerModal/GiftHistoryModal';
import GameHistoryModal from '../Modals/customerModal/GameHistoryModal';
import PurchaseModal from '../Modals/customerModal/PurchaseModal';
import RedeemModal from '../Modals/customerModal/RedeemModal';
import SpecialCompsModal from '../Modals/customerModal/SpecialCompsModal';

function Dashboard() {
	const [isOpen, setshowModal] = useState(false);
	const [modalId, setModalId] = useState("");

	const openModal = (id) => {
		setModalId(id)
		setshowModal(!isOpen);
	}
	
	const removeModal = () => setshowModal(!isOpen);

	return (
		<div className="customer">
			<h2 className="page-title">Customer</h2>

			<div className="custom-card">
				{CustomerData.map((card, i) => {
					i++
					return (
						<div className="card-box" key={i}>
							<div className="card-block">
								<div className="card-icon">
									<img src={`./assets/images/${card.imgsrc + i}.png`} alt={card.revenue} />
								</div>
								<div className="card-txt">
									<h4>{card.revenue}
										<span>${card.revenueVal}</span>
									</h4>
								</div>
							</div>
						</div>
					)
				})}
			</div>

			<section className="section">
				<div className="section-head clearfix">
					<h2 className="heading">Customer Account</h2>
					<Button btnClasses="btn-red pull-right" buttonClick={() => openModal('addCustomerModal')}>Add Customer</Button>
				</div>

				<div className="section-body">
					<div className="table-responsive">
						<table id="table_id" className="display table table-striped responsive nowrap">
							<thead>
								<tr>
									<th>Customer</th>
									<th>Name</th>
									<th className="text-nowrap">Mobile ID</th>
									<th>Email ID</th>
									<th>Gender</th>
									<th>Mobile</th>
									<th>DOB(MM/DD/YYYY)</th>
									<th>Status</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{DashTableData.map((row, i) => {
									return (
										<tr key={i}>
											<td>{row.customer}</td>
											<td>{row.name}</td>
											<td>{row.mobid}</td>
											<td>{row.emailid}</td>
											<td>{row.gender}</td>
											<td>{row.mobno}</td>
											<td>{row.dob}</td>
											<td>
												<span className="verfy_green">Verify</span>
											</td>
											<td>
												<Button btnClasses="btn-default" buttonClick={() => openModal('editCustomerModal')}>Edit</Button>
												<Button btnClasses="btn-red" buttonClick={() => openModal('revertPurchaseModal')}>Revert Purchase</Button>
												<Button btnClasses="btn-success" buttonClick={() => openModal('giftHistoryModal')}>Gift History</Button>
												<Button btnClasses="btn-primary" buttonClick={() => openModal('gameHistoryModal')}>Game History</Button>
												<Button btnClasses="btn-success" buttonClick={() => openModal('purchaseModal')}>Purchase</Button>
												<Button btnClasses="btn-primary" buttonClick={() => openModal('redeemModal')}>Redeem</Button>
												<Button btnClasses="btn-primary" buttonClick={() => openModal('specialCompsModal')}>Special Comps</Button>
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>
			</section>
			
			{isOpen && modalId === "addCustomerModal" ? (
				<>
				<AddCustomerModal modalId="addCustomerModal" isOpen={isOpen} removeModal={removeModal} />
				<div className="modal-backdrop fade in"></div>
				</>
			): ""}

			{isOpen && modalId === "editCustomerModal" ? (
				<>
				<EditCustomerModal modalId={modalId} isOpen={isOpen} removeModal={removeModal} />
				<div className="modal-backdrop fade in"></div>
				</>
			): ""}

			{isOpen && modalId === "revertPurchaseModal" ? (
				<>
				<RevertPurchaseModal modalId={modalId} isOpen={isOpen} removeModal={removeModal} />
				<div className="modal-backdrop fade in"></div>
				</>
			): ""}

			{isOpen && modalId === "giftHistoryModal" ? (
				<>
				<GiftHistoryModal modalId={modalId} isOpen={isOpen} removeModal={removeModal} />
				<div className="modal-backdrop fade in"></div>
				</>
			): ""}

			{isOpen && modalId === "gameHistoryModal" ? (
				<>
				<GameHistoryModal modalId={modalId} isOpen={isOpen} removeModal={removeModal} />
				<div className="modal-backdrop fade in"></div>
				</>
			): ""}

			{isOpen && modalId === "purchaseModal" ? (
				<>
				<PurchaseModal modalId={modalId} isOpen={isOpen} removeModal={removeModal} />
				<div className="modal-backdrop fade in"></div>
				</>
			): ""}

			{isOpen && modalId === "redeemModal" ? (
				<>
				<RedeemModal modalId={modalId} isOpen={isOpen} removeModal={removeModal} />
				<div className="modal-backdrop fade in"></div>
				</>
			): ""}

			{isOpen && modalId === "specialCompsModal" ? (
				<>
				<SpecialCompsModal modalId={modalId} isOpen={isOpen} removeModal={removeModal} />
				<div className="modal-backdrop fade in"></div>
				</>
			): ""}
		</div>
	)
}

export default Dashboard;