document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Retrieve user credentials from localStorage
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
        window.location.href = "../home/index.html"; // Navigate to the home page
    } else {
        errorMessage.textContent = "Email or password is incorrect. Please check and try again.";
    }
});

function togglePasswordVisibility() {
    var passwordField = document.getElementById('password');
    var icon = document.getElementById('toggle-password').querySelector('i');
    var type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    if (type === 'password') {
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

document.getElementById('toggle-password').addEventListener('click', togglePasswordVisibility);