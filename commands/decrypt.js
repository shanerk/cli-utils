const conf = new (require("conf"))();
const chalk = require("chalk");
const crypto = require("crypto");

function decrypt(cryptoKey, encryptedText) {
  const key = crypto.scryptSync(cryptoKey, "salt", 24);
  const algorithm = "aes-192-cbc";
  const [encrypted, iv] = encryptedText.split("|");

  if (!iv) {
    console.log(chalk.red.bold('The encrypted string is invalid.'));
  }

  const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(iv, "hex"));
  const clearText = decipher.update(encrypted, "hex", "utf8") + decipher.final("utf8");

  console.log(chalk.yellow.bold("Decrypting: \t") + chalk.black.bold(chalk.bgYellow(encryptedText)));
  console.log(chalk.green.bold("Decrypted: \t") + chalk.black.bold(chalk.bgGreen(clearText)));
  
}

module.exports = decrypt;
