const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({
        title: 'Pan Embed Backend Example',
        message: `You're probably not looking for this endpoint. See the readme file!`
    });
});

router.get('/version', (req, res, next) => {
    res.json({ version: '1.0.0' });
});


module.exports = router;
