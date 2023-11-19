// icon link of code pen

let menuToggle = document.querySelector(".menuToggle");
menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
};
//https://codepen.io/saaim-k/pen/yLKxKgL

// here is the code to add preloader
// 1 html code under body tag
//  <div class="preloader ">
//         <div class="container">
//             <div class="dash first"></div>
//             <div class="dash seconde"></div>
//             <div class="dash third"></div>
//             <div class="dash fourth"></div>
//         </div>
//     </div>

// 2 css code

/* loader code starts here */
// .preloader {
//   z-index: 800;
// }
// .container {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: black;
//   transition: opacity 0.75s, visibility 0.75s;
//   z-index: 800;

// }
// .hidden {
//   opacity: 0;
//   visibility: hidden;
//   transition: opacity 0.75s, visibility 0.75s;
// }
// .dash {
//   margin: 0 15px;
//   width: 150px;
//   height: 50px;
//   border-radius: 8px;
//   background: rgb(82, 159, 246);
//   box-shadow: rgb(82, 159, 246) 0 0 15px 0;
// }

// .first {
//   margin-right: -18px;
//   transform-origin: center left;
//   animation: spin 3s linear infinite;
// }

// .seconde {
//   transform-origin: center right;
//   animation: spin2 3s linear infinite;
//   animation-delay: 0.2s;
// }

// .third {
//   transform-origin: center right;
//   animation: spin3 3s linear infinite;
//   animation-delay: 0.3s;
// }

// .fourth {
//   transform-origin: center right;
//   animation: spin4 3s linear infinite;
//   animation-delay: 0.4s;
// }

// @keyframes spin {
//   0% {
//     transform: rotate(0deg);
//   }

//   25% {
//     transform: rotate(360deg);
//   }

//   30% {
//     transform: rotate(370deg);
//   }

//   35% {
//     transform: rotate(360deg);
//   }

//   100% {
//     transform: rotate(360deg);
//   }
// }

// @keyframes spin2 {
//   0% {
//     transform: rotate(0deg);
//   }

//   20% {
//     transform: rotate(0deg);
//   }

//   30% {
//     transform: rotate(-180deg);
//   }

//   35% {
//     transform: rotate(-190deg);
//   }

//   40% {
//     transform: rotate(-180deg);
//   }

//   78% {
//     transform: rotate(-180deg);
//   }

//   95% {
//     transform: rotate(-360deg);
//   }

//   98% {
//     transform: rotate(-370deg);
//   }

//   100% {
//     transform: rotate(-360deg);
//   }
// }

// @keyframes spin3 {
//   0% {
//     transform: rotate(0deg);
//   }

//   27% {
//     transform: rotate(0deg);
//   }

//   40% {
//     transform: rotate(180deg);
//   }

//   45% {
//     transform: rotate(190deg);
//   }

//   50% {
//     transform: rotate(180deg);
//   }

//   62% {
//     transform: rotate(180deg);
//   }

//   75% {
//     transform: rotate(360deg);
//   }

//   80% {
//     transform: rotate(370deg);
//   }

//   85% {
//     transform: rotate(360deg);
//   }

//   100% {
//     transform: rotate(360deg);
//   }
// }

// @keyframes spin4 {
//   0% {
//     transform: rotate(0deg);
//   }

//   38% {
//     transform: rotate(0deg);
//   }

//   60% {
//     transform: rotate(-360deg);
//   }

//   65% {
//     transform: rotate(-370deg);
//   }

//   75% {
//     transform: rotate(-360deg);
//   }

//   100% {
//     transform: rotate(-360deg);
//   }
// }
//  js code
//  <script>var loader = document.getElementsByClassName("preloader")[0];
// window.addEventListener("load", () => {
//     loader.classList.add("hidden");
// });</script>
