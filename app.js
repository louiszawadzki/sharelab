var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');


app.use('/static', express.static('public'));
server.listen(3030);
app.use(bodyParser());

app.get('/', function(req,res) {
  res.sendFile("index.html", { root: __dirname + "/public" });
});


app.post('/pullGitRep', function(req,res) {
  //console.log(req);
  var gitURI = req.body.gitURI;
  var gitType = req.body.gitType;
  console.log(gitURI + ' :' + gitType);
  pullGitRep(gitURI, gitType, "master", "/path/to/matlab/dir");
});

app.post('/executeScripts', function(req,res) {
  //console.log(req);
  var files = req.body.files;
  console.log(files);
  executeScripts(files, "/path/to/matlab/dir");
});

app.post('download', function(req,res) {
  var files = req.body.files;
  console.log(files);
  /*for (var f=0; f<files.length; f++){
    res.sendFile(files[f], { root: "/path/to/matlab/dir"});
  };*/
});

exports.pullGitRep = function(URI, type, branch, path){
  console.log("pullGitRep");
  if (branch == undefined) {
    var branch = "master";
  }
  return true;
};

exports.executeScripts = function(files, path){
  console.log("executeScripts");
  // execute scripts one after the other
  // list all .mat/.psd files
  // keep matlab workspace active ?
  // Error Handling
};
