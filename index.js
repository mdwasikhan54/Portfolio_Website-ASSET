// index.js

// Live Clock
function updateTime() {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  const liveTimeElement = document.getElementById("live-time");
  if (liveTimeElement) {
    liveTimeElement.textContent = `${date} ${time}`;
  }
}
setInterval(updateTime, 1000);

// Form Validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert("Please fill up the required fields");
      return;
    }

    const successMsg = document.getElementById("formSuccess");
    if (successMsg) {
      successMsg.classList.remove("d-none");
    }
    
    this.reset();
  });
}