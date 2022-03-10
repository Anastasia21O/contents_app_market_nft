const express = require('express');
const router = express.Router();
const path = require('path');

const controllerExecute = require("../contract_nft/action/execute");
const controllerInitialization = require("../contract_nft/action/initialization");

router.post("/intialization", async (req, res, next) => {
    try{
        await controllerInitialization.initialization_contract(req, res);
        await res.json({ "minter": req.body });
        await console.log(req.body);
    }catch (e) {
        console.log(e);
        await res.json('faf222')
    }
});

router.post("/create_nft", async (req, res) => {
    try{
        await controllerExecute.create_nft(req, res);
        await res.json({
            "mint": {
                "owner": req.body.mint.owner,
                "token_id": req.body.mint.token_id,
                "extension": {
                    "external_url": req.body.mint.extension.external_url
                }
            }
        });
    }catch (e) {
        console.log(e);
        await res.json('faf222')
    }
});

module.exports = router;