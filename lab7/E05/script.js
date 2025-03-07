// เลือกปุ่ม Remove และ Back
let removeButton = document.getElementById("removeElementButton");
let backButton = document.getElementById("backButton");

// ฟังก์ชันลบ <p> ทีละตัว (เริ่มจากตัวแรก)
removeButton.addEventListener("click", function () {
    let parentDiv = document.getElementById("parent");
    let paragraphs = parentDiv.getElementsByClassName("example");

    if (paragraphs.length > 0) {
        let targetParagraph = paragraphs[0]; // เลือกตัวแรก
        targetParagraph.classList.add("fade-out"); // เพิ่มเอฟเฟกต์ fade-out
        
        // ลบออกหลังจากแอนิเมชันจบ (0.5s)
        setTimeout(() => {
            parentDiv.removeChild(targetParagraph);
        }, 500);
    } else {
        alert("No elements left to remove!"); // แจ้งเตือนเมื่อไม่มี <p> เหลือแล้ว
    }
});

// ปุ่ม Back กลับไปหน้า index.html
backButton.addEventListener("click", function () {
    window.location.href = "../index.html";
});
