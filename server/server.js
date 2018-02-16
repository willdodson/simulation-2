require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const session = require('express-session');

const auth_ctrl = require('./controllers/auth_cont');
const prop_ctrl = require('./controllers/property_cont');

const createInitialSession = require('./middleware/session');


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 10000 }
}));
app.use(createInitialSession);


massive(process.env.CONNECTION_STRING)
.then(db => app.set('db', db))
.catch(err => console.error(err));



app.post('/api/auth/login', auth_ctrl.login);
app.post('/api/auth/register', auth_ctrl.register);
app.post('/api/auth/logout', auth_ctrl.logout);

app.post('/api/properties', prop_ctrl.newProp);
app.get('/api/properties', prop_ctrl.getProps);
app.delete('/api/properties/:id', prop_ctrl.deleteProp);
app.get('/api/properties/filter', prop_ctrl.filterProp);

const port = process.env.PORT;
app.listen(port, () => console.log(`We listnin @: ${port}`));