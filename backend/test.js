const bcrypt = require("bcrypt");
const db = require("./db");

/**
 * Handler POST /users/register
 * Regista novo utilizador com hash da password
 */
function registerHandler(req, res) {
  const { name, email, password } = req.body;

  // Validação básica
  if (!name || !email || !password) {
    return res.status(400).json({
      error: "Nome, email e password são obrigatórios",
    });
  }

  // Validação de password com regex
  // Mínimo 8 caracteres, 1 maiúscula, 1 minúscula, 1 número e 1 caracter especial
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;

  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      error:
        "Password deve ter no mínimo 8 caracteres, incluindo 1 maiúscula, 1 minúscula, 1 número e 1 caracter especial (@$!%*?&.)",
    });
  }

  // 1. Verifica se email já existe
  db.query("SELECT id FROM user WHERE email = ?", [email])
    .then((results) => {
      if (results.length > 0) {
        return res.status(409).json({
          error: "Email já registado",
        });
      }

      // 2. Gera hash da password
      const saltRounds = 12;
      return bcrypt.hash(password, saltRounds).then((passwordHash) => {
        // 3. Insere novo utilizador na BD
        return db
          .query(
            "INSERT INTO user (name, email, password_hash, role_id) VALUES (?, ?, ?, 1)",
            [name, email, passwordHash]
          )
          .then((result) => {
            // 4. Retorna sucesso com dados do utilizador criado
            res.status(201).json({
              message: "Utilizador registado com sucesso",
              user: {
                id: result.insertId,
                name: name,
                email: email,
                role_id: 1,
              },
            });
          });
      });
    })
    .catch((error) => {
      console.error("Erro no registo:", error);
      res.status(500).json({
        error: "Erro interno do servidor",
      });
    });
}

/**
 * Handler POST /users/login
 * Autentica utilizador e regista log de acesso
 */
function loginHandler(req, res) {
  const { email, password } = req.body;

  // Validação básica
  if (!email || !password) {
    return res.status(400).json({
      error: "Email e password são obrigatórios",
    });
  }

  // 1. Procura utilizador por email
  db.query(
    "SELECT id, email, password_hash, name, role_id FROM user WHERE email = ?",
    [email]
  )
    .then((results) => {
      if (results.length === 0) {
        return res.status(401).json({
          error: "Credenciais inválidas",
        });
      }

      const user = results[0];

      // 2. Compara password com hash
      return bcrypt.compare(password, user.password_hash).then((isMatch) => {
        if (!isMatch) {
          return res.status(401).json({
            error: "Credenciais inválidas",
          });
        }

        // 3. Regista log de acesso
        return db
          .query(
            "INSERT INTO user_log (user_id, created_at) VALUES (?, NOW())",
            [user.id]
          )
          .then(() => {
            // 4. Retorna sucesso com dados do utilizador (sem password_hash)
            res.status(200).json({
              message: "Login bem-sucedido",
              user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role_id: user.role_id,
              },
            });
          });
      });
    })
    .catch((error) => {
      console.error("Erro no login:", error);
      res.status(500).json({
        error: "Erro interno do servidor",
      });
    });
}

module.exports = { registerHandler, loginHandler };
