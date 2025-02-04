const mainContentArea = document.querySelectorAll(
    "div.main-content2 ul.applied-list0"
);
const writingButton = document.getElementById("writing");
const appliedButton = document.getElementById("applied");
const passedButton = document.getElementById("passed");
const hiredButton = document.getElementById("hired");
const rejectedButton = document.getElementById("rejected");

writingButton.addEventListener("click", () => {
    mainContentArea.forEach((list) => {
        console.log(list.classList[2]);
        if (list.classList.contains("writing-list")) {
            list.classList.remove("hidden");
        } else {
            list.classList.add("hidden");
        }
    });
});

appliedButton.addEventListener("click", () => {
    mainContentArea.forEach((list) => {
        if (list.classList.contains("applied-list")) {
            list.classList.remove("hidden");
        } else {
            list.classList.add("hidden");
        }
    });
});

passedButton.addEventListener("click", () => {
    mainContentArea.forEach((list) => {
        if (list.classList.contains("passed-list")) {
            list.classList.remove("hidden");
        } else {
            list.classList.add("hidden");
        }
    });
});

hiredButton.addEventListener("click", () => {
    mainContentArea.forEach((list) => {
        if (list.classList.contains("hired-list")) {
            list.classList.remove("hidden");
        } else {
            list.classList.add("hidden");
        }
    });
});

rejectedButton.addEventListener("click", () => {
    mainContentArea.forEach((list) => {
        if (list.classList.contains("rejected-list")) {
            list.classList.remove("hidden");
        } else {
            list.classList.add("hidden");
        }
    });
});
