var expect = require("chai").expect;
var app = require("../app.js");

describe("sharelab app", function(){
  describe("pull git repo", function(){
    it("pulls through SSH when authorized", function(){
      expect(app.pullGitRep("oto", "HTTPS", "master", "/")).to.equal(true);
    });
    it("sends error when problem", function(){
      return false;
    });
  });
});
