import React, { useState } from "react";

const Card = ({ onAddTestimonial }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleClearAll = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  };

  const handleAdd = (e) => {
    e.preventDefault(); // Prevents the form from submitting by default

    const testimonial = {
      firstName,
      lastName,
      email,
      phone,
    };

    onAddTestimonial(testimonial);

    handleClearAll();
  };

  return (
    <div className="card">
      <div>
        <div style={{ marginLeft: "20px" }}>New Employee</div>
      </div>
      <form className="card-form" onSubmit={handleAdd}>
        <div>
          <div>
            <div className="input-label">
              First Name <span style={{ color: "red" }}>*</span>
            </div>
            <input
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
          </div>
          <div>
            <div className="input-label">
              Last Name <span style={{ color: "red" }}>*</span>
            </div>
            <input
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
          </div>
          <div>
            <div className="input-label">
              Email <span style={{ color: "red" }}>*</span>
            </div>
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <div className="input-label">
              Phone <span style={{ color: "red" }}>*</span>
            </div>
            <input
              type="text"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </div>
          <div className="btns">
            <button type="button" onClick={handleClearAll}>
              CLEAR ALL
            </button>
            <button type="submit">ADD</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Card;
