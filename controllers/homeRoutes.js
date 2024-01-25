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

module.exports = router;