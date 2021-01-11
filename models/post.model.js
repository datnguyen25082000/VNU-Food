const db = require('../utils/db');

const TBL_POSTS = 'posts';

module.exports = {
  all() {
    return db.load(`select * from ${TBL_POSTS}`);
  },

  allSearch(data) {
    return db.load(`select * from ${TBL_POSTS} where match(postDes) AGAINST('${data}')`);
  },

  add(entity) {
    return db.add(entity, TBL_POSTS)
  },

  del(entity) {
    const condition = { postID: entity.postID };
    return db.del(condition, TBL_POSTS);
  },

  maxIndex() {
    const rows = db.load(`select MAX(postID) as max from ${TBL_POSTS}`);
    if (rows.length === 0)
      return null;

    return rows;
  },

  async single(id) {
    const rows = await db.load(`select * from ${TBL_POSTS} where postID = '${id}' `);
    if (rows.length === 0)
      return null;

    return rows[0];
  },

  patch(entity) {
    const condition = { postID: entity.postID };
    delete entity.username;
    return db.patch(entity, condition, TBL_POSTS);
  }
};
