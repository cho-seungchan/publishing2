// 별 클릭 이벤트
document.querySelector(".sidebar .person img").addEventListener("click", (star) => {
    if (star.target.className == "clicked") {
        star.target.src = `../../static/images/aside/whiteStar.png`;
        star.target.className = "";
        star.target.style.width = "70px";
        star.target.style.marginLeft = "-20px";
    } else {
        star.target.src = `../../static/images/aside/blueStar.png`;
        star.target.className = "clicked";
        star.target.style.width = "30px";
        star.target.style.marginLeft = "0px";
    }
});
// 버튼 클릭 이벤트
document.querySelector(".buttons").addEventListener("click", (button) => {
    if (button.target.classList.contains("pass")) {
        document.querySelector(".sidebar .fail").classList.remove("clicked");
    } else {
        document.querySelector(".sidebar .pass").classList.remove("clicked");
    }
    button.target.classList.add("clicked");
});
