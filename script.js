const descriptionTab = document.getElementById('description-tab');
    const reviewsTab = document.getElementById('reviews-tab');
    const descriptionContent = document.getElementById('description-content');
    const reviewsContent = document.getElementById('reviews-content');
    const underline = document.getElementById('description-tab');
    const underline2 = document.getElementById('reviews-tab');
    const reviewText = document.getElementById('review-text');
    const arrows = document.getElementById('arrows');
    const dots = document.querySelectorAll('.review-scroll');
    const authorText = document.getElementById('author');
    
    const authors = [
      "JakeTheSnake",
      "EmilyRocks",
      "KicksKing",
      "TheSneakerGeek",
      "LunaMoon"
    ]

    const reviews = [
      "These Nike Air Force shoes are incredible! Super comfortable and stylish – they go with everything. Definitely worth the price.",
      "Love the design and quality, but they’re a bit stiff at first. Took a couple of wears to break them in, but now they’re perfect!",
      "One of the best purchases I’ve made! Classic style and super comfortable for all-day wear. Perfect for any outfit.",
      "Great look, but they run a little small. I’d recommend ordering a half size up. Otherwise, solid sneakers.",
      "Really love the colors and design, but wish the sole was a bit softer. Still happy with them overall!"
    ];

    let currentReviewIndex = 0;

    descriptionTab.addEventListener('click', () => {
      descriptionContent.classList.add('activated');
      reviewsContent.classList.remove('activated');
      underline.classList.add('border-line');
      underline2.classList.remove('border-line');
      arrows.classList.add('hidden');
      resetDots();
    });
  
    reviewsTab.addEventListener('click', () => {
      descriptionContent.classList.remove('activated');
      reviewsContent.classList.add('activated');
      underline2.classList.add('border-line');
      underline.classList.remove('border-line');
      arrows.classList.remove('hidden');
      resetDots();
      changeReview(0);
    });
  
    function changeReview(index) {
      currentReviewIndex = index;
      reviewText.textContent = reviews[currentReviewIndex];
      authorText.textContent = `${authors[currentReviewIndex]}`;
      resetDots();
      dots[currentReviewIndex].classList.add('activated');
    }
    function resetDots() {
      dots.forEach(dot => dot.classList.remove('activated'));
    }
    function nextReview() {
      currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
      changeReview(currentReviewIndex);
    }

    function prevReview() {
      currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
      changeReview(currentReviewIndex);
    }
