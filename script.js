document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
      document.getElementById("status").innerText = "✅ Message sent successfully!";
      this.reset();
    }, (error) => {
      console.error("FAILED...", error);
      document.getElementById("status").innerText = "❌ Message failed to send.";
    });
});
