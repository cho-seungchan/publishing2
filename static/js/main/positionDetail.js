// 검색창 눌렀을 때만 뜨는 창
const searchBox = document.querySelector(".searchBox>input");
const searchWindow = document.querySelector(".searchWindow");

searchBox.addEventListener("focus", () => {
    searchWindow.style.visibility = "visible";
    searchWindow.style.pointerEvents = "auto";
});

searchBox.addEventListener("blur", () => {
    searchWindow.style.visibility = "hidden";
    searchWindow.style.pointerEvents = "none";
});

// 복사 버튼 만들기, 복사 한 다음 텍스트 alert
// 복사할 텍스트 요소와 버튼을 선택
const copyText = document.querySelector("#copyText");
const copyButton = document.querySelector(".address>button");

// Clipboard API로 특정 텍스트를 복사시킬 수 있다. 신기
copyButton.addEventListener("click", () => {
    // #copyText 요소의 텍스트를 클립보드에 복사
    navigator.clipboard
        .writeText(copyText.textContent) // 텍스트를 클립보드에 복사
        .then(() => {
            // 복사 성공 시 텍스트 출력
            alert("주소가 복사되었습니다");
        })
        .catch((err) => {
            // 복사 실패 시 오류 메시지 출력
            console.error("Failed to copy text: ", err);
        });
});

// 기업/서비스 소개 더보기 버튼 누르면 정보 전체출력
const moreInfoBtn = document.querySelector(".companyDetailButton");
const moreInfoText = document.querySelector(".companyDetailText");
const textGradient = document.querySelector(".compnayDetailHide");

// 버튼 클릭 시 이벤트
moreInfoBtn.addEventListener("click", () => {
    const isExpanded = moreInfoBtn.getAttribute("aria-expanded") === "true";

    // 버튼 안에 svg가 없으면 새로 생성
    let buttonIcon = moreInfoBtn.querySelector("svg");

    if (!buttonIcon) {
        // svg 요소를 동적으로 생성
        buttonIcon = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        );
        buttonIcon.setAttribute("width", "16");
        buttonIcon.setAttribute("height", "16");
        buttonIcon.setAttribute("fill", "none");
        buttonIcon.setAttribute("viewBox", "0 0 16 16");
        buttonIcon.setAttribute("aria-hidden", "true");

        // 버튼에 svg 추가
        moreInfoBtn.appendChild(buttonIcon);
    }

    if (isExpanded) {
        // 이미 열려있으면 닫기
        moreInfoText.style.maxHeight = "168px";
        moreInfoText.style.overflow = "hidden";
        textGradient.classList.add("gradient");
        moreInfoBtn.setAttribute("aria-expanded", "false");
        moreInfoBtn.innerText = "더 보기";

        // 새 SVG로 교체 (닫기 화살표)
        buttonIcon.innerHTML = `
            <path fill="#222" fill-rule="evenodd" 
                d="M13.472 5.195c.26.26.26.683 0 .943l-5 5a.667.667 0 0 1-.943 0l-5-5a.667.667 0 1 1 .943-.943L8 9.724l4.529-4.529c.26-.26.682-.26.943 0Z" 
                clip-rule="evenodd"></path>
        `;
    } else {
        // 닫혀있으면 열기
        moreInfoText.style.maxHeight = "none";
        moreInfoText.style.overflow = "visible";
        textGradient.classList.remove("gradient");
        moreInfoBtn.setAttribute("aria-expanded", "true");
        moreInfoBtn.innerText = "접기";

        // 새 SVG로 교체 (열기 화살표)
        buttonIcon.innerHTML = `
            <path fill="#000" fill-rule="evenodd" 
                d="M3.793 16.207a1 1 0 0 1 0-1.414l7.5-7.5a1 1 0 0 1 1.414 0l7.5 7.5a1 1 0 0 1-1.414 1.414L12 9.414l-6.793 6.793a1 1 0 0 1-1.414 0Z" 
                clip-rule="evenodd"></path>
        `;
    }

    console.log("SVG inside button:", moreInfoBtn.querySelector("svg"));
});
