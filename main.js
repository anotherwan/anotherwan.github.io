var navController = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: $('section').height(),
    triggerHook: .025,
    reverse: true
  }
});

var scenes = {
  'greetings': {
    'greetings': 'greetings-anchor'
  },
  'story': {
    'story': 'story-anchor'
  },
  'work': {
    'work': 'work-anchor'
  },
  'abilities': {
    'abilities': 'abilities-anchor'
  },
  'next': {
      'next': 'next-anchor'
  }
}

for(var key in scenes) {
  if (!scenes.hasOwnProperty(key)) continue;

  var obj = scenes[key];

  for (var prop in obj) {
    if(!obj.hasOwnProperty(prop)) continue;

    new ScrollMagic.Scene({ triggerElement: '#' + prop })
        .setClassToggle('#' + obj[prop], 'active')
        .addTo(navController);
  }
}

navController.scrollTo(function(target) {
  TweenMax.to(window, 0.5, {
    scrollTo : {
      y : target,
      autoKill : true
    },
    ease : Cubic.easeInOut
  });

});

var anchor_nav = document.querySelector('.anchor-nav');

anchor_nav.addEventListener('click', function(e) {
  var target = e.target,
      id     = target.getAttribute('href');

  if(id !== null) {
    if(id.length > 0) {
      e.preventDefault();
      navController.scrollTo(id);

      if(window.history && window.history.pushState) {
        history.pushState("", document.title, id);
      }
    }
  }
});

var pinController = new ScrollMagic.Controller();
var containerScene = new ScrollMagic.Scene({
  triggerElement: '#story'
})
.setTween(blockTween)
// .addIndicators()
.addTo(pinController);

var scene1 = new ScrollMagic.Scene({
    triggerElement: '#greetings',
    duration: $(window).height() + 50,
    triggerHook: 0.7,
    reverse:true
})
.setPin('#greet-title')
// .addIndicators()
.addTo(pinController);

var scene2 = new ScrollMagic.Scene({
    triggerElement: '#story',
    duration: 280
})
.setPin('#greet-title')
.addTo(pinController);

var blockTween = new TweenMax.to(".s", 5, {
    x:7,
    y:-3,
    rotation:90,
    delay:5,
    scale:0.9,
    ease:Power4.easeOut
});

TweenMax.from(".w", 3, {
    x:-102,
    y:17,
    scale:1,
    delay:5,
    ease:Power4.easeOut
});

TweenMax.to(".w", 3, {
  x:8,
  y:1,
  scale:1,
  delay:5,
  ease:Power4.easeOut
})