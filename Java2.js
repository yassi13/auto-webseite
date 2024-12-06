const errorBox = document.getElementById('errorBox'); 
const loginForm = document.getElementById('dennis'); 


loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value; 
    
    
    
    
    errorBox.classList.add("hidden");
    errorBox.textContent = '';


   
    if (username === '' || password === '') {
        errorBox.textContent = 'Bitte füllen Sie alle Felder aus.';
        errorBox.classList.remove("hidden");
        return;
    }

    

    if (username !== 'admin' || password !== '1234') {
        errorBox.textContent = 'Falscher Benutzername oder falsches Passwort.';
        errorBox.classList.remove("hidden");
        return;
    }


    
    alert('Login erfolgreich!');
});