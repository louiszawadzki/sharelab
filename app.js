var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var mkdirp = require('mkdirp');
var fs = require('fs');
var exec = require('exec');

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
  var pullShell = fs.createReadStream("./pull.sh");
  var scriptPath = "../sharelab_reps/" + gitURI.replace("/", "-") + "/pull.sh";
  var repoShell = fs.createWriteStream(scriptPath);
  pullShell.pipe(repoShell);
  pullShell.on('end', function(){
    exec([scriptPath, scriptPath, URI, branch], function(err, out, code) {
      if (err instanceof Error)
        throw err;
      process.stderr.write(err);
      process.stdout.write(out);
      process.exit(code);
    });
  });
  return true;
};

exports.executeScripts = function(files, path){
  console.log("executeScripts");
  // execute scripts one after the other
  // list all .mat/.psd files
  // keep matlab workspace active ?
  // Error Handling
};
