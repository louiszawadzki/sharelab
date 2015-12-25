var expect = require("chai").expect;
var git = require("../git.js");
var request = require("request");

describe("sharelab app", function(){
  var gitURI = "git@github.com:jordanabderrachid/be-ec-3.git";
  var repoPath = "../sharelab_reps/" + gitURI.replace("/", "-");
  describe("pull git repo", function(){
    it("pulls through SSH when authorized", function(){
      expect(git.pullGitRep(gitURI, "SSH", "master")).to.equal(true);
    });
    it("sends error when problem", function(){
      return false;
    });
    it("lists files in directory",function(){
      git.listMFiles(repoPath, function(list) {
        expect(list).to.equal('index.tex');
      });
    });
  });

  describe("sharlab API", function(){
    var gitURI = "git@github.com:jordanabderrachid/be-ec-3.git";
    var url = "http://localhost:3030/pullGitRep?gitURI=" + gitURI + "&gitType=SSH";
    it("sends list of .m files after pull", function(done){
      request(url, function(error, response, body) {
        expect(body.replace(/\"/gm,'').replace(/\\n/, '')).to.equal("index.tex");
        done();
      });
    });
    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
});
