// CUSTOM JAVASCRIPT STARTS HERE

console.log('CT Boilerplate Loaded');


      $(function(){

        //instantiate a TimelineLite
        var tl = new TimelineMax();
        // tl.to('#phone', 1.5, {top: 168, scale: 1, autoAlpha: 1, ease:Power3.easeOut}, 0.25)
        tl.to('#hero-content', 1.5, {top: -20, autoAlpha: 1, ease:Power2.easeOut}, 0.75)
        tl.to('#topbar', 0.4, {top: 0, autoAlpha: 1, ease:Power2.easeOut}, 0.5)
        tl.to('.capabilities', 0.5, {maxHeight: '100%', ease:Power4.easeIn}, 0.5)

        tl.to('.capabilities .col-third', 0.8, {autoAlpha: 1, ease:Power4.easeOut}, 1)

      });