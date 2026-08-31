const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, 'generate_slider_sections.cjs');
let scriptContent = fs.readFileSync(scriptPath, 'utf8');

// Replace Bootstrap carousel data attributes with data-sl attributes
scriptContent = scriptContent.replace(/data-bs-ride="carousel"/g, 'data-sl-ride="carousel"');
scriptContent = scriptContent.replace(/data-bs-target="/g, 'data-sl-target="');
scriptContent = scriptContent.replace(/data-bs-slide-to="/g, 'data-sl-slide-to="');
scriptContent = scriptContent.replace(/data-bs-slide="/g, 'data-sl-slide="');

// Now, update the JS for all sliders to use our custom vanilla script
const vanillaJS = `
(function() {
    function initSLCarousels() {
        const carousels = document.querySelectorAll('.carousel[data-sl-ride="carousel"]');
        carousels.forEach(carousel => {
            if (carousel.dataset.slInit) return;
            carousel.dataset.slInit = 'true';

            const items = carousel.querySelectorAll('.carousel-item');
            const indicators = carousel.querySelectorAll('[data-sl-slide-to]');
            const prevBtns = carousel.querySelectorAll('[data-sl-slide="prev"]');
            const nextBtns = carousel.querySelectorAll('[data-sl-slide="next"]');
            
            if (items.length <= 1) return;

            // Apply custom fade CSS to bypass Bootstrap's complex transition requirements
            items.forEach(item => {
                item.style.transition = 'opacity 0.6s ease-in-out';
                if (!item.classList.contains('active')) {
                    item.style.opacity = '0';
                    item.style.display = 'block';
                    item.style.position = 'absolute';
                    item.style.top = '0';
                    item.style.left = '0';
                    item.style.zIndex = '1';
                } else {
                    item.style.opacity = '1';
                    item.style.position = 'relative';
                    item.style.zIndex = '2';
                }
            });

            let currentIndex = 0;
            items.forEach((item, index) => {
                if (item.classList.contains('active')) currentIndex = index;
            });

            let isAnimating = false;

            function goToSlide(index) {
                if (isAnimating || index === currentIndex) return;
                isAnimating = true;

                const currentItem = items[currentIndex];
                const nextItem = items[index];

                // Prepare next item
                nextItem.style.position = 'absolute';
                nextItem.style.top = '0';
                nextItem.style.left = '0';
                nextItem.style.zIndex = '2';
                nextItem.style.opacity = '0';
                nextItem.classList.add('active');

                // Current item goes behind
                currentItem.style.zIndex = '1';

                // Trigger reflow
                void nextItem.offsetWidth;

                // Fade in next
                nextItem.style.opacity = '1';
                
                // Update indicators
                indicators.forEach(ind => ind.classList.remove('active'));
                const targetInd = carousel.querySelector('[data-sl-slide-to="' + index + '"]');
                if (targetInd) targetInd.classList.add('active');

                // Custom event for extensions (like slider-glass)
                carousel.dispatchEvent(new CustomEvent('sl-slide-changed', { detail: { index: index } }));

                setTimeout(() => {
                    currentItem.classList.remove('active');
                    currentItem.style.opacity = '0';
                    
                    nextItem.style.position = 'relative';
                    
                    currentIndex = index;
                    isAnimating = false;
                }, 600);
            }

            prevBtns.forEach(btn => btn.addEventListener('click', (e) => {
                e.preventDefault();
                let next = currentIndex - 1;
                if (next < 0) next = items.length - 1;
                goToSlide(next);
            }));

            nextBtns.forEach(btn => btn.addEventListener('click', (e) => {
                e.preventDefault();
                let next = currentIndex + 1;
                if (next >= items.length) next = 0;
                goToSlide(next);
            }));

            indicators.forEach(ind => {
                ind.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = parseInt(ind.getAttribute('data-sl-slide-to'));
                    if (!isNaN(target)) goToSlide(target);
                });
            });

            let autoplayTimer;
            function startAutoplay() {
                if (!document.body.classList.contains('sl-editor-mode')) {
                    autoplayTimer = setInterval(() => {
                        let next = currentIndex + 1;
                        if (next >= items.length) next = 0;
                        goToSlide(next);
                    }, 5000);
                }
            }
            function stopAutoplay() {
                clearInterval(autoplayTimer);
            }

            startAutoplay();
            carousel.addEventListener('mouseenter', stopAutoplay);
            carousel.addEventListener('mouseleave', startAutoplay);
        });
    }

    // Run immediately and also on DOMContentLoaded
    initSLCarousels();
    document.addEventListener('DOMContentLoaded', initSLCarousels);
})();
`;

// Replace whatever js block is currently there for each slider with this vanilla script
// We need to match `js: clean(...` for all sliders.
// But wait, the previous modify script appended to it, or replaced it.
// Let's just do a regex replace for the JS block.
// Since js: clean(`...`) spans multiple lines, we can use a regex that captures everything until the next `}`.

scriptContent = scriptContent.replace(/js: clean\([\s\S]*?\n\s{2}\}/g, "js: clean(`" + vanillaJS + "`)\n  }");

fs.writeFileSync(scriptPath, scriptContent);
console.log("Vanilla JS carousels implemented!");
