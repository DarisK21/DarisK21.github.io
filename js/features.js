// js/features.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. Accordion for Project Modules
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const isOpen = content.style.display === 'block';
            content.style.display = isOpen ? 'none' : 'block';
            const arrow = btn.querySelector('span');
            if (arrow) {
                arrow.textContent = isOpen ? '▼' : '▲';
            }
        });
    });

    // 2. Project Visuals Slider
    const galleryImgs = document.querySelectorAll('.gallery-img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentImg = 0;

    if (prevBtn && nextBtn && galleryImgs.length > 0) {
        prevBtn.addEventListener('click', () => {
            galleryImgs[currentImg].classList.remove('active');
            currentImg = (currentImg - 1 + galleryImgs.length) % galleryImgs.length;
            galleryImgs[currentImg].classList.add('active');
        });

        nextBtn.addEventListener('click', () => {
            galleryImgs[currentImg].classList.remove('active');
            currentImg = (currentImg + 1) % galleryImgs.length;
            galleryImgs[currentImg].classList.add('active');
        });
    }

    // 3. Animated Skill Bars
    const progresses = document.querySelectorAll('.progress');
    progresses.forEach(progress => {
        const percent = progress.dataset.percent;
        setTimeout(() => {
            progress.style.width = percent + '%';
        }, 400);
    });

    // 4. Numerical Increment Counters
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target, 10);
        let count = 0;
        const step = Math.max(1, Math.ceil(target / 40));
        const timer = setInterval(() => {
            count += step;
            if (count >= target) {
                counter.innerText = target;
                clearInterval(timer);
            } else {
                counter.innerText = count;
            }
        }, 30);
    });

    // 5. Technical Specs Modal
    const modalBtn = document.querySelector('.modal-btn');
    const modal = document.querySelector('.modal');
    const close = document.querySelector('.close');

    if (modalBtn && modal && close) {
        modalBtn.addEventListener('click', () => modal.style.display = 'flex');
        close.addEventListener('click', () => modal.style.display = 'none');
        window.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
        });
    }
});