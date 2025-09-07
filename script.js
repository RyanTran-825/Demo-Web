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

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const closeBtn = document.getElementById("close-btn");

menuToggle.addEventListener("click", () => {
  navLinks.classList.add("show");
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("show");
  closeBtn.style.display = "none";
});

// Thêm sự kiện click cho các link trong menu để tự động đóng menu
const navLinksItems = document.querySelectorAll(".nav-links a");

navLinksItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    closeBtn.style.display = "none";
  });
});
