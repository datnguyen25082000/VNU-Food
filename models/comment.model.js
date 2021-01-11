const db = require('../utils/db');

const TBL_COMMENTS = 'comments';

module.exports = {
  all() {
    return db.load(`select * from ${TBL_COMMENTS}`);
  },

  

  add(entity) {
    return db.add(entity, TBL_COMMENTS)
  },

  del(entity) {
    const condition = { userUsername: entity.userUsername };
    return db.del(condition, TBL_COMMENTS);
  },

  async single(commentPost) {
    const rows = await db.load(`select * from ${TBL_COMMENTS} where commentPost = '${commentPost}' `);
    if (rows.length === 0)
      return null;

    return rows;
  },

  patch(entity) {
    const condition = { userUsername: entity.userUsername };
    delete entity.username;
    return db.patch(entity, condition, TBL_COMMENTS);
  }
};
