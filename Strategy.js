const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '897f6a1e36mshe89c6c58a5356c3p13ab60jsneefc0aff6597',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
async function fetchStrategey() {
    try {
      const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=Strategy', options);
      const data = await response.json();
     
      data.forEach(game => {
        const Strategy = `
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
        
        document.querySelector('.Strategy-list').insertAdjacentHTML("beforeend", Strategy);
      });
    } catch (error) {
      console.error('Error fetching Strategy free games:', error);
    }
  }
  
  fetchStrategey();
 