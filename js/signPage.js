
let signBtn = document.getElementById('sign-btn');

signBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from input fields
    let fname = document.getElementById('firstName');
    let lname = document.getElementById('lastName');
    let email = document.getElementById('e-mail');
    let phone = document.getElementById('phone');
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    // Flag to check if all fields are filled
    let allFilled = true;

    // Check first name
    if (fname.value.trim() === '') {
        fname.style.outline = '2px solid red'; 
        fname.style.transition ='0.3s';
        allFilled = false; 
    } else {
        fname.style.outline = ''; // Remove outline if filled
    }

    // Check last name
    if (lname.value.trim() === '') {
        lname.style.outline = '2px solid red'; // Add red outline
        lname.style.transition ='0.3s';
        allFilled = false; // Set flag to false if empty
    } else {
        lname.style.outline = ''; // Remove outline if filled
    }

    // Check email
    if (email.value.trim() === '') {
        email.style.outline = '2px solid red'; // Add red outline
        email.style.transition ='0.3s';
        allFilled = false; // Set flag to false if empty
    } else {
        email.style.outline = ''; // Remove outline if filled
    }

    // Check phone
    if (phone.value.trim() === '') {
        phone.style.outline = '2px solid red'; // Add red outline
        phone.style.transition ='0.3s';
        allFilled = false; // Set flag to false if empty
    } else {
        phone.style.outline = ''; // Remove outline if filled
    }

    // Check username
    if (username.value.trim() === '') {
        username.style.outline = '2px solid red'; // Add red outline
        username.style.transition ='0.3s';
        allFilled = false; // Set flag to false if empty
    } else {
        username.style.outline = ''; // Remove outline if filled
    }

    // Check password
    if (password.value.trim() === '') {
        password.style.outline = '2px solid red'; // Add red outline
        password.style.transition ='0.3s';
        allFilled = false; // Set flag to false if empty
    } else {
        password.style.outline = ''; // Remove outline if filled
    }

    // If all fields are filled, redirect to home page
    if (allFilled) {
        window.location.href = 'HomePage.html';
    }
});