function changeClass(element, category) {
    // Get all elements with the classes 'phhouse-fill-parent' and 'icround-villa-parent'
    const elements = document.querySelectorAll(".phhouse-fill-parent, .icround-villa-parent");

    // Reset all SVG fills to default and remove the 'phhouse-fill-parent' class
    elements.forEach((el) => {
        const svgPath = el.querySelector("svg path");
        if (svgPath) {
            svgPath.setAttribute("fill", "#888B97"); // Reset to default fill
        }
        el.classList.remove("phhouse-fill-parent");
        if (el !== element) {
            el.classList.add("icround-villa-parent");
        }
    });

    // Add the 'phhouse-fill-parent' class to the clicked element and change the SVG fill
    element.classList.add("phhouse-fill-parent");
    element.classList.remove("icround-villa-parent");
    const selectedSvgPath = element.querySelector("svg path");
    if (selectedSvgPath) {
        selectedSvgPath.setAttribute("fill", "#10B981"); // Set to new fill color
    }

    // Update images based on the selected category
    let img1Src = '';
    let img2Src = '';
    let img3Src = '';

    if (category === 'house') {
        img1Src = './assets/images/house1.png';
        img2Src = './assets/images/house2.png';
        img3Src = './assets/images/house3.png';
    } else if (category === 'villa') {
        img1Src = './assets/images/villa1.png';
        img2Src = './assets/images/villa2.png';
        img3Src = './assets/images/villa3.png';
    } else if (category === 'apartment') {
        img1Src = './assets/images/apartment1.png';
        img2Src = './assets/images/apartment2.png';
        img3Src = './assets/images/apartment3.png';
    }

    document.getElementById('img1').querySelector('img').src = img1Src;
    document.getElementById('img2').querySelector('img').src = img2Src;
    document.getElementById('img3').querySelector('img').src = img3Src;
}
