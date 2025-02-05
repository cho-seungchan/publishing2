// 페이지네이션
// 하단 1,2,3 버튼과 이전, 다음 버튼 동작 구현

document.addEventListener("DOMContentLoaded", function () {
    // 페이지네이션 관련 요소들 선택
    // .page-numbers: 신고관리 테이블 하단의 페이지 번호들을 감싸는 컨테이너. 페이지 번호 버튼들이 동적으로 추가될 부모 요소
    // .page-btn.prev: 신고관리 테이블 하단의 '이전' 버튼. 현재 페이지 그룹에서 이전 그룹으로 이동하기 위해 사용
    // .page-btn.next: 신고관리 테이블 하단의 '다음' 버튼. 현재 페이지 그룹에서 다음 그룹으로 이동하기 위해 사용
    const pageNumbers = document.querySelector(".page-numbers");
    const prevButton = document.querySelector(".page-btn.prev");
    const nextButton = document.querySelector(".page-btn.next");

    // 현재 페이지 그룹 설정
    let currentGroup = 1; // 초기 현재 페이지 그룹 // 그룹:(1: 1,2,3 / 2: 4,5,6 / 3: 7,8,9...)
    const pageNumPerGroup = 3; // 한 그룹당 페이지 수

    // 테이블 컨텐츠 업데이트 함수
    // pageNum에 따라 해당하는 데이터를 테이블에 표시
    // prettier-ignore
    function updateContent(pageNum) {
        const tbody = document.querySelector(".report-table tbody");
        const pageDatas = {
         1: [
           { id: '0000001', type: '부적절한 내용', target: '템프', reporter: '허세웅', date: '2025-02-04', status: '처리중' },
           { id: '0000002', type: '허위정보', target: '템프', reporter: '허세웅', date: '2025-02-04', status: '처리중' },
           { id: '0000003', type: '스팸 / 도배', target: '템프', reporter: '허세웅', date: '2025-02-04', status: '처리중' },
           { id: '0000004', type: '권리침해', target: '템프', reporter: '허세웅', date: '2025-02-04', status: '처리중' },
           { id: '0000005', type: '불법행위', target: '템프', reporter: '허세웅', date: '2025-02-04', status: '처리중' },
           { id: '0000006', type: '비매너 / 불건전', target: '템프', reporter: '허세웅', date: '2025-02-04', status: '처리중' },
           { id: '0000007', type: '차별 / 비하', target: '템프', reporter: '허세웅', date: '2025-02-04', status: '처리중' },
           { id: '0000008', type: '부적절한 내용', target: '템프', reporter: '허세웅', date: '2025-02-04', status: '처리중' },
           { id: '0000009', type: '프로그램 품질', target: '템프', reporter: '허세웅', date: '2025-02-04', status: '처리중' },
           { id: '0000010', type: '기타', target: '템프', reporter: '허세웅', date: '2025-02-04', status: '처리중' },
           { id: '0000011', type: '불법행위', target: '템프', reporter: '허세웅', date: '2025-02-04', status: '처리중' }
         ],
         2: [
           { id: '0000012', type: '스팸 / 도배', target: '코리아IT', reporter: '김승균', date: '2025-02-04', status: '처리중' },
           { id: '0000013', type: '프로그램 품질', target: '코리아IT', reporter: '김승균', date: '2025-02-04', status: '처리중' },
           { id: '0000014', type: '스팸 / 도배', target: '코리아IT', reporter: '김승균', date: '2025-02-04', status: '처리중' },
           { id: '0000015', type: '프로그램 품질', target: '코리아IT', reporter: '김승균', date: '2025-02-04', status: '처리중' },
           { id: '0000016', type: '비매너 / 불건전', target: '코리아IT', reporter: '김승균', date: '2025-02-04', status: '처리중' },
           { id: '0000017', type: '부적절한 내용', target: '코리아IT', reporter: '김승균', date: '2025-02-04', status: '처리중' },
           { id: '0000018', type: '차별 / 비하', target: '코리아IT', reporter: '김승균', date: '2025-02-04', status: '처리중' },
           { id: '0000019', type: '부적절한 내용', target: '코리아IT', reporter: '김승균', date: '2025-02-04', status: '처리중' },
           { id: '0000020', type: '부적절한 내용', target: '코리아IT', reporter: '김승균', date: '2025-02-04', status: '처리중' },
           { id: '0000021', type: '프로그램 품질', target: '코리아IT', reporter: '김승균', date: '2025-02-04', status: '처리중' },
           { id: '0000022', type: '불법행위', target: '코리아IT', reporter: '김승균', date: '2025-02-04', status: '처리중' }
         ],
         3: [
           { id: '0000023', type: '비매너 / 불건전', target: '점핏', reporter: '한지수', date: '2025-02-04', status: '처리중' },
           { id: '0000024', type: '부적절한 내용', target: '점핏', reporter: '한지수', date: '2025-02-04', status: '처리중' },
           { id: '0000025', type: '차별 / 비하', target: '점핏', reporter: '한지수', date: '2025-02-04', status: '처리중' },
           { id: '0000026', type: '허위정보', target: '점핏', reporter: '한지수', date: '2025-02-04', status: '처리중' },
           { id: '0000027', type: '불법행위', target: '점핏', reporter: '한지수', date: '2025-02-04', status: '처리중' },
           { id: '0000028', type: '부적절한 내용', target: '점핏', reporter: '한지수', date: '2025-02-04', status: '처리중' },
           { id: '0000029', type: '부적절한 내용', target: '점핏', reporter: '한지수', date: '2025-02-04', status: '처리중' },
           { id: '0000030', type: '기타', target: '점핏', reporter: '한지수', date: '2025-02-04', status: '처리중' },
           { id: '0000031', type: '부적절한 내용', target: '점핏', reporter: '한지수', date: '2025-02-04', status: '처리중' },
           { id: '0000032', type: '기타', target: '점핏', reporter: '한지수', date: '2025-02-04', status: '처리중' },
           { id: '0000033', type: '차별 / 비하', target: '점핏', reporter: '한지수', date: '2025-02-04', status: '처리중' }
         ],
     };
     
     function generateRow(pageData) {
       return `
         <tr>
           <td>${pageData.id}</td>
           <td>${pageData.type}</td>
           <td>${pageData.target}</td>
           <td>${pageData.reporter}</td>
           <td>${pageData.date}</td>
           <td><span class="status pending">${pageData.status}</span></td>
           <td><button type="button" class="detail-btn">상세보기</button></td>
         </tr>
       `;
     }

     function generateEmptyRow() {
      return `
        <tr>
          <td>데이터 없음</td>
          <td>데이터 없음</td>
          <td>데이터 없음</td>
          <td>데이터 없음</td>
          <td>데이터 없음</td>
          <td>처리불가</td>
          <td><button type="button" class="detail-btn">상세보기</button></td>
        </tr>
      `;
    }

     // pageNum에 해당하는 데이터가 있는지 확인하고 처리
     if (pageDatas[pageNum]) {
     // 해당 페이지의 데이터로 HTML 생성
      tbody.innerHTML = pageDatas[pageNum]
         .map(pageData => generateRow(pageData))
         .join("");
     } else {
      // tbody.innerHTML = pageNum+ "번째 데이터가 표시될 예정...";  // 데이터가 없는 페이지
      tbody.innerHTML = Array(11).fill().map(() => generateEmptyRow()).join("");
     }
    }

    // 페이지 버튼 생성 및 컨텐츠 업데이트를 함께 처리하는 함수
    function ChangePageGroup(group) {
        // 현재 그룹의 첫 페이지 번호 계산 (1, 4, 7, ...)
        const firstNumInGroup = group * pageNumPerGroup - 2;
        const lastNumInGroup = firstNumInGroup + 2;

        // 1. 페이지 버튼들 생성
        pageNumbers.innerHTML = "";
        for (let i = firstNumInGroup; i <= lastNumInGroup; i++) {
            const button = document.createElement("button");
            button.type = "button";
            button.className =
                "page-btn" + (i === firstNumInGroup ? " active" : "");
            button.textContent = i;
            pageNumbers.appendChild(button);
        }

        // 2. 이전 버튼 표시/숨김 처리
        prevButton.style.visibility = group === 1 ? "hidden" : "visible";

        // 3. 첫 페이지의 컨텐츠 표시
        updateContent(firstNumInGroup);
    }

    // 페이지 버튼 클릭 이벤트
    pageNumbers.addEventListener("click", function (e) {
        if (e.target.classList.contains("page-btn")) {
            // 기존 active 클래스 제거
            const currentActive = pageNumbers.querySelector(".active");
            if (currentActive) {
                currentActive.classList.remove("active");
            }
            // 클릭된 버튼에 active 클래스 추가
            e.target.classList.add("active");

            // 클릭된 페이지의 컨텐츠 업데이트
            const pageNum = parseInt(e.target.textContent);
            updateContent(pageNum);
        }
    });

    // 이전 버튼 클릭 이벤트
    prevButton.addEventListener("click", function () {
        if (currentGroup > 1) {
            currentGroup--;
            ChangePageGroup(currentGroup);
        }
    });

    // 다음 버튼 클릭 이벤트
    nextButton.addEventListener("click", function () {
        currentGroup++;
        ChangePageGroup(currentGroup);
    });

    // 초기 페이지 그룹 생성 및 컨텐츠 표시
    ChangePageGroup(1);
});
