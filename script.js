
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  document.querySelectorAll(".nav a").forEach(link => {
    if (link.dataset.page === page) link.classList.add("active");
  });

  const form = document.querySelector("#contactForm");
  const status = document.querySelector("#formStatus");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      status.textContent = "Thank you! This demo form is working on the page. Connect it to your preferred form service to receive real messages.";
      form.reset();
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
});
