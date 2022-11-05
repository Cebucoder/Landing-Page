const tl = gsap.timeline({defaults: {duration:0.75}})

tl.fromTo('.yoga', {x: -100, opacity: 0, duration: 1}, {x: 0, opacity: 1})
tl.fromTo('.center-pic', {x: 100,opacity: 0, duration: 1}, {x: 0,opacity: 1},'<')