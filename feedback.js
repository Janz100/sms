function submitFeedback() {
    const feedbackType = document.getElementById('feedbackType').value;
    const message = document.getElementById('message').value.trim();
    const feedbackSuccess = document.getElementById('feedbackSuccess');
  
    feedbackSuccess.textContent = '';
  
    if (!feedbackType || !message) {
      alert('Please complete all fields before submitting.');
      return false;
    }
  
    feedbackSuccess.textContent = 'Thank you for your anonymous feedback!';
    document.getElementById('anonymousFeedbackForm').reset();
  
    return false; 
  }
  