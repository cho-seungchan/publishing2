const editButton = document.querySelectorAll("button.btn-modify");
const check = document.querySelectorAll("tr.field");

editButton.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(check.classList);
        editButton.parentElement.previousSibling.classList.remove("inactive");
        editButton.parentElement.previousSibling.previousSibling.classList.add(
            "inactive"
        );
    });
});
