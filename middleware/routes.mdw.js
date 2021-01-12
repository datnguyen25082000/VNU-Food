const authMiddleware = require('../routes/controllers/auth');

module.exports = function (app) {
    // DEFAULT
    app.use('/', require('../routes/index.route'));

    // ROUTE ĐĂNG NHẬP ĐĂNG KÍ
    app.use('/auth', require('../routes/auth.route'));
    // ROUTE THAO TÁC VỚI TỪNG TÀI KHOẢN
    app.use('/users/', require('../routes/users.route'));
    app.use('/posts/', require('../routes/posts.route'));

}