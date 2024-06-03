const express = require('express')
const router = express.Router();
const {pages, postBlog, home} = require('../controller/webController')

router.get(['/', '/register'], pages);
router.get('/api/home', home)
router.post('/register', postBlog);
module.exports = router;