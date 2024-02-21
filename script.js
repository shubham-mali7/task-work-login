function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');
  
    // Example validation (replace with your authentication logic)
    if (username === 'user' && password === 'password') {
      // Successful login
      errorMessage.textContent = '';
      alert('Login successful!');
    } else {
      // Display error message
      errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
  }