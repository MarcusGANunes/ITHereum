import './Blockchain.css'

import React, { useState } from 'react'
import { BlockClass } from '../../hash'

function Blockchain(props) {

    const bc = props.blockchain //bc é um array

    const [blockchain, setBlockchain] = useState(bc)

    return (
        <div className='Blockchain light-text'>
            <div
                className="btn"
                onClick={() => {
                    const atualBlockchain = [...blockchain]

                    let newBlock = new BlockClass(blockchain.length)
                    newBlock.previousHash = blockchain[blockchain.length-1].hash

                    atualBlockchain.push(newBlock)

                    setBlockchain(atualBlockchain)
                }}
            >
                Novo Bloco
            </div>
            {blockchain.map((block, index) => {
                return (
                    <div key={index} className='Block light-text'>
                        <h1>Bloco {!block.index ? block.index + ' (Bloco Gênese)' : block.index}</h1>
                        <p>Data e Hora: {block.timestamp}</p>
                        <p>Hash: {block.hash}</p>
                        <p>Hash Anterior: {block.previousHash}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Blockchain