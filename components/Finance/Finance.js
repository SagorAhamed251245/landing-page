import React from "react";

const Finance = () => {
  return (
    <section className="finance_section">
      <div style={{ marginBottom: "50px" }} className="no-select">
        <div>
          <p
            style={{
              fontSize: "40px",
              textAlign: "center",
              fontWeight: "bolder",
            }}
          >
            Finance Options
          </p>
          <div></div>
          <hr
            style={{
              width: "250px",
              margin: "0 auto",
              marginTop: "30px",
              marginBottom: "60px",
              height: "2px",
              border: "0",
              backgroundColor: "#CCCCCC",
            }}
          />
        </div>
      </div>

      <div className="finance container">
        <div className="finance_card">
          <img height="auto" width="auto" src="\images\svg\Fin1.svg" />
          <h3>Climb Credit</h3>
        </div>
        <div className="finance_card">
          <img height="auto" width="auto" src="\images\svg\Fin2.svg" />
          <h3>Student Affordable Loans</h3>
        </div>
        <div className="finance_card">
          <img height="auto" width="auto" src="\images\svg\Fin3.svg" />
          <h3>Michigan States Funding</h3>
        </div>
        <div className="finance_card">
          <img height="auto" width="auto" src="\images\svg\Fin4.svg" />
          <h3>Self Funding</h3>
        </div>
      </div>
    </section>
  );
};

export default Finance;
