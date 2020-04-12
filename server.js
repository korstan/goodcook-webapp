const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
app.use(function(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});
const port = process.env.PORT || 80;
app.listen(port);
