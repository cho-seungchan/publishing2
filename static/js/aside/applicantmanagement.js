// 포지션 전체 클릭되었을 때 진하게 여리게
document.querySelector(".title.all").addEventListener((e) => {});

// 다른 포지션이 클릭되었을 때
function toggleArrow(element) {
    // 모든 dropdown menu 없애기
    document.querySelectorAll("li").forEach((e) => {
        e.remove();
    });
    // 모든 화살표를 위로 향하게 하기
    document.querySelectorAll(".arrow").forEach((e) => {
        e.classList.remove("down");
    });
    // 클릭된 부분에 dropdown menu 생성
    if (!element.querySelector(".arrow").classList.contains("down")) {
        element.nextElementSibling.innerHTML = `
                <li>프론트 웹 개발자</li>
                <li>PHP 웹 개발자(신입)</li>
                <li>iOS 모바일앱 개발자</li>`;
        element.querySelector(".arrow").classList.toggle("down");
    }
}

// dropdown 메뉴가 클릭됬을 때 이벤트 발생시키기
document.querySelectorAll("ul").forEach((ul) => {
    ul.addEventListener("click", (e) => {
        // 클릭된 요소가 li인 경우
        if (e.target.tagName === "LI") {
            // 기존에 클릭되었던 메뉴의 클래스명 'clicked' 삭제
            document.querySelectorAll("li").forEach((e) => {
                e.classList.remove("clicked");
            });
            // 신규로 클릭된 메뉴의 클래스명에 'clicked' 추가
            e.target.classList.add("clicked");
        }
    });
});
