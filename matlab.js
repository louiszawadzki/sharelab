var child_process = require('child_process');

exports.runMFile  = function (file, repoPath, callback){
  child_process.execFile("./pull.sh", [repoPath, URI, branch], function(err, out, code) {
    if (err instanceof Error) {
      throw err;
      process.stderr.write(err);
      console.log('er ' + err);
    }
    console.log('ou ' + out);
    process.stdout.write(out);
    //process.exit(code);
    callback();
  });

}
