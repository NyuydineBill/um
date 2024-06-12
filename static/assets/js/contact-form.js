document.addEventListener('DOMContentLoaded', function() {
  const messageField = document.getElementById('message');
  const charCounter = document.getElementById('char-counter');

  messageField.addEventListener('input', () => {
    const remaining = 150 - messageField.value.length;
    charCounter.textContent = `${remaining} characters left`;
  });
  emailjs.init("");

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value
    };

    emailjs.send("service_6w3kp0j", "template_5iouf44", params)
    .then(function() {
      document.getElementById("thank-you").style.display = "block";
      document.getElementById("contact-form").reset();
      document.getElementById("char-counter").textContent = "150 characters left";
    }, function(error) {
      document.getElementById("try-again").style.display = "block";
    });
  });
});

AOS.init();
