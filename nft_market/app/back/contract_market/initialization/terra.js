const {LCDClient} = require('@terra-money/terra.js');

const terra = new LCDClient({
    URL: 'https://bombay-lcd.terra.dev',
    chainID: 'bombay-12'
});

module.exports = terra;