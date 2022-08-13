import React from 'react';

export function SocialMedia() {
  return (
    <div className='social-media'>
      <div className='account-btn' onClick={() => window.location = 'https://github.com/alif338'}>
        <img src='/assets/github.png' alt='github'/>
      </div>
      <div className='account-btn' onClick={() => window.location = 'https://instagram.com/aliefdharm'}>
        <img src='/assets/instagram.png' alt='instagram'/>
      </div>
      <div className='account-btn' onClick={() => window.location = 'https://www.linkedin.com/in/muhammad-alif-d-4aaa561a9/'}>
        <img src='/assets/linkedin.png' alt='linkedin'/>
      </div>
      <div className='account-btn' onClick={() => window.location = 'mailto:m.alifdarmamulia@gmail.com'}>
        <img src='/assets/email.png' alt='email'/>
      </div>
    </div>
  )
}