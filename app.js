// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
}); 

function circleMouseFollower() {
    window.addEventListener("mousemove", function(dets){
    document.querySelector("#miniCircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
} 
circleMouseFollower();