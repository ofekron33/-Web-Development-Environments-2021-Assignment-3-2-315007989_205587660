var express = require("express");
var router = express.Router();
const players_utils = require("./utils/players_utils");



router.get("/playerFullDetails/:playerid", async (req, res, next) => {
    try {
      const player_details = await players_utils.getPlayerDetail(req.params.playerid);
      res.send(player_details);
    } catch (error) {
      next(error);  
    }
  });
  
router.get("/SearchPlayerByName/:playername", async (req, res, next) => {
    try {
      const player_details = await players_utils.SearchPlayerByName(req.params.playername);
      res.send(player_details);
    } catch (error) {
      next(error);  
    }
  });
  

module.exports = router;