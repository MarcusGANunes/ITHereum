import './BlockchainPage.css'
import Blockchain from './Blockchain'

import React from 'react'

const blockchains = [
    [
        {
            index: '0',
            hash: '0',
            prevHash: '-'
        },
        {
            index: '1',
            hash: '1',
            prevHash: '0'
        }
    ],
    [
        {
            index: '2',
            hash: '2',
            prevHash: '1'
        },
        {
            index: '3',
            hash: '3',
            prevHash: '2'
        }
    ],
    [
        {
            index: '4',
            hash: '4',
            prevHash: '3'
        },
        {
            index: '5',
            hash: '5',
            prevHash: '4'
        }
    ]
]

function BlockchainPage() {


    return (
        <div className='BlockchainPage'>
            <div className="btn">Nova Blockchain</div>
            {blockchains.map(bc => {
                return (
                    <Blockchain
                        blockchain={bc}
                    />
                )
            })
            }
        </div>
    )
}

export default BlockchainPage