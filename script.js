// Simple greeting message based on time
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
  greeting.textContent = "Good morning! Welcome to my portfolio.";
} else if (hour < 18) {
  greeting.textContent = "Good afternoon! Explore my work below.";
} else {
  greeting.textContent = "Good evening! Thanks for visiting.";
}
