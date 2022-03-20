import React from "react";
import styles from "../styles/learning.modules.css";

export default function Learning() {
  return (
    <div className="container-learning">
      <div className="leftContent">
        <div className="texts">
          <div>
            <p>
              So, let's start. First of all lets talk about Solidity. Brithly,
              Solidity is an object-oriented programming language for writing
              smart contracts on various blockchain platforms, most notably,
              Ethereum. We are going to use the Remix IDE that helps us to write
              Solidity contracts straight from the browser. If you want to get
              into the site just click on the link: https://remix.ethereum.org/
              So in first of all select the SOLIDITY enviroment:
            </p>
          </div>
          <div className={styles.image_1}>
            <img src="1.png" alt="" />
          </div>
          <div>
            <br />
            <p>
              Now, on the FILE EXPLORER icon stays our Workspace with documents
              and the 2 mains buttons here is the file and folder creators:
            </p>
          </div>
          <div className={styles.image_3}>
            <img src="3.png" alt="" />
          </div>
          <div>
            <br />
            <p>
              Over the Solity compiler button. We can configure the compiler.
              And for who don't know what a compilor is, it is what translate
              the computer language that we are writing to the machine language.
              So in this section we can select our compiler, or at least see
              what compiler our code is been treated, the language and in which
              Ethereum Virtual Machine (EVM) It is been running (to more about
              EVM access https://ethereum.org/en/developers/docs/evm/). We can
              leave the way it is for now. Now getting back to the section lets
              create a new file
            </p>
          </div>
          <div className={styles.image_5}>
            <img src="5.png" alt="" />
          </div>
          <div>
            <br />
            <p>
              and state into the first line which compiler version will be use
              for the current Solidity file. To do it we start by stating
              literally the compiler or by saying something about it:
            </p>
          </div>
          <div>
            <ul>
              <li>
                <p>
                  " To set an specific version: ""pragma solidity 0.8.10;"" "
                </p>
              </li>
              <li>
                <p>
                  " To set a range: """pragma solidity {">=0.4.0 < 0.8.0"}; """
                  "
                </p>
              </li>
              <li>
                <p>
                  " To work with 0.a.(anything): ""pragma solidity ^0.4.0;"" "
                </p>
              </li>
              <li>
                <p>
                  " In this tutorial we are going to work with 0.8.* versions:
                  ""pragma solidity ^0.8.0;"" "
                </p>
              </li>
            </ul>
          </div>
          <div>
            <p>{"Código aqui"}</p>
          </div>
          <div className={styles.image_8}>
            <img src="8.png" alt="" />
          </div>
          <br />
          <div className={styles.image_9}>
            <img src="9.png" alt="" />
          </div>
          <br />
          <div>
            <p>
              And click on the arrow symbol to see the Deployed Contract. You
              should get something like this:
            </p>
          </div>
          
          <div className={styles.image_10}>
            <img src="10.png" alt="" />
          </div>
        </div>
      </div>
      <div className="rightContent">
        <iframe width="100%" height="650px" src="https://remix.ethereum.org" />
      </div>
    </div>
  );
}
