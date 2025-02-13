// 사업자 등록번호
const integratedNUM = document.querySelector("#corp_code");
// 사업자 등록번호 박스
const integratedBOX = document.querySelector("#redbox");
// 사업자 등록번호 박스 에러
const integratedMSG = document.querySelector("#msg_corp_code");

integratedNUM.addEventListener("input", () => {
<<<<<<< HEAD
  // console.log("입력됨");
=======
  console.log("입력됨");
>>>>>>> member-mypage/main

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
<<<<<<< HEAD
  // console.log("focus 됨");
=======
  console.log("focus 됨");
>>>>>>> member-mypage/main
});
// 사업자번호 칸 이벤트

integratedNUM.addEventListener("blur", () => {
  // 사업자 번호를 안적고 포커스풀면 뜨는메세지
  if (integratedNUM.value === "") {
    //
    integratedBOX.style.borderColor = "red";
    integratedMSG.style.display = "block";
    integratedMSG.style.color = "red";
    integratedMSG.innerText = "올바른 사업자번호가 아닙니다.";
  } else if (integratedNUM.value.length < 12) {
    //
    // 사업자 번호 다안적으면 뜨는 문구
    integratedBOX.style.borderColor = "red";
    integratedMSG.style.display = "block";
    integratedMSG.style.color = "red";
    integratedMSG.innerText = "올바른 사업자번호가 아닙니다.";
  } else if ((integratedNUM.value.length = 12)) {
    integratedBOX.style.borderColor = "gray";
    integratedMSG.style.display = "block";
    integratedMSG.style.color = "blue";
    integratedMSG.innerText =
      "사업자등록번호 확인완료, 기업인증에 사업자등록증명원 첨부해주세요.";
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
<<<<<<< HEAD
  // console.log("PAGEbtn");
  if (modalBOX.style.display === "none") {
    // console.log("IN");
=======
  console.log("PAGEbtn");
  if (modalBOX.style.display === "none") {
    console.log("IN");
>>>>>>> member-mypage/main
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
<<<<<<< HEAD
// 파일 첨부
// 사업자등록번호 확인안돼면
const btnFile = document.querySelector("#select_certification_file");
const checkbtn = document.querySelector("#request_certification_wrap");
const nextTimeBtn = document.querySelector("#next_certification_check_wrap");
const hiddenInputPage = document.querySelector(".area_input_company");
const input = document.querySelector("#certification_file");
const filenames = document.querySelectorAll(".file_upload_name");
const filenamebox = document.querySelector("#request_certification_fail");
const fileAgree = document.querySelector("#request_certification_complete");
const fileChange = document.querySelector("#change_confirm_document_file");
const filefail = document.querySelector("#file-fail");
const closeBtn = document.querySelector("#btn_reset_certification");

btnFile.style.display = "block";
hiddenInputPage.style.display = "none";
// 파일 첨부 , 사업자 등록번호 입력해야 넘어감
btnFile.addEventListener("click", () => {
  if (integratedNUM.value.length <= 11) {
    integratedNUM.focus();
    alert("사업자 등록번호를 입력하세요.");
  } else if ((integratedNUM.value.length = 12)) {
    corp_wrap.style.display = "block";
    input.click();
  }
  closeBtn.addEventListener("click", () => {
    fileAgree.style.display = "none";
    corp_wrap.style.display = "block";
    filenamebox.style.display = "none";
    checkbtn.style.display = "none";
    btnFile.style.display = "block";
    nextTimeBtn.style.display = "block";
  });
});
// 파일변경
fileChange.addEventListener("click", () => {
  input.click();
});
// 파일첨부
input.addEventListener("change", (e) => {
  const [file] = e.target.files;
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener("load", (e) => {
    const path = e.target.result;
    //  파일통과,
    // console.log(path);
    // console.log([file]);
    if (path.includes("jpg", "png")) {
      alert("Check");
      // console.log([file][0].name);
      filenames.forEach((filename) => {
        // console.log(filename);
        filename.innerText = `${[file][0].name}`;
      });
      btnFile.style.display = "none";
      fileAgree.style.display = "block";
      hiddenInputPage.style.display = "block";
      nextTimeBtn.style.display = "none";
      closeBtn.style.display = "block";
      corp_wrap.style.display = "none";
      closeBtn.style.display = "block";

      // fileAgree.style.display = "block"
    } else {
      // alert("pdf jpg png 만 가능합니다.");
      corp_wrap.style.display = "none";
      input.value = "";
      console.log("out");
    }
  });
=======
// 사업자등록번호 확인안돼면
const btnFile = document.querySelector("#select_certification_file");

btnFile.style.display = "block";

btnFile.addEventListener("click", () => {
  console.log("in");
  if (integratedNUM.value.length <= 14) {
    integratedNUM.focus();
    alert("사업자 등록번호를 입력하세요.");
    // window.scrollTo("top : 0");
  } else if ((integratedNUM.value.length = 12)) {
  }
>>>>>>> member-mypage/main
});

// 기업인증 사진있는곳,위에 글자까지
// 다음에 할게요 누르면 발생하는 이벤트
const nextTbtn = document.querySelector("#next_certification_check");
const corp_wrap = document.querySelector(
  "#normal_corp_code_certification_notice"
);
const subCorp_wrap = document.querySelector("#next_certification_msg");

corp_wrap.style.display = "block";
btnFile.style.display = "block";
subCorp_wrap.style.display = "none";

nextTbtn.addEventListener("change", () => {
<<<<<<< HEAD
  // console.log("변함");
  //
  if (nextTbtn.checked) {
    // console.log("진입");
=======
  console.log("변함");
  //
  if (nextTbtn.checked) {
    console.log("진입");
>>>>>>> member-mypage/main
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

// 체크 박스 이벤트 동의 체크박스
const checkall = document.querySelector("#hidden_check_all_company");
const checkboxes = document.querySelectorAll(".itembtn");

checkall.addEventListener("change", function () {
  checkboxes.forEach((checkbox) => (checkbox.checked = checkall.checked));
});
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    const checkedCheckbox =
      document.querySelectorAll(".itembtn:checked").length;
    checkall.checked = checkedCheckbox === checkboxes.length; // 전부 체크되면 전체 체크
  });
});

// 판독 이후, 아이디 이벤트들
const idMsg = document.querySelector("#id");
const idbox = document.querySelector(".idbox");
const idcheckmsgbx = document.querySelector("#idCheckMsg1");
const idcheckmsg = document.querySelector("#idFocusMsg");

idMsg.addEventListener("focus", () => {
  idcheckmsgbx.innerText = "4 ~ 20자의 영문, 숫자와 특수문자 '_'만 사용가능.";
  idcheckmsgbx.style.display = "block";
  idcheckmsgbx.style.color = "gray";
  idcheckmsgbx.style.fontSize = "14px";
  idbox.style.borderColor = "gray";
});

// 아이디칸 블러됫을때 이벤트
idMsg.addEventListener("blur", () => {
  if (idMsg.value === "") {
    //
    idcheckmsgbx.style.fontSize = "12px";
    idbox.style.borderColor = "red";
    idcheckmsgbx.style.display = "block";
    idcheckmsgbx.style.color = "red";
    idcheckmsgbx.innerText =
      "4 ~ 20자의 영문, 숫자와 특수문자 '_'만 사용해주세요.";
  }
  // 만약 아아디 공통이 없다면
  else if (idMsg.value.length <= 20 || idMsg.value.length >= 4) {
    idbox.style.borderColor = "red";
    idcheckmsgbx.style.display = "block";
    idcheckmsgbx.style.color = "red";
  }
});

// 비밀번호 눌럿을때 이벤트들

const passwordImsg = document.querySelector("#password1FocusMsg");
const passwordbinput = document.querySelector("#password1");
const passwordbox = document.querySelector(".pass_box");
const passwordeye = document.querySelector("#masking_password");

passwordbinput.addEventListener("focus", () => {
  if (passwordbinput.value.length === 0) {
    passwordImsg.style.display = "block";
    passwordbox.style.borderColor = "gray";
    passwordImsg.style.color = "gray";
    passwordImsg.innerText =
      "8~16자리 영문 대소문자, 숫자, 특수문자 중 3가지 이상 조합으로 만들어주세요.";
  } else if (passwordImsg.value !== "") {
    passwordbox.style.borderColor = "red";
    passwordImsg.style.color = "red";
    passwordImsg.innerText =
      "3자리 이상 연속되는 영문, 숫자, 특수문자는 비밀번호로 사용할 수 없습니다.";
  }
});

const phoneBtn = document.querySelector("#identify_phone");
const hiddenEmail = document.querySelector("#phoneTOemail");
const hemailMSG = document.querySelector("#sms_msg_email1");
const hemailInput = document.querySelector("#sms_email_id");
const hiddenEmailbox = document.querySelector("#hidden-emaill-wrap");

phoneBtn.addEventListener("click", () => {
  hiddenEmail.style.display = "block";
});
hemailInput.addEventListener("focus", () => {
  //
});
// 이메일에 @ 없으면 오류가뜸
hemailInput.addEventListener("blur", () => {
  if (!hemailInput.value.includes("@")) {
    hemailMSG.style.display = "block";
    hiddenEmailbox.style.borderColor = "red";
    //
  } else if (hemailInput.value.includes("@")) {
    hemailMSG.style.display = "none";
    hiddenEmailbox.style.borderColor = "gray";
  }
});
