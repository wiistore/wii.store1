document.addEventListener('DOMContentLoaded', function() {
      const dateElement = document.getElementById('date');
      const timeElement = document.getElementById('time');
  
      function updateDateTime() {
          const now = new Date();
          dateElement.textContent = now.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
          timeElement.textContent = now.toLocaleTimeString('id-ID');
      }
  
      setInterval(updateDateTime, 1000);
      updateDateTime();
  });

  function toggleMenu() {
      const menu = document.getElementById('menu');
      menu.classList.toggle('show');
  }
  
  function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
  }

  function submitTestimoni() {
      const nameInput = document.getElementById('name-input');
      const testimoniInput = document.getElementById('testimoni-input');
      const testimoniList = document.getElementById('testimoni-list');
  
      const name = nameInput.value.trim();
      const testimoni = testimoniInput.value.trim();
  
      if (name !== '' && testimoni !== '') {
          const newTestimoni = document.createElement('div');
          newTestimoni.textContent = `${name}: ${testimoni}`;
          testimoniList.prepend(newTestimoni);
          nameInput.value = '';
          testimoniInput.value = '';
      } else {
          alert("Silakan isi nama dan ulasan Anda.");
      }
  }
  
  const texts = [
      "Selamat datang di wii store",
      "Kami menjual berbagai jasa aplikasi premium dan top up game.",
      "Nikmati pengalaman berbelanja yang menyenangkan"
  ];
  
  let currentTextIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  
  function type() {
      const marqueeText = document.getElementById('marquee-text');
      const currentText = texts[currentTextIndex];
  
      if (isDeleting) {
          // Menghapus karakter
          marqueeText.textContent = currentText.substring(0, currentCharIndex - 1);
          currentCharIndex--;
  
          if (currentCharIndex === 0) {
              isDeleting = false;
              currentTextIndex = (currentTextIndex + 1) % texts.length; // Pindah ke teks berikutnya
              setTimeout(type, 2000); // Delay sebelum mulai mengetik teks berikutnya
          } else {
              setTimeout(type, 100); // Delay saat menghapus karakter
          }
      } else {
          // Mengetik karakter
          marqueeText.textContent = currentText.substring(0, currentCharIndex + 1);
          currentCharIndex++;
  
          if (currentCharIndex === currentText.length) {
              isDeleting = true;
              setTimeout(type, 2000); // Delay setelah selesai mengetik
          } else {
              setTimeout(type, 100); // Delay saat mengetik karakter
          }
      }
  }
  
  // Mulai animasi saat halaman dimuat
  document.addEventListener('DOMContentLoaded', function() {
      type();
  });