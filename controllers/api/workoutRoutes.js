const router = require('express').Router();
const { Workout } = require('../../models');

// GET all workouts
router.get('/', async (req, res) => {
    try {
      const workoutData = await workout.findAll();
      res.status(200).json(workoutData``);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET a single workout
router.get('/:id', async (req, res) => {
    try {
      const workoutData = await workout.findByPk(req.params.id, {
/*
              //need to modify this code to connect with through table
              // JOIN with locations, using the Trip through table
      include: [{ model: Location, through: Trip, as: 'planned_trips' }] */

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
    
  // CREATE a workout
  router.post('/', async (req, res) => {
    try {
      const workoutData = await workout.create(req.body);
      res.status(200).json(workoutData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // DELETE a workout
  router.delete('/:id', async (req, res) => {
    try {
      const workoutData = await workout.destroy({
        where: {
          id: req.params.id
        }
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
  
