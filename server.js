
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all('*', (req, res) => {
    return handle(req, res);
  })

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) { console.log(err); }
    console.log(`> Ready on port ${PORT}`)
  })
})
