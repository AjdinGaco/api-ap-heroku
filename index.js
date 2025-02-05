const express = require('express');
const app = express();
var cors = require('cors');

app.use(
    cors({
        credentials: true,
        Access-Control-Allow-Credentials: true,
        origin: 'https://xenodochial-gates-cf6795.netlify.app'
    })
);
app.options('*', cors());

app.get('/', (req, res) => res.send('This api works.'));

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});
