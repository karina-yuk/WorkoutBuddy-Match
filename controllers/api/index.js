const router = require('express').Router();
const cityRoutes = require('./cityRoutes');
const gymRoutes = require('./gymRoutes');
const workoutRoutes = require('./workoutRoutes');
const userRoutes = require('./userRoutes')
//const profilepicRoutes = require('./profilepicRoutes')

router.use('/city', cityRoutes);
router.use('/gym', gymRoutes);
router.use('/workout', workoutRoutes);
router.use('/user', userRoutes);
//router.use('/profilepic', profilepicRoutes);

module.exports = router;
