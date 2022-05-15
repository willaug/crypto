const { compareSync, genSaltSync, hashSync } = require('bcrypt')

exports.createBcryptHash = async (payload) => {
  const saltRounds = 10;
  const salt = await genSaltSync(saltRounds);
  const result = await hashSync(payload, salt);
  const { length: resultLength } = result;

  return {
    payload,
    result,
    salt,
    saltRounds,
    resultLength,
  }
}

exports.compareBcryptHash = async ({ hash, value }) => {
  const isEqual = await compareSync(value, hash);

  return {
    value,
    hash,
    isEqual,
  }
}
