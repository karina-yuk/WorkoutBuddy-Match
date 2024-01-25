const router = require('express').Router();
const { Gym, User } = require('../../models');

// The `/api/gym` endpoint - GET all gym
router.get('/', async (req, res) => {
    try {
        const gymData = await Gym.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username', 'email'],
                },
            ],
        });
        res.status(200).json(gymData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// The `/api/gym/:id` endpoint - GET gym by id
router.get('/:id', async (req, res) => {
    try {
        const gymData = await Gym.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username', 'email'],
                },
            ],
        });
        if (!gymData) {
            res.status(404).json({ message: 'No gym found with this id!' });
            return;
        }
        res.status(200).json(gymData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
