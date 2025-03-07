// เลือกปุ่มและข้อความ
let traverseButton = document.getElementById("traverseButton");
let output = document.getElementById("output");
let backButton = document.getElementById("backButton");

// ฟังก์ชัน Traversing DOM
traverseButton.addEventListener("click", function () {
    let exampleParagraph = document.getElementById("example");

    if (exampleParagraph.nextElementSibling) {
        output.textContent = "Next Paragraph: " + exampleParagraph.nextElementSibling.textContent;
    } else {
        output.textContent = "No next sibling found.";
    }

    output.classList.add("fade-in"); // เพิ่มแอนิเมชัน
});

// ปุ่ม Back กลับไปหน้า index.html
backButton.addEventListener("click", function () {
    window.location.href = "../index.html";
});
