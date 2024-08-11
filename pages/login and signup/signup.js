document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var errorMessage = document.getElementById('error-message');

    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordPattern.test(password)) {
        errorMessage.textContent = "Password must be at least 8 characters long, contain uppercase, lowercase, number, and special character.";
    } else if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
    } else {
        // Save user credentials to localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        errorMessage.textContent = '';
        window.location.href = "login.html"; // Navigate to the login page
    }
});

function togglePasswordVisibility(inputId, iconId) {
    var passwordField = document.getElementById(inputId);
    var icon = document.getElementById(iconId).querySelector('i');
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

document.getElementById('toggle-password').addEventListener('click', function() {
    togglePasswordVisibility('password', 'toggle-password');
});

document.getElementById('toggle-confirm-password').addEventListener('click', function() {
    togglePasswordVisibility('confirm-password', 'toggle-confirm-password');
});