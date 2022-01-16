import logo from "../assets/logo.png";

const JoinLine = ({
	id,
	storeName,
	storeDescription,
	estWait,
	setLinedUp,
	firstName,
	setFirstName,
	phoneNumber,
	setPhoneNumber,
}) => {
	const hours = Math.floor(estWait / 60);
	const minutes = estWait - 60 * hours;

	const handleSubmit = (e) => {
		e.preventDefault(); // prevent default action

		// do form shenanigans here

		setLinedUp(true); // redirect to line page
	};

	return (
		<div className="join-page line-page">
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
					<section className="est-wait">
						<p className="label">Estimated wait time:</p>
						<p>
							{hours != 0 ? `${hours} hours ` : ""}
							{minutes} minutes
						</p>
					</section>
					<div className="divider" aria-hidden="true" />
					<section className="join-form">
						<form onSubmit={handleSubmit}>
							{/* First name */}
							<label htmlFor="first-name" className="required">
								Enter your first name
							</label>
							<input
								id="first-name"
								type="text"
								value={firstName}
								onChange={(e) => {
									setFirstName(e.target.value);
								}}
								aria-required="true"
								required
							/>

							{/* Phone number */}
							<label htmlFor="phone-number">
								Enter your phone number <span>(optional)</span>
							</label>
							<input
								id="phone-number"
								type="tel"
								pattern="[0-9]{10}"
								value={phoneNumber}
								onChange={(e) => {
									setPhoneNumber(e.target.value);
								}}
								aria-required="false"
								placeholder="eg. 1234567890"
							/>

							{/* Receive test messages? */}
							<label className="checkbox-label" htmlFor="receive-texts">
								<input type="checkbox" id="receive-texts" />I would like to receive text updates.
							</label>

							<button type="submit" className="solid">
								Line Up
							</button>
						</form>
					</section>
				</div>
			</main>
		</div>
	);
};

export default JoinLine;
