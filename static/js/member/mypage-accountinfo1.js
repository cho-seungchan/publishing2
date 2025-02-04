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

emailEditButton.addEventListener('click',()=>{
    const editDiv = document.getElementById('edit-email')
    const nextSpan = document.getElementById('person-email')
    editDiv.classList.remove('inactive')
    nextSpan.style.display = "none"
})