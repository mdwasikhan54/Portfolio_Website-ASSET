window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 30);
});

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name    = document.getElementById("name").value.trim();
    const email   = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill up all the required fields");
      return;
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email address (must contain @)");
      return;
    }

    alert("Thank you! Your message has been sent successfully.");

    const successMsg = document.getElementById("formSuccess");
    if (successMsg) successMsg.classList.remove("d-none");

    this.reset();
  });
}