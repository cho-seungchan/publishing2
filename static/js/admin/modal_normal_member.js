/**
 * 일반회원 관리 모달 기능
 * 1. 모달 열기/닫기
 * 2. 카테고리별 콘텐츠 표시
 * 3. 데이터 처리 및 상태 관리
 */

document.addEventListener("DOMContentLoaded", function () {
    // 공통 모달 제어 함수
    function openModal(modal) {
        if (!modal) return;
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        console.log("일반회원 모달 열기");
    }

    function closeModal(modal) {
        if (!modal) return;
        modal.style.display = "none";
        document.body.style.overflow = "";
        console.log("일반회원 모달 닫기");
    }

    // DOM 요소 선택
    const memberModal = document.querySelector(".normal-member-modal");
    const memberDetailBtns = document.querySelectorAll(
        ".normal-member-table .detail-btn"
    );
    const memberCloseBtn = document.querySelector(
        ".normal-member-modal .close-btn"
    );
    const memberCancelBtn = document.querySelector(
        ".normal-member-modal .cancel-btn"
    );
    const memberSaveBtn = document.querySelector(
        ".normal-member-modal .save-btn"
    );
    const detailSelect = document.querySelector(
        ".normal-member-modal .detail-select"
    );
    const activitySelect = document.querySelector(
        ".normal-member-modal .activity-select"
    );
    const detailContent = document.querySelector(
        ".normal-member-modal .detail-content"
    );
    const activityContent = document.querySelector(
        ".normal-member-modal .activity-content"
    );

    // DOM 요소 존재 확인
    if (!memberModal) {
        console.error("일반회원 모달을 찾을 수 없습니다.");
        return;
    }

    // 모달 초기화 함수
    function resetMemberModal() {
        try {
            console.log("모달 초기화 시작");

            // 셀렉트 박스 초기화
            if (detailSelect) detailSelect.selectedIndex = 0;
            if (activitySelect) activitySelect.selectedIndex = 0;

            // 콘텐츠 영역 초기화
            if (detailContent) {
                const detailSections =
                    detailContent.querySelectorAll(".content-section");
                detailSections.forEach((section) => {
                    section.style.display = "none";
                });
            }

            if (activityContent) {
                const activitySections =
                    activityContent.querySelectorAll(".content-section");
                activitySections.forEach((section) => {
                    section.style.display = "none";
                });
            }

            console.log("모달 초기화 완료");
        } catch (error) {
            console.error("모달 초기화 중 오류 발생:", error);
        }
    }

    // 이벤트 리스너 설정
    function initializeEventListeners() {
        try {
            // 상세보기 버튼 클릭 이벤트
            memberDetailBtns.forEach((btn) => {
                btn.addEventListener("click", () => {
                    openModal(memberModal);
                    resetMemberModal();
                });
            });

            // 닫기/취소 버튼 이벤트
            if (memberCloseBtn) {
                memberCloseBtn.addEventListener("click", () =>
                    closeModal(memberModal)
                );
            }
            if (memberCancelBtn) {
                memberCancelBtn.addEventListener("click", () =>
                    closeModal(memberModal)
                );
            }

            // 저장 버튼 이벤트
            if (memberSaveBtn) {
                memberSaveBtn.addEventListener("click", () => {
                    console.log("회원정보 저장");
                    closeModal(memberModal);
                });
            }

            // 상세내용 카테고리 선택 이벤트
            if (detailSelect && detailContent) {
                detailSelect.addEventListener("change", function () {
                    const sections =
                        detailContent.querySelectorAll(".content-section");
                    sections.forEach((section) => {
                        section.style.display = "none";
                    });

                    if (this.value) {
                        const selectedSection = detailContent.querySelector(
                            `.${this.value}-section`
                        );
                        if (selectedSection) {
                            selectedSection.style.display = "block";
                            console.log(`상세내용 표시: ${this.value}`);
                        }
                    }
                });
            }

            // 활동내역 카테고리 선택 이벤트
            if (activitySelect && activityContent) {
                activitySelect.addEventListener("change", function () {
                    const sections =
                        activityContent.querySelectorAll(".content-section");
                    sections.forEach((section) => {
                        section.style.display = "none";
                    });

                    if (this.value) {
                        const selectedSection = activityContent.querySelector(
                            `.${this.value}-section`
                        );
                        if (selectedSection) {
                            selectedSection.style.display = "block";
                            console.log(`활동내역 표시: ${this.value}`);
                        }
                    }
                });
            }

            // 모달 바깥 영역 클릭 이벤트
            memberModal.addEventListener("click", (e) => {
                if (e.target.classList.contains("modal-backdrop")) {
                    closeModal(memberModal);
                }
            });

            // ESC 키 이벤트
            document.addEventListener("keydown", (e) => {
                if (
                    e.key === "Escape" &&
                    memberModal.style.display === "block"
                ) {
                    closeModal(memberModal);
                }
            });

            console.log("일반회원 모달 이벤트 리스너 초기화 완료");
        } catch (error) {
            console.error("이벤트 리스너 설정 중 오류 발생:", error);
        }
    }

    // 초기화 실행
    initializeEventListeners();
});
