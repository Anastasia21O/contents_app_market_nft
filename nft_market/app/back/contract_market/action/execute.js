const { MsgExecuteContract } = require('@terra-money/terra.js');
const terra = require('../initialization/terra.js');
const wallet = require('../initialization/wallet.js');
const fs = require('fs');

let data_initialization = fs.readFileSync("app/back/contract_market/contract_address.json");
let contracts = JSON.parse(data_initialization);
let contract_address = contracts[contracts.length - 1].instantiate_contract.contract_address[0];

exports.execute_update_config = async function(req, res) {
    const execute = new MsgExecuteContract(
        wallet.key.accAddress, // sender
        contract_address, // contract_nft account address
        req.body, // handle msg
        { uluna: 100000 } // coins
    );

    const executeTx = await wallet.createAndSignTx({
        msgs: [execute]
    });

    const executeTxResult = await terra.tx.broadcast(executeTx);

    console.log(executeTxResult);
};

exports.execute_add_collection = async function(req, res) {
    const execute = new MsgExecuteContract(
        wallet.key.accAddress, // sender
        contract_address, // contract_nft account address
        req.body, // handle msg
        { uluna: 100000 } // coins
    );

    const executeTx = await wallet.createAndSignTx({
        msgs: [execute]
    });

    const executeTxResult = await terra.tx.broadcast(executeTx);

    console.log(executeTxResult);
};

exports.execute_update_collection = async function(req, res) {
    const execute = new MsgExecuteContract(
        wallet.key.accAddress, // sender
        contract_address, // contract_nft account address
        req.body, // handle msg
        { uluna: 100000 } // coins
    );

    const executeTx = await wallet.createAndSignTx({
        msgs: [execute]
    });

    const executeTxResult = await terra.tx.broadcast(executeTx);

    console.log(executeTxResult);
};

exports.execute_order = async function(req, res) {
    const execute = new MsgExecuteContract(
        wallet.key.accAddress, // sender
        contract_address, // contract_nft account address
        req.body, // handle msg
        { uluna: 100000 } // coins
    );

    const executeTx = await wallet.createAndSignTx({
        msgs: [execute]
    });

    const executeTxResult = await terra.tx.broadcast(executeTx);

    console.log(executeTxResult);
};

exports.execute_auction = async function(req, res) {
    const execute = new MsgExecuteContract(
        wallet.key.accAddress, // sender
        contract_address, // contract_nft account address
        req.body, // handle msg
        { uluna: 100000 } // coins
    );

    const executeTx = await wallet.createAndSignTx({
        msgs: [execute]
    });

    const executeTxResult = await terra.tx.broadcast(executeTx);

    console.log(executeTxResult);
};

exports.cancel_order = async function(req, res) {
    const execute = new MsgExecuteContract(
        wallet.key.accAddress, // sender
        contract_address, // contract_nft account address
        req.body, // handle msg
        { uluna: 100000 } // coins
    );

    const executeTx = await wallet.createAndSignTx({
        msgs: [execute]
    });

    const executeTxResult = await terra.tx.broadcast(executeTx);

    console.log(executeTxResult);
};

exports.bid = async function(req, res) {
    const execute = new MsgExecuteContract(
        wallet.key.accAddress, // sender
        contract_address, // contract_nft account address
        req.body, // handle msg
        { uluna: 100000 } // coins
    );

    const executeTx = await wallet.createAndSignTx({
        msgs: [execute]
    });

    const executeTxResult = await terra.tx.broadcast(executeTx);

    console.log(executeTxResult);
};

