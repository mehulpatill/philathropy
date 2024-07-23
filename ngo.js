document.addEventListener("DOMContentLoaded", () => {
    const ngoItems = document.getElementById("ngo-items");

    // Fetch the NGO data from the JSON file
    fetch('/json/ngo.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(ngo => {
                const ngoItem = document.createElement("li");
                ngoItem.innerHTML = `
                    <h3>${ngo.name}</h3>
                    <p>${ngo.description}</p>
                    <button class="read-more-btn" onclick="window.location.href='${ngo.website}'">Read More</button>
                `;
                ngoItems.appendChild(ngoItem);
            });
        })
        .catch(error => console.error('Error fetching NGO data:', error));
        const logo = document.querySelectorAll('.logo');
        const navitem = document.querySelectorAll('.nav-item');
        const cards = document.querySelectorAll('.ngo-cards')
        const h1 = document.querySelectorAll('.headline');
        const h2 = document.querySelectorAll('h2')

        
        gsap.from(cards,{
            opacity:0,
            delay:0.7,
            duration:1,
            ease: 'power2.out',
            scale: 0,
        })

        gsap.from(h1[0],{
            x:-500,
            opacity:0,
            duration:1.5,
            delay:1,
            ease: 'power2.out',
        })
        gsap.from(h1[1],{
            x:500,
            opacity:0,
            duration:1.5,
            delay:1,
            ease: 'power2.out',
        })
        
        gsap.from(h2,{
            opacity:0,
            delay:1,
            ease: 'power2.out',
            scale: 0,
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
    });
