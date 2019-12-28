const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    if (!req.file) return res.status('400').send('No file selected to upload.');
    
    const response = {
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size
    }

    res.send(response);
});

module.exports = router;