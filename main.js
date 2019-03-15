
var buttonObject = {
  width: 0,
  height: 0,
  x: 0,
  y: 0,
  centerX: function() {
      return this.x + (this.width / 2);
  },
  centerY: function() {
      return this.y + (this.height / 2);
  },
  halfWidth: function () {
      return this.width / 2;
  },
  halfHeight: function() {
      return this.height / 2;
  }
};
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var video = document.getElementById("myVideo");
var button = Object.create(buttonObject);
button.x = 0;
button.y = 0;
button.width = 50;
button.height = 30;
window.addEventListener("mousemove",onMouseMove,false);
window.addEventListener("mousedown",onMouseDown,false);
var clicked = false;
var mouseX; 
var mouseY;

function onMouseDown (event) {
  clicked = true;
}
function onMouseMove (event) {
  mouseX = event.pageX - canvas.offsetLeft;
  mouseY = event.pageY - canvas.offsetTop;
}

main();

function main() {
  window.setTimeout(main,33);
  
  context.clearRect(0,0,canvas.width,canvas.height);
      context.fillStyle = "#999";
      context.fillRect(button.x,button.y,button.width,button.height);

  var vx = mouseX - button.centerX();                      
  var vy = mouseY - button.centerY();
  var buttonVX = 5;
  
  var combinedHalfWidths = 1 + button.halfWidth();
  var combinedHalfHeights = 1 + button.halfHeight();

  if(Math.abs(vx) < combinedHalfWidths) {
      if(Math.abs(vy) < combinedHalfHeights) {
          if(clicked) {
              video.currentTime = 10;
              video.play();
              clicked = false;
              // video.currentTime = 10;
              // video.play();

              // button.x += buttonVX;
              // if(button.x > canvas.width - button.width) {
              //     buttonVX = -5;
              // }
              // if(button.x < 0) {
              //     buttonVX = 5;
              // }
              // clicked=false;
          }
      }
  }
}
// const playPromise = video.play();
// if (playPromise !== null){
//     playPromise.then(() => { video.play(); })
//            .catch( error => { video.pause();});
// }
