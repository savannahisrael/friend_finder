// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var path = require("path");
var voters = require("../data/voters");
var candidates = require("../data/candidates");


module.exports = function(app) {


    app.get("/api/candidates", function(req, res){
        return res.json(candidates);
    });

    app.get("/api/candidates/:routeName", function(req, res) {
        var chosen = req.params.routeName;

        for (var i = 0; i < candidates.length; i++) {
            if (chosen == candidates[i].routeName) {
                return res.json(candidates[i]);
            }
        }

        return res.json(false);
    });

    app.post("/api/voters", function (req, res) {
        var userScore = req.body.scores;
        var scoresArr = [];
        var bestMatch = 0;

    for (var i = 0; i < candidates.length; i++) {
        var scoreDiff = 0;
        for (var j = 0; j < userScore.length; j++) {
            scoreDiff += (Math.abs(parseInt(candidates[i].scores[j]) - parseInt(userScore[j])))
        }
        scoresArr.push(scoreDiff);
    } 
    
    for (var i = 0; i < scoresArr.length; i++) {
        if (scoresArr[i] <= scoresArr[bestMatch]) {
            bestMatch = i;
        }
    }

    var bestCandidate = candidates[bestMatch];
    res.json(bestCandidate);
        voters.push(req.body);
        // res.status(200).send(userScore);
    });








};