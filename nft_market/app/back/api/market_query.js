const express = require('express');
const router = express.Router();

const controllerContract = require("../contract_market/action/query");

router.get("/config", async (req, res, next) => {
    try{
        await controllerContract.config(req, res);
        await res.json('good');
        await console.log("req.body");
    }catch (e) {
        console.log(e.message);
        await res.json('faf222')
    }
});

router.post("/collection_info", async (req, res, next) => {
    try{
        await controllerContract.collection_info(req, res);
        await res.json('good');
        await console.log(req.body);
    }catch (e) {
        console.log(e);
        await res.json('faf222')
    }
});

router.post("/collection_infos", async (req, res, next) => {
    try{
        await controllerContract.collection_infos(req, res);
        await res.json('good');
        await console.log(req.body);
    }catch (e) {
        console.log(e);
        await res.json('faf222')
    }
});

router.post("/order", async (req, res, next) => {
    try{
        await controllerContract.order(req, res);
        await res.json('good');
        await console.log(req.body);
    }catch (e) {
        console.log(e);
        await res.json('faf222')
    }
});

router.post("/orders", async (req, res, next) => {
    try{
        await controllerContract.orders(req, res);
        await res.json('good');
        await console.log(req.body);
    }catch (e) {
        console.log(e);
        await res.json('faf222')
    }
});

router.post("/execute_fee", async (req, res, next) => {
    try{
        await controllerContract.execute_fee(req, res);
        await res.json('good');
        await console.log(req.body);
    }catch (e) {
        console.log(e);
        await res.json('faf222')
    }
});

module.exports = router;