// 신고관리 모달창 구현
// 신고관리 페이지의 '상세보기' 버튼 클릭 시 모달 열기/닫기 기능 구현
// 1. 필요한 DOM 요소 선택
// 2. 모달 열고 닫기 함수 정의
// 3. 이벤트 리스너 등록

document.addEventListener("DOMContentLoaded", function () {
    // 1. 필요한 DOM 요소 선택
    // 모달 관련 요소
    const modal = document.querySelector(".report-modal"); // 모달 전체 컨테이너
    const detailButtons = document.querySelectorAll(".detail-btn"); // 상세보기 버튼들
    const closeButton = document.querySelector(".close-btn"); // 모달 우상단 X버튼
    const cancelButton = document.querySelector(".cancel-btn"); // 모달 하단 취소 버튼
    const saveButton = document.querySelector(".save-btn"); // 모달 하단 저장 버튼

    // 2. 모달 열고 닫기 함수 정의

    // 모달 열기 함수
    const openModal = () => {
        // 모달 표시
        modal.style.display = "block";
        // 배경 스크롤 방지 (모달 아래 컨텐츠 스크롤 막기)
        document.body.style.overflow = "hidden";
    };

    // 모달 닫기 함수
    const closeModal = () => {
        // 모달 숨김
        modal.style.display = "none";
        // 배경 스크롤 다시 활성화
        document.body.style.overflow = "";
    };

    // 3. 이벤트 리스너 등록

    // 상세보기 버튼 클릭 이벤트
    // 모달창 열기 함수 호출
    detailButtons.forEach((button) => {
        button.addEventListener("click", openModal);
    });

    // 닫기 기능 필요한 요소에 이벤트 달기
    // 닫기 버튼(X) 클릭 이벤트
    closeButton.addEventListener("click", closeModal);

    // 취소 버튼 클릭 이벤트 (아무 작업 없이 닫기)
    cancelButton.addEventListener("click", closeModal);

    // 저장 버튼 클릭 이벤트 (데이터를 저장시켜야 하는 버튼)
    saveButton.addEventListener("click", () => {
        // 여기에 아마도 저장 로직이 추가
        console.log("저장 버튼 클릭됨");
        // 일단 모달만 닫기
        closeModal();
    });

    // 모달 바깥 영역(backdrop) 클릭 시 닫기
    modal.addEventListener("click", (event) => {
        // 클릭된 요소가 모달 전체 컨테이너이거나 backdrop인 경우에만 닫기
        if (event.target.classList.contains("modal-backdrop")) {
            closeModal();
        }
    });

    // ESC 키 누를 때 모달 닫기
    document.addEventListener("keydown", (event) => {
        // 모달이 열려있는 상태에서 ESC 키를 누른 경우에만 닫기
        // ESC = Escape
        if (event.key === "Escape" && modal.style.display === "block") {
            closeModal();
        }
    });
});
