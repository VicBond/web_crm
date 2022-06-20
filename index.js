const express = require('express');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Working on port ' + port
  })
})

app.listen(port, () => console.log('Server has been started'))