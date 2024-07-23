document.addEventListener("DOMContentLoaded", () => {
    const newsItems = document.getElementById("news-items");

    // Fetch the News data from the JSON file
    fetch('/json/news.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(news => {
                const newsItem = document.createElement("li");
                newsItem.innerHTML = `
                    <img src="${news.image}" alt="${news.title}">
                    <h3>${news.title}</h3>
                    <p>${news.description}</p>
                    <button class="read-more-btn" onclick="window.location.href='${news.link}'">Read More</button>
                `;
                newsItems.appendChild(newsItem);
            });
        })
        .catch(error => console.error('Error fetching News data:', error));
        const logo = document.querySelectorAll('.logo');
        const navitem = document.querySelectorAll('.nav-item');
        const cards = document.querySelectorAll('.news-cards')
        const h1 = document.querySelectorAll('.headline');
        const h2 = document.querySelectorAll('h2')

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
        gsap.from(cards,{
            opacity:0,
            delay:0.7,
            duration:1,
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
