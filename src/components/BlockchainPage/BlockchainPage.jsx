import './BlockchainPage.css'
import Blockchain from './Blockchain'

import React, { useState } from 'react'
import { BlockchainClass } from '../../hash'

function BlockchainPage() {

    const [blockchains, setBlockchains] = useState([])

    return (
        <div className='BlockchainPage'>
            <div
                className="btn"
                onClick={() => {
                    const atualBlockchains = [...blockchains]

                    let newBlockchain = new BlockchainClass()
                    atualBlockchains.push(newBlockchain.chain)

                    setBlockchains(atualBlockchains)
                }}
            >
                New Blockchain
            </div>
            {blockchains.map((bc, index) => {
                return (
                    <Blockchain
                        key={index}
                        blockchain={bc}
                    />
                )
            })
            }
        </div>
    )
}

export default BlockchainPage