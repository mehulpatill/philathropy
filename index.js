// Ensure that the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select all images with the class "img" in the features section
    const images = document.querySelectorAll('.features .img');
    const para1 = document.querySelectorAll('.features .para1');
    const para = document.querySelectorAll(' .para');
    const logo = document.querySelectorAll('.logo');
    const btn = document.querySelectorAll(' .btn-primary');
    const hero = document.querySelectorAll('#hero-text')
    const navitem = document.querySelectorAll('.nav-item')
    // const para = new SplitType('.para');
    const h = document.querySelectorAll("h3");
    const testimonial = document.querySelectorAll('.testimonial');
    const learnmore = document.querySelectorAll(".learn-more");

    
gsap.from(learnmore,{
    opacity:0,
    duration:2,
    delay: 1.9,
})

gsap.from(logo,{
    x: -500,
    opacity:0,
    duration:1,
    delay:1.5,
    ease: 'power2.out',
})


    gsap.from(navitem[0], {
        x: -500,
        opacity: 0,
        duration: 1.8,
        ease: 'power2.out'
    });
    gsap.from(navitem[1], {
        y: -500,
        delay: 1,
        opacity: 0,
        duration: 1.8,
        ease: 'power2.out'
    });
    gsap.from(navitem[2], {
        y: -500,
        opacity: 0,
        delay: 1,
        duration: 1.5,
        ease: 'power2.out'
    });
    gsap.from(navitem[3], {
        y: -500,
        opacity: 0,
        delay: 1.8,
        duration: 1.5,
        ease: 'power2.out'
    });
    gsap.from(navitem[4], {
        x: 500,
        opacity: 0,
        duration: 1.8,
        ease: 'power2.out'
    });
    

    gsap.from(btn,{
        opacity: 0,
        delay:2,
        duration: 1.8,
        ease: 'power2.out'
    });
     
    gsap.from(hero,{
        opacity: 0,
        x: -500,
        duration: 1.8,
        ease: 'power2.out'
    });

    gsap.from(para,{
        opacity: 0,
        duration: 1.8,
        delay:1.5,
        ease: 'power2.out'
    });

    gsap.from(h,{
        opacity:0,
        delay:1.6,
        duration:1,
        ease: 'power2.out'
    });

    gsap.from(images[0], {
        x: -500,
        opacity: 0,
        duration: 1.8,
        ease: 'power2.out'
    });

    gsap.from(images[1], {
        y: 500,
        opacity: 0,
        duration: 1.8,
        ease: 'power2.out'
    });

    gsap.from(images[2], {
        y: -500,
        opacity: 0,
        duration: 1.8,
        ease: 'power2.out'
    });
    gsap.from(images[3], {
        x: 500,
        opacity: 0,
        duration: 1.8,
        ease: 'power2.out'
    });
    
    gsap.from(para1[0], {
        x: -500,
        opacity: 0,
        duration: 1.8,
        ease: 'power2.out'
    });

    gsap.from(para1[1], {
        y: 500,
        opacity: 0,
        duration: 1.8,
        ease: 'power2.out'
    });

    gsap.from(para1[2], {
        y: -500,
        opacity: 0,
        duration: 1.8,
        ease: 'power2.out'
    });
    gsap.from(para1[3], {
        x: 500,
        opacity: 0,
        duration: 1.8,
        ease: 'power2.out'
    });

    gsap.from(testimonial[0], {
        x: 500,
        opacity: 0,
        duration: 1.8,
        ease: 'power2.out'
    });
    gsap.from(testimonial[1], {
        x: -500,
        opacity: 0,
        duration: 1.8,
        ease: 'power2.out'
    });
   
    
});

