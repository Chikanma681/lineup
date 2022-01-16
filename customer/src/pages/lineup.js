import logo from "../assets/logo.png";
import { useState } from "react";

const LineUp = ({ id, storeName, storeDescription, estWait, setLinedUp, firstName }) => {
	const hours = Math.floor(estWait / 60);
	const minutes = estWait - 60 * hours;

	const [lineNumber, setLineNumber] = useState(0);

	// Modal control
	const [pushBackModalVisible, setPushBackModalVisible] = useState(false);
	const [leaveModalVisible, setLeaveModalVisible] = useState(false);

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
		</div>
	);
};

export default LineUp;
