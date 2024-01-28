// Function to handle signin
const signInFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password ) {
      // Send the username and password to the server
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
          // TODO: Added warning messages when signup failed and why.
      if (response.ok) {
        document.location.replace('/posting');
      } else {
        alert('Failed to log in');
      }
    }
    console.log('errosignin')
  };



document.querySelector('.signInBtn').addEventListener('click', signInFormHandler);
