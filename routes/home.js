const express = require('express');

const router = express.Router();
router.get('/', (req, res) => res.type('text/html').send('<h1>303 Software NodeJS Test</h1><p>Please go to /contents</p>'));
module.exports = router;
