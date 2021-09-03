// hotNews

fetch('./js/json/hotNews.json')
.then(respond => respond.json())
.then(data =>{
    const news = data.map(article=>{
        return `
        <a href="newsContent.html?id=${article.title}">
        <div class="thumb-nail">
        <img src="${article.img}" alt="">
        </div>
        <div class="body">
          <h2 class="title">
            ${article.title}
          </h2>
          <p>${article.summary}</p>
          <small class="text-muted">${article.time}</small>
        </div>
      </a>
        `
    }).join("")
    // console.log(news)
    document.querySelector(".side-news div").innerHTML = news
})

//  mainHotNews

fetch('./js/json/mainHot.json')
.then(respond => respond.json())
.then(data =>{
    // console.log(data)
    
   
   const news = data.map(article=>{
        return `
    
        <a href="newsContent.html?id=${article.title}" >
            <div>
                <img src="${article.img}}" alt="">
            </div>
          <div class="main-body">
            <h2 class="main-title">
              ${article.title}
            </h2>
            <div class="main-content">
                <p>${article.summary}</p>
                
            </div>
            <div class="main-info">
              <small class="text-muted">${article.time}</small>
            </div>
          </div>
        </a>
    
        `
    }).join("")
    // console.log(news)
       
      

    

    document.querySelector(".main-news").innerHTML=news
    
})

// solarSystem

const solar = new Request('./js/json/solar-system.json');

fetch(solar)
    .then(respond => respond.json())
  
    .then(data =>{
       
        // console.log(data)
        const news = data
        .map(article=>{
            return `
                <a href="newsContent.html?id=${article.title}">
                <div class="thumb-nail">
                    <img src="${article.img}" alt="">
                </div>
                <div class="body">
                    <h2 class="title">${article.title}</h2>
                    <small class="text-muted">${article.time}</small>

                    <p>${article.summary}</p>
                </div>
                </a>
            `
        });
        // console.log(html);
        document.querySelector('#solar-system').innerHTML = news;

    })

// spaceFlight
    fetch('./js/json/space-flight.json')
    .then(response => response.json())
    .then(data => {
      
        const news = data
        
        .map(article => {
            return `
              <a href="newsContent.html?id=${article.title}">
              <div class="thumb-nail">
                  <img src="${article.img}" alt="">
              </div>
              <div class="body">
                  <h2 class="title">${article.title}</h2>
                  <small class="text-muted">${article.time}</small>

                  <p>${article.summary}</p>
              </div>
              </a>
            `
        })
        .join("");
      document.querySelector("#space-flight").innerHTML = news;
  
    })
// galaxy
fetch('./js/json/galaxies.json')
.then(response => response.json())
.then(data => {
 
    const news = data
    
    .map(article => {
        return `
          <a href="newsContent.html?id=${article.title}">
          <div class="thumb-nail">
              <img src="${article.img}" alt="">
          </div>
          <div class="body">
              <h2 class="title">${article.title}</h2>
              <small class="text-muted">${article.time}</small>

              <p>${article.summary}</p>
          </div>
          </a>
        `
    })
    .join("");
  document.querySelector("#galaxies").innerHTML = news;

})
// bigBang
fetch('./js/json/bigbang.json')
.then(response => response.json())
.then(data => {
 
    const news = data
    
    .map(article => {
        return `
          <a href="newsContent.html?id=${article.title}">
          <div class="thumb-nail">
              <img src="${article.img}" alt="">
          </div>
          <div class="body">
              <h2 class="title">${article.title}</h2>
              <small class="text-muted">${article.time}</small>

              <p>${article.summary}</p>
          </div>
          </a>
        `
    })
    .join("");
  document.querySelector("#bigbang-theory").innerHTML = news;

})
// blackHole
fetch('./js/json/black-hole.json')
.then(response => response.json())
.then(data => {
 
    const news = data
    
    .map(article => {
        return `
          <a href="newsContent.html?id=${article.title}">
          <div class="thumb-nail">
              <img src="${article.img}" alt="">
          </div>
          <div class="body">
              <h2 class="title">${article.title}</h2>
              <small class="text-muted">${article.time}</small>

              <p>${article.summary}</p>
          </div>
          </a>
        `
    })
    .join("");
  document.querySelector("#black-holes").innerHTML = news;

})
// exoplanet
fetch('./js/json/exoplanet.json')
.then(response => response.json())
.then(data => {
 
    const news = data
    
    .map(article => {
        return `
          <a href="newsContent.html?id=${article.title}">
          <div class="thumb-nail">
              <img src="${article.img}" alt="">
          </div>
          <div class="body">
              <h2 class="title">${article.title}</h2>
              <small class="text-muted">${article.time}</small>

              <p>${article.summary}</p>
          </div>
          </a>
        `
    })
    .join("");
  document.querySelector("#exoplanets").innerHTML = news;

})
