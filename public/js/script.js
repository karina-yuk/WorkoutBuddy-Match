
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
};

// Function to handle signup
const signupFormHandler = async (event) => {
  event.preventDefault();

  // Capture values of the fields email, username, and password
  const email = document.querySelector('#email-signup').value.trim();
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (email && username && password) {
    // Send info to controller to process
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/userinfo');
    } else {
      alert(response.statusText);
      // TODO: Added warning messages when signup failed and why.
    }
  }
};

//TODO ADD function to handle user info selections
const userinfoFormHandler = async (event) => {
  event.preventDefault();

  const gender = document.getElementById('gender-options').value;
  const city = document.getElementById('city-options').value;
  const gym = document.getElementById('gym-options').value;
  const workout = document.getElementById('workout-options').value;

  if (gender && city && gym && workout) {
    // Send the captured values to the backend API endpoint
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ gender, city, gym, workout }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/postings');
    } else {
      alert(response.statusText);
    }
  }
};

// Function to handle edit username
const editUsernameHandler = async (event) => {
  event.preventDefault();

  const usernameEdit = document.getElementById('user-edit').value;

  if (usernameEdit) {
    // Send the captured values to the backend API endpoint
    const response = await fetch('/api/profile', {
      method: 'PUT',
      body: JSON.stringify({ usernameEdit }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // TO DO: changed to displaying a message
      // Maybe with "document.body.appendChild(`Successfully updated the username.`);"?
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};
  
document
  .querySelector('.signin-form')
  .addEventListener('submit', signInFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

document
  .querySelector('.userinfo-form')
  .addEventListener('submit', userinfoFormHandler);

  document
  .querySelector(".user-editsec")
  .addEventListener("submit", editUsernameHandler);