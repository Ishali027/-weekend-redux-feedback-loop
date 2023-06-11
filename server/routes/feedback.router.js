const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');



router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "feedback";`)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('error in GET', error);
    })
});


router.post('/', (req, res) => {
    let newFeedback = req.body;
    console.log('feedback added', newFeedback);

    let queryText = `INSERT INTO "feedback"("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`

    pool.query(queryText, [newFeedback.feeling[0], newFeedback.understanding[0], newFeedback.support[0], newFeedback.comments[0]])
        .then(result => {
            console.log('success posting');
            res.sendStatus(201)
    })
    .catch(error => {
        console.log('Error in POSTing', error);
        res.sendStatus(500);
    })
});








module.exports = router;