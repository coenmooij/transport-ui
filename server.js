function requireHTTPS(request, response, next) {

// The 'x-forwarded-proto' check is for Heroku
  if (!request.secure && request.get('x-forwarded-proto') !== 'https') {
    return response.redirect('https://' + request.get('host') + request.url);
  }
  next();
}

const express = require('express');
const app = express();

app.use(requireHTTPS);

app.use(express.static('./dist/transport-ui'));

app.get('/*', function (request, response) {
  response.sendFile('index.html', {root: 'dist/transport-ui/'}
  );
});

app.listen(process.env.PORT || 8080);
