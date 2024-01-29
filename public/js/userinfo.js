//Function to handle user info selections
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
    console.log('erruserinfo')
  };
  
document.querySelector('.userBtn').addEventListener('click', userinfoFormHandler);