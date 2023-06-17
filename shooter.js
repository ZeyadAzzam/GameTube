
const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '897f6a1e36mshe89c6c58a5356c3p13ab60jsneefc0aff6597',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
async function fetchShooter() {
    try {
      const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=Shooter', options);
      const data = await response.json();
     
      data.forEach(game => {
        const Shooter = `
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
        
        document.querySelector('.Shooter-list').insertAdjacentHTML("beforeend", Shooter);
      });
    } catch (error) {
      console.error('Error fetching Shooter free games:', error);
    }
  }
  
  fetchShooter();


  