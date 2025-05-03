const { log } = require('console')
const bip39 = require('bip39')
const HDWallet = require('ethereum-hdwallet')

function walletGenerator() {
    const mnemonic = bip39.generateMnemonic()
    const hdwallet = HDWallet.fromMnemonic(mnemonic)
    const myWallet = hdwallet.derive(`m/44'/60'/0'/0`)
    /* 
        m/44'/60'/0'/0/0:
            특정 주소(인덱스 0)를 바로 가리키는 경로
        m/44'/60'/0'/0:
            주소 인덱스가 없는 상위 경로
    */
    log(mnemonic)
    for (let i = 0; i < 20; i++) {
        log(`${i}: 0x${myWallet.derive(i).getAddress().toString('hex')}`)
    }    
}

walletGenerator()
