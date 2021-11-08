#! /usr/bin/env node

const { program } = require('commander');
const encrypt = require('./commands/encrypt');
const decrypt = require('./commands/decrypt');

program
    .command('encrypt <cryptoKey> <clearText>')
    .description('Encrypts a string of text using the supplied crypto key')
    .action(encrypt);

    program
    .command('decrypt <cryptoKey> <encryptedText>')
    .description('Decrypts a string of text using the supplied crypto key')
    .action(decrypt);

 program.parse(); 
