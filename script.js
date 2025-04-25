document.addEventListener("DOMContentLoaded", function() {
    let bars = document.querySelectorAll(".progress-bar");

    bars.forEach(bar => {
        let targetProgress = parseInt(bar.getAttribute("data-progress")); 
        let progress = 0;

        let interval = setInterval(() => {
            if (progress >= targetProgress) {
                clearInterval(interval);
            } else {
                progress++;
                bar.style.width = progress + "%";
                bar.textContent = progress + "%";
            }
        }, 20); 
    });



    const buttons = document.querySelectorAll(".btn");

    function animateOnScroll() {
        buttons.forEach((button) => {
            const rect = button.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight - 100) {
                button.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); 


    const sections = document.querySelectorAll(".sec3Txt, .sec4Txt");

    function animateSections() {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight - 300) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", animateSections);
    animateSections();



});


const faqs = document.querySelectorAll(".faq-item");

faqs.forEach((faq) => {
  faq.addEventListener("toggle", () => {
    if (faq.open) {
      faqs.forEach((otherFaq) => {
        if (otherFaq !== faq) {
          otherFaq.removeAttribute("open");
        }
      });
    }
  });
});