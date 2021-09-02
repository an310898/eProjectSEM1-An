

fetch('./js/json/mainHot.json')
.then(respond => respond.json())
.then(data =>{
    // console.log(data)
    
   
   const news = data.map(article=>{
        return `
    
        <a href="newsContent.html?id=${article.title}">
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