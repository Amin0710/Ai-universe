//fetch all data
fetch("https://openapi.programming-hero.com/api/ai/tools")
	.then((response) => response.json())
	.then((data) => sortData(data.data.tools));

function sortData(ais) {
	for (const ai of ais) {
		addCard(ai.image, ai.name, ai.features, ai.published_in);
	}
}

function addCard(image, name, features, published_in) {
	const cards = document.getElementById("cards_holder");
	const card = document.createElement("div");
	card.classList.add("col");
	card.innerHTML = `
    <div class="card h-100">
		<img src="${image}" class="card-img-top" alt="..." />
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
				<p class="card-text ps-2">${published_in}</p>
			</div>
		</div>
	</div>
`;
	cards.appendChild(card);
}