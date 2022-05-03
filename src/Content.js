import React from "react";
import "./css/Content.css";

const Content = () => {
  return (
    <section className="content">
      <div className="main-title">
        <h1>Payments infrastructure for the internet</h1>
        <p>
          Millions of companies of all sizes—from startups to Fortune 500s—use
          Stripe s software and APIs to accept payments, send payouts, and
          manage their businesses online.
        </p>
        <button className="content-btn">
          <h3>Start now</h3>
        </button>
      </div>
      <div className="phone">
        <img
          src="https://react-projects-13-stripe-submenus.netlify.app/static/media/phone.58d7e3d6.svg"
          alt=""
        />
      </div>
    </section>
  );
};

export default Content;
