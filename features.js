// js/features.js
// Vanilla JS for interactive effects (project tab only, as per rules).
// Organized with comments and spacing for each effect.

document.addEventListener('DOMContentLoaded', () => {
    // Effect 1: Accordion for for expanding my project detials sections
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    // --------------------------------------------------------------------------------
    // Effect 2: Gallery Slider for two pictures of my personal projects
    const galleryImgs = document.querySelectorAll('.gallery-img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentImg = 0;

    if (prevBtn && nextBtn) {
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

    // --------------------------------------------------------------------------------
    // Effect 3: Skill Bar progess for my c++ and pyton classes
    const progresses = document.querySelectorAll('.progress');
    progresses.forEach(progress => {
        const percent = progress.dataset.percent;
        setTimeout(() => {
            progress.style.width = percent + '%';
        }, 500);
    });

    // --------------------------------------------------------------------------------
    // Effect 4: stats for how mush i completed my projects
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        let count = 0;
        const increment = target / 100;
        const updateCount = () => {
            count += increment;
            if (count < target) {
                counter.innerText = Math.ceil(count);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });

    // --------------------------------------------------------------------------------
    // Effect 5: Modal Popup for additional details
    const modalBtn = document.querySelector('.modal-btn');
    const modal = document.querySelector('.modal');
    const close = document.querySelector('.close');

    if (modalBtn && modal && close) {
        modalBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
        });

        close.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});