// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var voters = require("../data/voters");
var candidates = require("../data/candidates");


module.exports = function(app) {


    app.get("/api/candidates", function(req, res){
        return res.json(candidates);
    });

    app.get("/api/candidates/:routeName", function(req, res) {
        var chosen = req.params.routeName;

        for (var i = 0; i < candidates.length; i++) {
            if (chosen == candidates[i].name) {
                return res.json(candidates[i]);
            }
        }

        return res.json(false);
    });

    app.post("/api/voters", function (req, res) {
        var newVoter = req.body;
        voters.push(newVoter);
        res.json(newVoter);
    });








};