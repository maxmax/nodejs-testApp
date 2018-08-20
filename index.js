const express = require('express');
const app = express();
const path = require('path');
const auth = require('./auth');
const PORT = process.env.PORT || 5000;

// express()

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(auth).get('/', (req, res) => res.render('pages/index'))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

// // app.use(auth).listen(port, host, (err) => {
