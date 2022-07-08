import React from "react";

function ErrorModal() {
	return (
		<div
			className="modal fade"
			id="error"
			tabIndex={-1}
			role="dialog"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h2 className="text-warning">Sorry!</h2>
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
						<p className="text-warning">Something went wrong.</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ErrorModal;
