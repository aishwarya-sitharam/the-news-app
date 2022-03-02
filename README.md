# the-news-app

package.json: lists all the necessary dependencies
- adding "node-sass ./scss/custom.scss ./public/css/custom.css | node app.js" to "start" will make sure the custom imported bootstrap files are up-to-date before starting the server
- node-sass is used for converting the custom.scss to custom.css file 
- jest used for testing

app.js: the index file

news.js: calls API to display articles by country and also to display articles as per search by user

news.ejs: display with ejs

news.test.js: with jest, testing:
- response of an API call
- API call without API key
- API call without search/empty search

style.css and custom.css: styling 
