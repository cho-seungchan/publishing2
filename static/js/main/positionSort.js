// 검색창 눌렀을 때만 뜨는 창
const searchBox = document.querySelector(".searchBox>input");
const searchWindow = document.querySelector(".searchWindow");

searchBox.addEventListener("focus", () => {
    searchWindow.style.visibility = "visible";
    searchWindow.style.zIndex = "999999";
    mainNav.style.zIndex = "4"; // **mainNav를 아래로 내리기**
});

searchBox.addEventListener("blur", () => {
    searchWindow.style.visibility = "hidden";
    mainNav.style.zIndex = "10";
});

// 네비 스크롤에 따라 나타났다 없어지게 하기
const fixedNav = document.querySelector(".fixedNavigation"); // 고정된 nav
const mainNav = document.querySelector(".mainNavigation"); // 스크롤 따라 사라질 nav

// 이전 스크롤 위치를 저장할 변수
let lastScrollPosition = 0;
const scrollThreshold = 100; // 100px 이상 스크롤을 내리면 mainNav가 숨겨짐

let isMainNavHovered = false; // mainNav에 마우스가 올라갔는지 체크하는 변수
let isFixedNavHovered = false; // fixedNav에 마우스가 올라갔는지 체크하는 변수

// 스크롤 이벤트로 mainNav 보이기/숨기기
window.addEventListener("scroll", function () {
    const currentScrollPosition = window.scrollY;

    // mainNav, fixedNav에 마우스가 없을 때만 스크롤에 따른 동작
    if (!isMainNavHovered && !isFixedNavHovered) {
        if (currentScrollPosition > scrollThreshold) {
            // 스크롤이 설정한 값을 넘으면
            if (currentScrollPosition > lastScrollPosition) {
                mainNav.classList.remove("show"); // mainNav 숨기기
                fixedNav.style.borderBottom = "1px solid rgb(228, 228, 228)";
            } else {
                mainNav.classList.add("show"); // 스크롤 올리면 나타나게
                fixedNav.style.borderBottom = "none";
                mainNav.style.zIndex = "5";
            }
        } else {
            // 스크롤이 threshold 아래일 경우 mainNav를 항상 보이게
            mainNav.classList.add("show"); // mainNav 나타나게 하기
            fixedNav.style.borderBottom = "none"; // 밑 경계선 안 보이게
            mainNav.style.zIndex = "5";
        }
    }

    lastScrollPosition = currentScrollPosition;
});

// fixedNavigation에 마우스 오버 시
fixedNav.addEventListener("mouseover", function () {
    isFixedNavHovered = true; // fixedNav에 마우스가 올라가면
    mainNav.classList.add("show");
});

// fixedNavigation에서 마우스 아웃 시
fixedNav.addEventListener("mouseout", function () {
    isFixedNavHovered = false; // fixedNav에서 마우스가 나가면
    if (!isMainNavHovered && window.scrollY > scrollThreshold) {
        mainNav.classList.remove("show");
    }
});

// mainNavigation에 마우스 오버 시
mainNav.addEventListener("mouseover", function () {
    isMainNavHovered = true; // mainNav에 마우스가 올라가면
    mainNav.classList.add("show");
});

// mainNavigation에서 마우스 아웃 시
mainNav.addEventListener("mouseout", function () {
    isMainNavHovered = false; // mainNav에서 마우스가 나가면
    if (window.scrollY > scrollThreshold) {
        mainNav.classList.remove("show");
    }
});
