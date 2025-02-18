const express = require('express');
const { fetchToken } = require('../pi-integration/PanintelligenceAPI');
const panintelligenceInfo = require('../pi-integration/PanintelligenceInfo');
const router = express.Router();

/**
 * This endpoint fetches a Panintelligence token.
 * It assumes your user is authenticated in your app and whatnot.
 */
router.get('/token', async (req, res, next) => {
    console.log(`Getting token for ${req.headers['pi-username']}`);
    const token = await fetchToken(req.headers['pi-username']);
    console.log(`Got token ${token}`);
    res.json({ token, baseUrl: `${panintelligenceInfo.url}/pi` });
});

module.exports = router;
