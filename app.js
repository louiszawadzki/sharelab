var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var fs = require('fs');
var git = require('./git');


app.use('/static', express.static('public'));
server.listen(3030);
app.use(bodyParser());

app.get('/', function(req,res) {
  res.sendFile("index.html", { root: __dirname + "/public" });
});


app.get('/pullGitRep', function(req,res) {
  var gitURI = req.query.gitURI;
  var gitType = req.query.gitType;
  git.pullGitRep(gitURI, gitType, "master",function(){
    var repoPath = "../sharelab_reps/" + gitURI.replace("/", "-");
    // list .m files
    git.listMFiles(repoPath, function(list){
      res.json(list);
    })
  });
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

exports.executeScripts = function(files, path){
  console.log("executeScripts");
  for (file=0; file<files.length; file++) {

    // execute scripts one after the other
    // list all .mat/.psd files
    // keep matlab workspace active ?
    // Error Handling
  }
};
