function sendEmail() {
  const templateParams = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value
  };

  emailjs
    .send("service_j0u1pn8", "template_qxny38t", templateParams)
    .then(() => {
      alert("Email sent successfully!");
    })
    .catch((error) => {
      console.log("Error sending email:", error);
      alert("Failed to send email. Please try again.");
    });
}


  function showCertificate(src) {
    document.getElementById("cert-frame").src = src;
    document.getElementById("cert-modal").classList.remove("hidden");
  }

  function hideCertificate() {
    document.getElementById("cert-modal").classList.add("hidden");
    document.getElementById("cert-frame").src = '';
  }

  document.addEventListener("DOMContentLoaded", function () {
            // Automatically update the copyright year
            document.getElementById('year').textContent = new Date().getFullYear();
    
            // Initialize Swiper
            const swiper = new Swiper(".card-swiper", {
                centeredSlides: false,
                spaceBetween: 0,
                slidesPerView: 'auto'
            });
const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent page reload
      sendEmail();        // Call your email function
    });
  }
});