const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');
const authorization = require('../utils/authorization');


router.get('/', postsCtrl.index);

router.get('/posts', postsCtrl.new);

router.post('/',postsCtrl.create)

router.get('/', authorization.isAuthenticated, postsCtrl.index);

module.exports = router;