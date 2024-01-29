// Function to handle signup
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // Capture values of the fields email, username, and password
    const email = document.querySelector('#email-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (email && username && password) {
      // Send info to controller to process
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/userinfo');
      } else {
        alert(response.statusText);
      }
    }
    console.log("errorsignup")
  };


document.querySelector('.signUpBtn').addEventListener('click', signupFormHandler);
