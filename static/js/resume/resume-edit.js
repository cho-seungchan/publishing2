const righttopbutton = document.querySelector("div.header-right-user7");
const righttopmenu = document.querySelector("div.header-right-menu8");
NodeList.prototype.addEventListener = Array.prototype.addEventListener;

// 우상단 마우스 이벤트트
righttopbutton.addEventListener("mouseover", function () {
    righttopmenu.style.display = "block";
});
righttopmenu.addEventListener("mouseover", function () {
    righttopmenu.style.display = "block";
});
righttopbutton.addEventListener("mouseout", function () {
    righttopmenu.style.display = "none";
});
righttopmenu.addEventListener("mouseout", function () {
    righttopmenu.style.display = "none";
});

const topNavigation = document.querySelector("header.header-sc");
const topMenu = document.querySelector("nav.nav-sc3");

topNavigation.addEventListener("mouseover", function () {
    topMenu.style.display = "flex";
});

topNavigation.addEventListener("mouseout", function () {
    topMenu.style.display = "none";
});
// 검색창
const searchBoxBlink = document.querySelectorAll("div.search-box");
const searchBoxHidden = document.querySelectorAll("div.searchbox-hidden");
const temp = document.querySelector("div.searchbox-hidden-content");
const mediaSearchBtn = document.querySelector("button.media-searchbtn");
const topSearchBox = document.querySelector("div.searchbox-top");

const oldtopSearchBox = document.querySelector("div.searchbox-top.old");
const newtopSearchBox = document.querySelector("div.searchbox-top.formedia");
const oldSearchBoxOnClick = document.querySelector("div.searchbox-onclick.old");
const newSearchBoxOnClick = document.querySelector(
    "div.searchbox-onclick.formedia"
);

window.addEventListener("resize", () => {
    window.location.reload;
    searchBoxHidden.forEach((hiddenArea) => {
        searchBoxBlink.forEach((blinkArea) => {
            if (window.innerWidth < 1080) {
                if (oldtopSearchBox.innerHTML != "") {
                    hiddenArea.classList.remove("invisible");
                    hiddenArea.removeAttribute("style");
                    newtopSearchBox.innerHTML += oldtopSearchBox.innerHTML;
                    oldtopSearchBox.innerHTML = "";
                }
            } else if (window.innerWidth >= 1080) {
                if (newtopSearchBox.innerHTML != "") {
                    newSearchBoxOnClick.style.display = "none";
                    hiddenArea.classList.add("invisible");
                    hiddenArea.style.display = "none";
                    oldtopSearchBox.innerHTML += newtopSearchBox.innerHTML;
                    newtopSearchBox.innerHTML = "";
                }
            }
        });
    });
});

document.addEventListener("click", (e) => {
    window.location.reload;

    searchBoxHidden.forEach((hiddenArea) => {
        searchBoxBlink.forEach((blinkArea) => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1080) {
                hiddenArea.classList.add("invisible");
                if (blinkArea.contains(e.target)) {
                    hiddenArea.classList.remove("invisible");
                    hiddenArea.setAttribute("style", "display : block;");
                } else if (!hiddenArea.contains(e.target)) {
                    hiddenArea.classList.add("invisible");
                    hiddenArea.removeAttribute("style");
                }
            } else if (screenWidth < 1080) {
                if (mediaSearchBtn.contains(e.target)) {
                    hiddenArea.classList.remove("invisible");
                    newtopSearchBox.style.display = "block";
                    newSearchBoxOnClick.style.display = "block";
                } else if (!newtopSearchBox.contains(e.target)) {
                    hiddenArea.classList.add("invisible");
                    newtopSearchBox.style.display = "none";
                    newSearchBoxOnClick.style.display = "none";
                }
            }
        });
    });
});

// 검색창

// 좌측 메뉴 버튼 + 해당 버튼으로 비활성화 여부 가능.
const editMenuButton = document.querySelectorAll("button.editMenuButton");

editMenuButton.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("clicked");
        const buttonValue = button.previousElementSibling.innerText;
        // console.log(buttonValue)
        switch (buttonValue) {
            case "사진":
                document
                    .querySelector("div.profilephoto")
                    .classList.toggle("hidden");
                break;
            case "간단소개":
                document
                    .querySelector("div.simplepr")
                    .classList.toggle("hidden");
                break;
            case "직무":
                // 여기는 나중에 직업 카테고리 정도로 이름 바꿀 예정
                document
                    .querySelector("div.jobcategory")
                    .classList.toggle("hidden");
                break;
            case "기타사항":
                document
                    .querySelector("div.etcarea")
                    .classList.toggle("hidden");
                break;
            default:
                document
                    .querySelector("div.applicant")
                    .classList.toggle("hidden");
                break;
        }
    });
});

const careerChoiceButton = document.querySelector("dd.memberinfo-text2");
const memberCareerPeriod = document.querySelector(
    "div.memberinfo-text2-option"
);
const memberCareerPeriodArrow = document.querySelector(
    "div.memberinfo-text2-text svg"
);
const careerPeriodList = document.querySelectorAll("label.careerperiodlist");

careerChoiceButton.addEventListener("click", () => {
    memberCareerPeriod.classList.toggle("hidden");
    memberCareerPeriodArrow.classList.toggle("svghovered");
});

const resumeReleaseBtn = document.querySelector("button.resumeradiobutton");
const yearText = document.querySelector("div.memberinfo-text2-text");
const radioButtonText = document.querySelector("div.profile-tooltip");
const resumeStatus = document.getElementById("resume-status");
resumeReleaseBtn.addEventListener("click", () => {
    resumeReleaseBtn.classList.toggle("clicked");
    if (resumeReleaseBtn.classList.contains("clicked")) {
        //공개 상태
        resumeStatus.innerText = "이력서 공개";
        privateToolTipBefore.classList.add("hidden2");
        privateToolTipAfter.classList.remove("hidden2");
        privateToolTipAfter.classList.remove("hidden");
    } else {
        resumeStatus.innerText = "이력서 비공개";
        privateToolTipBefore.classList.remove("hidden2");
        privateToolTipAfter.classList.add("hidden2");
        privateToolTipBefore.classList.remove("hidden");
    }
});

careerPeriodList.forEach((year) => {
    year.addEventListener("click", () => {
        yearText.style.color = "black";

        yearText.innerText = year.innerText;
    });
});

const resumeQuestion = document.querySelector(
    "div.memberinfo-tooltip-button-change"
);
const privateToolTipBefore = document.querySelector(
    "div.resume-private.before"
);
const privateToolTipAfter = document.querySelector("div.resume-private.after");

resumeQuestion.addEventListener("click", () => {
    resumeQuestion.classList.toggle("before");
    resumeQuestion.classList.toggle("after");
    privateToolTipBefore.classList.toggle("hidden");
    privateToolTipAfter.classList.toggle("hidden");
    if (resumeReleaseBtn.classList.contains("clicked")) {
        //공개 상태
        privateToolTipBefore.classList.add("hidden2");
        privateToolTipAfter.classList.remove("hidden2");
    } else {
        privateToolTipBefore.classList.remove("hidden2");
        privateToolTipAfter.classList.add("hidden2");
    }
});

// 비공개 --> 공개 : 공개 메시지
// 공개 --> 비공개 : 비공개 메시지

const privateCloseBtn = document.getElementById("stauts-private");
const publicCloseBtn = document.getElementById("status-public");

privateCloseBtn.addEventListener("click", () => {
    privateToolTipBefore.classList.add("hidden");
});

publicCloseBtn.addEventListener("click", () => {
    privateToolTipAfter.classList.add("hidden");
});

const simpleprTextArea = document.querySelector("textarea.simplepr-textarea");

simpleprTextArea.addEventListener("input", function () {
    this.style.height = "auto"; // 높이를 초기화
    this.style.height = this.scrollHeight + "px"; // 내용에 맞게 높이 조정
});

const jobCategoryRightButton = document.getElementById(
    "jobcategory-right-button"
);
const jobCategoryList = document.querySelector("div.jobcategory-list");
jobCategoryRightButton.addEventListener("click", () => {
    jobCategoryList.classList.toggle("hidden");
});

const jobCheckButton = document.querySelectorAll("input.jobcategory-inputarea");
const selectionWrapper = document.querySelector("div.select-wrap");
const closeButtons = document.querySelectorAll("button.btn-close");
jobCheckButton.forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
        const buttonsValue = buttons.nextElementSibling.innerText;
        var temp = `<div class="select-item"><span>${buttonsValue}</span><button class="btn-close" type="button"><span class="blind">닫기</span></button></div>`;
        console.log(temp);
        if (buttons.checked) {
            selectionWrapper.innerHTML += temp;
        } else {
            selectionWrapper.innerHTML -= temp;
            if ((selectionWrapper.innerHTML = "")) {
                selectionWrapper.innerHTML = "";
                // 이 처리를 안 하면 NaN 이 뜸.
            }
        }
    });
});

// 추가 알고리즘은 ok // 이제 제거만 하면 됨.
const eduEditBtn = document.getElementById("edueditbtn");
const eduAddPlace = document.querySelector("div.memberedu");
const profileDownBtn = document.querySelectorAll("button.profile-down-button");
const profileUpBtn = document.querySelectorAll("button.profile-up-button");
const profileDeleteButton = document.querySelectorAll(
    "button.profile-delete-button"
);
eduEditBtn.addEventListener("click", () => {
    const membereduEditMark = document.querySelectorAll(
        "div.memberedu-edit-mark"
    );
    let newEditArea = document.createElement("div");
    membereduEditMark.forEach((mark) => {
        mark.classList.add("clicked");
    });

    newEditArea.className = "memberedu-edit";
    newEditArea.innerHTML = `<div class="memberedu-edit-mark"></div>
                                                <div class="memberedu-graduate1 memberedu-graduate2">
                                                    <div class="year-month-content">
                                                        <input class="year-content" placeholder="YYYY" maxlength="4" type="text" value="" name="educations.0.graduateYear">.<input class="month-content" placeholder="MM" maxlength="2" type="text" value="" name="educations.0.graduateMonth"><span id="dropped">졸업(예정)</span>
                                                    </div>
                                                    <div class="memberedu-drop">
                                                        <input id="educations.0.educationStatus" type="checkbox"><label for="educations.0.educationStatus" class="sc-beab3720-0 lbwSup">중퇴</label>
                                                    </div>
                                                </div>
                                                <div class="memberedu-division">
                                                    <div class="memberedu-name">
                                                        <div>
                                                            <div class="memberedu-name-inner">
                                                                <div class="memberedu-class">
                                                                    <div class="memberedu-class-inner">
                                                                        <div class="memberedu-class-choice">
                                                                            <span>학력
                                                                                구분</span><input class="memberedu-class-choice-input" type="text" name="educations.0.educationType" inputmode="none"><button type="button" class="classchoice">
                                                                                <span style="
                                                                                            display: flex;
                                                                                        "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                                                                        <path fill="#222" fill-rule="evenodd" d="M13.472 5.195c.26.26.26.683 0 .943l-5 5a.667.667 0 0 1-.943 0l-5-5a.667.667 0 1 1 .943-.943L8 9.724l4.529-4.529c.26-.26.682-.26.943 0Z" clip-rule="evenodd"></path>
                                                                                    </svg></span>
                                                                            </button>
                                                                        </div>
                                                                        <div class="memberedu-class-list hidden">
                                                                            <!-- 화면 가려서 임시로 스타일 설정. -->
                                                                            <ul>
                                                                                <li>
                                                                                    <div class="memberedu-class-content">
                                                                                        <label for="category0" class="class-content-label">고등학교</label>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div class="memberedu-class-content">
                                                                                        <label for="category1" class="class-content-label">대학(2,3년)</label>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div class="memberedu-class-content">
                                                                                        <label for="category2" class="class-content-label">대학교(4년)</label>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div class="memberedu-class-content">
                                                                                        <label for="category3" class="class-content-label">대학원(석사)</label>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div class="memberedu-class-content">
                                                                                        <label for="category4" class="class-content-label">대학원(박사)</label>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="memberedu-schoolname1 memberedu-schoolname2 flex-main-text2">
                                                                    <input placeholder="학교명을 입력해주세요" maxlength="255" type="text" value="" name="educations.0.schoolName">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="profile-order-control">
                                                            <div class="order-inner">
                                                                <div class="order-buttons">
                                                                    <button class="profile-down-button"  type="button">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                                                            <path fill="#222" fill-rule="evenodd" d="M13.472 5.195c.26.26.26.683 0 .943l-5 5a.667.667 0 0 1-.943 0l-5-5a.667.667 0 1 1 .943-.943L8 9.724l4.529-4.529c.26-.26.682-.26.943 0Z" clip-rule="evenodd"></path>
                                                                        </svg></button><button class="profile-up-button" type="button">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                                                                            <path fill="#000" fill-rule="evenodd" d="M3.793 16.207a1 1 0 0 1 0-1.414l7.5-7.5a1 1 0 0 1 1.414 0l7.5 7.5a1 1 0 0 1-1.414 1.414L12 9.414l-6.793 6.793a1 1 0 0 1-1.414 0Z" clip-rule="evenodd"></path>
                                                                        </svg></button><button class="profile-delete-button" type="button">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                            <path fill="#C4C4C4" fill-rule="evenodd" d="M6.25 5.5a3 3 0 0 1 3-3h5.5a3 3 0 0 1 3 3v1.25H21a1 1 0 1 1 0 2h-1.25v9.75a3 3 0 0 1-3 3h-9.5a3 3 0 0 1-3-3V8.75H3a1 1 0 0 1 0-2h3.25V5.5Zm2 1.25h7.5V5.5a1 1 0 0 0-1-1h-5.5a1 1 0 0 0-1 1v1.25Zm-2 2v9.75a1 1 0 0 0 1 1h9.5a1 1 0 0 0 1-1V8.75H6.25Zm3.5 3a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0v-2.5a1 1 0 0 1 1-1Zm5.5 1a1 1 0 1 0-2 0v2.5a1 1 0 1 0 2 0v-2.5Z" clip-rule="evenodd"></path>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="memberedu-schoolname1 memberedu-schoolname3">
                                                        <input placeholder="학과명을 입력해주세요" maxlength="255" type="text" value="" name="educations.0.majorName">
                                                    </div>
                                                    <div class="member-grade">
                                                        <div class="memberedu-schoolname1 memberedu-schoolname4">
                                                            <input placeholder="학점" maxlength="4" type="text" value="" name="educations.0.creditPoint">
                                                        </div>
                                                        <div class="memberinfo-text2-inner">
                                                            <div class="member-standard-grade">
                                                                <span>기준학점</span><input class="memberedu-class-choice-input" type="text" name="educations.0.creditPointType" inputmode="none"><button type="button" id="standardgrade">
                                                                    <span style="
                                                                                display: flex;
                                                                            "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                                                            <path fill="#222" fill-rule="evenodd" d="M13.472 5.195c.26.26.26.683 0 .943l-5 5a.667.667 0 0 1-.943 0l-5-5a.667.667 0 1 1 .943-.943L8 9.724l4.529-4.529c.26-.26.682-.26.943 0Z" clip-rule="evenodd"></path>
                                                                        </svg></span>
                                                                </button>
                                                            </div>
                                                            <div class="standard-degree hidden">
                                                                <ul>
                                                                    <li>
                                                                        <div class="sc-5a671f5b-4 khTWOS"><label for="category9999" class="maxgrade">선택
                                                                                안함</label></div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="sc-5a671f5b-4 khTWOS"><label for="category0" class="maxgrade">4.5</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="sc-5a671f5b-4 khTWOS"><label for="category1" class="maxgrade">4.3</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="sc-5a671f5b-4 khTWOS"><label for="category2" class="maxgrade">4.0</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="sc-5a671f5b-4 khTWOS"><label for="category3" class="maxgrade">5.0</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="sc-5a671f5b-4 khTWOS"><label for="category4" class="maxgrade">7.0</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="sc-5a671f5b-4 khTWOS"><label for="category5" class="maxgrade">100</label>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            `;

    eduAddPlace.insertBefore(newEditArea, eduEditBtn);
    profileDownBtn.forEach((buttons) => {
        buttons.removeAttribute("disabled");
    });

    profileUpBtn.forEach((buttons) => {
        buttons.removeAttribute("disabled");
    });

    profileDeleteButton.forEach((buttons) => {
        buttons.removeAttribute("disabled");
    });
});

const dropButton = document.getElementById("educations.0.educationStatus");
const dropSpan = document.getElementById("dropped");

dropButton.addEventListener("click", () => {
    if (dropButton.checked) {
        dropSpan.innerText = "중퇴";
    } else {
        dropSpan.innerText = "졸업(예정)";
    }
});

const classChoiceBtn = document.querySelectorAll("button.classchoice");
const classChoice = document.querySelector("div.memberedu-class-list");
classChoiceBtn.forEach((buttons) => {
    window.addEventListener("click", (e) => {
        if (buttons.contains(e.target)) {
            classChoice.classList.toggle("hidden");
        } else {
            classChoice.classList.add("hidden");
        }
    });
});

const memberEduValue = document.querySelectorAll(
    "div.memberedu-class-content label"
);
const membereduSpan = document.querySelector("div.memberedu-class-choice span");
memberEduValue.forEach((choice) => {
    choice.addEventListener("click", () => {
        membereduSpan.innerText = choice.innerText;
        membereduSpan.style.color = "black";
    });
});

const maxGradeBtn = document.getElementById("standardgrade");
const maxGradeList = document.querySelector("div.standard-degree");
window.addEventListener("click", (e) => {
    if (maxGradeBtn.contains(e.target)) {
        maxGradeList.classList.toggle("hidden");
    } else {
        maxGradeList.classList.add("hidden");
    }
});
const maxGradeSpan = document.querySelector("div.member-standard-grade span");
const maxGradeValue = document.querySelectorAll("label.maxgrade");

maxGradeValue.forEach((choice) => {
    choice.addEventListener("click", () => {
        maxGradeSpan.innerText = choice.innerText;
        maxGradeSpan.style.color = "black";
    });
});

// 한 개만 있을 때는 버튼들 disabled 상태, 여러개면 활성화
// 삭제는 무조건 활성화, 위 아래 버튼은 각각 맨 위, 맨 아래에 있을 때 비활성화
const memberEdu = document.querySelector("div.memberedu");
const amountDiv = memberEdu.querySelectorAll("div");
const editMark = document.querySelectorAll("div.memberedu-edit-mark");

window.addEventListener("click", (e) => {
    if (e.target && e.target.matches("button.profile-delete-button")) {
        e.target.closest("div.memberedu-edit").remove();
        //  학력 정보가 한 개만 남았을 때에는 clicked 속성이 없어져야 함.
        if (amountDiv.length === 1) {
            editMark.forEach(mark, () => {
                mark.classList.remove("clicked");
            });
        }
    }
});
window.addEventListener("click", (e) => {
    if (e.target && e.target.matches("button.profile-up-button")) {
        const currentDiv = e.target.closest("div.memberedu-edit");
        const previousDiv = currentDiv.previousElementSibling;
        eduAddPlace.insertBefore(currentDiv, previousDiv);
    }
});

window.addEventListener("click", (e) => {
    if (e.target && e.target.matches("button.profile-down-button")) {
        const currentDiv = e.target.closest("div.memberedu-edit");
        const nextDiv = currentDiv.nextElementSibling;
        eduAddPlace.insertBefore(nextDiv, currentDiv);
    }
});
