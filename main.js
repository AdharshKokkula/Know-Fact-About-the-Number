let userInputEl = document.getElementById("userInput");
let factEl = document.getElementById("fact");
let spinnerEl = document.getElementById("spinner");

function addFact(event) {
    let userInput = userInputEl.value;
    if (event.key === "Enter") {
        spinnerEl.classList.remove("d-none");
        factEl.classList.add("d-none");
        if (userInput === "") {
            alert("enter a number");
        } else {
            let url = "https://apis.ccbp.in/numbers-fact?number=" + userInput;
            let options = {
                method: "GET"
            };
            fetch(url, options)
                .then(function(response) {
                    return response.json();
                })
                .then(function(jsonData) {
                    spinnerEl.classList.add("d-none");
                    factEl.classList.remove("d-none");
                    factEl.textContent = jsonData.fact;
                });
        }
    }
}

userInputEl.addEventListener("keydown", addFact);
