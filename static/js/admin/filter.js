// 관리자 페이지 필터 기능
// 각 페이지별 필터(상태/날짜) 및 검색 기능
// 실제 필터링은 서버에서 처리

document.addEventListener("DOMContentLoaded", function () {
    // 공고관리 필터 요소
    // prettier-ignore
    const announceStatusFilter = document.querySelector(".announce-status-filter");
    const announceDateFilter = document.querySelector(".announce-date-filter");
    const announceSearchInput = document.querySelector(
        ".announce-search-input"
    );
    const announceSearchBtn = document.querySelector(".announce-search-btn");

    // 신고관리 필터 요소
    const reportStatusFilter = document.querySelector(".report-status-filter");
    const reportDateFilter = document.querySelector(".report-date-filter");
    const reportSearchInput = document.querySelector(".report-search-input");
    const reportSearchBtn = document.querySelector(".report-search-btn");

    // 일반회원 필터 요소
    const memberStatusFilter = document.querySelector(".member-status-filter");
    const memberDateFilter = document.querySelector(".member-date-filter");
    const memberSearchInput = document.querySelector(".member-search-input");
    const memberSearchBtn = document.querySelector(".member-search-btn");

    // ---------------------------------------------------------------------------

    //   // 각 페이지의 테이블 행들
    //   const announceRows = document.querySelectorAll(".announce-table tbody tr");
    //   // prettier-ignore
    //   const normalMemberRows = document.querySelectorAll(".normal-member-table tbody tr");
    //   // prettier-ignore
    //   const companyMemberRows = document.querySelectorAll(".company-member-table tbody tr");
    //   // prettier-ignore
    //   const personalInquiryRows = document.querySelectorAll(".personal-inquiry-table tbody tr");
    //   // prettier-ignore
    //   const companyInquiryRows = document.querySelectorAll(".company-inquiry-table tbody tr");
    //   const reportRows = document.querySelectorAll(".report-table tbody tr");

    // ---------------------------------------------------------------------------

    // 공고관리 검색 함수
    function announceSearch(searchText) {
        if (!searchText) {
            alert("검색어를 입력해주세요.");
            return;
        }
        console.log("공고관리 검색어:", searchText);
    }

    // 신고관리 검색 함수
    function reportSearch(searchText) {
        if (!searchText) {
            alert("검색어를 입력해주세요.");
            return;
        }
        console.log("신고관리 검색어:", searchText);
    }

    // 일반회원 검색 함수
    function memberSearch(searchText) {
        if (!searchText) {
            alert("검색어를 입력해주세요.");
            return;
        }
        console.log("일반회원 검색어:", searchText);
    }

    // ---------------------------------------------------------------------------

    // 공고관리 이벤트 리스너
    if (announceStatusFilter) {
        // 상태 필터 변경
        announceStatusFilter.addEventListener("change", function () {
            const selectedStatus = this.value;
            console.log(
                "공고관리 상태값:",
                selectedStatus === "pending"
                    ? "심사중"
                    : selectedStatus === "hold"
                    ? "보류"
                    : selectedStatus === "approved"
                    ? "승인"
                    : selectedStatus === "rejected"
                    ? "반려"
                    : "전체"
            );
        });

        // 날짜 필터 변경
        announceDateFilter.addEventListener("change", function () {
            const selectedDate = this.value;
            console.log("공고관리 기간 필터:", selectedDate);
        });

        // 검색 버튼 클릭
        announceSearchBtn.addEventListener("click", function () {
            const searchText = announceSearchInput.value.trim();
            announceSearch(searchText);
        });

        // 검색어 입력창 엔터키
        announceSearchInput.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                const searchText = this.value.trim();
                announceSearch(searchText);
            }
        });
    }

    // ---------------------------------------------------------------------------

    // 신고관리 이벤트 리스너
    if (reportStatusFilter) {
        // 상태 필터 변경
        reportStatusFilter.addEventListener("change", function () {
            const selectedStatus = this.value;
            console.log(
                "신고관리 상태값:",
                selectedStatus === "hold"
                    ? "보류"
                    : selectedStatus === "pending"
                    ? "처리중"
                    : selectedStatus === "false"
                    ? "허위신고"
                    : selectedStatus === "completed"
                    ? "처리완료"
                    : "전체"
            );
        });

        // 날짜 필터 변경
        reportDateFilter.addEventListener("change", function () {
            const selectedDate = this.value;
            console.log("신고관리 기간 필터:", selectedDate);
        });

        // 검색 버튼 클릭
        reportSearchBtn.addEventListener("click", function () {
            const searchText = reportSearchInput.value.trim();
            reportSearch(searchText);
        });

        // 검색어 입력창 엔터키
        reportSearchInput.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                const searchText = this.value.trim();
                reportSearch(searchText);
            }
        });
    }

    // ---------------------------------------------------------------------------

    // 일반회원 이벤트 리스너
    if (memberStatusFilter) {
        // 상태 필터 변경
        memberStatusFilter.addEventListener("change", function () {
            const selectedStatus = this.value;
            console.log(
                "회원 상태값:",
                selectedStatus === "active"
                    ? "활성"
                    : selectedStatus === "dormant"
                    ? "휴면"
                    : selectedStatus === "suspended"
                    ? "정지"
                    : selectedStatus === "withdrawn"
                    ? "탈퇴"
                    : "전체"
            );
        });

        // 날짜 필터 변경
        memberDateFilter.addEventListener("change", function () {
            const selectedDate = this.value;
            console.log("회원관리 기간 필터:", selectedDate);
        });

        // 검색 버튼 클릭
        memberSearchBtn.addEventListener("click", function () {
            const searchText = memberSearchInput.value.trim();
            memberSearch(searchText);
        });

        // 검색어 입력창 엔터키
        memberSearchInput.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                const searchText = this.value.trim();
                memberSearch(searchText);
            }
        });
    }

    // ---------------------------------------------------------------------------

    // 필터 초기화 함수
    function initializeFilters() {
        // 공고관리 필터 초기화
        if (announceStatusFilter) {
            announceStatusFilter.value = "all";
            announceDateFilter.value = "week";
            announceSearchInput.value = "";
        }

        // 신고관리 필터 초기화
        if (reportStatusFilter) {
            reportStatusFilter.value = "all";
            reportDateFilter.value = "week";
            reportSearchInput.value = "";
        }

        // 일반회원 필터 초기화
        if (memberStatusFilter) {
            memberStatusFilter.value = "all";
            memberDateFilter.value = "week";
            memberSearchInput.value = "";
        }
    }

    // 초기화 실행
    initializeFilters();
});
