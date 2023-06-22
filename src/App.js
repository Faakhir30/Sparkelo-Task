import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Employee from "./components/Employee";

export default function App() {
  const [testimonials, setTestimonials] = useState([]);

  const handleAddTestimonial = (testimonial) => {
    setTestimonials([...testimonials, testimonial]);
    console.log(testimonials);
  };
  const handleRemoveTestimonial = (testimonialPh) => {
    const updatedTestimonials = testimonials.filter(
      (testimonial) => testimonial.phone !== testimonialPh.phone
    );
    setTestimonials(updatedTestimonials);
  };
  return (
    <div className="App">
      <Header />
      <Card onAddTestimonial={handleAddTestimonial} />
      <Employee onRemoveTestimonial={handleRemoveTestimonial} testimonials={testimonials} />
    </div>
  );
}
