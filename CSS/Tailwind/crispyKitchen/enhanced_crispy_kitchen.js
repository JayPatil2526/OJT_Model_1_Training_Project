


  document.getElementById('resBtn').addEventListener('click', function() {
    window.location.href = 'reservation.html';
  });

document.getElementById('resBtn').addEventListener('click', function() {
  fetch('reservation.html')
    .then(response => {
      if (!response.ok) throw new Error('Network error');
      return response.text();
    })
    .then(html => {
      document.getElementById('contentArea').innerHTML = html;
    })
    .catch(error => {
      document.getElementById('contentArea').innerHTML = 'Failed to load content.';
      console.error('Error loading reservation.html:', error);
    });
});


