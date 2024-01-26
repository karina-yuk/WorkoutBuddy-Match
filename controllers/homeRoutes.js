const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
    //   // Get all projects and JOIN with user data
    //   const projectData = await Project.findAll({
    //     include: [
    //       {
    //         model: User,
    //         attributes: ['username'],
    //       },
    //     ],
    //   });
    //   // Serialize data so the template can read it
    //   const projects = projectData.map((project) => project.get({ plain: true }));
      // Pass serialized data and session flag into template
      res.render('landingpage', {
        // projects,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.put('/api/profile', async (req, res) => {
    try {
      const { usernameEdit, emailEdit, cityEdit, workoutEdit, gymEdit } = req.body;
      if (usernameEdit) {
        await profile.update({username: usernameEdit}, { where: { Id: req.user.id } }); //assign to ID in  table
      }
      if (emailEdit) {
        await profile.update({emai: emailEdit}, { where: { Id: req.user.id } });   //assign to ID in  table
      }
      if (cityEdit) {
        await profile.update({city: cityEdit}, { where: { Id: req.city.id } }); //assign to ID in  table
      }
      if (workoutEdit) {
        await profile.update({workout: workoutEdit}, { where: { Id: req.workout.id } }); //assign to ID in  table
      }
      if (gymEdit) {
        await profile.update({username: gymEdit}, { where: { Id: req.gym.id } }); //assign to ID in  table
      }
      res.status(200).json({ message: 'update success' });
    } catch (error) {
        console.error('error:', error);
    }

  });

module.exports = router;