const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1'; // Replace this with your API URL

// Make a GET request using fetch
fetch(apiUrl)
  .then(response => {
    // Check if the request was successful (status code in the range 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON in the response
    return response.json();
  })
  .then(data => {
    // Log the data to the console
    console.log('API Data:', data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error fetching data:', error);
  });
