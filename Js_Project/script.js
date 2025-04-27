
const images = [
    "/img1.jpg", 
    "/img2.jpg",
    "/img7.jpg",
    "/img4.jpg"
  ];
  
  
  let currentIndex = 0;
  
  const slide = document.getElementById('slide');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlide();
  });
  
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide();
  });
  
  function updateSlide() {
    slide.src = images[currentIndex];
  }
  