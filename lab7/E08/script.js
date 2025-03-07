// เลือกฟอร์มและอินพุต
let inputElement = document.getElementById("exampleInput");
let form = document.getElementById("exampleForm");

// เพิ่ม event listener เพื่อจัดการการ submit ฟอร์ม
form.addEventListener("submit", function(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์มแบบปกติ

    // รับค่าจากอินพุต
    let inputValue = inputElement.value;

    // แสดงค่าที่ได้รับในพารากราฟ
    let output = document.getElementById("output");
    output.textContent = "Form submitted with input value: " + inputValue;
});

// เลือกปุ่ม "Back"
let backButton = document.getElementById("backButton");

// เพิ่ม event listener ให้กับปุ่ม "Back" เพื่อกลับไปที่ index.html
backButton.addEventListener("click", function() {
    window.location.href = "../index.html"; // เปลี่ยนเส้นทางไปที่ index.html
});
