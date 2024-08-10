let currentCategory = 'house';
const categories = ['house', 'villa', 'apartment'];

function changeClass(element, category = null) {
    // Nếu không có danh mục được truyền vào, lấy từ danh mục hiện tại
    if (!category) {
        category = element ? element.querySelector('.house')?.textContent.toLowerCase() : currentCategory;
    }

    // Nếu danh mục đã chọn là danh mục hiện tại và click từ danh mục, không làm gì cả
    if (category === currentCategory && element && !element.classList.contains('search-button1')) {
        return;
    }

    // Cập nhật danh mục hiện tại
    currentCategory = category;

    // Reset tất cả các phần tử SVG và class
    const elements = document.querySelectorAll(".phhouse-fill-parent, .icround-villa-parent");
    elements.forEach((el) => {
        const svgPath = el.querySelector("svg path");
        if (svgPath) {
            svgPath.setAttribute("fill", "#888B97"); // Đặt lại màu fill mặc định
        }
        el.classList.remove("phhouse-fill-parent");
        el.classList.add("icround-villa-parent");
    });

    // Tìm phần tử chứa danh mục
    let selectedElement = Array.from(document.querySelectorAll(".house")).find(el => el.textContent.toLowerCase() === category);

    // Nếu không tìm thấy, không làm gì cả
    if (!selectedElement) {
        return;
    }

    // Thêm class 'phhouse-fill-parent' cho phần tử đã nhấn và đổi màu SVG
    selectedElement.parentElement.classList.add("phhouse-fill-parent");
    selectedElement.parentElement.classList.remove("icround-villa-parent");
    const selectedSvgPath = selectedElement.parentElement.querySelector("svg path");
    if (selectedSvgPath) {
        selectedSvgPath.setAttribute("fill", "#10B981"); // Đổi màu fill
    }

    // Cập nhật hình ảnh dựa trên danh mục được chọn
    let img1Src = '';
    let img2Src = '';
    let img3Src = '';

    if (currentCategory === 'house') {
        img1Src = './assets/images/house1.png';
        img2Src = './assets/images/house2.png';
        img3Src = './assets/images/house3.png';
    } else if (currentCategory === 'villa') {
        img1Src = './assets/images/villa1.png';
        img2Src = './assets/images/villa2.png';
        img3Src = './assets/images/villa3.png';
    } else if (currentCategory === 'apartment') {
        img1Src = './assets/images/apartment1.png';
        img2Src = './assets/images/apartment2.png';
        img3Src = './assets/images/apartment3.png';
    }

    document.getElementById('img1').querySelector('img').src = img1Src;
    document.getElementById('img2').querySelector('img').src = img2Src;
    document.getElementById('img3').querySelector('img').src = img3Src;
}



function handleButtonClick(direction) {
    // Lấy chỉ số hiện tại của danh mục
    let currentIndex = categories.indexOf(currentCategory);

    // Thay đổi chỉ số dựa trên hướng
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % categories.length;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + categories.length) % categories.length;
    }

    // Cập nhật danh mục mới
    const newCategory = categories[currentIndex];

    // Gọi hàm changeClass để cập nhật giao diện
    changeClass(null, newCategory);
}

// Khi người dùng cuộn xuống 1200px từ đỉnh trang, nút sẽ hiện lên
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

// Khi người dùng nhấp vào nút, trang sẽ cuộn về đầu trang
document.getElementById("back-to-top").onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
