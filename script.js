const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const signUpForm = document.querySelector(".sign-up form");
signUpForm.addEventListener("submit", function (e) {
    e.preventDefault();
    validateSignUpForm();
});

function validateSignUpForm() {
    const nameInput = document.querySelector(".sign-up input[type='text']");
    const emailInput = document.querySelector(".sign-up input[type='email']");
    const passwordInput = document.querySelector(".sign-up input[type='password']");
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    // Regular expression to match the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Regular expression to match the password format: alphanumeric with at least one capital letter, one small letter, and one special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

    // Reset the error messages
    nameInput.nextElementSibling.textContent = "";
    emailInput.nextElementSibling.textContent = "";
    passwordInput.nextElementSibling.textContent = "";

    // Validate name
    if (name === "") {
        nameInput.nextElementSibling.textContent = "Name is required.";
    }
    
    // Validate email
    if (email === "") {
        emailInput.nextElementSibling.textContent = "Email is required.";
    } else if (!emailRegex.test(email)) {
        emailInput.nextElementSibling.textContent = "Invalid email format.";
    }
    
    // Validate password
    if (password === "") {
        passwordInput.nextElementSibling.textContent = "Password is required.";
    } else if (!passwordRegex.test(password)) {
        passwordInput.nextElementSibling.textContent = "Invalid password format.";
    }
}

