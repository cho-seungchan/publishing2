document.addEventListener("DOMContentLoaded", function () {
  // 필터 관련 요소들 선택
  const statusFilter = document.querySelector(".status-filter");
  const dateFilter = document.querySelector(".date-filter");
  const searchInput = document.querySelector(".search-input");
  const searchBtn = document.querySelector(".search-btn");

  // 상태 필터 변경 이벤트
  // statusFilter > option 태그의 value (all: 전체, pending: 처리중, completed: 처리완료)
  statusFilter.addEventListener("change", function () {
    const selectedStatus = this.value; // 선택된 상태값 (all, pending, completed)
    const reportRows = document.querySelectorAll(".report-table tbody tr");

    // 선택된 상태에 따라 행 표시/숨김 처리 (실제로는 서버에 요청하게 될 부분)
    // tr에서 status 클래스 요소들 = 상태값 표시 요소 선택
    reportRows.forEach((row) => {
      const statusCell = row.querySelector(".status");
      switch (selectedStatus) {
        case "all":
          row.style.display = ""; // 모든 행 표시
          break;
        case "pending":
          row.style.display =
            statusCell.textContent.trim() === "처리중" ? "" : "none";
          break;
        case "completed":
          row.style.display =
            statusCell.textContent.trim() === "처리완료" ? "" : "none";
          break;
      }
    });

    console.log("상태 필터 변경:", selectedStatus);
    // 여기에 나중에 서버 요청 코드가 들어갈 예정
  });

  // 기간 필터 변경 이벤트
  dateFilter.addEventListener("change", function () {
    const selectedDate = this.value;
    console.log("기간 필터 변경:", selectedDate);
    // 여기에 나중에 서버 요청 코드가 들어갈 예정
  });

  // 검색 버튼 클릭 이벤트
  searchBtn.addEventListener("click", function () {
    const searchText = searchInput.value.trim();
    if (searchText) {
      console.log("검색어:", searchText);
      // 여기에 나중에 서버 요청 코드가 들어갈 예정
    }
  });

  // 검색어 입력 필드에서 Enter 키 처리
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchBtn.click(); // 검색 버튼 클릭 이벤트 발생
    }
  });

  // 초기 상태 설정
  function initializeFilters() {
    statusFilter.value = "all"; // 초기값 '전체'로 설정
    dateFilter.value = "week"; // 초기값 '최근 1주일'로 설정
    searchInput.value = ""; // 검색창 비우기
  }

  // 초기화 실행
  initializeFilters();
});
