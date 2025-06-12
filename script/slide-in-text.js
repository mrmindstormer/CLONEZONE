window.addEventListener('scroll', function() {
      const infoBox = document.getElementById('infoBox');
      const triggerPoint = window.innerHeight * 0.6;
      if (window.scrollY > triggerPoint) {
        infoBox.classList.add('visible');
      } else {
        infoBox.classList.remove('visible');
      }
    });
    //ermöglich das Einblenden desr Info-Box beim Scrollen