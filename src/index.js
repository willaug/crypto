require('dotenv').config();

const { createBcryptHash, compareBcryptHash } = require('./bcrypt-hash');
const { symmetricDecrypt, symmetricEncrypt } = require('./aes-symmetric');

async function bcrypt() {
  console.log('create:');
  console.table(await createBcryptHash('will'));

  console.log('compare:');
  console.table(await compareBcryptHash({
    hash: '$2b$10$Gi6FoZG1LflphvSSbmE1u.oqxc3r71kXh74PucmHXgMcXcnrZpE/u',
    value: 'will'
  }));
}

function symmetric() {
  console.log('encrypt:');
  console.table(symmetricEncrypt('will'));

  console.log('decrypt:');
  console.table(symmetricDecrypt('HD1tY34cT5FSmAlIrWu0KA=='));
}

// bcrypt();
// symmetric();
