const container = document.querySelector(".container");
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const data = new FormData(form);
    const dataObj = Object.fromEntries(data.entries());

    let name = dataObj.name;
    let email = dataObj.email;
    let password = dataObj.password;

    let message = `Welcome, ${name}! You are logged in!`;

    let endParagraph = document.createElement("p");
    endParagraph.textContent = message;

    container.appendChild(endParagraph);

    form.reset();
    form.style.display = "none";
});