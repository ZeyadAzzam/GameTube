const searchQuery = new URLSearchParams(window.location.search).get("search");
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '790e135616msh78bc98c720bad91p1fde9bjsn6227394df532',
    'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
  }
};
// fetch the game from the API
async function fetchGames() {
  try {
    const response = await fetch(`https://steam2.p.rapidapi.com/search/${searchQuery}/page/1`, options);
    const data = await response.json();

      // Handle the error when no games found
      
    if (data.length === 0) {
      document.getElementById('Search-text').innerHTML = '<p>No games found for your search</p>'; 
    }else {

    const numOfGames = data.length;
    const MaxNumOfGames = Math.min(numOfGames, 6);    
   // for loop to print the first 6 games from User Search    
   for (let i = 0; i < MaxNumOfGames; i++) {
    const game = data [i];

    // create list that contain all of the data from API
        const gameDetails = `<li>
        <a href="${game.url}" class="linkid" target="_blank">
          <img src="${game.imgUrl}" class="img" alt="Game Image" title="More details">
        </a>
     
        <b class ="game-title">${game.title}</b> 
        <br>
        <div class="review-summary">Review Summary: ${game.reviewSummary}</div>
      </li>`;
      // display the data on the Html page 
      document.getElementById('games-list').innerHTML += gameDetails;
   }
    }
// handle error when fetch the API
  } catch (error) {
    console.error('Error fetching games:', error);
  }
}
fetchGames();

document.getElementById("search-form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const searchInput = document.getElementById("search-input").value;
   
  const specialCharacters = /[!@#$%]/;
  if (specialCharacters.test(searchInput)) {
    alert("Invalid input. Special characters not allowed.");
    return;
  }
  window.location.href = "Steam.html?search=" + (searchInput);
});
