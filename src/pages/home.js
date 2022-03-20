import React from "react";
import "../styles/home.modules.css";

export default function Home() {
  return (
    <div className="background">
      <div className="content">
        <div className="title">
          <h1>Home</h1>
        </div>
        <div className="texts">
          <div className="subtitle">
            <h2>WEB 3</h2>
          </div>
          <p>
            WEB3 To explain what is web3 we need to explain a little of the
            evolution of the web. It is often partitioned into three separate
            stages: Web 1.0, Web 2.0, and Web 3.0.
          </p>
          <div className="subtitle">
            <h2>WEB 1.0</h2>
          </div>
          <p>
            On Web 1.0 (1991 - 2004)all web pages were static, or in others
            words, all web pages were just data expository with out relations
            with possibles input data that you could give, for example your
            likes your login, your photo or anything. There wasn't armazention
            for the user data.
          </p>
          <div className="subtitle">
            <h2>WEB 2.0</h2>
          </div>
          <p>
            We can define the Web 2.0 as the interactive and social web. Anyone
            can be a content creator, anyone can post videos on youtube, can
            post arts on Pinterest, or photos on instagram and texts on almost
            any where. But web2 applications repeatedly experience data
            breaches. But in web2, you don't have any control over your data or
            how it is stored. In fact, companies often track and save user data
            without their users' consent. All of this data is then owned and
            controlled by the companies in charge of these platforms. Users who
            live in countries where they have to worry about the negative
            consequences of free speech are also at risk. Governments will often
            shut down servers or seize bank accounts if they believe a person is
            voicing an opinion that goes against their propaganda. With
            centralized servers, it is easy for governments to intervene,
            control, or shut down applications as they see fit. Web3 aims to
            solve many of these shortcomings by fundamentally rethinking how we
            architect and interact with applications from the ground up.
          </p>
          <div className="subtitle">
            <h2>WEB 3</h2>
          </div>
          <p>
            The main difference about the web3 is the decentralization Web3
            enhances the internet as we know it today with a few other added
            characteristics. Web3 is: Verifiable Trustless Self-governing
            Permissionless Distributed and robust Stateful Native built-in
            payments In web3, developers don't usually build and deploy
            applications that run on a single server or that store their data in
            a single database. Instead, web3 applications either run on
            blockchains, decentralized networks of many peer to peer nodes
            (servers), or a combination of the two (that forms a cryptoeconomic
            protocol). These apps are often referred to as dapps (decentralized
            apps), and you will see that term used often in the web3 space. When
            you hear about web3, you'll notice that cryptocurrency is often part
            of the conversation. This is because cryptocurrency plays a big role
            in many of these protocols. It provides a financial incentive
            (tokens) for anyone who wants to participate in creating, governing,
            contributing to, or improving one of the projects themselves.
            Consumers of the service usually pay to use the protocol, similarly
            to how they would pay a cloud provider like AWS today. Except in
            web3, the money goes directly to the network participants. In this,
            like in many forms of decentralization, you'll see that unnecessary
            and often inefficient intermediaries are cut out. Native payments
            The presence of tokens also introduce a native payment layer that is
            completely borderless and frictionless. These systems are overly
            complex and still do not enable true international interoperability
            between participants, as we can see with the volacity of the value
            of the crypto coins compared to the traditional money. Crypto
            wallets like MetaMask and Torus enable you to integrate easy,
            anonymous, and secure international payments and transactions into
            web3 applications.
          </p>
          <div className="subtitle">
            <h2>A New Way of Building Companies</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
