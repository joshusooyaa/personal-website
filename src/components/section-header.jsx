import { useEffect, useRef } from 'react'
import '../styles/section-header.css'

export default function SectionHeader( {title} ) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active-section');
          }
          else {
            entry.target.classList.remove('active-section');
          }
        });
      },
      { threshold: .1 }
    );

    const element = sectionRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <>
      <div className="section-header">
        <h3 ref={sectionRef} className='title'>{title}</h3>
      </div>
    </>
  )
}