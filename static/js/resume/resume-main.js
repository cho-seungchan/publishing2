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

// 모바일 검색창
const searchBoxBlink = document.querySelectorAll("div.search-box");
const searchBoxHidden = document.querySelectorAll("div.searchbox-hidden");
const temp = document.querySelector("div.searchbox-hidden-content");
const mediaSearchBtn = document.querySelector("button.media-searchbtn");
const topSearchBox = document.querySelector("div.searchbox-top");
const pcHiddenBox = document.querySelector(
    "oldtopSearchBox > div.searchbox-hidden"
);

const oldtopSearchBox = document.querySelector("div.searchbox-top.old");
const newtopSearchBox = document.querySelector("div.searchbox-top.formedia");
const oldSearchBoxOnClick = document.querySelector("div.searchbox-onclick.old");
const newSearchBoxOnClick = document.querySelector(
    "div.searchbox-onclick.formedia"
);
// 창 열릴 때 초기 실행용
searchBoxHidden.forEach((hiddenArea) => {
    searchBoxBlink.forEach((blinkArea) => {
        if (window.innerWidth < 1080) {
            if (oldtopSearchBox.innerHTML != "") {
                hiddenArea.classList.remove("hidden");
                newtopSearchBox.innerHTML += oldtopSearchBox.innerHTML;
                oldtopSearchBox.innerHTML = "";
            }
        } else if (window.innerWidth >= 1080) {
            if (newtopSearchBox.innerHTML != "") {
                pcHiddenBox.style.display = "none";
                oldtopSearchBox.innerHTML += newtopSearchBox.innerHTML;
                newtopSearchBox.innerHTML = "";
                hiddenArea.classList.add("hidden");
            }
        }
    });
});
//  창의 사이즈(가로)가 바뀔 때 감응하는 코드
window.addEventListener("resize", () => {
    searchBoxHidden.forEach((hiddenArea) => {
        searchBoxBlink.forEach((blinkArea) => {
            if (window.innerWidth < 1080) {
                if (oldtopSearchBox.innerHTML != "") {
                    hiddenArea.classList.remove("hidden");
                    newtopSearchBox.innerHTML += oldtopSearchBox.innerHTML;
                    oldtopSearchBox.innerHTML = "";
                }
            } else if (window.innerWidth >= 1080) {
                if (newtopSearchBox.innerHTML != "") {
                    newSearchBoxOnClick.style.display = "none";
                    oldtopSearchBox.innerHTML += newtopSearchBox.innerHTML;
                    newtopSearchBox.innerHTML = "";
                    pcHiddenBox.style.display = "none";
                }
            }
        });
    });
});

//  가로 길이에 따라 열리는 검색창이 다르게 작동하는 코드.
//  모바일 --> PC로 변경될 때 검색창이 열린 상태로 고정되는 오류가 있음.
document.addEventListener("click", (e) => {
    searchBoxHidden.forEach((hiddenArea) => {
        searchBoxBlink.forEach((blinkArea) => {
            const screenWidth = window.innerWidth;
            hiddenArea.classList.add("hidden");
            if (screenWidth >= 1080) {
                hiddenArea.classList.add("hidden");
                if (blinkArea.contains(e.target)) {
                    console.log(screenWidth);
                    hiddenArea.classList.remove("hidden");

                    console.log("일반형/검색");
                } else if (!hiddenArea.contains(e.target)) {
                    console.log(screenWidth);
                    hiddenArea.classList.add("hidden");
                    console.log("일반형/탈출");
                }
            } else if (screenWidth < 1080) {
                if (mediaSearchBtn.contains(e.target)) {
                    hiddenArea.classList.remove("hidden");
                    newtopSearchBox.style.display = "block";
                    newSearchBoxOnClick.style.display = "block";
                    console.log("반응형/검색");
                } else if (!newtopSearchBox.contains(e.target)) {
                    hiddenArea.classList.add("hidden");
                    newtopSearchBox.style.display = "none";
                    newSearchBoxOnClick.style.display = "none";
                    console.log("반응형/탈출");
                }
            }
        });
    });
});
