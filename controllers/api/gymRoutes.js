const router = require('express').Router();
const { Gym } = require('../../models');

// GET all gyms
router.get('/', async (req, res) => {
    try {
      const gymData = await gym.findAll();
      res.status(200).json(gymData``);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET a single gym
router.get('/:id', async (req, res) => {
    try {
      const gymData = await gym.findByPk(req.params.id, {
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
    
  // CREATE a gym
  router.post('/', async (req, res) => {
    try {
      const gymData = await gym.create(req.body);
      res.status(200).json(gymData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // DELETE a gym
  router.delete('/:id', async (req, res) => {
    try {
      const gymData = await gym.destroy({
        where: {
          id: req.params.id
        }
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
  
