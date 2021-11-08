const conf = new (require("conf"))();
const chalk = require("chalk");
const crypto = require("crypto");

function encrypt(cryptoKey, clearText) {
  key = crypto.scryptSync(cryptoKey, "salt", 24);
  const algorithm = "aes-192-cbc";
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const encrypted = cipher.update(clearText, "utf8", "hex");

  const encryptedText = [encrypted + cipher.final("hex"), Buffer.from(iv).toString("hex")].join("|");

  console.log(chalk.green.bold("Encrypting: \t") + chalk.black.bold(chalk.bgGreen(clearText)));
  console.log(chalk.yellow.bold("Encrypted: \t") + chalk.black.bold(chalk.bgYellow(encryptedText)));
}

module.exports = encrypt;
