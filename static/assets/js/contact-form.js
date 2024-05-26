document.addEventListener('DOMContentLoaded', function() {
    const messageField = document.getElementById('message');
    const charCounter = document.getElementById('char-counter');
  
    messageField.addEventListener('input', () => {
      const remaining = 150 - messageField.value.length;
      charCounter.textContent = `${remaining} characters left`;
    });
  
    emailjs.init("mblP6JX16V1oBmApv"); 
  
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
  
      var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
      };
  
      emailjs.send("service_iil7tk8", "template_q47pb6b", params)
      .then(function() {
        document.getElementById("thank-you").style.display = "block";
        document.getElementById("contact-form").reset();
        charCounter.textContent = "150 characters left";
      }, function(error) {
        document.getElementById("try-again").style.display = "block";
      });
    });
  });
  
  AOS.init();
  