const express = require('express');


//set up express app
const app = express();
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
  });

//static files
app.use('/src',express.static('src'));
app.use('/bower_components',express.static('bower_components'));
app.use('/images',express.static('images'));

//listen for requests
app.listen(process.env.port||4000, function(){
  console.log('now listening for requests');
});