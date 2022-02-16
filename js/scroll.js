// Init Skrollr

skrollr.init({
  smoothScrolling: false,
  forceHeight: false,
});

// Seek video

// Cross browser animation
// https://gist.github.com/Warry/4254579#beware-of-reflows
var animFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  // IE Fallback, you can even fallback to onscroll
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
  
function seek() {
  $("video[data-time]").each(function () {
    var $video = $(this),
      ratio = parseFloat($video.attr("data-time")).toFixed(2), // Uses Skrollr to get scroll ratio
      duration = $video[0].duration; // Total video time
    console.log(ratio);
    // Seek through video (if video seems loaded)
    if (duration) $video[0].currentTime = duration * ratio;
  });

  // Repeat
  animFrame(seek);
}

$("video[data-time]").on("loadedmetadata", function (e) {
  // Launch first animation
  animFrame(seek);
});
