const express = require('express');
const posts_controller = require('../controllers/posts_controller');
const router = express.Router();


router.get('/posts', posts_controller.posts);


module.exports = router;