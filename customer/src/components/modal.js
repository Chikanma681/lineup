const Modal = ({ open, setOpen, title, children }) => {
	if (open) {
		return (
			<div
				id="modal-component"
				className="modal-component z-10 justify-center items-center"
				onClick={(e) => {
					// close when clicking away from children
					if (e.target.id === "modal-component") {
						setOpen(false);
					}
				}}
			>
				<div className="modal-container">
					<div className="title-container">
						<h3 className="title">{title}</h3>
					</div>
					<div className="divider modal-divider"></div>
					{children}
				</div>
			</div>
		);
	} else return <div className="empty"></div>;
};

export default Modal;
