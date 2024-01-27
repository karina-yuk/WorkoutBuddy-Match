const router = require('express').Router();
const { User } = require('../../models');

// The `/api/user` endpoint - Signup users
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


// The `/api/user/login` endpoint - Login users
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username } });
        if (!userData) {
            res.status(400).json({ message: 'No user with that username!' });
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//Userinfo, post, (gender, city, gym, workout)

// The `/api/user/:id` endpoint - Edit username and email
router.put('/:id', async (req, res) =>{
    try{
        const usernameData = await User.update(req.body,{where:{id:req.params.id}})
        if (!usernameData) {
            res.status(404).json({ message: 'No username found with this id!' });
            return;
        }
        res.status(200).json(usernameData);
    } catch (err) {
        res.status(500).json(err);
    }
  } )

  
router.put('/:id', async (req, res) =>{
    try{
        const emailData = await User.update(req.body,{where:{id:req.params.id}})
        if (!emailData) {
            res.status(404).json({ message: 'No email found with this id!' });
            return;
        }
        res.status(200).json(emailData);
    } catch (err) {
        res.status(500).json(err);
    }
  } )

// The `/api/user/signout` endpoint - Logout users
router.post('/signout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

//router.delete()


module.exports = router;
