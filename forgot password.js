const errorBox = document.getElementById('errorBox');

const forgotForm = document.getElementById("forgotForm");

forgotForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;

    errorBox.classList.add('hidden');
    errorBox.textContent = '';

   
    if (username === '') {
        errorBox.textContent = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
        errorBox.classList.remove('hidden');
        return;
    }

    
    alert('Ein Reset-Link wurde an Ihre E-Mail-Adresse gesendet!');
});
