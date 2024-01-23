const router = require('express').Router();
const { User, ProfilePic } = require('../../models');

// The `/api/profilepic` endpoint - GET all profilepic
router.get('/', async (req, res) => {
    try {
        const profilepicData = await ProfilePic.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        res.status(200).json(profilepicData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// The `/api/profilepic/:id` endpoint - GET profilepic by id
router.get('/:id', async (req, res) => {
    try {
        const profilepicData = await ProfilePic.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        if (!profilepicData) {
            res.status(404).json({ message: 'No profilepic found with this id!' });
            return;
        }
        res.status(200).json(profilepicData);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;