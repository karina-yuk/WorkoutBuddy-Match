const router = require('express').Router();
const cityRoutes = require('./cityRoutes');
const gymRoutes = require('./gymRoutes');
const workoutRoutes = require('./workoutRoutes');
const userRoutes = require('./userRoutes')

router.use('/city', cityRoutes);
router.use('/gym', gymRoutes);
router.use('/workout', workoutRoutes);
router.use('/user', userRoutes);

module.exports = router;
