const container = document.querySelector(".container");
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const data = new FormData(form);
    const dataObj = Object.fromEntries(data.entries());

    let name = dataObj.name;
    let email = dataObj.email;
    let phoneNumber = dataObj.phoneNumber;
    let comments = dataObj.comments;
    let coffeeFlavor = dataObj.coffeeFlavor;
    let interest = dataObj.interest;

    let message = `Thank you ${name}! We appreciate your interest in ${interest}. Your favorite coffee flavor is ${coffeeFlavor} and your comments are ${comments}. We will soon contact you at ${email} or ${phoneNumber}.`;

    let endParagraph = document.createElement("p");
    endParagraph.textContent = message;

    container.appendChild(endParagraph);

    form.reset();

    form.style.display = "none";
});