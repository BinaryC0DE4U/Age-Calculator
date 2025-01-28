// Toggle Dark/Light Mode Function
function toggleMode() {
  // Toggle the dark-mode class on the body
  document.body.classList.toggle("dark-mode");

  // Get the button element
  const toggleButton = document.querySelector(".toggle-btn");

  // Check if dark mode is active
  if (document.body.classList.contains("dark-mode")) {
    // Switch to moon emoji for dark mode
    toggleButton.innerHTML = "🌜";
  } else {
    // Switch to sun emoji for light mode
    toggleButton.innerHTML = "🌞";
  }
}

// Function to calculate age
function showDate() {
  const birthDate = document.getElementById("dateInput").value;

  // Check if the user entered a date
  if (!birthDate) {
    alert("Please select a birth date.");
    return;
  }

  const birthDateObj = new Date(birthDate);
  const currentDate = new Date();

  // Check if the birth date is in the future
  if (birthDateObj > currentDate) {
    alert("Birth date cannot be in the future.");
    return;
  }

  let years = currentDate.getFullYear() - birthDateObj.getFullYear();
  let months = currentDate.getMonth() - birthDateObj.getMonth();
  let days = currentDate.getDate() - birthDateObj.getDate();

  // Adjust months and years if needed
  if (months < 0) {
    years--;
    months += 12;
  }
  if (days < 0) {
    months--;
    const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    days += lastMonth.getDate();
  }

  // Display the result
  const output = document.getElementById("output");
  output.innerHTML = `Age: ${years} years, ${months} months, ${days} days`;
}
