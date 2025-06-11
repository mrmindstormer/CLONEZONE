window.addEventListener('scroll', function() {
      const infoBox = document.getElementById('infoBox');
      const triggerPoint = 850; // Pixel, ab wann der Text erscheinen soll
      if (window.scrollY > triggerPoint) {
        infoBox.classList.add('visible');
      } else {
        infoBox.classList.remove('visible');
      }
    });