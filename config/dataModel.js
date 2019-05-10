const db = require('../database/dbConfig');

module.exports = function(tbl) {
  return {
    register,
    get,
    post,
  }

  async function register(creds) {
    const [id] = await post(creds);
    const result = await get({id});
    console.log(result)
    return result;
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
