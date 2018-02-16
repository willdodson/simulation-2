module.exports = {
    login: (req,res,next) => {
        const {username, password} = req.body;
        const db = req.app.get('db');
        db.login([username, password])
        .then(() => {
            res.status(200).send('You Logged In My Dude');
        })
        .catch(err => console.error(err));
    },
    register: (req,res,next) => {
        const {username, password} = req.body;
        const db = req.app.get('db');
        db.register([username, password])
        .then(() => {
            req.session.user.username = username;
            res.status(200).send('You Actually Registered!?! o.O')
        })
        .catch(err => console.error(err));
    },
    logout: (req,res,next) => {
        res.status(200).send('Ur Dead to Me');
    }
}