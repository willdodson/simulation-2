module.exports = {
    newProp: (req,res,next) => {

    },
    getProps: (req,res,next) => {
        
        let id = 1;
        const db = req.app.get('db');
        db.getProps([id])
        .then(properties => {
            res.status(200).send(properties);
        })
        .catch(err => console.error(err));
    },
    deleteProp: (req,res,next) => {

    },
    filterProp: (req,res,next) => {

    }
}