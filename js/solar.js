const solar = new Request('./js/json/solar.json');
// Kiem lai file json do vao solar

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
                    <p>${article.summary}</p>
                </div>
                </a>
            `
        });
        // console.log(html);
        document.querySelector('#solar-system').innerHTML = news;

    })
    
