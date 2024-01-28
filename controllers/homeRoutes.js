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

  // // I know I approved this, but aren't these put request that interacts with the database? If so, these should be in the different api route files instead of in the homeRoutes?
  // router.put('/api/profile', async (req, res) => {
  //   try {
  //     const { usernameEdit, emailEdit, cityEdit, workoutEdit, gymEdit } = req.body;
  //     if (usernameEdit) {
  //       await profile.update({username: usernameEdit}, { where: { Id: req.user.id } }); //assign to ID in  table
  //     }
  //     if (emailEdit) {
  //       await profile.update({emai: emailEdit}, { where: { Id: req.user.id } });   //assign to ID in  table
  //     }
  //     if (cityEdit) {
  //       await profile.update({city: cityEdit}, { where: { Id: req.city.id } }); //assign to ID in  table
  //     }
  //     if (workoutEdit) {
  //       await profile.update({workout: workoutEdit}, { where: { Id: req.workout.id } }); //assign to ID in  table
  //     }
  //     if (gymEdit) {
  //       await profile.update({username: gymEdit}, { where: { Id: req.gym.id } }); //assign to ID in  table
  //     }
  //     res.status(200).json({ message: 'update success' });
  //   } catch (error) {
  //       console.error('error:', error);
  //   }

  // });


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

router.get('/profile', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
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
    // Serialize data so the template can read it
    const userPost = userData.map((userPost) => userPost.get({ plain: true }));
    // Pass serialized data and session flag into template
    console.log(userPost)
    res.render('profile', {
      userPost,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

 router.get('/userinfo', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
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
    // Serialize data so the template can read it
    const userPost = userData.map((userPost) => userPost.get({ plain: true }));
    // Pass serialized data and session flag into template
    console.log(userPost)
    res.render('userinfo', {
      userPost,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// 
router.get("/signup", async (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signin", async (req, res) => {
    try {
      res.render("signin");
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // router.get("/profile", async (req, res) => {
  //   try {
  //     res.render("profile");
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });


module.exports = router;