// Selecting the button element
let toggleButton = document.getElementById("toggleClassButton");

// Adding an event listener to toggle the class
toggleButton.addEventListener("click", function() {
    let paragraph = document.getElementById("example");
    paragraph.classList.toggle("highlight");
});

// Back button functionality
let backButton = document.getElementById("backButton");
backButton.addEventListener("click", function() {
    window.location.href = "../index.html"; // เปลี่ยนเส้นทางกลับไปที่ index.html
});
