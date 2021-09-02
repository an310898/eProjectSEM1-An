
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