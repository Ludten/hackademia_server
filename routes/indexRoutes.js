const { authMiddleware } = require('../middleware/authmiddleware');

const router = require('express').Router();

router.use('/auth', require('./authRoutes'));

router.use('/students', authMiddleware, require('./studentRoutes'));

module.exports = router;
