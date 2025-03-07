// Selecting the button element
let button = document.getElementById("changeTextButton");

// Adding an event listener to the button
button.addEventListener("click", function() {
    // Selecting the paragraph element
    let paragraph = document.getElementById("example");
    
    // Changing the text content of the paragraph
    paragraph.textContent = "New Text Content 🎉";
});

// Back button functionality
let backButton = document.getElementById("backButton");
backButton.addEventListener("click", function() {
    window.location.href = "../index.html"; // เปลี่ยนเส้นทางกลับไปที่ index.html
});
