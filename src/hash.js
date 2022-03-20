const sha256 = require('crypto-js/sha256')

export class BlockClass {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index
        this.timestamp = timestamp
        this.data = data
        this.previousHash = previousHash
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return sha256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

export class BlockchainClass {
    constructor() {
        this.chain = [this.createGenesisBlock()]
    }

    createGenesisBlock() {
        return new BlockClass(0, '14/03/2022', 'Genesis Block', '0')
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1]
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock)
    }
}

const ursoCoin = new BlockchainClass()

ursoCoin.addBlock(new BlockClass(1, '14/03/2022'), { qtd: 4 })
ursoCoin.addBlock(new BlockClass(2, '15/03/2022'), { qtd: 10 })

console.log(JSON.stringify(ursoCoin, null, 4));