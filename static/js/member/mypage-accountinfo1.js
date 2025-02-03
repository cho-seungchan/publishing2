const editButtons = document.querySelectorAll("button.btn-modify");

editButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const container = document.getElementsByClassName("field");
        const firstDiv = container.lastChild.childNodes[0];
        const secondDiv = container.lastChild.childNodes[1];
        firstDiv.classList.add("inactive");
        secondDiv.classList.remove("inactive");
        console.log(firstDiv.classList);
        console.log(secondDiv.classList);
    });
});
