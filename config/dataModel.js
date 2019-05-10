const db = require('../database/dbConfig');

module.exports = function(tbl) {
  return {
    register,
    get,
  }

  async function register(creds) {
    const [id] = await post(creds);
    return get({id});
  }

  function get(val) {
    return val
      ? db(tbl).where(val).first()
      : db(tbl);
  }

  function post(entry) {
    return db(tbl).insert(entry);
  }
}
