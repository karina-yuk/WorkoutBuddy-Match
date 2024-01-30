//Function to handle user info selections
const userinfoFormHandler = async (event) => {
    event.preventDefault();
  
    const gender = document.getElementById('gender-options').value;
    const city_id = document.getElementById('city-options').value;
    const gym_id = document.getElementById('gym-options').value;
    const workout_id = document.getElementById('workout-options').value;
  
    if (gender && city_id && gym_id && workout_id) {
      // Send the captured values to the backend API endpoint
      const response = await fetch('/api/user/userinfo', {
        method: 'PUT',
        body: JSON.stringify({ gender, city_id, gym_id, workout_id }),
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