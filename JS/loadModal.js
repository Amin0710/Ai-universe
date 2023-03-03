//fetch only 1 AI data
function loadModals(id) {
	toggleSpinner(true); // start
	fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
		.then((response) => response.json())
		.then((data) => addModalData(data.data))
		.catch((reason) => console.log(reason));
}
