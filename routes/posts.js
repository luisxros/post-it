const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');
const authorization = require('../utils/authorization');


router.get('/', authorization.isAuthenticated, postsCtrl.index);

router.get('/posts', postsCtrl.new);

router.post('/',postsCtrl.create)

router.delete('/:id', postsCtrl.delete);

router.get('/:id', postsCtrl.edit);

router.put('/:id', postsCtrl.update);

// router.get('/posts', , postsCtrl.index);


module.exports = router;