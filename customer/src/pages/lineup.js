import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import Modal from "../components/modal";

const LineUp = ({ id, storeName, storeDescription, estWait, setLinedUp, firstName }) => {
	const hours = Math.floor(estWait / 60);
	const minutes = estWait - 60 * hours;

	// Line properties
	const [lineNumber, setLineNumber] = useState(60);
	const [lineLength, setLineLength] = useState(100);

	const [pushbackNumber, setPushbackNumber] = useState(0);

	// Modal control
	const [pushBackModalVisible, setPushBackModalVisible] = useState(false);
	const [leaveModalVisible, setLeaveModalVisible] = useState(false);

	const pushback = () => {};
	const leaveLine = () => {
		window.location.reload(false);
	};

	return (
		<div className="lineup-page line-page">
			<header>
				<img src={logo} alt="logo" />
			</header>
			<main>
				<div className="main-container">
					<section className="store-info">
						<h2 className="store-name">{storeName}</h2>
						<p className="store-description">{storeDescription}</p>
						<p className="store-id">Store #{id}</p>
					</section>
					<div className="divider" aria-hidden="true" />
					<section className="welcome-msg">
						<h4>Welcome, {firstName}!</h4>
					</section>
					<section className="line-info">
						<h4 className="label">You are number</h4>
						<p className="number">{lineNumber}</p>
					</section>
					<section className="est-wait">
						<h4 className="label">Estimated wait time:</h4>
						<p>
							{hours != 0 ? `${hours} hours ` : ""}
							{minutes} minutes
						</p>
					</section>
					<div className="divider" aria-hidden="true" />
					<section className="buttons">
						<button
							className="solid"
							onClick={() => {
								setPushBackModalVisible(true);
							}}
						>
							Push Back
						</button>
						<button
							className="transparent"
							onClick={() => {
								setLeaveModalVisible(true);
							}}
						>
							Leave Line
						</button>
					</section>
				</div>
			</main>

			<Modal
				title="Push back your spot"
				setOpen={setPushBackModalVisible}
				open={pushBackModalVisible}
			>
				<p className="push-back-description">
					Not quite ready? No worries! Push back your spot to give you more time until you enter the
					store.
				</p>

				<label htmlFor="push-back-number" className="push-back-label">
					Push back{" "}
					<input
						type="number"
						id="push-back-number"
						className="push-back-number"
						min="0"
						max={`${lineLength - lineNumber}`}
						step="1"
						value={pushbackNumber}
						onChange={(e) => {
							setPushbackNumber(e.target.valueAsNumber);
						}}
					/>
					spots.
				</label>

				<p className="push-back-description">
					If you click on confirm, you will now be in position number {lineNumber + pushbackNumber}.
				</p>

				<div className="modal-buttons">
					<button
						className="transparent-blue"
						onClick={() => {
							setPushBackModalVisible(false);
						}}
					>
						Cancel
					</button>

					<button
						className="solid-blue"
						onClick={() => {
							pushback();
						}}
					>
						Confirm
					</button>
				</div>
			</Modal>

			<Modal title="Leave line" setOpen={setLeaveModalVisible} open={leaveModalVisible}>
				<p className="push-back-description">
					Are you sure you would like to leave the line? You will give up your spot and will have to
					rejoin from the back.
				</p>

				<div className="modal-buttons">
					<button
						className="transparent-blue"
						onClick={() => {
							setLeaveModalVisible(false);
						}}
					>
						Cancel
					</button>

					<button
						className="solid-blue"
						onClick={() => {
							leaveLine();
						}}
					>
						Confirm
					</button>
				</div>
			</Modal>
		</div>
	);
};

export default LineUp;
