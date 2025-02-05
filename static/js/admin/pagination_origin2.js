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
    let currentGroup = 1; // 현재 페이지 그룹 (1: 1,2,3 / 2: 4,5,6 / 3: 7,8,9...)
    const pagesPerGroup = 3; // 한 그룹당 페이지 수

    // 테이블 컨텐츠 업데이트 함수
    // pageNum에 따라 해당하는 데이터를 테이블에 표시
    function updateContent(pageNum) {
        const tbody = document.querySelector(".report-table tbody");

        switch (pageNum) {
            case 1:
                tbody.innerHTML = `
                    <tr>
                        <td>0000001</td>
                        <td>부적절한 내용</td>
                        <td>템프</td>
                        <td>허세웅</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                    <tr>
                        <td>0000002</td>
                        <td>허위정보</td>
                        <td>템프</td>
                        <td>허세웅</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                    <tr>
                        <td>0000003</td>
                        <td>스팸 / 도배</td>
                        <td>템프</td>
                        <td>허세웅</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                    <tr>
                        <td>0000004</td>
                        <td>권리침해</td>
                        <td>템프</td>
                        <td>허세웅</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                    <tr>
                        <td>0000005</td>
                        <td>불법행위</td>
                        <td>템프</td>
                        <td>허세웅</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                    <tr>
                        <td>0000006</td>
                        <td>비매너 / 불건전</td>
                        <td>템프</td>
                        <td>허세웅</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                    <tr>
                        <td>0000007</td>
                        <td>차별 / 비하</td>
                        <td>템프</td>
                        <td>허세웅</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                    <tr>
                        <td>0000008</td>
                        <td>부적절한 내용</td>
                        <td>템프</td>
                        <td>허세웅</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                    <tr>
                        <td>0000009</td>
                        <td>프로그램 품질</td>
                        <td>템프</td>
                        <td>허세웅</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                    <tr>
                        <td>0000010</td>
                        <td>기타</td>
                        <td>템프</td>
                        <td>허세웅</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                    <tr>
                        <td>0000011</td>
                        <td>불법행위</td>
                        <td>템프</td>
                        <td>허세웅</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                `;
                break;
            case 2:
                tbody.innerHTML = `
                    <tr>
                        <td>0000012</td>
                        <td>스팸 / 도배</td>
                        <td>코리아IT</td>
                        <td>김승균</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                    <tr>
                        <td>0000013</td>
                        <td>프로그램 품질</td>
                        <td>코리아IT</td>
                        <td>김승균</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                                                  <tr>
                        <td>0000014</td>
                        <td>스팸 / 도배</td>
                        <td>코리아IT</td>
                        <td>김승균</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                    <tr>
                        <td>0000015</td>
                        <td>프로그램 품질</td>
                        <td>코리아IT</td>
                        <td>김승균</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                                                  <tr>
                        <td>0000016</td>
                        <td>비매너 / 불건전</td>
                        <td>코리아IT</td>
                        <td>김승균</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                    <tr>
                        <td>0000017</td>
                        <td>부적절한 내용</td>
                        <td>코리아IT</td>
                        <td>김승균</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                                                  <tr>
                        <td>0000018</td>
                        <td>차별 / 비하</td>
                        <td>코리아IT</td>
                        <td>김승균</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                    <tr>
                        <td>0000019</td>
                        <td>부적절한 내용</td>
                        <td>코리아IT</td>
                        <td>김승균</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                                                  <tr>
                        <td>0000020</td>
                        <td>부적절한 내용</td>
                        <td>코리아IT</td>
                        <td>김승균</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                    <tr>
                        <td>0000021</td>
                        <td>프로그램 품질</td>
                        <td>코리아IT</td>
                        <td>김승균</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                                                  <tr>
                        <td>0000022</td>
                        <td>불법행위</td>
                        <td>코리아IT</td>
                        <td>김승균</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                `;
                break;
            case 3:
                tbody.innerHTML = `
                    <tr>
                        <td>0000023</td>
                        <td>비매너 / 불건전</td>
                        <td>점핏</td>
                        <td>한지수</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                    <tr>
                        <td>0000024</td>
                        <td>부적절한 내용</td>
                        <td>점핏</td>
                        <td>한지수</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                                                  <tr>
                        <td>0000025</td>
                        <td>차별 / 비하</td>
                        <td>점핏</td>
                        <td>한지수</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                    <tr>
                        <td>0000026</td>
                        <td>허위정보</td>
                        <td>점핏</td>
                        <td>한지수</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                                                  <tr>
                        <td>0000027</td>
                        <td>불법행위</td>
                        <td>점핏</td>
                        <td>한지수</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                    <tr>
                        <td>0000028</td>
                        <td>부적절한 내용</td>
                        <td>점핏</td>
                        <td>한지수</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                                                  <tr>
                        <td>0000029</td>
                        <td>부적절한 내용</td>
                        <td>점핏</td>
                        <td>한지수</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                    <tr>
                        <td>0000030</td>
                        <td>기타</td>
                        <td>점핏</td>
                        <td>한지수</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                                                  <tr>
                        <td>0000031</td>
                        <td>부적절한 내용</td>
                        <td>점핏</td>
                        <td>한지수</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                    <tr>
                        <td>0000032</td>
                        <td>기타</td>
                        <td>점핏</td>
                        <td>한지수</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                                                  <tr>
                        <td>0000033</td>
                        <td>차별 / 비하</td>
                        <td>점핏</td>
                        <td>한지수</td>
                        <td>2025-02-04</td>
                        <td><span class="status pending">처리중</span></td>
                        <td><button type="button" class="detail-btn">상세보기</button></td>
                    </tr>
                `;
                break;
            case 4:
                tbody.innerHTML = `페이지4 데이터...`; // 원본 데이터 유지
                break;
            case 5:
                tbody.innerHTML = `페이지5 데이터...`; // 원본 데이터 유지
                break;
            case 6:
                tbody.innerHTML = `페이지6 데이터...`; // 원본 데이터 유지
                break;
            case 7:
                tbody.innerHTML = `페이지7 데이터...`; // 원본 데이터 유지
                break;
            default:
                tbody.innerHTML = `페이지N 데이터...`;
                break;
        }
    }

    // 페이지 버튼 생성 및 컨텐츠 업데이트를 함께 처리하는 함수
    function handlePageGroupChange(group) {
        // 현재 그룹의 첫 페이지 번호 계산 (1, 4, 7, ...)
        const firstPageInGroup = group * pagesPerGroup - 2;
        const lastPageInGroup = firstPageInGroup + 2;

        // 1. 페이지 버튼들 생성
        pageNumbers.innerHTML = "";
        for (let i = firstPageInGroup; i <= lastPageInGroup; i++) {
            const button = document.createElement("button");
            button.type = "button";
            button.className =
                "page-btn" + (i === firstPageInGroup ? " active" : "");
            button.textContent = i;
            pageNumbers.appendChild(button);
        }

        // 2. 이전 버튼 표시/숨김 처리
        prevButton.style.visibility = group === 1 ? "hidden" : "visible";

        // 3. 첫 페이지의 컨텐츠 표시
        updateContent(firstPageInGroup);
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
            handlePageGroupChange(currentGroup);
        }
    });

    // 다음 버튼 클릭 이벤트
    nextButton.addEventListener("click", function () {
        currentGroup++;
        handlePageGroupChange(currentGroup);
    });

    // 초기 페이지 그룹 생성 및 컨텐츠 표시
    handlePageGroupChange(1);
});
