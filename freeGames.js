const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '897f6a1e36mshe89c6c58a5356c3p13ab60jsneefc0aff6597',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  // create the async function to fetch the API
  async function fetchFreeGames() {
    try {
      const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options);
      const data = await response.json();
      
  // for Each to the data 
      data.forEach(game => {
        //Store the data into list
           const gameItem = `
            <li> 
              <a href="${game.game_url}" class="game-url" target="_blank">
                <img src="${game.thumbnail}" class= "game-img" alt="Game Image" title= "Game Link">
              </a>
              <br>
              <div class="game-title">${game.title} </div> 
              <div class="game-genre">Type: ${game.genre} </div>
              <div class="short-description">${game.short_description}</div>
              <div class ="game-developer">Develop By: ${game.developer}</div>
              <div class="release-date">Release Date: ${game.release_date}</div>
              <div class="platform">Platform: ${game.platform}</div>
            </li>
          `; 
          // Display the data in HTML page
          document.querySelector('.free-list').insertAdjacentHTML("beforebegin",gameItem);
        
      });
      // handle the Error 
    } catch (error) {
      console.error('Error fetching free games:', error);
    }
  }
  // call the function
  fetchFreeGames();

  