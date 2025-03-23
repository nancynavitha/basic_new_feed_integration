// Sample list of trading-related articles
const newsArticles = [
    {
        title: "How to Maximize Your Trades in Volatile Markets",
        url: "https://example.com/article1"
    },
    {
        title: "Top 5 Mistakes Every Beginner Trader Should Avoid",
        url: "https://example.com/article2"
    },
    {
        title: "Understanding Technical Analysis for Better Trades",
        url: "https://example.com/article3"
    },
    {
        title: "The Impact of Global Economic Events on Trading",
        url: "https://example.com/article4"
    },
    {
        title: "How AI is Revolutionizing the Trading Landscape",
        url: "https://example.com/article5"
    }
];

// Function to get a random news article
function getRandomArticle() {
    const randomIndex = Math.floor(Math.random() * newsArticles.length);
    return newsArticles[randomIndex];
}

// Function to update the news feed
function updateNewsFeed() {
    const newsList = document.getElementById('news-list');
    newsList.innerHTML = '';  // Clear previous news articles
    
    // Add 3 random news articles
    for (let i = 0; i < 3; i++) {
        const article = getRandomArticle();
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = article.url;
        link.target = "_blank"; // Open in new tab
        link.textContent = article.title;
        listItem.appendChild(link);
        newsList.appendChild(listItem);
    }
}

// Update the news feed on page load
window.onload = function() {
    updateNewsFeed();
};

// Optional: Refresh the news feed every 30 seconds
setInterval(updateNewsFeed, 30000);
