// 사업자 등록번호
const integratedNUM = document.querySelector("#corp_code");
// 사업자 등록번호 박스
const integratedBOX = document.querySelector("#redbox");
// 사업자 등록번호 박스 에러
const integratedMSG = document.querySelector("#msg_corp_code");

integratedNUM.addEventListener("input", () => {
  console.log("입력됨");

  // 숫자만 입력가능.
  let value = integratedNUM.value.replace(/\D/g, "");

  // 길이에 따라 -추가
  if (value.length > 3 && value.length <= 5) {
    value = value.slice(0, 3) + "-" + value.slice(3);
  } else if (value.length > 5) {
    value =
      value.slice(0, 3) + "-" + value.slice(3, 5) + "-" + value.slice(5, 10);
  }

  // 필드 값 업데이트
  integratedNUM.value = value;
});

let fmsg = integratedNUM.integratedNUM; // 사업자번호 입력제어
integratedNUM.addEventListener("focus", () => {
  console.log("focus 됨");
});
// 사업자번호 칸 이벤트

integratedNUM.addEventListener("blur", () => {
  // 사업자 번호를 안적고 포커스풀면 뜨는메세지
  if (integratedNUM.value === "") {
    //
    integratedBOX.style.borderColor = "red";
    integratedMSG.style.display = "block";
  } else if (integratedNUM.value.length < 12) {
    //
    // 사업자 번호 다안적으면 뜨는 문구
    integratedBOX.style.borderColor = "red";
    integratedMSG.style.display = "block";
    integratedMSG.innerText = "올바른 사업자번호가 아닙니다.";
  }
});

// 사업자 등록증 모달창 클릭 이벤트

const pagebtn = document.querySelector("#notice_message_law_btn"); // 사업자 번호가 없어요 버튼.
const modalBOX = document.querySelector("#notice_message_law");
const btnclose2 = document.querySelector(".btn_cancel");
const modalBackground = document.querySelector("#dimmed");
const btnclose = document.querySelector(".BtnClose");

modalBOX.style.display = "none";
modalBackground.style.display = "none";

pagebtn.addEventListener("click", () => {
  console.log("PAGEbtn");
  if (modalBOX.style.display === "none") {
    console.log("IN");
    modalBOX.style.display = "block";
    modalBackground.style.display = "block";
  } else if (pagebtn.style.display === "block") {
    modalBOX.style.display = "none";
    modalBackground.style.display = "none";
  }
});

btnclose.addEventListener("click", () => {
  if (modalBOX.style.display === "block") {
    modalBOX.style.display = "none";
    modalBackground.style.display = "none";
  }
});

btnclose2.addEventListener("click", () => {
  if (modalBOX.style.display === "block") {
    modalBOX.style.display = "none";
    modalBackground.style.display = "none";
  }
});

// 파일 선택 버튼 눌럿을떄 사업자 등록번호로 포커스,
const btnFile = document.querySelector("#select_certification_file");

btnFile.style.display = "block";

btnFile.addEventListener("click", () => {
  console.log("in");
  if (integratedNUM.value.length < 14) {
    integratedNUM.focus();
    alert("사업자 등록번호를 입력하세요.");
    // window.scrollTo("top : 0");
  }
});

const nextTbtn = document.querySelector("#next_certification_check");
const corp_wrap = document.querySelector(
  // 기업인증 사진있는곳,위에 글자까지
  "#normal_corp_code_certification_notice"
);
const subCorp_wrap = document.querySelector(".file_txt_guide3");

console.log(corp_wrap);

corp_wrap.style.display = "block";
btnFile.style.display = "block";
subCorp_wrap.style.display = "none";

console.log(corp_wrap);
nextTbtn.addEventListener("change", () => {
  console.log("변함");
  //
  if (nextTbtn.checked) {
    console.log("진입");
    //
    corp_wrap.style.display = "none";
    btnFile.style.display = "none";
    subCorp_wrap.style.display = "block";
  } else {
    corp_wrap.style.display = "block";
    btnFile.style.display = "block";
    subCorp_wrap.style.display = "none";
  }
});
