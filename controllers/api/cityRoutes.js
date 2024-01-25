const router = require('express').Router();
const { City, User } = require('../../models');

// The `/api/city` endpoint - GET all city
router.get('/', async (req, res) => {
    try {
        const cityData = await City.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        res.status(200).json(cityData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// The `/api/city/:id` endpoint - GET city by id
router.get('/:id', async (req, res) => {
    try {
        const cityData = await City.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        if (!cityData) {
            res.status(404).json({ message: 'No city found with this id!' });
            return;
        }
        res.status(200).json(cityData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;