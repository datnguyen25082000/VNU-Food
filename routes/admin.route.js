const express = require('express');
const categoryModel = require('../models/admin.model');

const router = express.Router();

router.get('/', async function (req, res) {
  const rows = await categoryModel.all();
  res.render('vwAdmin/index', {
    categories: rows,
    empty: rows.length === 0,
    layout: 'mainAdmin' 
  });
})

module.exports = router;