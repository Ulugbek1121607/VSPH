document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });
    
    const result = await response.json();
    
    if (result.message === 'Login successful') {
        window.location.href = '../main.html';
    } else {
        alert('Login failed: ' + result.message);
    }
});
