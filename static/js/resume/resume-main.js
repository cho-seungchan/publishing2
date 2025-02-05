const righttopbutton = document.querySelector("div.header-right-user7");
const righttopmenu = document.querySelector("div.header-right-menu8");
NodeList.prototype.addEventListener = Array.prototype.addEventListener;

// 우상단 마우스 이벤트트
righttopbutton.addEventListener("mouseover", function () {
    righttopmenu.style.display = "block";
})
righttopmenu.addEventListener("mouseover", function () {
    righttopmenu.style.display = "block";
})
righttopbutton.addEventListener("mouseout", function () {
    righttopmenu.style.display = "none";
})
righttopmenu.addEventListener("mouseout", function () {
    righttopmenu.style.display = "none";
})






// 모바일 검색창
const searchBoxBlink = document.querySelector("div.search-box");
const searchBoxHidden = document.querySelector("div.searchbox-hidden")
const mediaSearchBtn = document.querySelector("button.media-searchbtn")
const topSearchBox = document.querySelector("div.searchbox-top")

const oldtopSearchBox = document.querySelector("div.searchbox-top.old")
const newtopSearchBox = document.querySelector("div.searchbox-top.formedia")
const oldSearchBoxOnClick = document.querySelector("div.searchbox-onclick.old")
const newSearchBoxOnClick = document.querySelector("div.searchbox-onclick.formedia")



// window.addEventListener('resize', (e) => {

//     if (window.innerWidth < 1080) {
//         if (oldtopSearchBox.innerHTML != "") {
//             newtopSearchBox.innerHTML += oldtopSearchBox.innerHTML;
//             oldtopSearchBox.innerHTML = '';
//         }
//     }
//     else {
//         if (newtopSearchBox.innerHTML != "") {
//             oldtopSearchBox.innerHTML += newtopSearchBox.innerHTML;
//             newtopSearchBox.innerHTML = '';
//         }
//     }
// })

function fullScreenToggle(){
    if (oldtopSearchBox.innerHTML != "") {
        newtopSearchBox.innerHTML += oldtopSearchBox.innerHTML;
        oldtopSearchBox.innerHTML = '';
    }
}
function mediaScreenToggle(){
    if (newtopSearchBox.innerHTML != "") {
        oldtopSearchBox.innerHTML += newtopSearchBox.innerHTML;
        newtopSearchBox.innerHTML = '';
    }
} 

function fullScreenSearch(){
    if(topSearchBox.contains(e.target)) {
            searchBoxHidden.style.display = "block"
            console.log("일반형/검색")
        }
        else if (!oldtopSearchBox.contains(e.target)) {
            searchBoxHidden.style.display = "none"
            console.log("일반형/탈출")

        }
}

function mediaScreenSearch(){
    if (mediaSearchBtn.contains(e.target)) {
        newtopSearchBox.style.display = "block"
        searchBoxHidden.style.display = "block"
        newSearchBoxOnClick.style.display = "block";
        console.log("반응형/검색")
    }
    else if (!newtopSearchBox.contains(e.target)) {
        newtopSearchBox.style.display = "none";
        newSearchBoxOnClick.style.display = "none";
        console.log("반응형/탈출")
    }
}

function setFuncBySize(){
    const screenWidth = window.innerWidth;
    if(screenWidth >= 1080){
        document.removeEventListener('click', mediaScreenSearch)
        document.removeEventListener('resize', mediaScreenToggle)
        document.addEventListener('click',fullScreenSearch)
        document.addEventListener('resize',fullScreenToggle)
    }
    else{
        document.removeEventListener('click',fullScreenSearch)
        document.removeEventListener('resize', fullScreenToggle)
        document.addEventListener('click', mediaScreenSearch)
        document.addEventListener('resize', mediaScreenToggle) 
    }
}
setFuncBySize();
window.addEventListener('resize', setFuncBySize);






// window.addEventListener('click', (e) => {

//     if (window.innerWidth < 1080) {
       
//     }
// })

// window.addEventListener('click', (e) => {
//     if (window.innerWidth >= 1080) {
//         if (topSearchBox.contains(e.target)) {
//             searchBoxHidden.style.display = "block"
//             console.log("일반형/검색")
//         }
//         else if (!oldtopSearchBox.contains(e.target)) {
//             searchBoxHidden.style.display = "none"
//             console.log("일반형/탈출")

//         }
//     }
// })

