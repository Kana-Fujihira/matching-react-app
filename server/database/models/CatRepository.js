const AbstractRepository = require("./AbstractRepository");

class CatRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "cat" as configuration
    super({ table: "cat" });
  }

  // The C of CRUD - Create operation

  async create(cat) {
    // Execute the SQL INSERT query to add a new cat to the "cat" table
    const [result] = await this.database.query(
      `insert into ${this.table} (url, breed_name, origin, temperament,weight_metric) values (?, ?,?,?,?)`,
      [cat.url, cat.breed_name, cat.origin, cat.temperament, cat.weight_metric]
    );

    // Return the ID of the newly inserted cat
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific cat by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the cat
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all cats from the "cat" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of cats
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing user

  // async update(user) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an user by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = CatRepository;
