import { useParams } from "react-router-dom";
import { useState } from "react";

// import pages
import JoinLine from "./joinline";
import LineUp from "./lineup";

const Line = () => {
	const { id } = useParams();

	// Page State
	const [linedUp, setLinedUp] = useState(true);

	// Store Properties
	const [storeName, setStoreName] = useState("Nike");
	const [storeDescription, setStoreDescription] = useState("Edmonton South Commons");
	const [estWait, setEstWait] = useState(130);

	// const [storeName, setStoreName] = useState("");
	// const [storeDescription, setStoreDescription] = useState("");
	// const [estWait, setEstWait] = useState("");

	// User Properties
	const [firstName, setFirstName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	if (linedUp)
		return (
			<LineUp
				id={id}
				storeName={storeName}
				storeDescription={storeDescription}
				estWait={estWait}
				setLinedUp={setLinedUp}
				firstName={firstName}
			/>
		);
	else
		return (
			<JoinLine
				id={id}
				storeName={storeName}
				storeDescription={storeDescription}
				estWait={estWait}
				setLinedUp={setLinedUp}
				firstName={firstName}
				setFirstName={setFirstName}
				phoneNumber={phoneNumber}
				setPhoneNumber={setPhoneNumber}
			/>
		);
};

export default Line;
