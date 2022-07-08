import React from "react";

function SuccessModal() {
	return (
		<div
			className="modal fade"
			id="success"
			tabIndex={-1}
			role="dialog"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h2 className="text-success">Thank you!</h2>
						<button
							type="button"
							className="close"
							data-dismiss="modal"
							aria-label="Close"
						>
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div className="modal-body">
						<p className="text-success">Your message is successfully sent...</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SuccessModal;
