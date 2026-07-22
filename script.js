document.addEventListener('DOMContentLoaded', () => {
    // Target Application Configuration
    const TARGET_WEBSITE = "https://612brandon.github.io/Messaging.github.io/";

    // Interface Screens
    const roleSelection = document.getElementById('roleSelection');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // Interactive Elements
    const roleButtons = document.querySelectorAll('.role-btn');
    const backToRoles = document.getElementById('backToRoles');
    const toSignup = document.getElementById('toSignup');
    const toLogin = document.getElementById('toLogin');

    // Text Headings & State Tracking Input Elements
    const loginTitle = document.getElementById('loginTitle');
    const signupTitle = document.getElementById('signupTitle');
    const loginRoleInput = document.getElementById('loginRole');
    const signupRoleInput = document.getElementById('signupRole');

    // 1. Handle Initial Role Selection ("Teacher" or "Student")
    roleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const role = button.getAttribute('data-role');
            const capitalizedRole = role.charAt(0).toUpperCase() + role.slice(1);

            // Pass portal selection metadata down into form states
            loginRoleInput.value = role;
            signupRoleInput.value = role;

            // Dynamically alter text banners to fit selection
            loginTitle.textContent = `${capitalizedRole} Login`;
            signupTitle.textContent = `${capitalizedRole} Registration`;

            // Adjust interface viewport states
            roleSelection.classList.add('hidden');
            loginForm.classList.remove('hidden');
        });
    });

    // 2. Handle Navigation Return Trigger
    backToRoles.addEventListener('click', () => {
        loginForm.classList.add('hidden');
        signupForm.classList.add('hidden');
        roleSelection.classList.remove('hidden');
    });

    // 3. Coordinate Portal View Panel Toggling
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

    // 4. Handle Redirection Routine Post Authentication Form Events
    const handleAuthRedirect = (e) => {
        e.preventDefault(); // Halt active form reloads
        
        // Grab current context values for verification matching later if needed
        const currentRole = loginRoleInput.value || signupRoleInput.value;
        
        // forward client safely over into the messaging landing ecosystem
        window.location.href = TARGET_WEBSITE; 
    };

    // Attach listeners across submission triggers
    document.querySelector('#loginForm form').addEventListener('submit', handleAuthRedirect);
    document.querySelector('#signupForm form').addEventListener('submit', handleAuthRedirect);
});
