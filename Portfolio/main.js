/*const menu = document.querySelector('menu')
const menuList = document.querySelectorAll('nav li')
menu.addEventListener('click',()=>{
    menuList.classList.toogle('showmenu')
})*/

const button = document.getElementById('btn-input');
let userInput = document.getElementById('nameInput');
let userEmail = document.getElementById('emailInput');
let userMessage = document.getElementById('messageInput');

button.addEventListener('click', ()=> {
        let input = userInput.Value;
        let email = userEmail.value;
        let message = userMessage.value; 

     alert("Detailed are submitted")
     userEmail.value = " "
     
     
})