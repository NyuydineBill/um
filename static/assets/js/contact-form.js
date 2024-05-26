document.addEventListener("DOMContentLoaded", function () {
  const messageField = document.getElementById("message");
  const charCounter = document.getElementById("char-counter");

  if (messageField && charCounter) {
    messageField.addEventListener("input", () => {
      const remaining = 150 - messageField.value.length;
      charCounter.textContent = `${remaining} characters left`;
    });
  } else {
    console.error("Message field or character counter not found in the DOM.");
  }

  // Initialize emailjs
  try {
    emailjs.init("mblP6JX16V1oBmApv");
  } catch (error) {
    console.error("Failed to initialize emailjs:", error);
  }

  const contactForm = document.getElementById("contact-form");
  const thankYouMessage = document.getElementById("thank-you");
  const tryAgainMessage = document.getElementById("try-again");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };

      emailjs.send("service_iil7tk8", "template_q47pb6b", params).then(
        function () {
          if (thankYouMessage) {
            thankYouMessage.style.display = "block";
          }
          contactForm.reset();
          if (charCounter) {
            charCounter.textContent = "150 characters left";
          }
        },
        function (error) {
          console.error("Failed to send email via emailjs:", error);
          if (tryAgainMessage) {
            tryAgainMessage.style.display = "block";
          }
        }
      );
    });
  } else {
    console.error("Contact form not found in the DOM.");
  }

  // Initialize AOS (Animate On Scroll)
  try {
    AOS.init();
  } catch (error) {
    console.error("Failed to initialize AOS:", error);
  }
});
