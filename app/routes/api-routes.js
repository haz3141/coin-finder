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
    let match = {};
    let name = "None";
    let photo = "None";
    let newFriend = req.body;
    friends.push(newFriend);

    // SAVE BEST SCORE
    let tempMatch = 999;

    // TRAVERSE FRIENDS ARRAY
    for (i = 0; i < friends.length - 1; i++) {
      // ARRAY OF SCORE DIFFERENCES
      const differenceArray = [];

      name = friends[i].name;
      photo = friends[i].photo;
      console.log(name);

      // TRAVERSE SCORES & SAVE DIFFERENCES
      for (j = 0; j < 10; j++) {
        let difference = Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriend.scores[j]));
        differenceArray.push(difference);
      }

      // ADD DIFFERENCES
      let totalDifference = 0;
      for (k = 0; k < differenceArray.length; k++) {
        totalDifference += differenceArray[k];
      }

      // COMPARE DIFFERENCES & MATCH
      if (totalDifference <= tempMatch) {
        tempMatch = totalDifference;
        console.log('MATCH');
        /// SAVE MATCHING FRIEND
        match = {
          name  : name,
          photo : photo
        };
        console.log(match);
      }
    }

    // EXIT LOOP & RETURN MATCH
    res.send(match);
  });
};
