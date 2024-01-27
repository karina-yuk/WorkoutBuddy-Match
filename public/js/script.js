
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
    const response = await fetch('/api/user', {
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
    const response = await fetch('/api/user', {
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
    const response = await fetch('/api/user', {
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

// Function to handle edit email
const editEmailHandler = async (event) => {
  event.preventDefault();

  const emailEdit = document.getElementById('email-edit').value;

  if (emailEdit) {
    // Send the captured values to the backend API endpoint
    const response = await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify({ emailEdit }),
      headers: { 'Content-Type': 'application/json' },
    });
    // TO DO: changed to displaying a message
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

// Function to handle edit city
const editCityHandler = async (event) => {
  event.preventDefault();

  const cityEdit = document.getElementById('city-edit').value;

  if (cityEdit) {
    // Send the captured values to the backend API endpoint
    const response = await fetch('/api/city', {
      method: 'PUT',
      body: JSON.stringify({ cityEdit }),
      headers: { 'Content-Type': 'application/json' },
    });
    // TO DO: changed to displaying a message"
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

// Function to handle edit workout
const editWorkoutHandler = async (event) => {
  event.preventDefault();

  const workoutEdit = document.getElementById('workout-edit').value;

  if (workoutEdit) {
    // Send the captured values to the backend API endpoint
    const response = await fetch('/api/workout', {
      method: 'PUT',
      body: JSON.stringify({ workoutEdit }),
      headers: { 'Content-Type': 'application/json' },
    });
    // TO DO: changed to displaying a message
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

// Function to handle edit gym
const editGymHandler = async (event) => {
  event.preventDefault();

  const gymEdit = document.getElementById('gym-edit').value;

  if (gymEdit) {
    // Send the captured values to the backend API endpoint
    const response = await fetch('/api/gym', {
      method: 'PUT',
      body: JSON.stringify({ gymEdit }),
      headers: { 'Content-Type': 'application/json' },
    });
    // TO DO: changed to displaying a message
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

// Function to handle delete account
async function deleteAccountHandler() {

  const confirmDeletion = confirm('Are you sure you want to delete your account?');

  if (confirmDeletion) {
    try {
      // Send a DELETE request to the server
      const response = await fetch('/api/user', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        // If deletion is successful, redirect the user to the home page.
        document.location.replace('/'); 
      } else {
        // Handle errors, show an alert
        alert('Unable to delete the account: ' + response.statusText);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error);
      alert('An unexpected error occurred while deleting the account.');
    }
  }
}

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

document
  .querySelector(".email-editsec")
  .addEventListener("submit", editEmailHandler);

document
  .querySelector(".city-editsec")
  .addEventListener("submit", editCityHandler);

document
  .querySelector(".workout-editsec")
  .addEventListener("submit", editWorkoutHandler);

document
  .querySelector(".gym-editsec")
  .addEventListener("submit", editGymHandler);

document.getElementById('delete-account').addEventListener('click', deleteAccountHandler);