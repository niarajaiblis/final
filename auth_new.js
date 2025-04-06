// Check login state on page load
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const beforeLogin = document.getElementById('beforeLogin');
    const afterLogin = document.getElementById('afterLogin');
    const userEmail = document.getElementById('userEmail');

    if (isLoggedIn) {
        beforeLogin.style.display = 'none';
        afterLogin.style.display = 'flex';
        userEmail.textContent = localStorage.getItem('currentUser');
    } else {
        beforeLogin.style.display = 'flex';
        afterLogin.style.display = 'none';
    }

    // Enhanced logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Clear only authentication-related data
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('currentUser');
            // Force redirect to login page
            window.location.href = 'SignUp_LogIn_Form.html';
        });
    }
});

// Prevent back button issues
window.addEventListener('pageshow', function(event) {
    if (event.persisted && !localStorage.getItem('isLoggedIn')) {
        window.location.href = 'SignUp_LogIn_Form.html';
    }
});
