// เลือกปุ่มและข้อความ
let exampleButton = document.getElementById("exampleButton");
let message = document.getElementById("message");
let backButton = document.getElementById("backButton");

// เพิ่ม Event Listener ให้ปุ่ม
exampleButton.addEventListener("click", function () {
    message.textContent = "🎉 Button Clicked!"; // เปลี่ยนข้อความ
    message.classList.add("fade-in"); // เพิ่มแอนิเมชัน
});

// ปุ่ม Back กลับไปหน้า index.html
backButton.addEventListener("click", function () {
    window.location.href = "../index.html";
});
