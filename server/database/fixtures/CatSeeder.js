const AbstractSeeder = require("./AbstractSeeder");
const fetch = require("node-fetch"); // Ensure node-fetch is installed
require("dotenv").config(); // Load environment variables from the .env file

class CatSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "cat", truncate: true });
  }

  // The run method - Populate the 'caat' table with fake data

  async run() {
    try {
      // Fetch 30 cat entries from The Cat API
      const apiKey = process.env.CAT_API_KEY;
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=${apiKey}`
      );
      const data = await response.json();

      // Process the data to match your table structure
      const cats = data.map((cat) => {
        const breed = cat.breeds[0] || {}; // Handle case where breed might not exist

        return {
          url: cat.url,
          breed_name: breed.name || "Unknown",
          temperament: breed.temperament || "Unknown",
          origin: breed.origin || "Unknown",
          weight_metric: breed.weight ? breed.weight.metric : null,
        };
      });

      // Insert each processed cat entry into the database
      cats.forEach((cat) => {
        this.insert(cat);
      });
    } catch (error) {
      console.error("Error fetching cat data:", error);
    }
  }
}

// Export the CatSeeder class
module.exports = CatSeeder;
