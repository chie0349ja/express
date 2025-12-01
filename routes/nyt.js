var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', function(req, res) {
  request('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=xxx', function(error, response, body) {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);
      const top3 = data.results
        ? data.results.slice(0, 3).map(article => ({
            title: article.title,
            abstract: article.abstract,
            url: article.url,
            published_date: article.published_date,
            byline: article.byline
          }))
        : [];
      res.json(top3);
    } else {
      res.status(500).json({ error: 'Failed to fetch articles' });
    }
  });
});

module.exports = router;