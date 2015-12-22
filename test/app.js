var expect = require("chai").expect;
var app = require("../app.js");

describe("sharelab app", function(){
  describe("pull git repo", function(){
    it("pulls through SSH when authorized", function(){
      expect(app.pullGitRep("git@github.com:jordanabderrachid/be-ec-3.git", "SSH", "master", "../matlab_test")).to.equal(true);
    });
    it("sends error when problem", function(){
      return false;
    });
  });
});
