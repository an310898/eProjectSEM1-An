fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=20')
  .then(response => response.json())
  .then(data => {
    for (var i=0;i<data.length;i++){
      Object.assign(data[i],{id: i+50})
  }
      const news = data
      
      .map(article => {
          return `
            <a href="newsContent.html?id=${article.title}">
            <div class="thumb-nail">
                <img src="${article.imageUrl}" alt="">
            </div>
            <div class="body">
                <h2 class="title">${article.title}</h2>
                <p>${article.summary}</p>
            </div>
            </a>
          `
      })
      .join("");
    document.querySelector("#space-flight").innerHTML = news;

  })
  .catch(error=>{
      console.log(error)
  })
  