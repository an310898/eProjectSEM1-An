
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// console.log(queryString)
const titleUrl = urlParams.get('id')
// console.log(titleUrl);
    const solar = new Request('./js/json/newsContent.json');
    fetch(solar)
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

    fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=20')
    .then(response => response.json())
    .then(data =>{
        var x = data.find(x => x.title.toString() === titleUrl )
      
        const news = `
                <div>
                    <h2>${x.title}</h2>
                </div>
                <div>
                    <span>${x.summary}</span>
                </div>
                <div class="article-img justify-content-center">
                    <img src="${x.imageUrl}">
                </div>
                <div class="text-justify">
                    <p >${x.summary} ${x.summary} ${x.summary}</p>
                    <br><p>${x.summary}  </p>
                    <br><p>${x.summary} ${x.summary}</p>

                </div>
            `
        document.querySelector("#article-content").innerHTML = news
    })


