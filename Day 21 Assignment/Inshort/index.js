async function getNews(category){
    document.getElementById("news-container").innerHTML = `<h5 class="text-center">Loading News Please Wait......</h5>`
    try{
        let response = await fetch(`https://inshorts.deta.dev/news?category=${category}`);
        let response_data = await response.json();
        let news_data = response_data.data;
        document.getElementById("news-container").innerHTML =""
        news_data.forEach((news)=>{
            document.getElementById("news-container").innerHTML += `
            <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="${news.imageUrl}"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${news.title}</h5>
                <p class="card-text">
                  Short by:<small class="text-muted"
                    >${news.author} ${news.time},${news.date}</small
                  >
                </p>
                <p class="card-text">
                  ${news.content}
                </p>
                <p class="card-text">
                  <a
                    href="${news.readMoreUrl}"
                    target="_blank"
                    >Click to read more....</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
            `
        })
        
    }
    catch(e){
        console.log("Error fetching news: " + e.message);
    }
}


function getCategoryNews(){
    let data= document.getElementById("category").value;
    console.log(data);
    getNews(data);
}
getNews("all")