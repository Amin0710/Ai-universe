function toggleSpinner(isLoading) {
	const loaderSection = document.getElementById("loader");
	if (isLoading) {
		loaderSection.classList.remove("d-none");
	} else {
		loaderSection.classList.add("d-none");
	}
}

// start with 6 AIs
loadAIs(6);

// Once click show all --> show all
document.getElementById("btn-show-all").addEventListener("click", function () {
	loadAIs();
});

// sort by dates
let clickCount = 0;
document.getElementById("sort").addEventListener("click", function () {
	clickCount++;
	sortByDates(clickCount);
});
