// input 창에 글자를 넣으면 등록 버튼 활성화

document.querySelector(".sidebar .evaluate").addEventListener("input", (e) => {
    const maxLength = 100;
    const currentLength = e.target.value.length;

    if (currentLength > maxLength) {
        alert("최대 100자까지 입력 가능합니다.");
        e.target.value = e.target.value.slice(0, maxLength);
    }

    if (document.querySelector(".sidebar .evaluate").value.trim().length > 0) {
        document.querySelector(".submit-button button").classList.add("clicked");
        document.querySelector(".submit-button button").style.cursor = "pointer";
    } else {
        document.querySelector(".submit-button button").classList.remove("clicked");
        document.querySelector(".submit-button button").style.cursor = "not-allowed";
    }
});
// input 창에 글자를 넣으면 등록 버튼 활성화

// 등록 버튼 클릭
document.querySelector(".sidebar .submit-button").addEventListener("click", (e) => {
    console.log(e.target.outerHTML);
    if (e.target.style.cursor != "not-allowed") {
        if (e.target.className == "newbutton") {
            document.querySelectorAll(".sidebar .newbutton").forEach((e) => {
                e.classList.remove("clicked");
            });
            e.target.classList.add("clicked");
        } else {
            e.target.closest(
                ".submit-button"
            ).innerHTML = `<button class="newbutton" style="cursor:pointer">수정</button>
                           <button class="newbutton" style="cursor:pointer">삭제</button>`;
        }
    }
});

// 평가 말풍선 클릭 이벤트

document.querySelector(".sidebar .speechBubble").addEventListener("click", (e) => {});
