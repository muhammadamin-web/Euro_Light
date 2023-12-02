
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.image-container');
    const image = document.querySelector('.zoom-image');

    container.addEventListener('mousemove', function(e) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 4; // Zoomni cardning tepa qismiga yo'naltirish

        image.style.transform = 'scale(1.2)'; // Kichikroq zoom ko'rsatkichi
        image.style.left = -(x - centerX) / 5 + 'px'; // Kichikroq harakat ko'rsatkichi
        image.style.top = -(y - centerY) / 5 + 'px'; // Kichikroq harakat ko'rsatkichi
    });

    container.addEventListener('mouseleave', function() {
        image.style.transform = 'scale(1)';
        image.style.left = '0px';
        image.style.top = '0px';
        
    });
});
