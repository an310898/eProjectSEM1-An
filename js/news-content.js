
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// console.log(queryString)
const titleUrl = urlParams.get('id')
// console.log(titleUrl);

// topMainNews
    const main = new Request('./js/json/newsContent.json');
    fetch(main)
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
// SpaceFlight
    fetch('./js/json/space-flight.json')
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
    fetch('./js/json/solar-system.json')
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
    fetch('./js/json/galaxies.json')
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
    fetch('./js/json/bigbang.json')
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
    fetch('./js/json/black-hole.json')
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
    fetch('./js/json/exoplanet.json')
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
    fetch('./js/json/carousel.json')
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