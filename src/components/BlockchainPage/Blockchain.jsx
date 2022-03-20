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
                        <p><strong>Data e Hora</strong>: {block.timestamp}</p>
                        <p><strong>Hash:</strong> {block.hash}</p>
                        <p><strong>Hash Anterior:</strong> {block.previousHash}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Blockchain