// Initialize Swiper slider
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Initialize AOS for animations
AOS.init({
    duration: 1000,  // Animation duration in ms
    once: true       // Animation will happen only once
});

// JavaScript for form validation
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Initialize validation status
    let isValid = true;
  
    // Clear previous error messages
    const errorMessages = document.querySelectorAll('.error');
    errorMessages.forEach(error => error.remove());
  
    // Name validation
    if (name === '') {
      displayError('name', 'Name is required');
      isValid = false;
    }
  
    // Email validation
    if (email === '') {
      displayError('email', 'Email is required');
      isValid = false;
    } else if (!isValidEmail(email)) {
      displayError('email', 'Please enter a valid email address');
      isValid = false;
    }
  
    // Message validation
    if (message === '') {
      displayError('message', 'Message is required');
      isValid = false;
    }
  
    // If valid, submit the form (or display success message)
    if (isValid) {
      alert('Form submitted successfully!');
      this.reset(); // Clear the form fields
    }
  });
  
  // Function to display error messages
  function displayError(fieldId, errorMessage) {
    const field = document.getElementById(fieldId);
    const error = document.createElement('span');
    error.className = 'error';
    error.textContent = errorMessage;
    field.parentNode.insertBefore(error, field.nextSibling);
  }
  
  // Function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  
