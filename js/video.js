var container = document.querySelector("#container");
var video = container.querySelector("video");

// define duration
var Duration =  6000


// init controller
var controller = new ScrollMagic.Controller();

//tween for #trigger 1
var lightpassscale = new TimelineMax()
    .addLabel('lightpass') 
    .to("#video-container", 1, {scale:.95, ease:Linear.easeNone}, 'lightpass'
    );

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger-1", triggerHook: 'onLeave', duration: Duration, offset: 100,})
				.setTween(lightpassscale)
				.addIndicators() // add indicators (requires plugin)
				.addTo(controller);


//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.33);
