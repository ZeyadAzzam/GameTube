// fight games ============================================================================
const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '897f6a1e36mshe89c6c58a5356c3p13ab60jsneefc0aff6597',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
//  fight Games fetch 
async function fetchFightGames() {
    try {
      const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=Fighting', options);
      const DataFight = await response.json();
     
      DataFight.forEach(game => {
        const Fight = `
          <li> 
            <a href="${game.game_url}" class="game-url" target="_blank">
              <img src="${game.thumbnail}" class="game-img" alt="Game Image" title="Game Link">
            </a>
            <br>
            <div class="game-title">${game.title}</div> 
            <div class="game-genre">Type: ${game.genre}</div>
            <div class="short-description">${game.short_description}</div>
            <div class="game-developer">Developed By: ${game.developer}</div>
            <div class="release-date">Release Date: ${game.release_date}</div>
            <div class="platform">Platform: ${game.platform}</div>
          </li>
        `; 
        
        document.querySelector('.Fight-list').insertAdjacentHTML("beforeend", Fight);
      });
    } catch (error) {
      console.error('Error fetching Fight free games:', error);
    }
  }
  
  fetchFightGames();
  