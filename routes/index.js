var express = require('express');
var router = express.Router();

var admin = require("firebase-admin");

var serviceAccount = require("C:\\Users\\ntinos\\WebstormProjects\\test-agent\\test-agent-7482c-firebase-adminsdk-lyt3f-498973cf65.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://test-agent-7482c.firebaseio.com"
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

module.exports = router;
