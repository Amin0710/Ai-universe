function addModalData(data) {
	const modals = document.getElementById("main");

	const modalData = document.createElement("div");
	modalData.classList.add("all-modals");

	modalData.innerHTML = `
    <div
		class="modal fade"
		id="modal_${data.id}"
		data-bs-backdrop="static"
		data-bs-keyboard="false"
		tabindex="-1"
		aria-labelledby="staticBackdropLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div id="close" class="border-0">
					<button
						id="close_btn"
						type="button"
						data-bs-dismiss="modal"
						aria-label="Close"
					>
						<i
							class="text-danger fa-solid fa-circle-xmark fa-2x bg-white rounded-5"
						></i>
					</button>
				</div>
				<div class="modal-body">
					<div id="modal_data" class="container-fluid">
						<div class="row p-lg-5 m-lg-5">
							<div
								class="col-lg-6 col-sm-12 modal_col_1 rounded-4 p-lg-5"
							>
								<h5 class="head-text">${data.description}</h5>
								<div
									class="d-flex justify-content-between my-4 flex-col-small"
								>
									<div
										class="per_month_box me-3 text-success bg-white rounded-3"
									>
										<p class="text-center p-3 d-flex align-items-center">
											${
												data.pricing[0]
													? data.pricing[0].price
													: "Free of Cost" + "/" + data.pricing[0].plan
											}
										</p>
									</div>
									<div
										class="per_month_box me-3 text-warning bg-white rounded-3"
									>
										<p class="text-center p-3 d-flex align-items-center">
											${
												data.pricing[1]
													? data.pricing[1].price
													: "Free of Cost" + "/" + data.pricing[1].plan
											}
										</p>
									</div>
									<div
										class="per_month_box me-3 text-danger bg-white rounded-3"
									>
										<p class="text-center p-3 d-flex align-items-center">
											${
												data.pricing[2]
													? data.pricing[2].price
													: "Free of Cost" + "/" + data.pricing[2].plan
											}
										</p>
									</div>
								</div>
								<div class="d-flex justify-content-between">
									<div>
										<h5 class="card-title head-text">Features</h5>
										<ul class="card-text">
											<li class="text-secondary body-text">
												${data.features[0] ? data.features[0].feature_name : "No Data Found"}
											</li>
											<li class="text-secondary body-text">
												${data.features[1] ? data.features[1].feature_name : "No Data Found"}
											</li>
											<li class="text-secondary body-text">
												${data.features[2] ? data.features[2].feature_name : "No Data Found"}
											</li>
										</ul>
									</div>
									<div>
										<h5 class="card-title head-text">Integrations</h5>
										<ul class="card-text">
											<li class="text-secondary body-text">
												${data.integrations[0] ? data.integrations[0] : "No Data Found"}
											</li>
											<li class="text-secondary body-text">
												${data.integrations[1] ? data.integrations[1] : "No Data Found"}
											</li>
											<li class="text-secondary body-text">
												${data.integrations[2] ? data.integrations[2] : "No Data Found"}
											</li>
										</ul>
									</div>
								</div>
							</div>
							<!-- col--2 -->
							<div class="col-lg-6 col-sm-12 border rounded-4 p-lg-4">
								<div class="image-container">
									<div class="button-container">
										<button class="btn btn-danger py-1 px-3 rounded-3">
											${data.accuracy ? data.accuracy.score * 100 + "% accuracy" : ""}
										</button>
									</div>
									<img
										src="${data.image_link[0]}"
										class="rounded-3 p-0 m-0"
										alt="..."
										style="width: 100%; height: 340px"
									/>
								</div>
								<h5 class="text-center head-text pt-4 pb-2">
									${
										data.input_output_examples[0]
											? data.input_output_examples[0].input
											: "No Data Found"
									}
								</h5>
								<p class="text-center text-secondary body-text">
									${
										data.input_output_examples[0]
											? data.input_output_examples[0].output
											: "No Data Found"
									}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>`;

	modals.appendChild(modalData);
}
