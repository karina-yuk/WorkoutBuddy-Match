const router = require('express').Router();
const { Workout, User} = require('../../models');

// The `/api/workout` endpoint - GET all workout
router.get('/', async (req, res) => {
    try {
        const workoutData = await Workout.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        res.status(200).json(workoutData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// The `/api/workout/:id` endpoint - GET workout by id
router.get('/:id', async (req, res) => {
    try {
        const workoutData = await Workout.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        if (!workoutData) {
            res.status(404).json({ message: 'No workout found with this id!' });
            return;
        }
        res.status(200).json(workoutData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;