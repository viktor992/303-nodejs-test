const express = require('express');

const router = express.Router();
router.get('/', (req, res) => {
  res.send({
    message: 'Please go to: /contents',
  });
});
module.exports = router;
