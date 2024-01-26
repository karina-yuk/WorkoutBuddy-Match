const signoutHandler = async () => {
    // Make a POST request to destroy the session on the back end
    const response = await fetch('/api/users/signout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      // If successfully logged out, redirect to the login page
      console.log('Logged out successfully');
      document.location.replace('/signin');
    } else {
      alert(response.statusText);
    }
  };
  
  document.getElementById('signout').addEventListener('click', signoutHandler);