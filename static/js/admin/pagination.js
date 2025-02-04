document.addEventListener("DOMContentLoaded", function () {
  // 페이지네이션 관련 요소들 선택
  const pageNumbers = document.querySelector(".page-numbers");
  const prevButton = document.querySelector(".page-btn.prev");
  const nextButton = document.querySelector(".page-btn.next");

  // 현재 페이지 그룹 설정
  let currentGroup = 1; // 현재 페이지 그룹 (1: 1,2,3 / 2: 4,5,6 / 3: 7,8,9...)
  const pagesPerGroup = 3; // 한 그룹당 페이지 수

  // 페이지 그룹 생성 함수
  function createPageGroup(group) {
    // 시작 페이지와 끝 페이지 계산
    const start = (group - 1) * pagesPerGroup + 1;
    const end = start + pagesPerGroup - 1;

    // 페이지 버튼 HTML 생성
    pageNumbers.innerHTML = "";
    for (let i = start; i <= end; i++) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "page-btn" + (i === start ? " active" : "");
      button.textContent = i;
      pageNumbers.appendChild(button);
    }

    // 이전 버튼은 1그룹일 때만 비활성화
    prevButton.disabled = group === 1;
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

      // 여기에 페이지 데이터 로드 로직 추가 (백엔드 연동 시)
      // 클릭한 페이지 번호에 따라 테이블 내용 변경
      // ex)
      const pageNum = parseInt(e.target.textContent);
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
          <td>
            <span class="status pending">처리중</span>
          </td>
          <td>
            <button type="button" class="detail-btn">
              상세보기
            </button>
          </td>
        </tr>
        <tr>
          <td>0000002</td>
          <td>허위정보</td>
          <td>템프</td>
          <td>허세웅</td>
          <td>2025-02-04</td>
          <td>
            <span class="status pending">처리중</span>
          </td>
          <td>
            <button type="button" class="detail-btn">
              상세보기
            </button>
          </td>
        </tr>
        <tr>
          <td>0000003</td>
          <td>스팸 / 도배</td>
          <td>템프</td>
          <td>허세웅</td>
          <td>2025-02-04</td>
          <td>
            <span class="status pending">처리중</span>
          </td>
          <td>
            <button type="button" class="detail-btn">
              상세보기
            </button>
          </td>
        </tr>
        <tr>
          <td>0000004</td>
          <td>권리침해</td>
          <td>템프</td>
          <td>허세웅</td>
          <td>2025-02-04</td>
          <td>
            <span class="status pending">처리중</span>
          </td>
          <td>
            <button type="button" class="detail-btn">
              상세보기
            </button>
          </td>
        </tr>
        <tr>
          <td>0000005</td>
          <td>불법행위</td>
          <td>템프</td>
          <td>허세웅</td>
          <td>2025-02-04</td>
          <td>
            <span class="status pending">처리중</span>
          </td>
          <td>
            <button type="button" class="detail-btn">
              상세보기
            </button>
          </td>
        </tr>
        <tr>
          <td>0000006</td>
          <td>비매너 / 불건전</td>
          <td>템프</td>
          <td>허세웅</td>
          <td>2025-02-04</td>
          <td>
            <span class="status pending">처리중</span>
          </td>
          <td>
            <button type="button" class="detail-btn">
              상세보기
            </button>
          </td>
        </tr>
        <tr>
          <td>0000007</td>
          <td>차별 / 비하</td>
          <td>템프</td>
          <td>허세웅</td>
          <td>2025-02-04</td>
          <td>
            <span class="status pending">처리중</span>
          </td>
          <td>
            <button type="button" class="detail-btn">
              상세보기
            </button>
          </td>
        </tr>
        <tr>
          <td>0000008</td>
          <td>부적절한 내용</td>
          <td>템프</td>
          <td>허세웅</td>
          <td>2025-02-04</td>
          <td>
            <span class="status pending">처리중</span>
          </td>
          <td>
            <button type="button" class="detail-btn">
              상세보기
            </button>
          </td>
        </tr>
        <tr>
          <td>0000009</td>
          <td>프로그램 품질</td>
          <td>템프</td>
          <td>허세웅</td>
          <td>2025-02-04</td>
          <td>
            <span class="status pending">처리중</span>
          </td>
          <td>
            <button type="button" class="detail-btn">
              상세보기
            </button>
          </td>
        </tr>
        <tr>
          <td>0000010</td>
          <td>기타</td>
          <td>템프</td>
          <td>허세웅</td>
          <td>2025-02-04</td>
          <td>
            <span class="status pending">처리중</span>
          </td>
          <td>
            <button type="button" class="detail-btn">
              상세보기
            </button>
          </td>
        </tr>
        <tr>
          <td>0000011</td>
          <td>불법행위</td>
          <td>템프</td>
          <td>허세웅</td>
          <td>2025-02-04</td>
          <td>
            <span class="status pending">처리중</span>
          </td>
          <td>
            <button type="button" class="detail-btn">
              상세보기
            </button>
          </td>
        </tr>`;
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
        default:
          // case 4 이상에 대해서는 tbody.innerHTML을 빈 문자열로 설정
          tbody.innerHTML = ``;
          break;
      }
    }
  });

  // 이전 버튼 클릭 이벤트
  prevButton.addEventListener("click", function () {
    if (currentGroup > 1) {
      currentGroup--;
      createPageGroup(currentGroup);
    }
  });

  // 다음 버튼 클릭 이벤트
  nextButton.addEventListener("click", function () {
    currentGroup++;
    createPageGroup(currentGroup);
  });

  // 초기 페이지 그룹 생성
  createPageGroup(1);
});
