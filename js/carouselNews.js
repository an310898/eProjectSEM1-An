// var carouselNews = new Request('./js/corousel.json')

fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=8')
    .then(respond =>respond.json())
    .then(data =>{
        const carouselData = data
        .map(article=>{
            return `
                <a href="newsContent.html?id=${article.title}">
                  <div class="item">
                    <div class="carousel-thumbnail">
                    <img src="${article.imageUrl}">
                   </div>
                   <span>${article.title}</span>
                  </div>
                </a>
            `
        }).join("")
        // console.log(carouselData)
        document.querySelector(".owl-carousel").innerHTML = carouselData
    })


