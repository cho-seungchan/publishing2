const righttopbutton = document.querySelector("div.header-right-user7");
const righttopmenu = document.querySelector("div.header-right-menu8");
NodeList.prototype.addEventListener = Array.prototype.addEventListener;
// 우상단 마우스 이벤트트
righttopbutton.addEventListener("mouseover", function() {
    righttopmenu.style.display = "block";
})
righttopmenu.addEventListener("mouseover", function() {
    righttopmenu.style.display = "block";
})
righttopbutton.addEventListener("mouseout", function() {
    righttopmenu.style.display = "none";
})
righttopmenu.addEventListener("mouseout", function() {
    righttopmenu.style.display = "none";
})

// 




