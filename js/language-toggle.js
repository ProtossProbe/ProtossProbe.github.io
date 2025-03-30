document.addEventListener('DOMContentLoaded', function() {
  // Get language toggle buttons
  const langButtons = document.querySelectorAll('.lang-btn');
  
  // Add click listeners
  langButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Get the language from the button's data attribute
      const targetLang = this.getAttribute('data-lang');
      
      // Save preference to localStorage
      localStorage.setItem('preferredLanguage', targetLang);
    });
  });
});
