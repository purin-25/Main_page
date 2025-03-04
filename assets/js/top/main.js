const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  nav.classList.toggle("open");
});


// $(document).on('ready', function() {
//   $(".regular").slick({
//     autoplay: true, // 自動再生を設定
//     autoplaySpeed: 4000, // 自動再生のスピード（ミリ秒単位）
//     dots: true // ドットインジケーターの表示
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const bg = document.querySelector(".bg");
  const numLines = 20; // 光の数

  for (let i = 0; i < numLines; i++) {
    const line = document.createElement("div");
    line.classList.add("line");

    // ランダムな位置（X座標）に配置
    line.style.left = `${Math.random() * 100}vw`;

    // ランダムなアニメーション時間を設定（4秒〜8秒）
    const duration = Math.random() * 4 + 4;
    line.style.animationDuration = `${duration}s`;

    bg.appendChild(line);
  }
});

//追従する
document.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  let bg = document.querySelector(".bg");
  
  // スクロール量の 10% だけ背景を動かす
  bg.style.transform = `translateY(${scrollTop * -0.1}px)`;
});

document.addEventListener("DOMContentLoaded", function () {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const slides = document.querySelectorAll(".slider img");
  const dots = document.querySelectorAll(".dot");
  const totalSlides = slides.length - 1; // クローンを除いた実際のスライド数
  let currentIndex = 0;
  let slideInterval;
  let isTransitioning = false;

  // スライドとドットを更新する関数
  function moveSlide(index, smooth = true) {
      if (isTransitioning) return;

      let targetIndex = index;
      let updateDots = true;
      
      // 通常のスライド遷移
      if (targetIndex >= totalSlides) {
          targetIndex = 0;
          updateDots = smooth;
      } else if (targetIndex < 0) {
          targetIndex = totalSlides - 1;
      }

      // スライダーの移動
      if (smooth) {
          sliderWrapper.style.transition = 'transform 0.5s ease-in-out';
      } else {
          sliderWrapper.style.transition = 'none';
      }
      
      let movePercent = (index >= totalSlides) ? totalSlides * 20 : targetIndex * 20;
      sliderWrapper.style.transform = `translateX(-${movePercent}%)`;
      
      // 最後のスライドからループする場合
      if (index >= totalSlides && smooth) {
          isTransitioning = true;
          setTimeout(() => {
              sliderWrapper.style.transition = 'none';
              sliderWrapper.style.transform = 'translateX(0)';
              isTransitioning = false;
          }, 500);
          targetIndex = 0;
      }

      currentIndex = targetIndex;

      // ドットの更新
      if (updateDots) {
          dots.forEach((dot, i) => {
              dot.classList.toggle("active", i === currentIndex);
          });
      }
  }

  // 自動スライド
  function startAutoSlide() {
      if (slideInterval) {
          clearInterval(slideInterval);
      }
      slideInterval = setInterval(() => {
          moveSlide(currentIndex + 1);
      }, 3000);
  }

  // ドットクリックイベント
  dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
          if (isTransitioning) return;
          moveSlide(index);
          startAutoSlide();
      });
  });

  // 前へボタン
  document.querySelector(".prev").addEventListener("click", function () {
      if (isTransitioning) return;
      moveSlide(currentIndex - 1);
      startAutoSlide();
  });

  // 次へボタン
  document.querySelector(".next").addEventListener("click", function () {
      if (isTransitioning) return;
      moveSlide(currentIndex + 1);
      startAutoSlide();
  });

  // トランジション終了イベントの監視
  sliderWrapper.addEventListener('transitionend', () => {
      isTransitioning = false;
  });

  // 初期表示と自動スライド開始
  moveSlide(0, false);
  startAutoSlide();
});
  
