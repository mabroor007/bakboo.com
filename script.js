gsap.registerPlugin(ScrollTrigger);
gsap.from('.svgsect',{
    scrollTrigger:{
        trigger:'.svgsect',
        toggleActions: 'restart reverse restart none'
    },
    x:200,
    opacity:0,
    duration:1}
);
gsap.from('.fsvgpart', {
    scrollTrigger: {
        trigger: '.fsvgpart',
        toggleActions: 'restart reverse restart none'
    },
    x: -200,
    opacity: 0,
    duration: 1
});
gsap.from('.globalsvg', {
    scrollTrigger: {
        trigger: '.globalsvg',
        toggleActions: 'restart reverse restart none'
    },
    x:200,
    opacity: 0,
    duration: 1
});
gsap.from('.map', {
    scrollTrigger: {
        trigger: '.map',
        toggleActions: 'restart reverse restart none'
    },
    y: 200,
    opacity: 0,
    duration: 1
});

let hidden = false;
let id = setInterval(function(){
    if(hidden == true){
        clearInterval(id);
    }
    document.getElementsByClassName("landingpage")[0].remove();
},2000);




