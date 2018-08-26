const express = require('express');
const { Content } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
  const contents = await Content.findAll();
  res.send(contents);
});

router.post('/', async (req, res) => {
  const content = await Content.create(req.body);
  res.send(content);
});

router.get('/:id', async (req, res) => {
  const content = await Content.findById(req.params.id);
  if (content) {
    res.send(content);
  }
  return res.status(404).send('The content with the given ID was not found.');
});

router.delete('/:id', async (req, res) => {
  const content = await Content.findById(req.params.id);
  if (content) {
    await content.destroy();
    res.send(content);
  }
  return res.status(404).send('The content with the given ID was not found.');
});

router.put('/:id', async (req, res) => {
  let content = await Content.findById(req.params.id);
  if (content) {
    content = await content.update(req.body);
    res.send(content);
  }
  return res.status(404).send('The content with the given ID was not found.');
});

module.exports = router;
