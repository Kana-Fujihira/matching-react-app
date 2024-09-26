// Import access to database tables
const tables = require("../../database/tables");

const login = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided email
    const user = await tables.user.readByemailWithPassword(req.body.email);
    if (user.email === req.body.email && user.password === req.body.password) {
      delete user.password;
      delete user.id;

      res
        .json({
          user,
        })
        .status(200);
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};
// La fonction de déconnexion du code est conçue pour effacer le jeton d'authentification stocké dans les cookies du client, puis pour envoyer un code d'état HTTP de 200, indiquant que l'opération a réussi.
// const logout = (req, res) => {
//   res.clearCookie("access_token").sendStatus(200);
// };

module.exports = {
  login,
  // logout,
};
