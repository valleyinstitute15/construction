document.addEventListener("DOMContentLoaded", function() {
    createStars(100);

    function createStars(count) {
        const container = document.querySelector('.container');
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}vh`;
            star.style.animationDuration = `${2 + Math.random() * 3}s`;
            star.style.animationDelay = `${Math.random() * 5}s, ${Math.random() * 10}s`;
            container.appendChild(star);
        }
    }
});

function toggleMenu() {
    const menuContent = document.getElementById("menuContent");
    if (menuContent.style.display === "block") {
        menuContent.style.display = "none";
    } else {
        menuContent.style.display = "block";
    }
}
