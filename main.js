// Init controller
$(function() {
    var controller = new ScrollMagic.Controller();
    //     {
    //     globalSceneOptions: {
    //     duration: $('section').height(),
    //     triggerHook: .025,
    //     reverse: true
    //     }
    // }
    
    var blockTween = new TweenMax.to(".s", 5, {
        x:0,
        y:0,
        rotation:90,
        delay:1,
        scale:1,
        ease:Power4.easeOut
    });

    var containerScene = new ScrollMagic.Scene({
        triggerElement: '#story'
    })
    .setTween(blockTween)
    .addIndicators()
    .addTo(controller);

    var scene1 = new ScrollMagic.Scene({
        triggerElement: '#greetings',
        duration: $(window).height(),
        triggerHook: 0.8,
        reverse:true
    })
    .setPin('#greet-title')
    .addIndicators()
    .addTo(controller);

    var scene2 = new ScrollMagic.Scene({
        triggerElement: '#story',
        duration: 500
    })
    .setPin('#greet-title')
    .addTo(controller);
});


// TweenMax.to(".w", 5, {
//     x:0,
//     y:0,
//     scale:1,
//     delay:1,
//     ease:Power4.easeOut
// });

// TweenMax.to(".dot", 6, {
//     x:50,
//     y:0,
//     scale:0.8,
//     ease:Power4.easeOut
// });

  
  /*
  object to hold href values of links inside our nav with
  the class '.anchor-nav'
  
  scene_object = {
    '[scene-name]' : {
      '[target-scene-id]' : '[anchor-href-value]'
    }
  }
  */

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
    // skip loop if the property is from prototype
    if (!scenes.hasOwnProperty(key)) continue;
  
    var obj = scenes[key];
  
    for (var prop in obj) {
      // skip loop if the property is from prototype
      if(!obj.hasOwnProperty(prop)) continue;
  
      new ScrollMagic.Scene({ triggerElement: '#' + prop })
          .setClassToggle('#' + obj[prop], 'active')
          .addTo(controller);
    }
  }
  
  
  // Change behaviour of controller
  // to animate scroll instead of jump
  controller.scrollTo(function(target) {
  
    TweenMax.to(window, 0.5, {
      scrollTo : {
        y : target,
        autoKill : true // Allow scroll position to change outside itself
      },
      ease : Cubic.easeInOut
    });
  
  });
  
  
  //  Bind scroll to anchor links using Vanilla JavaScript
  var anchor_nav = document.querySelector('.anchor-nav');
  
  anchor_nav.addEventListener('click', function(e) {
    var target = e.target,
        id     = target.getAttribute('href');
  
    if(id !== null) {
      if(id.length > 0) {
        e.preventDefault();
        controller.scrollTo(id);
  
        if(window.history && window.history.pushState) {
          history.pushState("", document.title, id);
        }
      }
    }
  });
  

