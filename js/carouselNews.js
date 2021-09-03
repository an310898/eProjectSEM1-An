// var carouselNews = new Request('./js/corousel.json')

fetch('./js/json/carousel.json')
    .then(respond =>respond.json())
    .then(data =>{
        const carouselData = data
        .map(article=>{
            return `
                <a href="newsContent.html?id=${article.title}">
                  <div class="item">
                    <div class="carousel-thumbnail">
                    <img src="${article.img}">
                   </div>
                   <span>${article.title}</span>
                  </div>
                </a>
            `
        }).join("")
        // console.log(carouselData)
        document.querySelector(".owl-carousel").innerHTML = carouselData
    })


