const DButils = require("./DButils");

async function markPlayerAsFavorite(user_id, player_id) {
  await DButils.execQuery(
    `insert into FavoritePlayers values ('${user_id}',${player_id})`
  );
}

async function removePlayerFromFavorites(user_id, playerID) {
  await DButils.execQuery(
    `DELETE   from FavoritePlayers where UserID=${user_id} and playerID=${playerID}`
  );
}

async function getFavoritePlayers(user_id) {
  const player_ids = await DButils.execQuery(
    `select playerID from FavoritePlayers where UserID='${user_id}'`
  );
  return player_ids;
}

async function markTeamAsFavorite(user_id, team_id) {
  await DButils.execQuery(
    `insert into FavoriteTeam values ('${user_id}',${team_id})`
  );
}

async function removeTeamFromFavorites(user_id, playerID) {
  await DButils.execQuery(
    `DELETE   from FavoriteTeam where UserID=${user_id} and teamID=${playerID}`
  );
}

async function getFavoriteTeams(user_id) {
  const team_ids = await DButils.execQuery(
    `select teamID from FavoriteTeam  where UserID='${user_id}'`
  );
  return team_ids;
}

async function markGameAsFavorite(user_id,game_id) {
  const game = await DButils.execQuery(
    `insert into FavoriteGames values ('${game_id}',${user_id})`
  );
}
async function removeGameFromFavorites(user_id, game_id) {
  await DButils.execQuery(
    `DELETE   from FavoriteGames where UserID=${user_id} and gameID=${game_id}`
  );
}
async function getFavoriteMatches(user_id) {
  const team_ids = await DButils.execQuery(
    `select gameID from FavoriteGames  where UserID='${user_id}'`
  );
  return team_ids;
}



exports.markPlayerAsFavorite = markPlayerAsFavorite;
exports.getFavoritePlayers = getFavoritePlayers;
exports.removePlayerFromFavorites=removePlayerFromFavorites;
exports.markTeamAsFavorite=markTeamAsFavorite;
exports.removeTeamFromFavorites=removeTeamFromFavorites;
exports.getFavoriteTeams=getFavoriteTeams;
exports.markGameAsFavorite=markGameAsFavorite;
exports.removeGameFromFavorites=removeGameFromFavorites;
exports.getFavoriteMatches=getFavoriteMatches;