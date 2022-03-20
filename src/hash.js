const sha256 = require('crypto-js/sha256')

export class BlockClass {
    constructor(index, data, previousHash = '') {
        this.index = index
        this.data = data
        this.previousHash = previousHash
        this.hash = this.calculateHash();
        this.random = Math.random()
    }

    calculateHash() {
        return sha256(this.index + this.previousHash + this.random + JSON.stringify(this.data)).toString();
    }
}

export class BlockchainClass {
    constructor() {
        this.chain = [this.createGenesisBlock()]
    }

    createGenesisBlock() {
        return new BlockClass(0, 'Genesis Block', '0')
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