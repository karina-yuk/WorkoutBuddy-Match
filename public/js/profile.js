// Function to handle edit username
const editUsernameHandler = async (event) => {
    event.preventDefault();
    const usernameEdit = document.getElementById('user-edit').value;
  
    if (usernameEdit) {
      // Send the captured values to the backend API endpoint
      const response = await fetch('api/user', {
        method: 'PUT',
        body: JSON.stringify({ usernameEdit }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
    console.log('erruse')
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

      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
    console.log('erremail')
};
  
// Function to handle edit city
const editCityHandler = async (event) => {
    event.preventDefault();
  
    const cityEdit = document.getElementById('city-edit').value;
  
    if (cityEdit) {
      // Send the captured values to the backend API endpoint
      const response = await fetch('/api/user', {
        method: 'PUT',
        body: JSON.stringify({ cityEdit }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
    console.log('errcity')
};
  
// Function to handle edit workout
const editWorkoutHandler = async (event) => {
    event.preventDefault();
  
    const workoutEdit = document.getElementById('workout-edit').value;
  
    if (workoutEdit) {
      // Send the captured values to the backend API endpoint
      const response = await fetch('/api/user', {
        method: 'PUT',
        body: JSON.stringify({ workoutEdit }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
    console.log('errworkout')
};
  
// Function to handle edit gym
const editGymHandler = async (event) => {
    event.preventDefault();
  
    const gymEdit = document.getElementById('gym-edit').value;
  
    if (gymEdit) {
      // Send the captured values to the backend API endpoint
      const response = await fetch('/api/user', {
        method: 'PUT',
        body: JSON.stringify({ gymEdit }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
    console.log('errgym')
};
  
// Function to handle delete account
async function deleteAccountHandler() {
    event.preventDefault();

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
  

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".userEditBtn").addEventListener("click", editUsernameHandler);
    document.querySelector(".emailEditBtn").addEventListener("click", editEmailHandler);
    document.querySelector(".cityEditBtn").addEventListener("click", editCityHandler);
    document.querySelector(".workoutEditBtn").addEventListener("click", editWorkoutHandler);
    document.querySelector(".gymEditBtn").addEventListener("click", editGymHandler);
    document.getElementById('delete-account').addEventListener('click', deleteAccountHandler);
});
