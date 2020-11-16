const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/posts');
const authorization = require('../utils/authorization');

router.get('/post', authorization.isAuthenticated, postCtrl.post);

module.exports = router;