// script.js
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.classList.toggle('dark-mode', currentTheme === 'dark');

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });

    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeBtn = document.getElementsByClassName('close')[0];
    const modalLink = document.getElementById('modalLink'); // Added link element

    document.querySelectorAll('.pin img').forEach(img => {
        img.addEventListener('click', function() {
            modal.classList.add('show');
            modalImg.src = this.src;
            modalTitle.textContent = this.getAttribute('data-title');
            modalDescription.textContent = this.getAttribute('data-description');
            modalLink.href = this.getAttribute('data-link'); // Set link from data attribute
            modalLink.style.display = 'inline-block'; // Show the button
        });
    });

    closeBtn.onclick = function() {
        modal.classList.remove('show');
        modalImg.classList.remove('show-image');
    }

    // Hapus window.onclick untuk menutup modal
    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //         modal.classList.remove('show');
    //         modalImg.classList.remove('show-image');
    //     }
    // }

    document.querySelectorAll('.pin-image').forEach(img => {
        img.addEventListener('click', function() {
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('modalImage');
            const modalTitle = document.getElementById('modalTitle');
            const modalDescription = document.getElementById('modalDescription');

            modalImg.src = this.src;
            modalTitle.textContent = this.dataset.title;
            modalDescription.innerHTML = this.dataset.description;

            modal.style.display = 'block';
        });
    });

    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('imageModal').style.display = 'none';
    });
});


