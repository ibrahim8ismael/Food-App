
let logBtn = document.getElementById('log-btn');

logBtn.addEventListener('click' , function(){
    event.preventDefault();

    let email = document.getElementById('e-mail');
    let password = document.getElementById('password');

    let allFilled = true; //flag for check filed



    if(email.value.trim() === '') {
        email.style.outline = '2px solid red'; 
        email.style.transition ='0.3s';
        allFilled = false;
    }
    else{
        allFilled = true;
        email.style.outline = '';
    }

    if(password.value.trim() === '') {
        password.style.outline = '2px solid red'; 
        password.style.transition ='0.3s';
        allFilled = false;
    }
    else{
        allFilled = true;
        password.style.outline = '';
    }

    // return to page
    if (allFilled) {
        window.location.href = 'HomePage.html';
    }
});