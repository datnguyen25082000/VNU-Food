const router = require('express').Router();
let User = require('../models/user.model');

router.get('/', async function (req, res) {
  User.find().then(users => {

    res.render('vwUsers/index', {
      listUsers: users.map(user => user.toJSON()),
      empty: users.length === 0
    });
  })
    .catch(err => res.status(400).json('Error; ' + err));
})

router.get('/add', async function (req, res) {
  res.render('vwUsers/add');
})

router.post('/add', async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const displayName = req.body.displayName;
  const email = req.body.email;
  const newUser = new User({ username, password, displayName, email });

  newUser.save();
  res.render('vwUsers/add');
})

router.get('/:id', async function (req, res) {
  const id = req.params.id;
  const duser = await User.findById(id);
  const user = duser.toJSON();
  if (user === null) {
    return res.redirect('/users');
  }

  res.render('vwUsers/edit', {
    user
  });
})


router.route('/check').post((req, res) => {
  User.find(req.body)
    .then(user => {
      res.json(user[0].username)
    })
    .catch(error => res.json({ isConnected: false }));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const email = req.body.email;
  const newUser = new User({ username, password, name, email });

  newUser.save()
    .then(() => res.json('User added'))
    .catch(err => res.json({ register: false }));
});

router.route('/:userID').put((req, res) => {
  var id = req.params.userID;

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: 'Cannot update User with id=${id}. Maybe User was not found!'
        });
      } else res.send({ message: "User was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
});

router.route('/:userID').delete((req, res) => {

  const id = req.params.userID;

  User.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: 'Cannot delete user with id=${id}. Maybe user was not found!'
        });
      } else {
        res.send({
          message: "User was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete user with id=" + id
      });
    });
});

module.exports = router;