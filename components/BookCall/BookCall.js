import Link from "next/link";
import React from "react";

const BookCall = () => {
  return (
    <section className="book-call container">
      <div style={{ padding: "100px" }}>
        <Link
          target="_blank"
          className="linkBtn"
          href={"https://calendly.com/ts4u/book-a-call?back=1&month=2024-06"}
        >
          <h1 className="title">Book a meeting</h1>
        </Link>
        <form style={{ marginTop: "30px" }}>
          {/* Meeting Title */}
          <div>
            <input
              type="text"
              id="meeting-title"
              name="meeting-title"
              placeholder="Enter meeting title"
              required
            />
          </div>

          {/* Select Date */}
          <div>
            <input
              type="date"
              id="meeting-date"
              name="meeting-date"
              placeholder="Select date"
              required
            />
          </div>

          {/* Select Time Zone */}
          <div>
            <select id="time-zone" name="time-zone" required>
              <option value="" disabled selected>
                --Select Time Zone--
              </option>
              <option value="UTC-12:00">UTC-12:00</option>
              <option value="UTC-11:00">UTC-11:00</option>
              <option value="UTC-10:00">UTC-10:00</option>
              <option value="UTC-09:00">UTC-09:00</option>
              <option value="UTC-08:00">UTC-08:00</option>
              <option value="UTC-07:00">UTC-07:00</option>
              <option value="UTC-06:00">UTC-06:00</option>
              <option value="UTC-05:00">UTC-05:00</option>
              <option value="UTC-04:00">UTC-04:00</option>
              <option value="UTC-03:00">UTC-03:00</option>
              <option value="UTC-02:00">UTC-02:00</option>
              <option value="UTC-01:00">UTC-01:00</option>
              <option value="UTC+00:00">UTC+00:00</option>
              <option value="UTC+01:00">UTC+01:00</option>
              <option value="UTC+02:00">UTC+02:00</option>
              <option value="UTC+03:00">UTC+03:00</option>
              <option value="UTC+04:00">UTC+04:00</option>
              <option value="UTC+05:00">UTC+05:00</option>
              <option value="UTC+06:00">UTC+06:00</option>
              <option value="UTC+07:00">UTC+07:00</option>
              <option value="UTC+08:00">UTC+08:00</option>
              <option value="UTC+09:00">UTC+09:00</option>
              <option value="UTC+10:00">UTC+10:00</option>
              <option value="UTC+11:00">UTC+11:00</option>
              <option value="UTC+12:00">UTC+12:00</option>
            </select>
          </div>

          {/* Add Notification Time */}
          <div>
            <label className="label" htmlFor="notification-time">
              Notification Time:
            </label>
            <br />
            <input
              type="time"
              id="notification-time"
              name="notification-time"
              placeholder="Select notification time"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      <div>
        <img
          loading="lazy"
          style={{ width: "650px", marginTop: "80px", marginBottom: "80px" }}
          src="\images\svg\bookacall.svg"
        />
      </div>
    </section>
  );
};

export default BookCall;
