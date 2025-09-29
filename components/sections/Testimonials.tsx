/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight as ArrowRightIcon } from 'lucide-react';

const testimonials = [
  {
    quote: "“Inoglle transformed our operations. Their customer-centric approach and technical expertise were instrumental in our digital transformation journey, delivering results beyond our expectations.”",
    author: "Jane Doe",
    title: "CTO, Innovate Inc."
  },
  {
    quote: "“The learning and development resources provided by Inoglle have been invaluable for upskilling our team. Their hands-on internship program is a fantastic initiative for nurturing new talent.”",
    author: "John Smith",
    title: "Head of HR, Future Corp"
  },
  {
    quote: "“Working with Inoglle on our custom software was a seamless experience. Their agile development process and transparent communication kept us aligned and resulted in a product that perfectly fits our needs.”",
    author: "Emily White",
    title: "Product Manager, Solutions Co."
  }
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 text-center bg-dots" data-aos="fade-up">
      <p className="text-sm font-semibold text-slate-400 mb-4">TRUSTED BY INDUSTRY LEADERS</p>
      <blockquote className="text-2xl sm:text-3xl max-w-4xl mx-auto leading-relaxed mb-8 min-h-[192px] md:min-h-[128px] flex items-center justify-center">
        {testimonials[activeTestimonial].quote}
      </blockquote>
      <p className="font-semibold">{testimonials[activeTestimonial].author}</p>
      <p className="text-sm text-slate-400 mb-8">{testimonials[activeTestimonial].title}</p>
      <div className="flex items-center justify-center gap-4">
        <button onClick={handlePrevTestimonial} className="p-2 border border-slate-600 rounded-full hover:bg-slate-800 transition-transform hover:scale-110" aria-label="Previous testimonial">
            <ArrowLeft size={16} />
        </button>
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-colors ${activeTestimonial === index ? 'bg-white' : 'bg-slate-600 hover:bg-slate-500'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <button onClick={handleNextTestimonial} className="p-2 border border-slate-600 rounded-full hover:bg-slate-800 transition-transform hover:scale-110" aria-label="Next testimonial">
            <ArrowRightIcon size={16} />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
