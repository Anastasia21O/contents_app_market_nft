# Вміст nft market

Nft market був створений за допомогою двох контрактів: 
- [контракт nft] (https://github.com/ALPAC-4/nft-market-contract.git)
- [контракт market] (https://github.com/akalmykov/dcw721-contract.git)

**Контрак nft** знаходиться у папці contract_nft і представляє собою контракт для створення cw721 nft. Даний контракт дозволяє створювати оригінальні nft та похідні (схожі) nft на уже створені (існуючі) nft.

**Контракт market** знаходиться у папці contract_market і представляє собою контракт для маніпулювання nft. Можливі дії над nft можна подивитись у market_nft (api).

**[Market nft] (https://github.com/Anastasia21O/nft_market)** це api для маніпулювання nft. У папці market_nft знаходиться свій package.json у якому прописані деякі scripts:
- deploy_contract_nft: скріпт, за допомогою якого робиться деплой контракта nft
- deploy_contract_market: скріпт, за допомогою якого робиться деплой контракта market
- start_api: початок роботи api

Всі ці скіпти запускаються з папки market_nft
