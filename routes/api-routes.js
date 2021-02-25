const router = require("express").Router();
const Transaction = require("../models/model.js");

router.post("/api/transaction", (req, res) => {
    console.log(req.body)
    Transaction.create(req.body).then(dbData => {
        res.json(dbData)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.get("/api/transaction", (req, res) => {
    Transaction.find({}).then(dbData => {
        res.json(dbData)
    }).catch(err => {
        res.status(400).json(err)
    })
})

module.exports = router;