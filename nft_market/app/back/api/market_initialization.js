const express = require('express');
const router = express.Router();
const path = require('path');

const controllerContract = require("../contract_market/action/initialization");

router.post("/", async (req, res, next) => {
    try{
        await controllerContract.initialization_contract(req, res);
        await res.json({
            "auction_cancel_fee_rate": req.body.auction_cancel_fee_rate,
            "max_auction_duration_block": req.body.max_auction_duration_block,
            "max_auction_duration_second": req.body.max_auction_duration_second,
            "min_increase": req.body.min_increase,
            "owner": req.body.owner
        });
    }catch (e) {
        console.log(e);
        await res.json('faf222')
    }
});

module.exports = router;