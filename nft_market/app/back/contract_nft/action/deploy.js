const { MsgStoreCode, isTxError } = require('@terra-money/terra.js');
const fs = require('fs');
const terra = require('../initialization/terra.js');
const wallet = require('../initialization/wallet.js');

async function deploy() {

    const storeCode = new MsgStoreCode(
        wallet.key.accAddress,
        fs.readFileSync('app/back/contract_nft/cw721terra.wasm').toString('base64')
    );

    const storeCodeTx = await wallet.createAndSignTx({
        msgs: [storeCode],
    });

    const storeCodeTxResult = await terra.tx.broadcast(storeCodeTx);

    console.log(storeCodeTxResult);

    if (isTxError(storeCodeTxResult)) {
        throw new Error(
            `store code failed. code: ${storeCodeTxResult.code}, codespace: ${storeCodeTxResult.codespace}, raw_log: ${storeCodeTxResult.raw_log}`
        );
    }

    const {
        store_code: { code_id },
    } = storeCodeTxResult.logs[0].eventsByType;

    console.log(code_id);

    let data = JSON.stringify(storeCodeTxResult.logs[0].eventsByType);
    fs.writeFileSync('app/back/contract_nft/contract_deploy.json', data);
}

deploy();