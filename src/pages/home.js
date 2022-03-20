import React from "react";
import "../styles/home.modules.css";

export default function Home() {
  return (
    <div className="background">
      <div className="content">
        <div className="texts">
          <div className="subtitle">
            <h1>What is Web 3?</h1>
          </div>
          <p>
            To explain what is web3 we need to explain a little of the evolution
            of the web. It is often partitioned into three separate stages: Web
            1.0, Web 2.0, and Web 3.0.
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
            We can defini the Web 2.0 as the interactive and social web. Anyone
            can be a content creator, anyone can post videos on youtube, can
            post arts on Pinterest, or photos on instagram and texts on almost
            any where.
          </p>
        </div>
      </div>
    </div>
  );
}
