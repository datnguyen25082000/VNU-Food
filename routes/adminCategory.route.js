const express = require('express');
const categoryModel = require('../models/category.model');

const router = express.Router();

router.get('/', async function (req, res) {
  const rows = await categoryModel.all();
  res.render('vwCategories/index', {
    categories: rows,
    empty: rows.length === 0, 
  });
})

router.get('/:id', async function (req, res) {
  const id = req.params.id;
  const category = await categoryModel.single(id);
  if (category === null) {
    return res.redirect('/admin/categories');
  }

  res.render('vwCategories/edit', {
    category
  });
})

router.get('/add', function (req, res) {
  res.render('vwCategories/add');
})

router.post('/add', async function (req, res) {
  const ret = await categoryModel.add(req.body);
  res.render('vwCategories/add');
})

router.post('/del', async function (req, res) {
  const ret = await categoryModel.del(req.body);
  res.redirect('/admin/categories');
})

router.post('/patch', async function (req, res) {
  const ret = await categoryModel.patch(req.body);
  res.redirect('/admin/categories');
})

module.exports = router;