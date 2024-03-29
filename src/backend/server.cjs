const express = require("express");
const pgPromise = require("pg-promise");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const pgp = pgPromise();
const db = pgp("postgres://postgres:postgres@localhost:5432/nebulaDB");

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

app.use(cors());
app.use(express.json());

app.post("/api/register", async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    await db.none(
      "INSERT INTO users (full_name, email, password) VALUES ($1, $2, $3)",
      [fullName, email, password]
    );
    res.json({ success: true, message: "Utente registrato con successo" });
  } catch (error) {
    console.error("Errore durante la registrazione:", error);
    res
      .status(500)
      .json({ success: false, message: "Errore durante la registrazione" });
  }
});

// app.post("/api/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await db.oneOrNone(
//       "SELECT * FROM users WHERE email = $1 AND password = $2",
//       [email, password]
//     );
//     if (user) {
//       res.json({ success: true, message: "Login successful" });
//     } else {
//       res
//         .status(401)
//         .json({ success: false, message: "Invalid email or password" });
//     }
//   } catch (error) {
//     console.error("Error executing query", error);
//     res.status(500).json({ success: false, message: "An error occurred" });
//   }
// });

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Controlla se l'utente è presente nel database
    const user = await db.oneOrNone("SELECT * FROM users WHERE email = $1", [email]);
    if (user) {
      // Se l'utente esiste, controlla la password
      if (user.password === password) {
        res.json({ success: true, message: "Login successful" });
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
