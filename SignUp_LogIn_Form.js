const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

// Form toggle functionality
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Login form validation
document.getElementById('loginForm').addEventListener('submit', function(e) {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (!email || !password) {
        e.preventDefault();
        alert('Please fill in all fields');
    }
});

// Registration form validation
document.getElementById('registerForm').addEventListener('submit', function(e) {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    
    if (!email || !password) {
        e.preventDefault();
        alert('Please fill in all fields');
    }
});

// Check login state on page load
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
        window.location.href = 'landing.html';
    }
});
