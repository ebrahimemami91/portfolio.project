import React from 'react'
import CV from './../../Assets/cv.pdf'


const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className='btn'>Download CV</a>
      <a href="#Contact" className='btn btn-primary'>Let's talk</a>    
    </div>
  )
}

export default CTA