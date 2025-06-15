
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger-toggle");
  const nav = document.querySelector(".nav-links");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
    });
  }
});
