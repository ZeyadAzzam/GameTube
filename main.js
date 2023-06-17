 const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '790e135616msh78bc98c720bad91p1fde9bjsn6227394df532',
    'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com'
  }
};
//async function 
async function fetchTopNews() {
  try {
    const response = await fetch('https://videogames-news2.p.rapidapi.com/videogames_news/recent', options);
    const data = await response.json();
    
    data.forEach(News => {
      // list create contain the news
      const news = `<li> 
      <a  href="${News.link}" class ="news-link" target="_blank">
        <img src="${News.image}" alt="News Image" class= "news-img" title = "more details"></a>
        <br>
      <b class="news-title">${News.title} </b> <br>
     <div class="news-descrption"> ${News.description}</div>
    </li>`;

    // the function to display the list on HTMl page 
    document.querySelector('.news-list').insertAdjacentHTML("beforebegin",news);
    });
    
  }
  // handle any error when we fetch the API
  catch (error) {
    console.error('Error fetching top news:', error);
  }
}

// call the function fetchNews
fetchTopNews();

// Event lister to Search button and 
document.getElementById("search-form").addEventListener("submit", function() {
  const searchInput = document.getElementById("search-input").value;

  const specialCharacters = /[!@#$%]/;
  if (specialCharacters.test(searchInput)) {
    alert("Invalid input. Special characters are not allowed.");
    return;
  }
  
  // the url that contain the html file name and the Search from user
  const userUrl = "Steam.html?search=" +(searchInput);
  // Open new tab 
  window.open(userUrl, "_blank");
});

// When The user click in a contact us nav link the website go to the div that contain social media 

document.getElementById('social-links').addEventListener('click', function(event) {
event.preventDefault(); 
document.getElementById('social-media').scrollIntoView({ behavior: 'smooth' });
});