import React from 'react';
import email from '../assets/email.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

export function SocialMedia() {
  return (
    <div className='social-media'>
      <div className='account-btn' onClick={() => window.location = 'https://github.com/alif338'}>
        <img src={github} alt='github'/>
      </div>
      <div className='account-btn' onClick={() => window.location = 'https://instagram.com/aliefdharm'}>
        <img src={instagram} alt='instagram'/>
      </div>
      <div className='account-btn' onClick={() => window.location = 'https://www.linkedin.com/in/muhammad-alif-d-4aaa561a9/'}>
        <img src={linkedin} alt='linkedin'/>
      </div>
      <div className='account-btn' onClick={() => window.location = 'mailto:m.alifdarmamulia@gmail.com'}>
        <img src={email} alt='email'/>
      </div>
    </div>
  )
}