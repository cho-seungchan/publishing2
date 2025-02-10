// 로그인 후 회원버튼에 마우스를 갖다대면 전용 메뉴가 뜸
const memberButton = document.querySelector(".loginedMemberButton>button"); // 홍길동님
const memberNav = document.querySelector(".loginMemberNav"); // 메뉴

const showDiv = () => (memberNav.style.display = "block"); // div가 보이게
const hideDiv = () => (memberNav.style.display = "none"); // div가 숨겨지게

// 마우스가 나가면 창이 꺼지게
// div에서 커서가 nav까지 가기 전에 창이 꺼져버리기 때문에 약간 꺼지는 시간에 딜레이를 주었다
const checkMouseLeave = () => {
    setTimeout(() => {
        // 버튼과 메뉴 둘 다 마우스를 떼면 숨기기
        if (!memberButton.matches(":hover") && !memberNav.matches(":hover")) {
            hideDiv();
        }
    }, 100);
};

// 마우스를 올렸을 때
memberButton.addEventListener("mouseenter", showDiv);
memberNav.addEventListener("mouseenter", showDiv);

// 마우스를 뗐을 때
memberButton.addEventListener("mouseleave", checkMouseLeave);
memberNav.addEventListener("mouseleave", checkMouseLeave);

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
// 복사할 버튼을 선택
const copyButton = document.querySelector("#copyUrl"); // 복사 버튼

const copyCurrentUrl = async () => {
    try {
        // clipboard에 지정한 텍스트(여기선 페이지의 url)추가
        await navigator.clipboard.writeText(window.location.href); // window.location.href는 현재 페이지의 url
        alert("URL이 복사되었습니다. 많이 공유해주세요:)"); // 알림 메시지
    } catch (err) {
        console.error("URL 복사 실패:", err);
    }
};

// 버튼 누르면 회사 주소 복사
copyButton.addEventListener("click", copyCurrentUrl);

// 복사 버튼 만들기, 복사 한 다음 텍스트 alert
// 복사할 텍스트 요소와 버튼을 선택
const copyText = document.querySelector("#copyText");
const copyAddressBtn = document.querySelector(".address>button");

// Clipboard API로 특정 텍스트를 복사시킬 수 있다. 신기
copyAddressBtn.addEventListener("click", () => {
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
