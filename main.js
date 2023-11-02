// async function to fetch game news
async function fetchGameNews() {
  try {
    const apiKey = "02f2dac72abf49419c6d196a9ebef749";
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=video%20games&apiKey=${apiKey}`
    );
    const data = await response.json();

    const newsList = document.querySelector(".news-list");

    data.articles.forEach((article) => {
      const news = `
        <li>
          <a href="${article.url}" class="news-link" target="_blank">
            <img src="${article.urlToImage}" alt="News Image" class="news-img" title="more details">
          </a>
          <br>
          <b class="news-title">${article.title}</b>
          <br>
          <div class="news-description">${article.description}</div>
        </li>
      `;
      newsList.innerHTML += news;
    });
  } catch (error) {
    console.error("Error fetching game news:", error);
  }
}

// Call the function to fetch game news
fetchGameNews();

// Event lister to Search button and
document.getElementById("search-form").addEventListener("submit", function () {
  const searchInput = document.getElementById("search-input").value;

  const specialCharacters = /[!@#$%]/;
  if (specialCharacters.test(searchInput)) {
    alert("Invalid input. Special characters are not allowed.");
    return;
  }

  // the url that contain the html file name and the Search from user
  const userUrl = "Steam.html?search=" + searchInput;
  // Open new tab
  window.open(userUrl, "_blank");
});

// When The user click in a contact us nav link the website go to the div that contain social media

document
  .getElementById("social-links")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document
      .getElementById("social-media")
      .scrollIntoView({ behavior: "smooth" });
  });
