function addCard(id, image, name, features, published_in) {
	const cards = document.getElementById("cards_holder");
	const card = document.createElement("div");
	card.classList.add("col");
	card.innerHTML = `
    <div class="card h-100">
		<div class="card_img_holder">
			<img src="${image}" class="card-img-top rounded-3" alt="..." />
		</div>
		<div class="card-body">
			<h5 class="card-title head-text">Features</h5>
			<ol class="card-text">
				<li class="text-secondary body-text" >${features[0]}</li>
				<li class="text-secondary body-text" >${features[1]}</li>
				<li class="text-secondary body-text" >${
					features[2] ? features[2] : "No More Features"
				}</li>
			</ol>
		</div>
		<div class="d-flex justify-content-center">
			<hr style="width: 90%" />
		</div>
		<div class="card-body d-flex justify-content-between">
			<div>
				<h5 class="card-title head-text">${name}</h5>
				<div class="d-flex align-item-center">
					<div>
						<i class="fa-solid fa-calendar-days text-secondary"></i>
					</div>
					<p class="card-text ps-2 date text-secondary body-text">${published_in}</p>
				</div>
			</div>

            <!-- Button trigger modal -->
			<div>
				<button
					type="button"
					class="btn modal_buttons"
					data-bs-toggle="modal"
					data-bs-target="#staticBackdrop"
				>
					<i
						class="fa-solid fa-circle-arrow-right fa-3x rounded-5"
						style="color: #fef7f7; background-color: #eb5757"
					></i>
				</button>
			</div>
		</div>
	</div>
`;
	cards.appendChild(card);
}
