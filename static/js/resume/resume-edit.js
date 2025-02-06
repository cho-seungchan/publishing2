const righttopbutton = document.querySelector("div.header-right-user7");
const righttopmenu = document.querySelector("div.header-right-menu8");
NodeList.prototype.addEventListener = Array.prototype.addEventListener;

// 우상단 마우스 이벤트트
righttopbutton.addEventListener("mouseover", function () {
    righttopmenu.style.display = "block";
});
righttopmenu.addEventListener("mouseover", function () {
    righttopmenu.style.display = "block";
});
righttopbutton.addEventListener("mouseout", function () {
    righttopmenu.style.display = "none";
});
righttopmenu.addEventListener("mouseout", function () {
    righttopmenu.style.display = "none";
});

const topNavigation = document.querySelector("header.header-sc");
const topMenu = document.querySelector("nav.nav-sc3");

topNavigation.addEventListener("mouseover", function () {
    topMenu.style.display = "flex";
});

topNavigation.addEventListener("mouseout", function () {
    topMenu.style.display = "none";
});
// 검색창
const searchBoxBlink = document.querySelectorAll("div.search-box");
const searchBoxHidden = document.querySelectorAll("div.searchbox-hidden");
const temp = document.querySelector("div.searchbox-hidden-content");
const mediaSearchBtn = document.querySelector("button.media-searchbtn");
const topSearchBox = document.querySelector("div.searchbox-top");

const oldtopSearchBox = document.querySelector("div.searchbox-top.old");
const newtopSearchBox = document.querySelector("div.searchbox-top.formedia");
const oldSearchBoxOnClick = document.querySelector("div.searchbox-onclick.old");
const newSearchBoxOnClick = document.querySelector(
    "div.searchbox-onclick.formedia"
);

window.addEventListener("resize", () => {
    window.location.reload;
    searchBoxHidden.forEach((hiddenArea) => {
        searchBoxBlink.forEach((blinkArea) => {
            if (window.innerWidth < 1080) {
                if (oldtopSearchBox.innerHTML != "") {
                    hiddenArea.classList.remove("invisible");
                    hiddenArea.removeAttribute("style");
                    newtopSearchBox.innerHTML += oldtopSearchBox.innerHTML;
                    oldtopSearchBox.innerHTML = "";
                }
            } else if (window.innerWidth >= 1080) {
                if (newtopSearchBox.innerHTML != "") {
                    newSearchBoxOnClick.style.display = "none";
                    hiddenArea.classList.add("invisible");
                    hiddenArea.style.display = "none";
                    console.log("실행됨");
                    oldtopSearchBox.innerHTML += newtopSearchBox.innerHTML;
                    newtopSearchBox.innerHTML = "";
                }
            }
        });
    });
});

document.addEventListener("click", (e) => {
    console.log(e.target);
    window.location.reload;

    searchBoxHidden.forEach((hiddenArea) => {
        searchBoxBlink.forEach((blinkArea) => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1080) {
                hiddenArea.classList.add("invisible");
                if (blinkArea.contains(e.target)) {
                    console.log(screenWidth);
                    hiddenArea.classList.remove("invisible");
                    hiddenArea.setAttribute("style", "display : block;");
                    console.log("일반형/검색");
                } else if (!hiddenArea.contains(e.target)) {
                    console.log(screenWidth);
                    hiddenArea.classList.add("invisible");
                    hiddenArea.removeAttribute("style");
                    console.log("일반형/탈출");
                }
            } else if (screenWidth < 1080) {
                if (mediaSearchBtn.contains(e.target)) {
                    hiddenArea.classList.remove("invisible");
                    newtopSearchBox.style.display = "block";
                    newSearchBoxOnClick.style.display = "block";
                    console.log("반응형/검색");
                } else if (!newtopSearchBox.contains(e.target)) {
                    hiddenArea.classList.add("invisible");
                    newtopSearchBox.style.display = "none";
                    newSearchBoxOnClick.style.display = "none";
                    console.log("반응형/탈출");
                }
            }
        });
    });
});

// 검색창
