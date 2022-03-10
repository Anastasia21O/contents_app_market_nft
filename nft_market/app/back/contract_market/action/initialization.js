const { MsgInstantiateContract, isTxError, MsgExecuteContract } = require('@terra-money/terra.js');
const terra = require('../initialization/terra.js');
const wallet = require('../initialization/wallet.js');
const fs = require('fs');

let data_deploy = fs.readFileSync("app/back/contract_market/contract_deploy.json");
let code_id = parseInt(JSON.parse(data_deploy).store_code.code_id[0]);

exports.initialization_contract = async function(req, res) {
    const instantiate = new MsgInstantiateContract(
        wallet.key.accAddress,
        undefined,
        code_id, // code ID
        req.body, // InitMsg
        { uluna: 10000000, uusd: 1000000 } // init coins
        // false // migratable
    );

    const instantiateTx = await wallet.createAndSignTx({
        msgs: [instantiate],
    });

    const instantiateTxResult = await terra.tx.broadcast(instantiateTx);

    console.log(instantiateTxResult);

    if (isTxError(instantiateTxResult)) {
        throw new Error(
            `instantiate failed. code: ${instantiateTxResult.code}, codespace: ${instantiateTxResult.codespace}, raw_log: ${instantiateTxResult.raw_log}`
        );
    }

    const {
        instantiate_contract: { contract_address },
    } = instantiateTxResult.logs[0].eventsByType;

    console.log(contract_address);

    let data_initialization = fs.readFileSync("app/back/contract_market/contract_address.json");
    let data = JSON.parse(data_initialization);

    data.push(instantiateTxResult.logs[0].eventsByType);

    fs.writeFileSync('app/back/contract_market/contract_address.json', JSON.stringify(data));
};