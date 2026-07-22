document.addEventListener('DOMContentLoaded', () => {
    // Screens
    const roleSelection = document.getElementById('roleSelection');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // Toggles and Buttons
    const roleButtons = document.querySelectorAll('.role-btn');
    const backToRoles = document.getElementById('backToRoles');
    const toSignup = document.getElementById('toSignup');
    const toLogin = document.getElementById('toLogin');

    // Titles and Hidden Form Inputs
    const loginTitle = document.getElementById('loginTitle');
    const signupTitle = document.getElementById('signupTitle');
    const loginRoleInput = document.getElementById('loginRole');
    const signupRoleInput = document.getElementById('signupRole');

    // 1. Handle Role Selection Click
    roleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const role = button.getAttribute('data-role'); // 'teacher' or 'student'
            const capitalizedRole = role.charAt(0).toUpperCase() + role.slice(1);

            // Set hidden input values for the backend
            loginRoleInput.value = role;
            signupRoleInput.value = role;

            // Dynamically change titles based on choice
            loginTitle.textContent = `${capitalizedRole} Login`;
            signupTitle.textContent = `${capitalizedRole} Registration`;

            // Swap visibility
            roleSelection.classList.add('hidden');
            loginForm.classList.remove('hidden');
        });
    });

    // 2. Handle Back Button Click
    backToRoles.addEventListener('click', () => {
        loginForm.classList.add('hidden');
        signupForm.classList.add('hidden');
        roleSelection.classList.remove('hidden');
    });

    // 3. Switch between Login and Sign Up
    toSignup.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    });

    toLogin.addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });
});
