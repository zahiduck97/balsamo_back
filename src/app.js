// Requires
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

// Initializations
const app = express();

// Settings
const puerto = process.env.PORT || 3000;
app.set('port', puerto);

// Middlewares
app.use(morgan('tiny'));
app.use(cors());

// Static Fields
app.use(express.static(path.join(__dirname, 'public')));

// Server
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});
