// Select the button and dropdown content
const dropdownButton = document.querySelector(".navdropbutton");
const dropdownContent = document.querySelector(".navdropcontent");

// Toggle dropdown visibility on click
dropdownButton.addEventListener("click", function (event) {
  dropdownContent.classList.toggle("show");
  
  // Prevent click from propagating to the body listener
  event.stopPropagation();
});

// Close dropdown if clicking outside
window.addEventListener("click", function () {
  if (dropdownContent.classList.contains("show")) {
    dropdownContent.classList.remove("show");
  }
});
