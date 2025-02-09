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
const editMenuButton = document.querySelectorAll("button.editMenuButton")

editMenuButton.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.toggle("clicked")
        const buttonValue = button.previousElementSibling.innerText
        // console.log(buttonValue)
        switch (buttonValue) {
            case "사진":
                document.querySelector("div.profilephoto").classList.toggle("hidden")
                break
            case "간단소개":
                document.querySelector("div.simplepr").classList.toggle("hidden")
                break
            case "직무":
                // 여기는 나중에 직업 카테고리 정도로 이름 바꿀 예정
                document.querySelector("div.jobcategory").classList.toggle("hidden")
                break
            case "기타사항":
                document.querySelector("div.etcarea").classList.toggle("hidden")
                break
            default:
                document.querySelector("div.applicant").classList.toggle("hidden")
                break
        }
    })
})


const careerChoiceButton = document.querySelector("dd.memberinfo-text2")
const memberCareerPeriod = document.querySelector("div.memberinfo-text2-option")
const memberCareerPeriodArrow = document.querySelector("div.memberinfo-text2-text svg")
const careerPeriodList = document.querySelectorAll("label.careerperiodlist")


careerChoiceButton.addEventListener('click', () => {
    memberCareerPeriod.classList.toggle("hidden")
    memberCareerPeriodArrow.classList.toggle("svghovered")
})

const resumeReleaseBtn = document.querySelector("button.resumeradiobutton")
const yearText = document.querySelector("div.memberinfo-text2-text")
const radioButtonText = document.querySelector("div.profile-tooltip")
const resumeStatus = document.getElementById("resume-status")
resumeReleaseBtn.addEventListener('click', () => {
    resumeReleaseBtn.classList.toggle("clicked")
    if (resumeReleaseBtn.classList.contains("clicked")) {
        //공개 상태
        resumeStatus.innerText = "이력서 공개"
        privateToolTipBefore.classList.add("hidden2")
        privateToolTipAfter.classList.remove("hidden2")
        privateToolTipAfter.classList.remove("hidden")
    }
    else {
        resumeStatus.innerText = "이력서 비공개"
        privateToolTipBefore.classList.remove("hidden2")
        privateToolTipAfter.classList.add("hidden2")
        privateToolTipBefore.classList.remove("hidden")
    }

})

careerPeriodList.forEach((year) => {
    year.addEventListener('click', () => {
        yearText.style.color = "black"
        switch (year.innerText) {
            case "1년차":
                yearText.innerText = year.innerText
                break
            case "2년차":
                yearText.innerText = year.innerText
                break
            case "3년차":
                yearText.innerText = year.innerText
                break
            case "4년차":
                yearText.innerText = year.innerText
                break
            case "5년차":
                yearText.innerText = year.innerText
                break
            case "6년차":
                yearText.innerText = year.innerText
                break
            case "7년차":
                yearText.innerText = year.innerText
                break
            case "8년차":
                yearText.innerText = year.innerText
                break
            case "9년차":
                yearText.innerText = year.innerText
                break
            case "10년차":
                yearText.innerText = year.innerText
                break
            case "11년차":
                yearText.innerText = year.innerText
                break
            case "12년차":
                yearText.innerText = year.innerText
                break
            case "13년차":
                yearText.innerText = year.innerText
                break
            case "14년차":
                yearText.innerText = year.innerText
                break
            case "15년차":
                yearText.innerText = year.innerText
                break
            default:
                yearText.innerText = year.innerText
                break
        }
    })
})

const resumeQuestion = document.querySelector("div.memberinfo-tooltip-button-change")
const privateToolTipBefore = document.querySelector("div.resume-private.before")
const privateToolTipAfter = document.querySelector("div.resume-private.after")

resumeQuestion.addEventListener('click', () => {
    resumeQuestion.classList.toggle("before")
    resumeQuestion.classList.toggle("after")
    privateToolTipBefore.classList.toggle("hidden")
    privateToolTipAfter.classList.toggle("hidden")
    if (resumeReleaseBtn.classList.contains("clicked")) {
        //공개 상태
        privateToolTipBefore.classList.add("hidden2")
        privateToolTipAfter.classList.remove("hidden2")
    }
    else {
        privateToolTipBefore.classList.remove("hidden2")
        privateToolTipAfter.classList.add("hidden2")
    }
})

// 비공개 --> 공개 : 공개 메시지
// 공개 --> 비공개 : 비공개 메시지

const privateCloseBtn = document.getElementById("stauts-private")
const publicCloseBtn = document.getElementById("status-public")


privateCloseBtn.addEventListener('click', () => {
    privateToolTipBefore.classList.add("hidden")
})

publicCloseBtn.addEventListener('click', () => {
    privateToolTipAfter.classList.add("hidden")
})

const simpleprTextArea = document.querySelector("textarea.simplepr-textarea")


simpleprTextArea.addEventListener('input', function () {
    this.style.height = 'auto'; // 높이를 초기화
    this.style.height = (this.scrollHeight) + 'px'; // 내용에 맞게 높이 조정
});



const jobCategoryRightButton = document.getElementById("jobcategory-right-button")
const jobCategoryList = document.querySelector("div.jobcategory-list")
jobCategoryRightButton.addEventListener('click', () => {
    jobCategoryList.classList.toggle("hidden")
})


const jobCheckButton = document.querySelectorAll("input.jobcategory-inputarea")
const selectionWrapper = document.querySelector("div.select-wrap")

jobCheckButton.forEach((buttons) =>{
    buttons.addEventListener("click", (e) => {
        const buttonsValue = buttons.nextElementSibling.innerText
        var temp = `<div class="select-item"><span>${buttonsValue}</span><button class="btn-close" type="button"><span class="blind">닫기</span></button></div>`
        console.log(temp)
        if(buttons.checked){
            selectionWrapper.innerHTML += temp
        }
       
        else{
            selectionWrapper.innerHTML -= temp
            if(selectionWrapper.innerHTML = ""){
                selectionWrapper.innerHTML = ""
                // 이 처리를 안 하면 NaN 이 뜸. 
            }
        }
        
    });
})


// 추가 알고리즘은 ok // 이제 제거만 하면 됨.

