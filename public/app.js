/* state = tillståndet i vår app. 

all data vi lagrat från config och från användaren 

vårt program behöver "komma ihåg" saker, vilka?

render = visa upp vårt state

*/

// vårt state
const userOptions = ["basic", "pretty", "deluxe", "ultra"];

// redigera state
const addUserOption = (word) => {
	userOptions.push(word);
};

// en första render-funktion
const renderUserOptionsAsUl = () => {
	const selectElement = document.querySelector("ul");
	selectElement.innerHTML = "";
	for (const el of userOptions) {
		const newOption = document.createElement("li");
		newOption.innerHTML = el;
		selectElement.appendChild(newOption);
	}
};

const renderCards = () => {
	const selectElement = document.querySelector("main");
	selectElement.innerHTML = "";
	for (const el of userOptions) {
		const newElement = document.createElement("div");
		newElement.innerHTML = el;
		selectElement.appendChild(newElement);
	}
};

const renderAll = () => {
	renderUserOptionsAsUl();
	renderCards();
};

// ==== appen ====

// lyssnare
document.querySelector("button").addEventListener("click", (e) => {
	e.preventDefault();
	addUserOption(document.querySelector("#add").value);
	renderAll();
	console.log(userOptions);
});

renderAll();
