document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: "smooth",
      });
      navLinks.classList.remove("show"); // Close menu on mobile after click
    });
  });

  document.querySelectorAll(".project").forEach((project) => {
    project.addEventListener("mouseenter", () => {
      project.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.3)";
    });
    project.addEventListener("mouseleave", () => {
      project.style.boxShadow = "none";
    });
  });
});
