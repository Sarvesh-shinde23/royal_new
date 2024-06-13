document.addEventListener('DOMContentLoaded', () => {
  let startX, startY, endX, endY;
  const threshold = 50; // Minimum distance to detect swipe

  // Keyboard navigation
  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
      // Navigate to the previous page
      document.getElementById('prevPage').click();
    } else if (event.key === 'ArrowRight') {
      // Navigate to the next page
      document.getElementById('nextPage').click();
    } else if (event.key === 'Escape') {
      // Close the page
      const closeButton = document.querySelector('.right a');
      if (closeButton) {
        closeButton.click(); // Simulate click on the close button
      }
    }
  });

  // Touch events for swipe functionality
  document.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
  });

  document.addEventListener('touchmove', (event) => {
    endX = event.touches[0].clientX;
    endY = event.touches[0].clientY;
  });

  document.addEventListener('touchend', (event) => {
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > threshold) {
        // Swipe Right
        document.getElementById('prevPage').click();
      } else if (deltaX < -threshold) {
        // Swipe Left
        document.getElementById('nextPage').click();
      }
    }
  });
});
