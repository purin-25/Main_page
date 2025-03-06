window.onload = function() {
    setTimeout(() => {
        document.getElementById("loading").classList.add("hidden");
        document.getElementById("content").style.display = "block";
    }, 1000);
};



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

//スライダー1
document.addEventListener("DOMContentLoaded", function () {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const slides = Array.from(sliderWrapper.children);
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 1; // クローンを考慮したスタート位置
    let slideInterval;
    let isTransitioning = false;

    // クローンを作成
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);

    // クローンを追加
    sliderWrapper.appendChild(firstClone);
    sliderWrapper.insertBefore(lastClone, slides[0]);

    // クローンを含めた新しいスライドリストを取得
    const updatedSlides = Array.from(sliderWrapper.children);
    const totalSlides = updatedSlides.length;

    // スライダーの幅調整
    sliderWrapper.style.width = `${totalSlides * 100}%`;
    updatedSlides.forEach(slide => (slide.style.width = `${100 / totalSlides}%`));

    // スライド移動処理
    function moveSlide(index, smooth = true) {
        if (isTransitioning) return;
        isTransitioning = true;

        if (smooth) {
            sliderWrapper.style.transition = "transform 0.5s ease-in-out";
        } else {
            sliderWrapper.style.transition = "none";
        }

        sliderWrapper.style.transform = `translateX(-${index * 100 / totalSlides}%)`;
        currentIndex = index; // まず仮更新

        setTimeout(() => {
            if (index === totalSlides - 1) {
                // 最後のクローンから本物の1枚目へ瞬時に移動
                sliderWrapper.style.transition = "none";
                sliderWrapper.style.transform = `translateX(-${100 / totalSlides}%)`;
                currentIndex = 1;
                requestAnimationFrame(() => isTransitioning = false); // 即座に適用
            } else if (index === 0) {
                // 最初のクローンから本物の最後のスライドへ瞬時に移動
                sliderWrapper.style.transition = "none";
                sliderWrapper.style.transform = `translateX(-${(totalSlides - 2) * 100 / totalSlides}%)`;
                currentIndex = totalSlides - 2;
                requestAnimationFrame(() => isTransitioning = false);
            } else {
                isTransitioning = false;
            }
            updateDots();
        }, 400); // 500ms → 400ms に短縮
    }

    // ドットの位置更新処理
    function updateDots() {
        let realIndex = currentIndex;
        if (realIndex === 0) {
            realIndex = totalSlides - 2;
        } else if (realIndex === totalSlides - 1) {
            realIndex = 1;
        }
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === (realIndex - 1));
        });
    }

    // 自動スライド開始
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
            moveSlide(index + 1);
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

    // 初期位置をクローン考慮した1枚目に設定
    sliderWrapper.style.transition = "none";
    sliderWrapper.style.transform = `translateX(-${100 / totalSlides}%)`;
    updateDots();
    startAutoSlide();
});
// ここまで

//スライダー2
document.addEventListener("DOMContentLoaded", function () {
    const sliderWrapper = document.querySelector(".slider-wrapper2");
    const slides = Array.from(sliderWrapper.children);
    const dots = document.querySelectorAll(".dot2");
    let currentIndex = 1; // クローンを考慮したスタート位置
    let slideInterval;
    let isTransitioning = false;

    // クローンを作成
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);

    // クローンを追加
    sliderWrapper.appendChild(firstClone);
    sliderWrapper.insertBefore(lastClone, slides[0]);

    // クローンを含めた新しいスライドリストを取得
    const updatedSlides = Array.from(sliderWrapper.children);
    const totalSlides = updatedSlides.length;

    // スライダーの幅調整
    sliderWrapper.style.width = `${totalSlides * 100}%`;
    updatedSlides.forEach(slide => (slide.style.width = `${100 / totalSlides}%`));

    // スライド移動処理
    function moveSlide(index, smooth = true) {
        if (isTransitioning) return;
        isTransitioning = true;

        if (smooth) {
            sliderWrapper.style.transition = "transform 0.5s ease-in-out";
        } else {
            sliderWrapper.style.transition = "none";
        }

        sliderWrapper.style.transform = `translateX(-${index * 100 / totalSlides}%)`;
        currentIndex = index; // まず仮更新

        setTimeout(() => {
            if (index === totalSlides - 1) {
                // 最後のクローンから本物の1枚目へ瞬時に移動
                sliderWrapper.style.transition = "none";
                sliderWrapper.style.transform = `translateX(-${100 / totalSlides}%)`;
                currentIndex = 1;
                requestAnimationFrame(() => isTransitioning = false); // 即座に適用
            } else if (index === 0) {
                // 最初のクローンから本物の最後のスライドへ瞬時に移動
                sliderWrapper.style.transition = "none";
                sliderWrapper.style.transform = `translateX(-${(totalSlides - 2) * 100 / totalSlides}%)`;
                currentIndex = totalSlides - 2;
                requestAnimationFrame(() => isTransitioning = false);
            } else {
                isTransitioning = false;
            }
            updateDots();
        }, 400); // 500ms → 400ms に短縮
    }

    // ドットの位置更新処理
    function updateDots() {
        let realIndex = currentIndex;
        if (realIndex === 0) {
            realIndex = totalSlides - 2;
        } else if (realIndex === totalSlides - 1) {
            realIndex = 1;
        }
        dots.forEach((dot, i) => {
            dot.classList.toggle("active2", i === (realIndex - 1));
        });
    }

    // 自動スライド開始
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
            moveSlide(index + 1);
            startAutoSlide();
        });
    });

    // 前へボタン
    document.querySelector(".prev2").addEventListener("click", function () {
        if (isTransitioning) return;
        moveSlide(currentIndex - 1);
        startAutoSlide();
    });

    // 次へボタン
    document.querySelector(".next2").addEventListener("click", function () {
        if (isTransitioning) return;
        moveSlide(currentIndex + 1);
        startAutoSlide();
    });

    // 初期位置をクローン考慮した1枚目に設定
    sliderWrapper.style.transition = "none";
    sliderWrapper.style.transform = `translateX(-${100 / totalSlides}%)`;
    updateDots();
    startAutoSlide();
});
//ここまで
//スライダー3
document.addEventListener("DOMContentLoaded", function () {
    const sliderWrapper = document.querySelector(".slider-wrapper3");
    const slides = Array.from(sliderWrapper.children);
    const dots = document.querySelectorAll(".dot3");
    let currentIndex = 1; // クローンを考慮したスタート位置
    let slideInterval;
    let isTransitioning = false;

    // クローンを作成
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);

    // クローンを追加
    sliderWrapper.appendChild(firstClone);
    sliderWrapper.insertBefore(lastClone, slides[0]);

    // クローンを含めた新しいスライドリストを取得
    const updatedSlides = Array.from(sliderWrapper.children);
    const totalSlides = updatedSlides.length;

    // スライダーの幅調整
    sliderWrapper.style.width = `${totalSlides * 100}%`;
    updatedSlides.forEach(slide => (slide.style.width = `${100 / totalSlides}%`));

    // スライド移動処理
    function moveSlide(index, smooth = true) {
        if (isTransitioning) return;
        isTransitioning = true;

        if (smooth) {
            sliderWrapper.style.transition = "transform 0.5s ease-in-out";
        } else {
            sliderWrapper.style.transition = "none";
        }

        sliderWrapper.style.transform = `translateX(-${index * 100 / totalSlides}%)`;
        currentIndex = index; // まず仮更新

        setTimeout(() => {
            if (index === totalSlides - 1) {
                // 最後のクローンから本物の1枚目へ瞬時に移動
                sliderWrapper.style.transition = "none";
                sliderWrapper.style.transform = `translateX(-${100 / totalSlides}%)`;
                currentIndex = 1;
                requestAnimationFrame(() => isTransitioning = false); // 即座に適用
            } else if (index === 0) {
                // 最初のクローンから本物の最後のスライドへ瞬時に移動
                sliderWrapper.style.transition = "none";
                sliderWrapper.style.transform = `translateX(-${(totalSlides - 2) * 100 / totalSlides}%)`;
                currentIndex = totalSlides - 2;
                requestAnimationFrame(() => isTransitioning = false);
            } else {
                isTransitioning = false;
            }
            updateDots();
        }, 400); // 500ms → 400ms に短縮
    }

    // ドットの位置更新処理
    function updateDots() {
        let realIndex = currentIndex;
        if (realIndex === 0) {
            realIndex = totalSlides - 2;
        } else if (realIndex === totalSlides - 1) {
            realIndex = 1;
        }
        dots.forEach((dot, i) => {
            dot.classList.toggle("active3", i === (realIndex - 1));
        });
    }

    // 自動スライド開始
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
            moveSlide(index + 1);
            startAutoSlide();
        });
    });

    // 前へボタン
    document.querySelector(".prev3").addEventListener("click", function () {
        if (isTransitioning) return;
        moveSlide(currentIndex - 1);
        startAutoSlide();
    });

    // 次へボタン
    document.querySelector(".next3").addEventListener("click", function () {
        if (isTransitioning) return;
        moveSlide(currentIndex + 1);
        startAutoSlide();
    });

    // 初期位置をクローン考慮した1枚目に設定
    sliderWrapper.style.transition = "none";
    sliderWrapper.style.transform = `translateX(-${100 / totalSlides}%)`;
    updateDots();
    startAutoSlide();
});
//ここまで
//スライダー4
document.addEventListener("DOMContentLoaded", function () {
    const sliderWrapper = document.querySelector(".slider-wrapper4");
    const slides = Array.from(sliderWrapper.children);
    const dots = document.querySelectorAll(".dot4");
    let currentIndex = 1; // クローンを考慮したスタート位置
    let slideInterval;
    let isTransitioning = false;

    // クローンを作成
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);

    // クローンを追加
    sliderWrapper.appendChild(firstClone);
    sliderWrapper.insertBefore(lastClone, slides[0]);

    // クローンを含めた新しいスライドリストを取得
    const updatedSlides = Array.from(sliderWrapper.children);
    const totalSlides = updatedSlides.length;

    // スライダーの幅調整
    sliderWrapper.style.width = `${totalSlides * 100}%`;
    updatedSlides.forEach(slide => (slide.style.width = `${100 / totalSlides}%`));

    // スライド移動処理
    function moveSlide(index, smooth = true) {
        if (isTransitioning) return;
        isTransitioning = true;

        if (smooth) {
            sliderWrapper.style.transition = "transform 0.5s ease-in-out";
        } else {
            sliderWrapper.style.transition = "none";
        }

        sliderWrapper.style.transform = `translateX(-${index * 100 / totalSlides}%)`;
        currentIndex = index; // まず仮更新

        setTimeout(() => {
            if (index === totalSlides - 1) {
                // 最後のクローンから本物の1枚目へ瞬時に移動
                sliderWrapper.style.transition = "none";
                sliderWrapper.style.transform = `translateX(-${100 / totalSlides}%)`;
                currentIndex = 1;
                requestAnimationFrame(() => isTransitioning = false); // 即座に適用
            } else if (index === 0) {
                // 最初のクローンから本物の最後のスライドへ瞬時に移動
                sliderWrapper.style.transition = "none";
                sliderWrapper.style.transform = `translateX(-${(totalSlides - 2) * 100 / totalSlides}%)`;
                currentIndex = totalSlides - 2;
                requestAnimationFrame(() => isTransitioning = false);
            } else {
                isTransitioning = false;
            }
            updateDots();
        }, 400); // 500ms → 400ms に短縮
    }

    // ドットの位置更新処理
    function updateDots() {
        let realIndex = currentIndex;
        if (realIndex === 0) {
            realIndex = totalSlides - 2;
        } else if (realIndex === totalSlides - 1) {
            realIndex = 1;
        }
        dots.forEach((dot, i) => {
            dot.classList.toggle("active4", i === (realIndex - 1));
        });
    }

    // 自動スライド開始
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
            moveSlide(index + 1);
            startAutoSlide();
        });
    });

    // 前へボタン
    document.querySelector(".prev4").addEventListener("click", function () {
        if (isTransitioning) return;
        moveSlide(currentIndex - 1);
        startAutoSlide();
    });

    // 次へボタン
    document.querySelector(".next4").addEventListener("click", function () {
        if (isTransitioning) return;
        moveSlide(currentIndex + 1);
        startAutoSlide();
    });

    // 初期位置をクローン考慮した1枚目に設定
    sliderWrapper.style.transition = "none";
    sliderWrapper.style.transform = `translateX(-${100 / totalSlides}%)`;
    updateDots();
    startAutoSlide();
});
//ここまで