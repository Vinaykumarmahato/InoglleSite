/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect, useRef } from 'react';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedTestimonial, setDisplayedTestimonial] = useState(testimonials[0]);
  const [animationClass, setAnimationClass] = useState('animate-fade-in-text');
  const timeoutRef = useRef(null);
  const progressBarRef = useRef(null);

  const handleSlideChange = (newIndex) => {
    // Avoid re-triggering animation for the same slide
    if (newIndex === currentIndex && animationClass === 'animate-fade-in-text') return;
    
    clearTimeout(timeoutRef.current);
    setAnimationClass('animate-fade-out-text');
    
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setDisplayedTestimonial(testimonials[newIndex]);
      setAnimationClass('animate-fade-in-text');
    }, 300); // This duration must match the fade-out animation time
  };

  const nextSlide = () => {
    handleSlideChange((currentIndex + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    handleSlideChange((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    // Set up the auto-advance timer
    timeoutRef.current = setTimeout(nextSlide, 5300); // 5s for progress bar + 0.3s for transition buffer
    
    // Reset progress bar animation
    const el = progressBarRef.current;
    if (el) {
      el.classList.remove('progress-bar-inner');
      void el.offsetWidth; // Trigger a DOM reflow to restart the animation
      el.classList.add('progress-bar-inner');
    }

    // Cleanup timer on component unmount or when currentIndex changes
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);
  
  return (
    <section className="py-24 text-center bg-dots" data-aos="fade-up">
      <p className="text-sm font-semibold text-slate-400 mb-4">TRUSTED BY INDUSTRY LEADERS</p>
      
      <div className="min-h-[192px] md:min-h-[160px] flex flex-col items-center justify-center">
        <div className={animationClass}>
          <blockquote className="text-2xl sm:text-3xl max-w-4xl mx-auto leading-relaxed mb-4">
            {displayedTestimonial.quote}
          </blockquote>
          <p className="font-semibold">{displayedTestimonial.author}</p>
          <p className="text-sm text-slate-400">{displayedTestimonial.title}</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button onClick={prevSlide} className="p-2 border border-slate-600 rounded-full hover:bg-slate-800 transition-transform hover:scale-110" aria-label="Previous testimonial">
            <ArrowLeft size={16} />
        </button>
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-2 h-2 rounded-full transition-colors ${currentIndex === index ? 'bg-white' : 'bg-slate-600 hover:bg-slate-500'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <button onClick={nextSlide} className="p-2 border border-slate-600 rounded-full hover:bg-slate-800 transition-transform hover:scale-110" aria-label="Next testimonial">
            <ArrowRightIcon size={16} />
        </button>
      </div>

      <div className="w-full max-w-xs mx-auto mt-8 bg-slate-700 rounded-full h-1 overflow-hidden">
        <div ref={progressBarRef} className="bg-white h-1 rounded-full"></div>
      </div>
    </section>
  );
};

export default Testimonials;
