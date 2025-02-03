const idLabel = document.querySelector("#id-label");
const txt_tool = document.querySelector(".txt_tool");

txt_tool.addEventListener("focus", (e) => {
  console.log("IN");
  idLabel.style.transform = "translateY(-10px)";
  idLabel.style.fontSize = "10px";
});

txt_tool.addEventListener("blur", (e) => {
  console.log("in");
  if (txt_tool.value === "") {
    idLabel.style.transform = "translateY(0px)";
    idLabel.style.fontSize = "16px";
  }
});

const password = document.querySelector("#password");
const passowrdLabel = document.querySelector("#password-label");

password.addEventListener("focus", (e) => {
  console.log("IN");
  passowrdLabel.style.transform = "translateY(-10px)";
  passowrdLabel.style.fontSize = "10px";
});

password.addEventListener("blur", (e) => {
  console.log("in");
  if (password.value === "") {
    passowrdLabel.style.transform = "translateY(0px)";
    passowrdLabel.style.fontSize = "16px";
  }
});
