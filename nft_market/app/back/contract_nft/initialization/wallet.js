const {LCDClient, MnemonicKey} = require('@terra-money/terra.js');

const mk = new MnemonicKey({
    mnemonic: 'solution forum require local charge help oven kid hurdle manage age baby happy chief pilot mouse skate find elevator clever disagree garment off shed'
});

// connect to localterra
const terra = new LCDClient({
    URL: 'https://bombay-lcd.terra.dev',
    chainID: 'bombay-12'
});

const wallet = terra.wallet(mk);

module.exports = wallet;