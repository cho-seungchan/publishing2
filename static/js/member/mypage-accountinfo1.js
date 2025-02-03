const nameCheckButton = document.getElementById("btnName");
const nameEditButton = nameCheckButton.previousElementSibling;
const nameCancelButton = nameCheckButton.nextElementSibling;
const nameField = nameCheckButton.parentElement.parentElement;
nameEditButton.addEventListener('click', ()=>{
    console.log(nameEditButton.classList[0]);
    console.log(nameField.classList[0]);
    const firstDiv = nameField.firstElementChild;
    const secondDiv = firstDiv.nextElementSibling;
    
    firstDiv.classList.add('inactive');
    secondDiv.classList.remove('inactive');
    // console.log(firstDiv.classList[1]);
    // console.log(secondDiv.classList[1]);
    nameCheckButton.removeAttribute('disabled');
    nameCheckButton.nextElementSibling.removeAttribute('disabled');
    nameCheckButton.previousElementSibling.setAttribute('disabled','true');
    }   
    )
    nameCheckButton.addEventListener('click', () =>{
    const firstDiv = nameField.firstElementChild;
    const secondDiv = firstDiv.nextElementSibling;
    firstDiv.classList.remove('inactive');
    secondDiv.classList.add('inactive');
    nameCheckButton.setAttribute('disabled','true');
    nameCheckButton.nextElementSibling.setAttribute('disabled','true');
    nameCheckButton.previousElementSibling.removeAttribute('disabled');
    })

    nameCancelButton.addEventListener('click', () =>{
        const firstDiv = nameField.firstElementChild;
        const secondDiv = firstDiv.nextElementSibling;
        firstDiv.classList.remove('inactive');
        secondDiv.classList.add('inactive');
        nameCheckButton.setAttribute('disabled','true');
        nameCheckButton.nextElementSibling.setAttribute('disabled','true');
        nameCheckButton.previousElementSibling.removeAttribute('disabled');
        })


const birthCheckButton = document.getElementById('btnBirthDay');
const birthEditButton = birthCheckButton.previousElementSibling;
const birthCancelButton = birthCheckButton.nextElementSibling;
const birthField = birthCheckButton.parentElement.parentElement;


birthEditButton.addEventListener('click', ()=>{
    console.log(birthEditButton.classList[0]);
    console.log(birthField.classList[0]);
    const firstDiv = birthField.firstElementChild;
    const secondDiv = firstDiv.nextElementSibling;
    
    firstDiv.classList.add('inactive');
    secondDiv.classList.remove('inactive');
    // console.log(firstDiv.classList[1]);
    // console.log(secondDiv.classList[1]);
    birthCheckButton.removeAttribute('disabled');
    birthCheckButton.nextElementSibling.removeAttribute('disabled');
    birthCheckButton.previousElementSibling.setAttribute('disabled','true');
    }   
    )
    birthCheckButton.addEventListener('click', () =>{
    const firstDiv = birthField.firstElementChild;
    const secondDiv = firstDiv.nextElementSibling;
    firstDiv.classList.remove('inactive');
    secondDiv.classList.add('inactive');
    birthCheckButton.setAttribute('disabled','true');
    birthCheckButton.nextElementSibling.setAttribute('disabled','true');
    birthCheckButton.previousElementSibling.removeAttribute('disabled');
    })

    birthCancelButton.addEventListener('click', () =>{
        const firstDiv = birthField.firstElementChild;
        const secondDiv = firstDiv.nextElementSibling;
        firstDiv.classList.remove('inactive');
        secondDiv.classList.add('inactive');
        birthCheckButton.setAttribute('disabled','true');
        birthCheckButton.nextElementSibling.setAttribute('disabled','true');
        birthCheckButton.previousElementSibling.removeAttribute('disabled');
        })


const emailEditButton = document.getElementById('btnEmail');
const emailCheckButton = document.getElementById('btnMaskingEmail')
const emailCancelButton = document.getElementById('btnEmailCancel')
const editDiv = document.getElementById('edit-email')
const changeEmailSpan = document.getElementById('person-email')
const currentEmailSpan = document.getElementById('person-masking-email')
const emailCertButton = document.getElementById('btnCertEmail')
const emailMessage = document.getElementById('privacy-guide-email')
const emailCertDiv = document.getElementById('mail-cert-num')

emailEditButton.addEventListener('click',()=>{
    editDiv.classList.remove('inactive')
    changeEmailSpan.style.display = "none"
    emailEditButton.setAttribute("disabled","true")
    emailCancelButton.removeAttribute("disabled")
    emailMessage.classList.remove('inactive')
    currentEmailSpan.style.display = 'block'
})

emailCancelButton.addEventListener('click',() =>{
    editDiv.classList.add('inactive')
    emailCancelButton.setAttribute("disabled","true")
    emailEditButton.removeAttribute("disabled")
    emailMessage.classList.add('inactive')
    currentEmailSpan.removeAttribute('display')
    emailCertDiv.classList.add('inactive')
})

emailCheckButton.addEventListener('click', ()=> {
    changeEmailSpan.style.display = "inline-block"
    currentEmailSpan.style.display = 'none'
})

emailCertButton.addEventListener('click', () => {
    emailCertDiv.classList.remove('inactive')

})

const timerSpan = document.getElementById('remain-time-mail')
timerSpan.style.color = "red"
let time = 180;//초로 표시

const updateTimer = () => {
    const minute = Math.floor(time / 60);
    const second = time % 60;
    timerSpan.textContent = `${minute}:${second < 10 ? '0' + second : second}`;

    if(time <=0){
        clearInterval(timerInterval);
        alert("입력 시간이 만료되었습니다. 인증번호를 다시 발송해주세요.");
    }
    else{
        time--;
    }
};
const timerInterval = setInterval(updateTimer, 1000);