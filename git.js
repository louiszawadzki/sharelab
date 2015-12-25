var child_process = require('child_process');
var mkdirp = require('mkdirp');


exports.pullGitRep = function(URI, type, branch){
  console.log("pullGitRep");
  if (branch == undefined) {
    var branch = "master";
  }
  //create directory for repositories
  mkdirp("../sharelab_reps", function(err){
     console.log("unable to create main dir" + ' error :' + err);
  });

  //execute the shell file
  var repoPath = "../sharelab_reps/" + URI.replace("/", "-");
  child_process.execFile("./pull.sh", [repoPath, URI, branch], function(err, out, code) {
    if (err instanceof Error) {
      throw err;
      process.stderr.write(err);
      console.log('er ' + err);
    }
    console.log('ou ' + out);
    process.stdout.write(out);
    //process.exit(code);
  });

  return true;
};


// for dev, testing with .tex files.
exports.listMFiles = function(path, callback) {
  var list = "";
  var ls = child_process.execFile("./list.sh", [path, "*.tex"], function(err, out, code) {
    if (err instanceof Error) {
      throw err;
      process.stderr.write(err);
      console.log('er ' + err);
    }
    console.log('ou ' + out);
    callback(out);
    process.stdout.write(out);
    //process.exit(code);
  });
}
