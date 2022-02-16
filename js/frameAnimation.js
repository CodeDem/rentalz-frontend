const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 150;
const currentFrame = (index) =>
  `https://res.cloudinary.com/codedem/image/upload/v1644392972/frames/out-${index
    .toString()
    .padStart(3, "0")}.jpg`;
// const currentFrame = (index) =>
//   `./frames/out-${index.toString().padStart(3, "0")}.jpg`;

// function handlePreloader(status) {
//   const preloaderEle = document.getElementById("preloader-div");
//   if (status) {
//     preloaderEle.classList.remove("hidden");
//     return;
//   }
//   preloaderEle.classList.add("hidden");
//   return;
// }

// function handleFileComplete(event) {
//   handlePreloader(false);
// }
const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
  // handlePreloader(false);
};

const img = new Image();
img.src = currentFrame(1);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
img.onload = function () {
  context.drawImage(img, 0, 0);
};

const updateImage = (index) => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
};

window.addEventListener("scroll", () => {
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );

  requestAnimationFrame(() => updateImage(frameIndex + 1));
});

function handleWindowResize(e) {
  var canvasRatio = canvas.height / canvas.width;
  var windowRatio = window.innerHeight / window.innerWidth;
  var width;
  var height;

  if (windowRatio < canvasRatio) {
    height = window.innerHeight;
    width = height / canvasRatio;
  } else {
    width = window.innerWidth;
    height = width * canvasRatio;
  }

  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
}

window.addEventListener("resize", handleWindowResize);

preloadImages();
