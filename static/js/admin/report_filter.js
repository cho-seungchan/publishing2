document.addEventListener("DOMContentLoaded", function () {
    const statusFilter = document.querySelector(".status-filter"); //처리 상태 필터 박스
    const dateFilter = document.querySelector(".date-filter"); //날짜 필터 박스
    const searchInput = document.querySelector(".search-input"); // 검색어 입력창
    const searchBtn = document.querySelector(".search-btn"); // 연두색 검색 버튼
    const reportRows = document.querySelectorAll(".report-table tbody tr"); //테이블 레이아웃

    // 상태 필터링 함수
    // 목적: 사용자가 선택한 status에 따라 테이블 행을 필터링
    // 매개변수 status: 처리상태 필터 박스로 필터링할 상태 값 (all, 처리중, 처리완료)
    function filterByStatus(status) {
        reportRows.forEach((row) => {
            const statusCell = row.querySelector(".status"); // tbody > tr > td들 > span: 행 안의 처리상태를 나타내는 span태그
            const currentStatus = statusCell.textContent.trim(); // trim: 선택된 상태 셀의 텍스트 내용을 가져오고 앞뒤 공백 제거
            // 행의 표시 여부 결정
            // status가 'all'이거나 현재 행의 상태(currentStatus)와 일치하면 행을 보이게 함
            // 그렇지 않으면 행을 숨김 (display: none)
            row.style.display =
                status === "all" || currentStatus === status ? "" : "none";
        });
    }

    // 상태 필터 변경 이벤트
    // 사용자가 상태 필터를 변경할 때마다 실행
    statusFilter.addEventListener("change", function () {
        // 현재 선택된 필터 값 가져오기
        // value: pending(처리중), completed(처리완료), all(전체)
        const selectedStatus = this.value;
        console.log("선택된 상태:", selectedStatus);
        // 선택된 상태에 따라 위에서 정의한 filterByStatus 함수 호출
        // 선택된 값을 실제 상태 텍스트로 변환
        filterByStatus(
            selectedStatus === "processing"
                ? "처리중"
                : selectedStatus === "hold"
                ? "보류"
                : selectedStatus === "completed"
                ? "처리완료"
                : selectedStatus === "false"
                ? "허위신고"
                : "all"
        );
    });

    // 기간 필터 변경 이벤트
    // 사용자가 날짜 필터를 변경할 때 실행
    dateFilter.addEventListener("change", function () {
        // 현재 선택된 날짜 범위 값 가져오기
        // value: week(1주일), month(1개월), three-month(3개월)
        const selectedDate = this.value;
        // 구현부 자리: 백엔드에서 날짜 범위에 따른 데이터 필터링 로직 추가 예정
        console.log("기간 필터 변경:", selectedDate);
    });

    // 검색 함수
    // 매개변수 searchText: 사용자가 입력한 검색어
    function performSearch(searchText) {
        // 검색어가 비어있는지 확인
        // 비어있다면 사용자에게 경고 메시지 표시
        if (!searchText) {
            alert("검색어를 입력해주세요.");
            return;
        }

        // 구현부 자리: 백엔드에서 검색어 기반 데이터 필터링 로직 추가 예정
        console.log("검색어:", searchText);
    }

    // 검색 버튼 클릭 이벤트
    // 사용자가 검색 버튼을 클릭하면 실행
    searchBtn.addEventListener("click", function () {
        // 검색어 입력창의 값을 가져와 앞뒤 공백 제거
        const searchText = searchInput.value.trim();
        // 위의 performSearch 함수 호출하여 검색 처리
        performSearch(searchText);
        console.log("검색 버튼 마우스 클릭: 잘눌렸습니다.");
    });

    // 검색어 입력 필드에서 Enter 키 처리
    searchInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            const searchText = this.value.trim();
            performSearch(searchText);
            console.log("엔터로 검색: 잘눌렸습니다.");
        }
    });

    // 초기 상태 설정
    function initializeFilters() {
        statusFilter.value = "all";
        dateFilter.value = "week";
        searchInput.value = "";
    }

    // 초기화 실행
    initializeFilters();
});
