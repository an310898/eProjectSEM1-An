
// hotNews

fetch('./js/news/json/hotNews.json')
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

fetch('./js/news/json/mainHot.json')
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

fetch('./js/news/json/solar-system.json')
    .then(respond => respond.json())
  
    .then(data =>{
        // console.log(data)
        for (var i=0;i<data.length;i++){
          Object.assign(data[i],{id: i})
        }
        const news = data
        .map(article =>{
          for (var i =0;i<5;i++){
            if(article.id == i){
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
            }
          }
        }).join("")
        document.querySelector('#solar').innerHTML = news
    })

// spaceFlight
    fetch('./js/news/json/space-flight.json')
    .then(response => response.json())
    .then(data => {
      
      for (var i=0;i<data.length;i++){
        Object.assign(data[i],{id: i})
      }
      const news = data
      .map(article =>{
        for (var i =0;i<5;i++){
          if(article.id == i){
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
          }
        }
      }).join("")
      // console.log(news)
      document.querySelector('#space').innerHTML = news
  
    })
// galaxy
fetch('./js/news/json/galaxies.json')
.then(response => response.json())
.then(data => {
 
  for (var i=0;i<data.length;i++){
    Object.assign(data[i],{id: i})
  }
  const news = data
  .map(article =>{
    for (var i =0;i<5;i++){
      if(article.id == i){
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
      }
    }
  }).join("")
  document.querySelector("#gala").innerHTML = news;

})
// bigBang
fetch('./js/news/json/bigbang.json')
.then(response => response.json())
.then(data => {
 
  for (var i=0;i<data.length;i++){
    Object.assign(data[i],{id: i})
  }
  const news = data
  .map(article =>{
    for (var i =0;i<5;i++){
      if(article.id == i){
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
      }
    }
  }).join("")
  document.querySelector("#bigbang").innerHTML = news;
  
})
// blackHole
fetch('./js/news/json/black-hole.json')
.then(response => response.json())
.then(data => {
  for (var i=0;i<data.length;i++){
    Object.assign(data[i],{id: i})
  }
  const news = data
  .map(article =>{
    for (var i =0;i<5;i++){
      if(article.id == i){
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
      }
    }
  }).join("")
  document.querySelector("#black").innerHTML = news;

})
// exoplanet
fetch('./js/news/json/exoplanet.json')
.then(response => response.json())
.then(data => {
 
  for (var i=0;i<data.length;i++){
    Object.assign(data[i],{id: i})
  }
  const news = data
  .map(article =>{
    for (var i =0;i<5;i++){
      if(article.id == i){
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
      }
    }
  }).join("")
  document.querySelector("#exo").innerHTML = news;

})

// loadMore bigbang
document.querySelector("#bigbang-theory .loadMoreBtn").addEventListener("click",function loadMoreArticle(){
  var num =0;
  fetch('./js/news/json/bigbang.json')
  .then (respond => respond.json())
  .then (data => {
    for (var i=0;i<data.length;i++){
      Object.assign(data[i],{id: i})
    }
    const news = data
  .map(article =>{
    for (var i =5;i<data.length;i++){
      if(article.id == i){
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
      }
    }
  }).join("")
  
  
  document.querySelector("#bigbang-theory .more").innerHTML = news;
  document.querySelector('#bigbang-theory .loadMoreBtn').style.display= "none"
  })
})
// Loadmore Solar
document.querySelector("#solar-system .loadMoreBtn").addEventListener("click",function loadMoreArticle(){
  var num =0;
  fetch('./js/news/json/solar-system.json')
  .then (respond => respond.json())
  .then (data => {
    for (var i=0;i<data.length;i++){
      Object.assign(data[i],{id: i})
    }
    const news = data
  .map(article =>{
    for (var i =5;i<data.length;i++){
      if(article.id == i){
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
      }
    }
  }).join("")
  document.querySelector("#solar-system .more").innerHTML = news;
  document.querySelector('#solar-system .loadMoreBtn').style.display= "none"
  })
})
// loadmore blackhole
document.querySelector("#black-holes .loadMoreBtn").addEventListener("click",function loadMoreArticle(){
  var num =0;
  fetch('./js/news/json/black-hole.json')
  .then (respond => respond.json())
  .then (data => {
    for (var i=0;i<data.length;i++){
      Object.assign(data[i],{id: i})
    }
    const news = data
  .map(article =>{
    for (var i =5;i<data.length;i++){
      if(article.id == i){
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
      }
    }
  }).join("")
  document.querySelector("#black-holes .more").innerHTML = news;
  document.querySelector('#black-holes .loadMoreBtn').style.display= "none"
  })
})
// loadmore spaceflight
document.querySelector("#space-flight .loadMoreBtn").addEventListener("click",function loadMoreArticle(){
  var num =0;
  fetch('./js/news/json/space-flight.json')
  .then (respond => respond.json())
  .then (data => {
    for (var i=0;i<data.length;i++){
      Object.assign(data[i],{id: i})
    }
    const news = data
  .map(article =>{
    for (var i =5;i<data.length;i++){
      if(article.id == i){
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
      }
    }
  }).join("")
  document.querySelector("#space-flight .more").innerHTML = news;
  document.querySelector('#space-flight .loadMoreBtn').style.display= "none"
  })
})
// loadMore exo
document.querySelector("#exoplanets .loadMoreBtn").addEventListener("click",function loadMoreArticle(){
  var num =0;
  fetch('./js/news/json/exoplanet.json')
  .then (respond => respond.json())
  .then (data => {
    for (var i=0;i<data.length;i++){
      Object.assign(data[i],{id: i})
    }
    const news = data
  .map(article =>{
    for (var i =5;i<data.length;i++){
      if(article.id == i){
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
      }
    }
  }).join("")
  document.querySelector("#exoplanets .more").innerHTML = news;
  document.querySelector('#exoplanets .loadMoreBtn').style.display= "none"
  })
})
// loadMore galaxy
document.querySelector("#galaxies .loadMoreBtn").addEventListener("click",function loadMoreArticle(){
  var num =0;
  fetch('./js/news/json/galaxies.json')
  .then (respond => respond.json())
  .then (data => {
    for (var i=0;i<data.length;i++){
      Object.assign(data[i],{id: i})
    }
    const news = data
  .map(article =>{
    for (var i =5;i<data.length;i++){
      if(article.id == i){
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
      }
    }
  }).join("")
  document.querySelector("#galaxies .more").innerHTML = news;
  document.querySelector('#galaxies .loadMoreBtn').style.display= "none"
  })
})