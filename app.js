var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var mkdirp = require('mkdirp');
var fs = require('fs');
var child_process = require('child_process');

app.use('/static', express.static('public'));
server.listen(3030);
app.use(bodyParser());

app.get('/', function(req,res) {
  res.sendFile("index.html", { root: __dirname + "/public" });
});


app.post('/pullGitRep', function(req,res) {
  var gitURI = req.body.gitURI;
  var gitType = req.body.gitType;
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
  //create directory for repositories
  mkdirp("../sharelab_reps", function(err){
     console.log("unable to create main dir" + ' error :' + err);
  });

  //copying the shell file
  var pullShell = fs.createReadStream("./pull.sh");
  var repoPath = "../sharelab_reps/" + URI.replace("/", "-");
  var scriptPath = repoPath + "/pull.sh";
  var repoShell = fs.createWriteStream(scriptPath);
  pullShell.pipe(repoShell);

  //when the copy is done, the shell is executed
  pullShell.on('end', function(){
    child_process.execFile([scriptPath, repoPath, URI, branch], function(err, out, code) {
      if (err instanceof Error)
        throw err;
      process.stderr.write(err);
      console.log('ou ' + out);
      console.log('er ' + err)
      process.stdout.write(out);
      process.exit(code);
    });
  });

  return true;
};

exports.listMFiles = function(path) {
        child_process.execFile([scriptPath, URI, branch], function(err, out, code) {
      if (err instanceof Error)
        throw err;
      process.stderr.write(err);
      process.stdout.write(out);
      process.exit(code);
    });
}

exports.executeScripts = function(files, path){
  console.log("executeScripts");
  // execute scripts one after the other
  // list all .mat/.psd files
  // keep matlab workspace active ?
  // Error Handling
};
