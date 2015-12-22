var express = require('express');
var app = express();
var server = require('http').createServer(app);


app.use('/static', express.static('public'));
server.listen(3030);
//app.use(express.bodyParser());

app.get('/', function(req,res) {
  res.sendFile("index.html", { root: __dirname + "/public" });
});


app.post('/pullGitRep', function(req,res) {
  console.log(req);
  /*var gitURI = req.body.gitURI;
  var gitType = req.body.gitType;
  pullGitRep(gitURI, gitType, "master", "/path/to/matlab/dir");*/
});

app.post('/executeScripts', function(req,res) {
  console.log(req);
  /*var files = req.body.files;
  executeScripts(files, "/path/to/matlab/dir");*/
});

app.post('download', function(req,res) {
  /* var files = req.body.files;
  for (var f=0; f<files.length; f++){
    res.sendFile(files[f], { root: "/path/to/matlab/dir"});
  };*/
});

var pullGitRep = function(URI, type, branch, path){
  // TODO: pull git repo on specified branch at path
  // Handle password/username for HTTPS ?
};

var executeScripts = function(files, path){
  // execute scripts one after the other
  // list all .mat/.psd files
  // keep matlab workspace active ?
  // Error Handling
};
