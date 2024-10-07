/* state = tillståndet i vår app. 

all data vi lagrat från config och från användaren 

vårt program behöver "komma ihåg" saker, vilka?

render = visa upp vårt state

DRY = dont repeat yourself

ord vi använt: statiskt, dynamiskt, abstrahera, DRY

*/

// vårt state
const userOptions = [{ word: "Pretty", num: 12 }];

// redigera state
const addUserOption = (word, num) => {
	userOptions.push({ word, num });
	console.log(userOptions);
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
	for (const obj of userOptions) {
		const newElement = document.createElement("div");
		newElement.innerHTML = `Text: ${obj.word}, Number: ${obj.num}`;
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
	addUserOption(
		document.querySelector("#add").value,
		document.querySelector("#num").value
	);
	renderAll();
	console.log(userOptions);
});

renderAll();
