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
