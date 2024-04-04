const express = require("express");
const pgPromise = require("pg-promise");
const cors = require("cors");
const app = express();
const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key';
const port = process.env.PORT || 5000;
// //////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////
const pgp = pgPromise();
const db = pgp("postgres://postgres:postgres@localhost:5432/nebulaDB");

const setupDb = async () => {
  await db.none(`
          CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            full_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            token TEXT
          )
        `);
};
setupDb();

app.use(cors());
app.use(express.json());

app.post("/api/register", async (req, res) => {
  const { full_name, email, password } = req.body;

  try {
    await db.none(
      "INSERT INTO users (full_name, email, password) VALUES ($1, $2, $3)",
      [full_name, email, password]
    );
    const token = jwt.sign({}, secretKey, { expiresIn: '1h' });

    await db.none("UPDATE users SET token = $1 WHERE email = $2", [token, email]);
    console.log("Token aggiornato nel database:", token);
    res.json({ success: true, message: "Utente registrato con successo", token, user: { full_name, email } });
    console.log(token);
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
    // Controlla se l'utente è presente nel database
    const user = await db.oneOrNone("SELECT * FROM users WHERE email = $1", [email]);
    if (user) {
      // Se l'utente esiste, controlla la password
      if (user.password === password) {

        const token = jwt.sign({}, secretKey, { expiresIn: '1h' });
        res.json({ success: true, message: "Login successful", token, user: { email, full_name: user.full_name } });
        await db.none("UPDATE users SET token = $1 WHERE email = $2", [token, email]);
      } else {
        // Se la password non corrisponde, restituisci un errore di accesso
        res.status(401).json({ success: false, message: "Invalid email or password" });
      }
    } else {
      // Se l'utente non esiste, restituisci un errore di accesso
      res.status(401).json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ success: false, message: "An error occurred" });
  }
});


app.get("/api/user", async (req, res) => {
  const { email } = req.query;

  try {
    const user = await db.oneOrNone(
      "SELECT full_name, email FROM users WHERE email = $1",
      [email]
    );
    if (user) {
      res.json({ success: true, user });
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ success: false, message: "An error occurred" });
  }
});

app.post("/api/logout", async (req, res) => {
  const { token } = req.body;

  try {
    // Effettua l'operazione di logout nel database
    await db.none("UPDATE users SET token = NULL WHERE token = $1", [token]);

    // Invia una risposta di successo
    res.json({ success: true, message: "Logout successful" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ success: false, message: "An error occurred during logout" });
  }
});





app.post("/api/deleteAllUsers", async (req, res) => {
  try {
    await db.none("DELETE FROM users");
    res.json({
      success: true,
      message: "Tutti gli utenti sono stati eliminati",
    });
  } catch (error) {
    console.error("Errore durante l'eliminazione degli utenti:", error);
    res.status(500).json({
      success: false,
      message: "Errore durante l'eliminazione degli utenti",
    });
  }
});

app.get("/api/getAllUsers", async (req, res) => {
  try {
    const users = await db.any("SELECT * FROM users");
    res.json({ success: true, users });
  } catch (error) {
    console.error("Errore durante il recupero degli utenti:", error);
    res.status(500).json({
      success: false,
      message: "Errore durante il recupero degli utenti",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
