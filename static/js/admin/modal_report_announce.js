/**
 * 관리자 페이지의 모달 기능을 담당하는 JS
 * - 신고관리 모달
 * - 공고관리 모달 (+ 카테고리 선택, 이미지 슬라이드)
 *
 */

document.addEventListener("DOMContentLoaded", function () {
    // ============================
    // 공통 모달 제어 함수
    // ============================

    // 모달 열기 함수
    // 매개변수 modal: 열고자 하는 모달 요소
    function openModal(modal) {
        console.log("모달 열기 시도:", modal);
        if (modal) {
            modal.style.display = "block"; // 모달 표시
            document.body.style.overflow = "hidden"; // 배경 스크롤 방지
            console.log("모달 열기 성공");
        }
    }

    // 모달 닫기 함수
    // 매개변수 modal: 닫고자 하는 모달 요소
    function closeModal(modal) {
        console.log("모달 닫기 시도:", modal);
        if (modal) {
            modal.style.display = "none"; // 모달 숨김
            document.body.style.overflow = ""; // 배경 스크롤 복원
            console.log("모달 닫기 성공");
        }
    }

    // ============================
    // 신고관리 모달 관련
    // ============================

    // 신고관리 모달 요소 선택
    const reportModal = document.querySelector(".report-modal"); // 모달 컨테이너
    // prettier-ignore
    const reportDetailBtns = document.querySelectorAll(".report-table .detail-btn"); // 상세보기 버튼들
    const reportCloseBtn = document.querySelector(".report-modal .close-btn"); // 닫기(X) 버튼
    const reportCancelBtn = document.querySelector(".report-modal .cancel-btn"); // 취소 버튼
    const reportSaveBtn = document.querySelector(".report-modal .save-btn"); // 저장 버튼

    // 신고관리 모달 초기화 및 이벤트 설정
    if (reportModal && reportDetailBtns) {
        console.log("신고관리 모달 초기화");

        // 각 상세보기 버튼에 클릭 이벤트 추가
        reportDetailBtns.forEach((btn) => {
            btn.addEventListener("click", () => openModal(reportModal));
        });

        // 닫기(X) 버튼 이벤트
        if (reportCloseBtn) {
            reportCloseBtn.addEventListener("click", () =>
                closeModal(reportModal)
            );
        }

        // 취소 버튼 이벤트
        if (reportCancelBtn) {
            reportCancelBtn.addEventListener("click", () =>
                closeModal(reportModal)
            );
        }

        // 저장 버튼 이벤트
        if (reportSaveBtn) {
            reportSaveBtn.addEventListener("click", () => {
                console.log("신고관리 저장 버튼 클릭");
                closeModal(reportModal);
            });
        }

        // 모달 바깥 영역(backdrop) 클릭시 닫기
        reportModal.addEventListener("click", (e) => {
            if (e.target.classList.contains("modal-backdrop")) {
                closeModal(reportModal);
            }
        });
    }

    // ============================
    // 공고관리 모달 관련
    // ============================

    // 공고관리 모달 기본 요소 선택
    const announceModal = document.querySelector(".announce-modal"); // 모달 컨테이너
    // prettier-ignore
    const announceDetailBtns = document.querySelectorAll(".announce-table .detail-btn"); // 상세보기 버튼들
    const announceCloseBtn = document.querySelector(
        ".announce-modal .close-btn"
    ); // 닫기(X) 버튼
    // prettier-ignore
    const announceCancelBtn = document.querySelector(".announce-modal .cancel-btn"); // 취소 버튼
    const announceSaveBtn = document.querySelector(".announce-modal .save-btn"); // 저장 버튼

    // 공고관리 추가 기능 요소 선택
    const contentSelect = document.querySelector(
        ".announce-modal .content-select"
    ); // 카테고리 선택 드롭다운 (선택창)
    const detailContent = document.querySelector(
        ".announce-modal .detail-content"
    ); // 카테고리 내용 표시 영역 (내용창)
    const announceImage = document.querySelector(
        ".announce-modal .image-view img"
    ); // 이미지 표시 영역
    const prevImageBtn = document.querySelector(".announce-modal .prev-btn"); // 이전 이미지 버튼
    const nextImageBtn = document.querySelector(".announce-modal .next-btn"); // 다음 이미지 버튼

    // 테스트용 데이터 - 실제로는 서버에서 받아올 예정
    const images = [
        "/static/images/admin/1.webp",
        "/static/images/admin/2.webp",
        "/static/images/admin/3.jpeg",
    ];
    let currentImageIndex = 0; // 현재 표시중인 이미지 인덱스

    // 카테고리별 내용 데이터 - 실제로는 서버에서 받아올 예정
    const announceContents = {
        "company-intro": "기업 및 서비스 소개 내용...",
        "program-intro":
            "당사는 취업준비생들에게 실질적인 업무 경험을 제공하기 위해...",
        "program-benefits":
            "- 실무자의 하루 일정을 그대로 체험\n- 실제 업무 환경에서의 현장감 있는 경험",
        // ...etc
    };

    // 공고관리 모달 초기화 함수
    function resetAnnounceModal() {
        console.log("공고관리 모달 초기화");
        if (contentSelect) contentSelect.selectedIndex = 0; // 카테고리 선택 초기화
        if (detailContent) detailContent.textContent = "카테고리를 선택하세요."; // 내용 초기화
        currentImageIndex = 0; // 이미지 인덱스 초기화
        updateImage(); // 이미지 표시 업데이트
    }

    // 이미지 업데이트 함수
    function updateImage() {
        if (announceImage && images.length > 0) {
            console.log("이미지 로드 시도:", images[currentImageIndex]);
            announceImage.src = images[currentImageIndex]; // 이미지 소스 변경

            // 이미지 로드 상태 모니터링
            announceImage.onload = () => {
                console.log("이미지 로드 성공:", currentImageIndex + 1);
            };
            announceImage.onerror = () => {
                console.log("이미지 로드 실패:", images[currentImageIndex]);
            };

            // 이전/다음 버튼 활성화 상태 설정
            prevImageBtn.disabled = currentImageIndex === 0; // 첫 이미지면 이전 버튼 비활성화
            nextImageBtn.disabled = currentImageIndex === images.length - 1; // 마지막 이미지면 다음 버튼 비활성화
        }
    }

    // 공고관리 모달 이벤트 설정
    if (announceModal && announceDetailBtns) {
        console.log("공고관리 모달 초기화");

        // 상세보기 버튼 클릭 이벤트
        announceDetailBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                openModal(announceModal);
                resetAnnounceModal(); // 모달 내용 초기화
            });
        });

        // 닫기 관련 버튼들 이벤트
        if (announceCloseBtn) {
            announceCloseBtn.addEventListener("click", () =>
                closeModal(announceModal)
            );
        }
        if (announceCancelBtn) {
            announceCancelBtn.addEventListener("click", () =>
                closeModal(announceModal)
            );
        }

        // 저장 버튼 이벤트
        if (announceSaveBtn) {
            announceSaveBtn.addEventListener("click", () => {
                console.log("공고관리 저장 버튼 클릭");
                closeModal(announceModal);
            });
        }

        // 카테고리 선택 변경 이벤트
        if (contentSelect && detailContent) {
            contentSelect.addEventListener("change", function () {
                const content = announceContents[this.value]; // 선택된 카테고리의 내용 가져오기
                detailContent.textContent = content || "카테고리를 선택하세요.";
                console.log("카테고리 선택됨:", this.value);
            });
        }

        // 이미지 이전/다음 버튼 이벤트
        if (prevImageBtn) {
            prevImageBtn.addEventListener("click", () => {
                if (currentImageIndex > 0) {
                    currentImageIndex--;
                    updateImage();
                    console.log("이전 이미지:", currentImageIndex + 1);
                }
            });
        }

        if (nextImageBtn) {
            nextImageBtn.addEventListener("click", () => {
                if (currentImageIndex < images.length - 1) {
                    currentImageIndex++;
                    updateImage();
                    console.log("다음 이미지:", currentImageIndex + 1);
                }
            });
        }

        // 모달 바깥 영역(backdrop) 클릭시 닫기
        announceModal.addEventListener("click", (e) => {
            if (e.target.classList.contains("modal-backdrop")) {
                closeModal(announceModal);
            }
        });
    }

    // ============================
    // 공통 키보드 이벤트 (ESC 키)
    // ============================
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            // 현재 열려있는 모달 확인 후 닫기
            if (announceModal && announceModal.style.display === "block") {
                closeModal(announceModal);
            }
            if (reportModal && reportModal.style.display === "block") {
                closeModal(reportModal);
            }
        }
    });

    // 초기화 완료 로그
    console.log("모달 초기화 완료");
});
