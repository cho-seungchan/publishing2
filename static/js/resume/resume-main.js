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

const searchBoxBlink = document.querySelector("div.search-box");
const searchBoxHidden = document.querySelector("div.searchbox-hidden")
const searchBoxOnClick = document.querySelector("div.searchbox-onclick")

document.addEventListener('click', function(e){
    if(searchBoxBlink.contains(e.target)){
        searchBoxHidden.style.display = "block";
        searchBoxOnClick.style.display = "block";
    }
    else if(!searchBoxHidden.contains(e.target)){
        searchBoxHidden.style.display = "none";
        searchBoxOnClick.style.display = "none";
    }
})

// 모바일 검색창

const mediaSearchBtn = document.querySelector("button.media-searchbtn")
const topSearchBox = document. querySelector("div.searchbox-top")
const oldtopSearchBox = document.querySelector("div.searchbox-top.old")
const newtopSearchBox = document.querySelector("div.searchbox-top.formedia")
const oldSearchBoxOnClick = document.querySelector("div.searchbox-onclick.old")
const newSearchBoxOnClick = document.querySelector("div.searchbox-onclick.formedia")

document.addEventListener('click', function(e){
    if(mediaSearchBtn.contains(e.target)){
        topSearchBox.style.display = "block";
        searchBoxHidden.style.display = "block";
        searchBoxOnClick.style.display = "block";
    }
    else if(!mediaSearchBtn.contains(e.target)){
        searchBoxHidden.style.display = "none";
        searchBoxOnClick.style.display = "none";
    }
})

window.addEventListener('change', ()=>{
if(window.innerWidth < 1080){
    newtopSearchBox.innerHTML = oldtopSearchBox.innerHTML;
    oldtopSearchBox.innerHTML = '';
    newSearchBoxOnClick.innerHTML = oldSearchBoxOnClick.innerHTML;
    oldSearchBoxOnClick.innerHTML = '';
}
else{
    oldtopSearchBox.innerHTML = newtopSearchBox.innerHTML;
    newtopSearchBox.innerHTML = '';
    oldSearchBoxOnClick.innerHTML = newSearchBoxOnClick.innerHTML;
    newSearchBoxOnClick.innerHTML = '';
}
})