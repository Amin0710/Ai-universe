function addCard(image, name, features, published_in) {
	const cards = document.getElementById("cards_holder");
	const card = document.createElement("div");
	card.classList.add("col");
	card.innerHTML = `
    <div class="card h-100">
    <div class="card_img_holder"><img src="${image}" class="card-img-top rounded-3" alt="..." /></div>
		<div class="card-body">
			<h5 class="card-title">Features</h5>
			<ol class="card-text">
				<li>${features[0]}</li>
				<li>${features[1]}</li>
				<li>${features[2] ? features[2] : "No More Features"}</li> 
			</ol>
		</div>
		<div class="d-flex justify-content-center">
			<hr style="width: 90%" />
		</div>
		<div class="card-body">
			<h5 class="card-title">${name}</h5>
			<div class="d-flex align-item-center">
				<div>
					<i class="fa-solid fa-calendar-days"></i>
				</div>
				<p class="card-text ps-2 date">${published_in}</p>
			</div>
		</div>
	</div>
`;
	cards.appendChild(card);
}
