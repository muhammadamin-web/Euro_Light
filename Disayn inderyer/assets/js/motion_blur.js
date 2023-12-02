window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const scrollY = window.scrollY;
        const sectionY = section.offsetTop;
        const distance = Math.abs(scrollY - sectionY);
        const blurValue = Math.min(10, distance / 100);
        section.style.filter = `blur(${blurValue}px)`;
    });
});
