const express = require('express');
const router = express.Router();
const path = require('path');

const controllerContract = require("../contract_market/action/execute");

router.post("/update_config", async (req, res, next) => {
    try{
        await controllerContract.execute_update_config(req, res);
        await res.json({
            "update_config": {
                "auction_cancel_fee_rate": req.body.update_config.auction_cancel_fee_rate,
                "max_auction_duration_block": req.body.update_config.max_auction_duration_block,
                "max_auction_duration_second": req.body.update_config.max_auction_duration_second,
                "min_increase": req.body.update_config.min_increase,
                "owner": req.body.update_config.owner
            }
        });
    }catch (e) {
        console.log(e);
        await res.json('faf222')
    }
});

router.post("/add_collection", async (req, res, next) => {
    try{
        await controllerContract.execute_update_config(req, res);
        await console.log(req.body);
    }catch (e) {
        console.log(e);
        await res.json('faf222')
    }
});

router.post("/update_collection", async (req, res, next) => {
    try{
        await controllerContract.execute_update_config(req, res);
        await console.log(req.body);
    }catch (e) {
        console.log(e);
        await res.json('faf222')
    }
});

router.post("/execute_order", async (req, res, next) => {
    try{
        await controllerContract.execute_order(req, res);
        await console.log(req.body);
    }catch (e) {
        console.log(e);
        await res.json('faf222')
    }
});

router.post("/execute_auction", async (req, res, next) => {
    try{
        await controllerContract.execute_auction(req, res);
        await console.log(req.body);
    }catch (e) {
        console.log(e);
        await res.json('faf222')
    }
});

router.post("/cancel_order", async (req, res, next) => {
    try{
        await controllerContract.cancel_order(req, res);
        await console.log(req.body);
    }catch (e) {
        console.log(e);
        await res.json('faf222')
    }
});

router.post("/bid", async (req, res, next) => {
    try{
        await controllerContract.bid(req, res);
        await console.log(req.body);
    }catch (e) {
        console.log(e);
        await res.json('faf222')
    }
});

module.exports = router;