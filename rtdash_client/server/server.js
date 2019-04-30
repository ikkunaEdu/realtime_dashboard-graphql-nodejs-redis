const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

const app_path = 'build'

//Static file declaration
app.use(express.static(path.join(__dirname, app_path)));

//production mode
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, app_path)));
  //
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname, app_path,'index.html'));
    console.log('prod');
  })
}
//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'public/index.html'));
  console.log('dev')
})

//start server
app.listen(port, (req, res) => {
  console.log( `server listening on port: ${port}`);
})