document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const logoutBtn = document.getElementById('logoutBtn');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Here you would typically make an API call to your backend
            // For now, we'll just simulate a successful login
            localStorage.setItem('user', JSON.stringify({ email }));
            window.location.href = 'user-home.html';
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert('كلمة المرور غير متطابقة');
                return;
            }

            // Here you would typically make an API call to create the user
            // For now, we'll just redirect to login page
            window.location.href = 'login.html';
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('user');
            window.location.href = 'index.html';
        });
    }
});
