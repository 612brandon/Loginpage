document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const toSignup = document.getElementById('toSignup');
    const toLogin = document.getElementById('toLogin');

    // Function to toggle between forms
    function toggleForms(e) {
        e.preventDefault(); // Prevents the page from jumping or reloading
        loginForm.classList.toggle('hidden');
        signupForm.classList.toggle('hidden');
    }

    // Attach click events to the toggle links
    toSignup.addEventListener('click', toggleForms);
    toLogin.addEventListener('click', toggleForms);
});

