import React from "react";
import "../styles/smartcontracts.modules.css";
import ButtonComponent from "../components/button";

export default function SmartContracts() {
  return (
    <div className="background">
      <div className="content">
        <div className="title">
          <h1>Smart Contracts</h1>
        </div>
        <div className="texts">
          <div className="subtitle">
            <h2>What they are</h2>
          </div>
          <p>
            In short, smart contracts are contract systems used to automatically
            execute transactions without the need for the company, government or
            entity to intermediary, in other words, without big fees and
            bureaucracy. It helps with the 3 mains blockchain's properties which
            are:
          </p>
          <ol>
            <li>Optimize Security</li>
            <li>Optimize Decentralization</li>
            <li> Optimize Scalability</li>
          </ol>
          <p>
            In layman's terms, if you want to write a will inside a smart
            contract, a lawyer writes this contract in natural language and a
            developer transcribes this information into a programming language.
            You describe all of your assets, your heirs and everything, and when
            the death certificate is published on the network, the transfer of
            goods takes place automatically, quickly, without bureaucracy, with
            the due taxes already paid and with little cost compared to the
            traditional will. This is because all participants involved in the
            transfer of assets are connected in a single, integrated system. So
            we can reduce all of it to a self-executing computer protocol that
            it's safety are assured by blockchain. To get into Smart Contracts
            codes click below.
          </p>
          <div className="buttonContainer">
            <ButtonComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
