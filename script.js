let emailLabel = document.querySelector('.email-container > label');
let passLabel = document.querySelector('.pass-container > label');
let emailInput = document.querySelector('#email');
let passInput = document.querySelector('#password');

emailInput.addEventListener('focus', () => {
    emailLabel.style.bottom = '30px';
});

emailInput.addEventListener('blur', () => {
    emailLabel.style.bottom = '10px';
});

passInput.addEventListener('focus', () => {
    passLabel.style.bottom = '30px';
});

passInput.addEventListener('blur', () => {
    passLabel.style.bottom = '10px';
});
