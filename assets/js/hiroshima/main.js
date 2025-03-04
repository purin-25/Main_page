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


