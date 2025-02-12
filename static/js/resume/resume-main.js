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
                    hiddenArea.classList.remove("hidden");
                } else if (!hiddenArea.contains(e.target)) {
                    hiddenArea.classList.add("hidden");
                }
            } else if (screenWidth < 1080) {
                if (mediaSearchBtn.contains(e.target)) {
                    hiddenArea.classList.remove("hidden");
                    newtopSearchBox.style.display = "block";
                    newSearchBoxOnClick.style.display = "block";
                } else if (!newtopSearchBox.contains(e.target)) {
                    hiddenArea.classList.add("hidden");
                    newtopSearchBox.style.display = "none";
                    newSearchBoxOnClick.style.display = "none";
                }
            }
        });
    });
});

const addfileButton = document.getElementById("addfilebutton");
const emptyfileArea = document.querySelector(".empty-file");
const fileaddArea = document.querySelector("ul.file-container");
const input = document.getElementById("attach");

addfileButton.addEventListener("click", () => {
    input.click();
});

input.addEventListener("change", (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    var newFile = document.createElement("li");
    newFile.innerHTML = `<span class="file-type">PDF</span>
                    <span class="file-title">${[file][0].name}</span>
                    <span class="file-create">2025.02.06 등록</span>
                    <button type="button" class="file-remove">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill="#C4C4C4"
                                fill-rule="evenodd"
                                d="M4.667 2h6.666v2.667H14V6h-1.333v8H3.333V6H2V4.667h2.667V2ZM6 4.667h4V3.333H6v1.334ZM4.667 6v6.667h6.666V6H4.667ZM6 10.667V8h1.333v2.667H6ZM8.667 8v2.667H10V8H8.667Z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>`;
    reader.addEventListener("load", (e) => {
        const path = e.target.result;
        if (path.includes("pdf")) {
            fileaddArea.append(newFile);
            emptyfileArea.classList.add("hidden")
        }
    });
    const fileRemoveBtn = newFile.querySelector(".file-remove")
    const amountLi = newFile.querySelectorAll("li")
    fileRemoveBtn.addEventListener('click',(e)=>{
            e.target.closest('li').remove()
            if(amountLi.length < 1){
            emptyfileArea.classList.remove("hidden")
            }
              
    })
});




const resumeOpenButton = document.querySelector("button.resume-open-button");
const toggleText = resumeOpenButton.nextElementSibling;
resumeOpenButton.addEventListener("click", () => {
    if (toggleText.innerText == "비공개") {
        resumeOpenButton.classList.add("public");
        toggleText.innerText = "공개";
    } else {
        resumeOpenButton.classList.remove("public");
        toggleText.innerText = "비공개";
    }
});
