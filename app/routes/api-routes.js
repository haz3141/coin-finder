// DEPENDENCIES
// ===============================================================================
const friends = require("../data/friends");

// ROUTES
// ===============================================================================
module.exports = function(app) {
  // GET FRIENDS
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // POST FRIENDS
  app.post("/api/friends", function(req, res) {
    // ADD NEW FRIEND
    const newFriend = req.body;
    friends.push(newFriend);

    // SAVE MATCHING FRIEND
    let match = {
      name  : "",
      photo : ""
    };

    // SAVE BEST SCORE
    let tempMatch = 999;

    // TRAVERSE FRIENDS ARRAY
    for (let i = 0; i < friends.length; i++) {
      // ARRAY OF SCORE DIFFERENCES
      const differenceArray = [];
      let totalDifference = 0;

      // TRAVERSE SCORES & SAVE DIFFERENCES
      for (let j = 0; j < 10; j++) {
        let difference = Math.abs(friends[i].scores[j] - newFriend.scores[j]);
        differenceArray.push(difference);
      }

      // ADD DIFFERENCES
      for (let k = 0; i < differenceArray.length; i++) {
        totalDifference += differenceArray[k];
      }

      // COMPARE DIFFERENCES & SET LOWEST MATCH
      if (totalDifference <= tempMatch) {
        match = {
          name  : friends[i].name,
          photo : friends[i].photo
        };
      }
    }

    // EXIT LOOP & RETURN MATCH
    res.send(match);
  });
};
