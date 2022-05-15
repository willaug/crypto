const { createCipheriv, createDecipheriv } = require('crypto');

exports.symmetricEncrypt = (payload) => {
  const cipher = createCipheriv('aes-256-cbc', process.env.AES_KEY, process.env.AES_IV);

  let result = cipher.update(payload, 'utf8', 'base64');
  result += cipher.final('base64');

  return {
    payload,
    result,
  }
}

exports.symmetricDecrypt = (payload) => {
  const decipher = createDecipheriv('aes-256-cbc', process.env.AES_KEY, process.env.AES_IV);

  let result = decipher.update(payload, 'base64', 'utf8');
  result += decipher.final('utf8');

  return {
    payload,
    result,
  }
}
