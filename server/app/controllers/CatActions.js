// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all cats from the database
    const cats = await tables.cat.readAll();

    // Respond with the cats in JSON format
    res.json(cats);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific cat from the database based on the provided ID
    const cat = await tables.cat.read(req.params.id);

    // If the cat is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the cat in JSON format
    if (cat == null) {
      res.sendStatus(404);
    } else {
      res.json(cat);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the cat data from the request body
  const cat = req.body;

  try {
    // Insert the cat into the database
    const insertId = await tables.cat.create(cat);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted cat
    res.status(201).json({ insertId });
  } catch (err) {
    console.error("Erreur dans la fonction d'ajout", err);
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  add,
};
