var express = require('express')
var parser = require('body-parser')
var app = express()
var path = require("path")
var MongoClient = require('mongodb').MongoClient
var db

app.use(parser.json())
app.use(parser.urlencoded({extended: true}))
app.use(express.static('client/build'))

app.get('/imgs', function(req, res){
  db.collection('imgs').find().toArray(function(err, results) {
    res.json(results)
  })
})

app.post('/imgs', function(req, res){
  console.log(req.body);
  db.collection('imgs').save(req.body, function(err, result) {
    res.redirect('/')
  })
})

// app.delete('/delete/:id', function(req, res){
//   db.collection(req.params.id, 1).remove({}, function(err, result){
//     res.redirect('/')
//   })
// })out of commission

app.post('/delete', function(req, res){
  db.collection('imgs').remove({}, function(err, result){
    res.redirect('/')
  })
})


MongoClient.connect('mongodb://localhost:27017/imgs', function(err, database){
  if(err){
    console.log(err)
    return
  }

  db = database

  console.log("Connect to database")

  app.listen(3000, function(){
    console.log("Listening on port 3000")
  })
})

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/build/index.html');
})
