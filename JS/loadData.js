//fetch all data
function loadAIs(limit) {
	toggleSpinner(true); // start
	fetch("https://openapi.programming-hero.com/api/ai/tools")
		.then((response) => response.json())
		.then((data) => distributeData(data.data.tools, limit))
		.catch((reason) => console.log(reason));
}

function distributeData(ais, showNumber) {
	const showAll = document.getElementById("show-all");
	if (showNumber !== undefined || null) {
		// display 6 ais only
		if (ais.length > showNumber) {
			ais = ais.slice(0, showNumber);
			showAll.classList.remove("d-none");
		}
	} else {
		ais = ais.slice(6, ais.length);
		showAll.classList.add("d-none"); // hide button after show all
	}

	for (const ai of ais) {
		addCard(ai.image, ai.name, ai.features, ai.published_in);
	}
	toggleSpinner(false); // end
}
