import './Blockchain.css'

import React from 'react'

function Blockchain(props) {

    const bc = props.blockchain

    return (
        <div className='Blockchain light-text'>
            <div className="btn">Novo Bloco</div>
            {bc.map((block, index) => {
                return (
                    <div key = {index} className='Block light-text'>
                        <h1>Bloco {block.index}</h1>
                        <p>Hash: {block.hash}</p>
                        <p>Hash Anterior: {block.prevHash}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Blockchain