const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const pgPromise = require("pg-promise");
const app = express();
const port = 5000;

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/nebulaDB");

const setupDb = async () => {
  await db.none(`
          CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            full_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
          )
        `);
};
setupDb();

// Configura il pool di connessioni al database
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "nebulaDB",
  password: "postgres",
  port: 5432,
});

app.use(cors());
app.use(express.json());

// Gestisci la richiesta di login

app.post("/api/register", async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    const query =
      "INSERT INTO users (full_name, email, password) VALUES ($1, $2, $3)";
    const values = [fullName, email, password];
    const result = await pool.query(query, values);
    console.log(result);
    res.json({ success: true, message: "Utente registrato con successo" });
  } catch (error) {
    console.error("Errore durante la registrazione:", error);
    res
      .status(500)
      .json({ success: false, message: "Errore durante la registrazione" });
  }
});
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const client = await pool.connect();
    const result = await client.query(
      "SELECT * FROM users WHERE email = $1 AND password = $2",
      [email, password]
    );
    client.release();

    if (result.rows.length > 0) {
      res.json({ success: true, message: "Login successful" });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ success: false, message: "An error occurred" });
  }
});

// app.get("/api/user", async (req, res) => {
//   const { email } = req.query;

//   try {
//     const client = await pool.connect();
//     const result = await client.query(
//       "SELECT * FROM users WHERE email = $1",
//       [email]
//     );
//     console.log(result);

//     client.release();

//     if (result.rows.length > 0) {
//       const userData = result.rows[0];
//       res.json({ success: true, user: userData });
//     } else {
//       res.status(404).json({ success: false, message: "User not found" });
//     }
//   } catch (error) {
//     console.error("Error executing query", error);
//     res.status(500).json({ success: false, message: "An error occurred" });
//   }
// });

app.get("/api/user", async (req, res) => {
  const { email } = req.query;

  try {
    const client = await pool.connect();
    const result = await client.query(
      "SELECT full_name, email FROM users WHERE email = $1",
      [email]
    );
    client.release();

    if (result.rows.length > 0) {
      const userData = result.rows[0];
      res.json({ success: true, user: userData });
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ success: false, message: "An error occurred" });
  }
});


// ///////////////////////////////////////////////////////////
app.post("/api/deleteAllUsers", async (req, res) => {
  try {
    const result = await pool.query("DELETE FROM users");
    console.log(result);
    res.json({ success: true, message: "Tutti gli utenti sono stati eliminati" });
  } catch (error) {
    console.error("Errore durante l'eliminazione degli utenti:", error);
    res.status(500).json({ success: false, message: "Errore durante l'eliminazione degli utenti" });
  }
});

app.get("/api/getAllUsers", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    console.log(result);
    res.json({ success: true, users: result.rows });
  } catch (error) {
    console.error("Errore durante il recupero degli utenti:", error);
    res.status(500).json({ success: false, message: "Errore durante il recupero degli utenti" });
  }
});

// ///////////////////////////////////////////////////////////

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
