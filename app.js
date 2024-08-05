// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnim() {
  var tl = gsap.timeline();
  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  });
  tl.to(".boundingelem", {
    y: 0,
    duration: 2,
    ease: Expo.easeInOut,
    stagger: 0.2,
  });
}
var timeout;
function circleShrink() {
  var xScale = 1;
  var yScale = 1;

  var xprev = 0;
  var yprev = 0;
  window.addEventListener("mousemove", function (dets) {
    this.clearTimeout(timeout);

    xScale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev); //shrink when move left,right
    yScale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev); // shrink in when move up,down

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xScale,yScale);
  timeout =  setTimeout(() => {
        document.querySelector("#miniCircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xScale}, ${yScale})` ;
    }, 100);

  });
}

function circleMouseFollower(xScale, yScale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#miniCircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)` ;
  });
}
circleShrink();
circleMouseFollower();
//firstPageAnim();


document.querySelectorAll(".elem")
.forEach(function(elem) {
  elem.addEventListener("mousemove",function(detailes){
    console.log(detailes.clientX, detailes.clientY);
  });
});