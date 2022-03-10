const { MsgExecuteContract } = require('@terra-money/terra.js');
const terra = require('../initialization/terra.js');
const wallet = require('../initialization/wallet.js');
const fs = require('fs');

let data_initialization = fs.readFileSync("app/back/contract_nft/contract_address.json");
let contracts = JSON.parse(data_initialization);
let contract_address = contracts[contracts.length - 1].instantiate_contract.contract_address[0];

exports.create_nft = async function (req, res) {
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

