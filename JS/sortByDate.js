// sort the array
function sortByDates() {
	const cards = document.querySelectorAll(".col");
	const sortedCards = Array.from(cards).sort((a, b) => {
		const dateA = new Date(a.querySelector(".date").textContent.trim());
		const dateB = new Date(b.querySelector(".date").textContent.trim());
		return dateA - dateB;
	});
	const cardsHolder = document.getElementById("cards_holder");
	cardsHolder.innerHTML = "";
	sortedCards.forEach((card) => cardsHolder.appendChild(card));
}
