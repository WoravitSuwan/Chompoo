// Selecting the button element
let button = document.getElementById("changeStyleButton");

// Adding an event listener to the button
button.addEventListener("click", function() {
    // Selecting the paragraph element
    let paragraph = document.getElementById("example");
    
    // Changing the CSS styles dynamically
    paragraph.style.color = "white";
    paragraph.style.backgroundColor = "#ff9800";
    paragraph.style.fontSize = "22px";
    paragraph.style.padding = "15px";
    paragraph.style.borderRadius = "10px";
});

// Back button functionality
let backButton = document.getElementById("backButton");
backButton.addEventListener("click", function() {
    window.location.href = "../index.html"; // เปลี่ยนเส้นทางกลับไปที่ index.html
});
