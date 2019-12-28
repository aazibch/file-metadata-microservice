const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer();

const filedataRoute = require('./routes/filedataRoute');

app.use('/api/filedata', upload.single('upfile'), filedataRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on ${port}...`);
});