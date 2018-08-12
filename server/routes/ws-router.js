const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send({ "serverInfo": "test" });
});


module.exports = router;