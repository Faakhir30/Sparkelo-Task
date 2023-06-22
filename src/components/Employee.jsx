import React, { useState, useEffect } from "react";

const Employee = ({ testimonials, onRemoveTestimonial }) => {
  const [testimonialsState, setTestimonialsState] = useState([]);

  useEffect(() => {
    setTestimonialsState(testimonials);
  }, [testimonials]);

  // Function to handle testimonial deletion

  const handleDelete = (index) => {
    const updatedTestimonials = [...testimonialsState];
    const removedTestimonial = updatedTestimonials.splice(index, 1)[0];
    onRemoveTestimonial(removedTestimonial);
    setTestimonialsState(updatedTestimonials);
  };
  // Function to render the testimonials

  const renderTestimonials = () => {
    return testimonialsState.length === 0 ? (
      <div>No Employee</div>
    ) : (
      testimonialsState.map((testimonial, index) => (
        <div className="testimonial" key={index}>
          <div className="testimonial-info">
            <div className="name">
              {testimonial.firstName} {testimonial.lastName}
            </div>
            <div className="email">{testimonial.email}</div>
            <div className="phone">{testimonial.phone}</div>
          </div>
          <div className="delete-button" onClick={() => handleDelete(index)}>
            x
          </div>
        </div>
      ))
    );
  };

  return (
    <div className="employees">
      <div>Current Employees</div>
      {renderTestimonials()}
    </div>
  );
};

export default Employee;
