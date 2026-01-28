document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', (e) => {
        let isValid = true;

        // Reset previous errors
        document.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
        });

        // Validate Name
        if (nameInput.value.trim() === '') {
            setError(nameInput, 'Name is required');
            isValid = false;
        }

        // Validate Email
        if (emailInput.value.trim() === '') {
            setError(emailInput, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            setError(emailInput, 'Please enter a valid email address');
            isValid = false;
        }

        // Validate Phone 
        if (phoneInput.value.trim() !== '' && !isValidPhone(phoneInput.value.trim())) {
            setError(phoneInput, 'Please enter a valid phone number (10+ digits)');
            isValid = false;
        }

        // Validate Message
        if (messageInput.value.trim() === '') {
            setError(messageInput, 'Message is required');
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault(); 
        } else {
    
        }
    });

    function setError(input, message) {
        const formGroup = input.parentElement;
        const errorDisplay = formGroup.querySelector('.error-message');
        errorDisplay.innerText = message;
        formGroup.classList.add('error');
    }

    function isValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function isValidPhone(phone) {
        // Remove non-digit characters
        const cleanPhone = phone.replace(/\D/g, '');
        return cleanPhone.length >= 10;
    }
});
