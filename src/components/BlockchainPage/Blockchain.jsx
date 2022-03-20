import './Blockchain.css'

import React, { useState } from 'react'
import { BlockClass } from '../../hash'

function Blockchain(props) {

    const bc = props.blockchain //bc é um array

    return (
        <div className='Blockchain light-text'>
            <div
                className="btn"
            >
                Novo Bloco
            </div>
            {bc.map((block, index) => {
                return (
                    <div key={index} className='Block light-text'>
                        <h1>Bloco {block.index}</h1>
                        <p>Hash: {block.hash}</p>
                        <p>Hash Anterior: {block.previousHash}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Blockchain