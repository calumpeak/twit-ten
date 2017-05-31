# Twit-Ten
A simple twitter application that shows the last ten tweets made by a twitter user by navigating to http://localhost:3020/{{twitterHandle}}-tweets.
E.g. to show NASA's tweets it would be http://localhost:3020/nasa-tweets

This implementation uses Node & Express on the back end, and React & Redux on the front end.
Whilst redux is not really necessary here due to the small amount of data, it's nice to see the implementation and use of things like thunks. If redux wasn't used there would be a container higher order component that just handles the data fetching and passes down props to the component it wraps (checkout movie-db repo if you're curious).

Future Work
 - Currently no tests as I currently don't have enough time. Needs all of them
 - No 'proper' routing, it's a simple implementation and I've not inserted a home page/404 etc
 - URL metadata fetching for images etc on linked articles, twitter's api doesn't provide this as default as far as I can tell
 - It can look better, But it meets the requirements
 - More edge case and error handling

## Running 

Oblgatory for all builds

```
$ npm install
```

Replace 0's in .env file with twitter's api keys
```
TWITTER_CONSUMER_KEY=00000000
TWITTER_CONSUMER_SECRET=0000000
TWITTER_BEARER_TOKEN=000000
```

### Running Prod
```
$npm run prod
```
Navigate to http://localhost:3020/{{twitterHandle}}-tweets

### Running Dev
Requires two terminal windows

Window 1
```
$ npm run start
```

Window 2
```
$npm run dev
```

Navigate to http://localhost:8080/{{twitterHandle}}-tweets

