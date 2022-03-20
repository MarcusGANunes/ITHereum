import './Blockchain.css'

import React from 'react'

function Blockchain(props) {

    const bc = props.blockchain

    return (
        <div className='Blockchain light-text'>
            {bc.map(block => {
                return (
                    <div className='Block light-text'>
                        <h1>Bloco {block.index}</h1>
                        <p>Hash: {block.hash}</p>
                        <p>Hash Anterior: {block.prevHash}</p>
                    </div>
                )
            })}
            <div className="btn">Novo Bloco</div>
        </div>
    )
}

export default Blockchain