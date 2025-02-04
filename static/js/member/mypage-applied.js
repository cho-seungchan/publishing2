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

const filterButton = document.querySelectorAll("button.btn-text")
const filterArrow = document.querySelectorAll("svg.arrow")

filterButton.forEach(button => {
    button.addEventListener('click',()=> {
        filterArrow.forEach(arrow =>{
            
            if(button.getAttribute("aria-expanded") == "false"){
                button.setAttribute("aria-expanded","true")
                arrow.classList.add("arrow-up")
                console.log(button.getAttribute("aria-expanded"))
            }
            else{
                button.setAttribute("aria-expanded","false")
                arrow.classList.remove("arrow-up")
                console.log(button.getAttribute("aria-expanded"))
            }
        })
        
    })
})
