let index = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        function updateSlider() {
            const slider = document.querySelector('.slider');
            slider.style.transform = `translateX(-${index * 100}%)`;
        }

        function prevSlide() {
            index = (index > 0) ? index - 1 : totalSlides - 1;
            updateSlider();
        }

        function nextSlide() {
            index = (index < totalSlides - 1) ? index + 1 : 0;
            updateSlider();
        }