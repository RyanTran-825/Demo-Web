const revealElements = document.querySelectorAll(
  ".member, .about img, .about-text, .philosophy blockquote, .philosophy p"
);

const revealOnScroll = () => {
  let windowHeight = window.innerHeight;

  revealElements.forEach((el) => {
    let elementTop = el.getBoundingClientRect().top;
    let elementBottom = el.getBoundingClientRect().bottom;

    if (elementTop < windowHeight - 50 && elementBottom > 50) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
};

document.addEventListener("DOMContentLoaded", revealOnScroll);

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("resize", revealOnScroll);
