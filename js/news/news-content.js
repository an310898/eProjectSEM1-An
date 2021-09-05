
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// console.log(queryString)
const titleUrl = urlParams.get('id')
// console.log(titleUrl);

// topMainNews
    const main = new Request('./js/news/json/newsContent.json');
    fetch(main)
    .then(respond => respond.json())
    .then(data =>{  
        var x = data.find(x => x.title === titleUrl )
        // console.log(x)
        const news = `
                <div>
                    <h2>${x.title}</h2>
                </div>
                <small class="text-muted">${x.time}</small>

                <div>
                    <span>${x.summary}</span>
                </div>
                <div class="article-img justify-content-center">
                    <img src="${x.img}">
                </div>
                <div class="text-justify">
                <p >${x.summary}</p>
                <br><p>${x.summary} ${x.summary}</p>
                <br><p>${x.summary} </p>
                </div>
            `
        document.querySelector("#article-content").innerHTML = news
    })
// SpaceFlight
    fetch('./js/news/json/space-flight.json')
    .then(response => response.json())
    .then(data =>{
        var x = data.find(x => x.title.toString() === titleUrl )
      
        const news = `
                    <div>
                    <h2>${x.title}</h2>
                </div>
                <small class="text-muted">${x.time}</small>
                
                <div>
                    <span>${x.summary}</span>
                </div>
                <div class="article-img justify-content-center">
                    <img src="${x.img}">
                </div>
                <div class="text-justify">
                <p >${x.summary}</p>
                <br><p>${x.summary} ${x.summary}</p>
                <br><p>${x.summary} </p>
                </div>
            `
        document.querySelector("#article-content").innerHTML = news
    })

// solarSystem
    fetch('./js/news/json/solar-system.json')
    .then(respond => respond.json())
    .then(data =>{  
        var x = data.find(x => x.title.toString() === titleUrl )
        // console.log(x)
        const news = `
                <div>
                    <h2>${x.title}</h2>
                </div>
                <small class="text-muted">${x.time}</small>
                
                <div>
                    <span>${x.summary}</span>
                </div>
                <div class="article-img justify-content-center">
                    <img src="${x.img}">
                </div>
                <div class="text-justify">
                <p >${x.summary}</p>
                <br><p>${x.summary} ${x.summary}</p>
                <br><p>${x.summary} </p>
                </div>
            `
        document.querySelector("#article-content").innerHTML = news
    })
// Galaxies
    fetch('./js/news/json/galaxies.json')
    .then(respond => respond.json())
    .then(data =>{  
        var x = data.find(x => x.title.toString() === titleUrl )
        // console.log(x)
        const news = `
                <div>
                    <h2>${x.title}</h2>
                </div>
                <small class="text-muted">${x.time}</small>
                
                <div>
                    <span>${x.summary}</span>
                </div>
                <div class="article-img justify-content-center">
                    <img src="${x.img}">
                </div>
                <div class="text-justify">
                <p >${x.summary}</p>
                <br><p>${x.summary} ${x.summary}</p>
                <br><p>${x.summary} </p>
                </div>
            `
        document.querySelector("#article-content").innerHTML = news
    })
    // bigBang
    fetch('./js/news/json/bigbang.json')
    .then(respond => respond.json())
    .then(data =>{  
        var x = data.find(x => x.title.toString() === titleUrl )
        // console.log(x)
        const news = `
                <div>
                    <h2>${x.title}</h2>
                </div>
                <small class="text-muted">${x.time}</small>
                
                <div>
                    <span>${x.summary}</span>
                </div>
                <div class="article-img justify-content-center">
                    <img src="${x.img}">
                </div>
                <div class="text-justify">
                <p >${x.summary}</p>
                <br><p>${x.summary} ${x.summary}</p>
                <br><p>${x.summary} </p>
                </div>
            `
        document.querySelector("#article-content").innerHTML = news
    })
    // blackHole
    fetch('./js/news/json/black-hole.json')
    .then(respond => respond.json())
    .then(data =>{  
        var x = data.find(x => x.title.toString() === titleUrl )
        // console.log(x)
        const news = `
                <div>
                    <h2>${x.title}</h2>
                </div>
                <small class="text-muted">${x.time}</small>
                
                <div>
                    <span>${x.summary}</span>
                </div>
                <div class="article-img justify-content-center">
                    <img src="${x.img}">
                </div>
                <div class="text-justify">
                <p >${x.summary}</p>
                <br><p>${x.summary} ${x.summary}</p>
                <br><p>${x.summary} </p>
                </div>
            `
        document.querySelector("#article-content").innerHTML = news
    })
    // exoplanets
    fetch('./js/news/json/exoplanet.json')
    .then(respond => respond.json())
    .then(data =>{  
        var x = data.find(x => x.title.toString() === titleUrl )
        // console.log(x)
        const news = `
                <div>
                    <h2>${x.title}</h2>
                </div>
                <small class="text-muted">${x.time}</small>
                
                <div>
                    <span>${x.summary}</span>
                </div>
                <div class="article-img justify-content-center">
                    <img src="${x.img}">
                </div>
                <div class="text-justify">
                <p >${x.summary}</p>
                <br><p>${x.summary} ${x.summary}</p>
                <br><p>${x.summary} </p>
                </div>
            `
        document.querySelector("#article-content").innerHTML = news
    })
    // Carousel
    fetch('./js/news/json/carousel.json')
        .then(respond => respond.json())
        .then(data =>{  
            var x = data.find(x => x.title.toString() === titleUrl )
            // console.log(x)
            const news = `
                    <div>
                        <h2>${x.title}</h2>
                    </div>
                    <div>
                        <span>${x.summary}</span>
                    </div>
                    <div class="article-img justify-content-center">
                        <img src="${x.img}">
                    </div>
                    <div class="text-justify">
                    <p >${x.summary}</p>
                    <br><p>${x.summary} ${x.summary}</p>
                    <br><p>${x.summary} </p>
                    </div>
                `
            document.querySelector("#article-content").innerHTML = news
        })