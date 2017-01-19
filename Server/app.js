const express = require('express');

const app = express();

app.use('/', express.static('View/public'));

app.listen(process.env.PORT || 3000);
