// sort the array
function sortByDates(clickCount) {
	//This is absolutely extra just makeing sort button multi clickable
	const is_old_to_new = clickCount % 2 === 0 ? -1 : 1;

	const cards = document.querySelectorAll(".col");
	const sortedCards = Array.from(cards).sort((a, b) => {
		const dateA = new Date(a.querySelector(".date").textContent.trim());
		const dateB = new Date(b.querySelector(".date").textContent.trim());
		return (dateA - dateB) * is_old_to_new; // makeing sure old to new or new to old
	});
	const cardsHolder = document.getElementById("cards_holder");
	cardsHolder.innerHTML = "";
	sortedCards.forEach((card) => cardsHolder.appendChild(card));
}
