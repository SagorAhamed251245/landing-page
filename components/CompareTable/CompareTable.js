import React from "react";

const CompareTable = () => {
  return (
    <section className="table-box">
      <div>
        <h1 style={{ textAlign: "center" }} className="title">
          Compare With Other Bootcamps
        </h1>
        <div className="compare-table">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>Feature</th>
                <th style={{ textAlign: "center" }}>TS4U</th>
                <th style={{ textAlign: "center" }}>Other Bootcamp</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="white-row">1. 2 Weeks Free Trial</td>
                <td className="blue-row">
                  <img src="\images\svg\tabtik\vuesax\linear\vuesax\linear\tick-circle.svg" />
                </td>
                <td style={{ textAlign: "center" }} className="white-row">
                  <img src="\images\svg\Ads Landing page\vuesax\linear\vuesax\linear\blacktik.svg" />
                </td>
              </tr>
              <tr>
                <td className="white-row">2. Online Learning Platform</td>
                <td className="blue-row">
                  <img src="\images\svg\tabtik\vuesax\linear\vuesax\linear\tick-circle.svg" />
                </td>
                <td style={{ textAlign: "center" }} className="white-row">
                  <img src="\images\svg\Ads Landing page\vuesax\linear\vuesax\linear\blacktik.svg" />
                </td>
              </tr>
              <tr>
                <td className="white-row">3. Affordable Student Loan</td>
                <td className="blue-row">
                  <img src="\images\svg\tabtik\vuesax\linear\vuesax\linear\tick-circle.svg" />
                </td>
                <td style={{ textAlign: "center" }} className="white-row">
                  <img src="\images\svg\Ads Landing page\vuesax\linear\vuesax\linear\blacktik.svg" />
                </td>
              </tr>
              <tr>
                <td className="white-row">4. Follow Agile Methodology</td>
                <td className="blue-row">
                  <img src="\images\svg\tabtik\vuesax\linear\vuesax\linear\tick-circle.svg" />
                </td>
                <td className="white-row"></td>
              </tr>
              <tr>
                <td className="white-row">5. 24*7 - 1 to 1 Support</td>
                <td className="blue-row">
                  <img src="\images\svg\tabtik\vuesax\linear\vuesax\linear\tick-circle.svg" />
                </td>
                <td className="white-row"></td>
              </tr>
              <tr>
                <td className="white-row">6. Weekly Technical Interview</td>
                <td className="blue-row">
                  <img src="\images\svg\tabtik\vuesax\linear\vuesax\linear\tick-circle.svg" />
                </td>
                <td className="white-row"></td>
              </tr>
              <tr>
                <td className="white-row">7. Weekly Show & Tel</td>
                <td className="blue-row">
                  <img src="\images\svg\tabtik\vuesax\linear\vuesax\linear\tick-circle.svg" />
                </td>
                <td className="white-row"></td>
              </tr>
              <tr>
                <td className="white-row">8. Career Counselling</td>
                <td className="blue-row">
                  <img src="\images\svg\tabtik\vuesax\linear\vuesax\linear\tick-circle.svg" />
                </td>
                <td className="white-row"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CompareTable;
