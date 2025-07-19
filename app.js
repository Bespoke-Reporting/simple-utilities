document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const thankYouMessage = document.getElementById('thankYouMessage');

  if (form && thankYouMessage) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          form.style.display = 'none';
          thankYouMessage.classList.remove('hidden');
        } else {
          alert('There was an issue submitting the form. Please try again later.');
        }
      })
      .catch(() => {
        alert('There was an error submitting the form. Please try again.');
      });
    });
  }
});
