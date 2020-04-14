const express = require('express');
const serveStatic = require('serve-static');
const fallback = require('express-history-api-fallback');
const path = require('path');
const app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
app.use(fallback(__dirname + '/dist/index.html'));
const port = process.env.PORT || 8002;
app.listen(port);
