const db = require('../utils/db');

const TBL_MYDINNER = 'mydiners';

module.exports = {
  all() {
    return db.load(`select mydinerPost from ${TBL_MYDINNER}`);
  },

  add(entity) {
    return db.add(entity, TBL_MYDINNER)
  },

  del(entity) {
    const condition = { mydinerPost: entity.mydinerPost };
    const condition1 = { mydinerUser: entity.mydinerUser };
    return db.deldinner(condition, condition1, TBL_MYDINNER);
  },

  async single(userName, postid) {
    const rows = await db.load(`select * from ${TBL_MYDINNER} where mydinerUser = '${userName}' and mydinerPost = '${postid}'`);
    if (rows.length === 0)
      return null;

    return rows[0];
  },

  patch(entity) {
    const condition = { userUsername: entity.userUsername };
    delete entity.username;
    return db.patch(entity, condition, TBL_MYDINNER);
  }
};