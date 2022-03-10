const terra = require('../initialization/terra.js');
const fs = require('fs');

let data_initialization = fs.readFileSync("app/back/contract_market/contract_address.json");
let contracts = JSON.parse(data_initialization);
let contract_address = contracts[contracts.length - 1].instantiate_contract.contract_address[0];

exports.config = async function(req, res) {
    const result = await terra.wasm.contractQuery(
        contract_address,
        {
            config: {}
        }// query msg
    );

    console.log(result)
};

exports.collection_info = async function(req, res) {
    const result = await terra.wasm.contractQuery(
        contract_address,
        req.body// query msg
    );

    console.log(result)
};

exports.collection_infos = async function(req, res) {
    const result = await terra.wasm.contractQuery(
        contract_address,
        req.body// query msg
    );

    console.log(result)
};

exports.order = async function(req, res) {
    const result = await terra.wasm.contractQuery(
        contract_address,
        req.body// query msg
    );

    console.log(result)
};

exports.orders = async function(req, res) {
    const result = await terra.wasm.contractQuery(
        contract_address,
        req.body// query msg
    );

    console.log(result)
};

exports.execute_fee = async function(req, res) {
    const result = await terra.wasm.contractQuery(
        contract_address,
        req.body// query msg
    );

    console.log(result)
};