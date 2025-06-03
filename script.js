document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Stop the form from submitting

  // Clear previous errors
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  let valid = true;

  // Validate name (letters and spaces only)
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    document.getElementById('nameError').textContent = 'Please enter a valid name.';
    valid = false;
  }

  // Validate email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email.';
    valid = false;
  }

  // Validate message length
  if (message.length < 10) {
    document.getElementById('messageError').textContent = 'Message must be at least 10 characters long.';
    valid = false;
  }

  // If valid, you could send data to a server or show a success message
  if (valid) {
    alert('Message sent successfully!');
    // Optionally, reset form:
    // document.getElementById('contactForm').reset();
  }
});