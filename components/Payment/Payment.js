import { paymentAndFinancingOptions } from "@/data/paymentData";

import Image from "next/image";
import BookMeetingModal from "../Common/Book_Meeting_Modal/BookMeetingModal";

const Payment = () => {
  return (
    <section className="payment-table-box ">
      <div className="container">
        <h2 style={{ textAlign: "center" }} className="title">
          Payment and Financing
        </h2>
        <div className="payment-table">
          {paymentAndFinancingOptions?.map((option, index) => (
            <div key={index} className="payment-option">
              <h2>
                {option?.option}{" "}
                <Image
                  style={{ height: "30px", width: "100" }}
                  width={100}
                  height={30}
                  alt="paymenrt"
                  src={option?.logo}
                />
              </h2>
              <div className="white-row">
                <p>{option?.eligibility}</p>
                <ul>
                  {option.benefitDetails.map((detail, i) => (
                    <li key={i}>
                      <span className="list-heading">{detail?.title}:</span>{" "}
                      <span>{detail?.details}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <BookMeetingModal />
        </div>
      </div>
    </section>
  );
};

export default Payment;
