// Part 1: Fetch employee data and log to console
function fetchEmployees() {
  fetch('https://dummy.restapiexample.com/api/v1/employees')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("Employee Data:", data);
    })
    .catch(error => {
      console.error("Error fetching employee data:", error);
    });
}

// Part 2: Fetch random user and display on webpage
function fetchRandomUser() {
  fetch('https://randomuser.me/api/')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }
      return response.json();
    })
    .then(data => {
      const user = data.results[0];
      const name = `${user.name.first} ${user.name.last}`;
      const email = user.email;
      const picture = user.picture.large;

      document.getElementById('user-info').innerHTML = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <img src="${picture}" alt="Profile Picture">
      `;
    })
    .catch(error => {
      console.error("Error fetching user:", error);
      document.getElementById('user-info').innerHTML = "<p>Error loading user data.</p>";
    });
}

