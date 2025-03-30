document.addEventListener('DOMContentLoaded', function() {
  // Get all language toggle buttons
  const langButtons = document.querySelectorAll('.lang-btn');
  
  // Add click event listeners to each button
  langButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Prevent default link behavior
      e.preventDefault();
      
      // Get the language from the button's class
      let lang;
      if (this.classList.contains('active')) {
        // If clicking the already active language, do nothing
        return;
      } else if (this.textContent.trim() === 'EN') {
        lang = 'en';
      } else {
        lang = 'cn';
      }
      
      // Save the user's language preference to localStorage
      localStorage.setItem('preferredLanguage', lang);
      
      // Navigate to the appropriate language page
      window.location.href = this.getAttribute('href');
    });
  });
});
