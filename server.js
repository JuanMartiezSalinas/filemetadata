'use strict';

var express = require('express');
var cors = require('cors');
var multer= require('multer');

// require and use "multer"...
var upload = multer({ dest: 'uploads/' })
var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post("/api/fileanalyse",upload.single('upfile'),(req,res) => {
 const {originalname,size,mimetype} =req.file;
  console.log(req.file);
  res.json({
    name:originalname,
    size:size,
    type:mimetype
  })
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
