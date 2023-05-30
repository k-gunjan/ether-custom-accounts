import { Wallet, utils } from "ethers";


const standardPath = "m/44'/60'/0'/0";


function generatePath(atIndex=0) {
    // can define custome path here
    const path = `${standardPath}/${atIndex}`
    return path
}

function generateMnemonic() {
    let mnemonic = Wallet.createRandom().mnemonic.phrase
    return mnemonic;
}


function createWallet(mnemonic='', index=0) {
    // generate random mnemonic if not provided
    if (mnemonic === ''){
        mnemonic = generateMnemonic()
    }
    const path = generatePath(index)
    const account = Wallet.fromMnemonic(mnemonic, path)

  return account
}

const mnemonic = "announce room limb pattern dry unit scale effort smooth jazz weasel alcohol"
//starts with zero, so index=0 will be same as first account in metamask(say) with standard path
const index = 2
let wallet = createWallet(mnemonic, index)

console.log("account address:", wallet.address)
console.log("account public key:", wallet.publicKey)
console.log("account private key:", wallet.privateKey)
console.log("account mnemonic:", wallet.mnemonic)

// account address: 0x7c7F5Da308D0d3bF663Aca84EFb6975322d6fEf9
// account public key: 0x049587cedff7a71bb6fa6e072d44168e8f567b9efba1ed1d319f247cc1645f7e34229329210699565786ed2bd2556d39ec6da9f4568749e0e69c679b756ad3e0e8
// account private key: 0x35af774827df4b51c91549b6e80ac74c83defa2a98d6d4917f0e0a8ffd956c96
// account mnemonic: {
//   phrase: 'announce room limb pattern dry unit scale effort smooth jazz weasel alcohol',
//   path: "m/44'/60'/0'/0/2",
//   locale: 'en'
// }

