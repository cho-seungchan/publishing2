document.querySelectorAll("button").forEach((button) => {
    console.log(button.outerHTML);
    button.addEventListener("click", (e) => {
        console.log(e.target.outerHTML);
        document.querySelectorAll("button").forEach((e) => {
            e.classList.remove("clicked");
        });
        e.target.classList.add("clicked");
    });
});
