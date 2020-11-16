const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/posts');
const authorization = require('../utils/authorization');


router.get('/', authorization.isAuthenticated, postCtrl.index);

module.exports = router;