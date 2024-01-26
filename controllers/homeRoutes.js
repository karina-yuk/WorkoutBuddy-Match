const router = require('express').Router();
const { City, Gym, Workout, User } = require ("../models")


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

router.get('/postings', async (req,res) =>{
    try{
        const userData = await User.findAll({
                include: [
                  {
                    model: Gym,
                    attributes: ['gym_name'],
                    // as: 'gym_user'
                },
                  {  model: City,
                    attributes: ['city_name'],
                //     as: 'city'
                  },
                  {
                    model: Workout,
                    attributes: ['workout_name'],
                  }
                ],
                attributes: ['username', 'email', 'gender'],
              });
            //   // Serialize data so the template can read it
              const postInfo = userData.map((userPost) => userPost.get({ plain: true }));
              // Pass serialized data and session flag into template
              console.log(postInfo)
              res.render('postings', {
                postInfo,
                logged_in: req.session.logged_in
              });
              
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

module.exports = router;